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
      return "";
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

    // get the totalAmount and totalBeforeDiscount by doing the function

    const totalAmount = cartWithItems?.cartItems.reduce((acc, item) => {
      return acc + item.package.price * item.quantity;
    }, 0);

    if (!totalAmount) {
      return "";
    }

    const totalBeforeDiscount = cartWithItems?.cartItems.reduce((acc, item) => {
      if (!item.package.oldPrice) {
        return acc;
      }
      return acc + item.package.oldPrice * item.quantity;
    }, 0);

    if (!cartWithItems || !cartWithItems.cartItems.length) {
      console.error("Cart is empty or not found");
      return "";
    }

    console.log("totalAmount", totalAmount);
    console.log("totalBeforeDiscount", totalBeforeDiscount);

    const user = await prisma.user.findUnique({
      where: { kindeId },
      select: { id: true },
    });

    if (!user || !user.id) {
      console.error("User not found");
      return "";
    }

    const order = await prisma.order.create({
      data: {
        userId: user.id,
        addressId: userDataId,
        total: +totalAmount.toFixed(2),
        discount: totalBeforeDiscount
          ? +totalBeforeDiscount.toFixed(2) - +totalAmount.toFixed(2)
          : 0,
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

    // await prisma.cartItem.deleteMany({
    //   where: { cartId: cartWithItems.id },
    // });

    // revalidatePath("/cart/" + kindeId);
    return order.id;
  } catch (error) {
    console.error("Error creating order:", error);
    return "";
  }
};

export default createOrder;
