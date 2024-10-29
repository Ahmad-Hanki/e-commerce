"use server";

import prisma from "@/lib/db";
import getKindeId from "./getKindeId";

interface addedToCartData {
  id: string;
  quantity: number;
}

const addToCart = async ({ id, quantity }: addedToCartData) => {
  try {
    const kindeId = await getKindeId();

    // get the user
    const user = await prisma.user.findUnique({
      where: { kindeId },
      include: { Cart: true },
    });

    if (!user || !user.Cart) {
      throw new Error("User or cart not found");
    }

    const cartId = user.Cart.id;

    // Check if the package already exists in the cart
    const existingCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId,
        packageId: id,
      },
    });

    if (existingCartItem) {
      // Update the quantity if the item is already in the cart
      await prisma.cartItem.update({
        where: { id: existingCartItem.id },
        data: { quantity: existingCartItem.quantity + quantity },
      });
    } else {
      // Otherwise, create a new cart item with the provided quantity
      await prisma.cartItem.create({
        data: {
          cartId,
          packageId: id,
          quantity,
        },
      });
    }

    return true;
  } catch (error) {
    console.error("Error adding to cart:", error);
    return false;
  }
};

export default addToCart;
