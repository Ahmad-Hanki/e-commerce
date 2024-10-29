"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import getKindeId from "./getKindeId";

const deleteCartItem = async (cartItemId: string) => {
  try {
    await prisma.cartItem.delete({
      where: {
        id: cartItemId,
      },
    });

    const kindeId = await getKindeId();

    revalidatePath(`/cart/${kindeId}`);

    return true;
  } catch (error) {
    console.error("Error deleting cart item:", error);
    return false;
  }
};

export default deleteCartItem;
