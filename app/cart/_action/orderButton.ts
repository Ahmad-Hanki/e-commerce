"use server";
import getKindeId from "@/actions/getKindeId";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

const createOrder = async (userDataId: string) => {
  try {
    const response = await getKindeId();
    const kindeId = response?.kindeId;

    if (!kindeId || !userDataId) {
      console.error("No kindeId found");
      return false;
    }

    const cartWithItems = await prisma.cart.findFirst({
      where: { user: { kindeId } },
      include: {
        cartItems: {
          include: {
            package: true,
          },
        },
      },
    });

    console.log("cartWithItems", cartWithItems);

    if (!cartWithItems || !cartWithItems.cartItems.length) {
      console.error("Cart is empty or not found");
      return false;
    }

    const { total, totalDiscount } = cartWithItems.cartItems.reduce(
      (acc, item) => {
        const originalPrice = item.package.price * item.quantity;
        const discountedPrice = item.package.discount
          ? item.package.price *
            ((100 - item.package.discount) / 100) *
            item.quantity
          : originalPrice;

        acc.total += discountedPrice;
        acc.totalDiscount += originalPrice - discountedPrice;
        return acc;
      },
      { total: 0, totalDiscount: 0 }
    );

    const user = await prisma.user.findUnique({
      where: { kindeId },
      select: { id: true },
    });

    if (!user || !user.id) {
      console.error("User not found");
      return false;
    }

    await prisma.order.create({
      data: {
        userId: user.id,
        addressId: userDataId,
        total: +total.toFixed(2),
        discount: totalDiscount,
        orderItems: {
          create: cartWithItems.cartItems.map((item) => ({
            packageId: item.packageId,
            quantity: item.quantity,
            price: item.package.price,
            discount: item.package.discount,
          })),
        },
      },
    });

    await prisma.cartItem.deleteMany({
      where: { cartId: cartWithItems.id },
    });

    revalidatePath("/cart/" + kindeId);
    return true;
  } catch (error) {
    console.error("Error creating order:", error);
    return false;
  }
};

export default createOrder;
