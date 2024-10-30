"use server";

import prisma from "@/lib/db";

const getCartLength = async (kindeId: string) => {
  try {
    // Count the number of cart items directly
    const cartLength = await prisma.cartItem.count({
      where: {
        cart: {
          user: {
            kindeId: kindeId,
          },
        },
      },
    });

    return cartLength;
  } catch (error) {
    console.error("Error getting cart length:", error);
    return 0;
  }
};

export default getCartLength;
