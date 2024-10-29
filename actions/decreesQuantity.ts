"use server";

import prisma from "@/lib/db";
import getKindeId from "./getKindeId";
import { revalidatePath } from "next/cache";

const decreesQuantity = async (cartItemId: string) => {
  try {
    // Decrement the quantity of the cart item
    const updatedCartItem = await prisma.cartItem.update({
      where: {
        id: cartItemId,
      },
      data: {
        quantity: {
          decrement: 1,
        },
      },
      // Return the updated cart item
      select: {
        quantity: true,
      },
    });

    // Check if the quantity is now zero
    if (updatedCartItem.quantity === 0) {
      // Delete the cart item if the quantity is zero
      await prisma.cartItem.delete({
        where: {
          id: cartItemId,
        },
      });
    }

    const kindeId = await getKindeId();
    revalidatePath(`/cart/${kindeId}`);

    return true;
  } catch (error) {
    console.error("Error decreasing quantity:", error);
    return false;
  }
};

export default decreesQuantity;
