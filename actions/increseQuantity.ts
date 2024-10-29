"use server";

import prisma from "@/lib/db";
import getKindeId from "./getKindeId";
import { revalidatePath } from "next/cache";

const increaseQuantity = async (cartItemId: string) => {
  try {
    await prisma.cartItem.update({
      where: {
        id: cartItemId,
      },
      data: {
        quantity: {
          increment: 1,
        },
      },
    });
    const kindeId = await getKindeId();
    revalidatePath(`/cart/${kindeId}`);

    return true;
  } catch (error) {
    console.error("Error increasing quantity:", error);
    return false;
  }
};

export default increaseQuantity;
