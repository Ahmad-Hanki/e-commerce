"use server";

import prisma from "@/lib/db";

const getCartLength = async (kindeId: string) => {
  try {
    // Find the user by their kindeId
    const user = await prisma.user.findUnique({
      where: {
        kindeId: kindeId,
      },
      include: {
        Cart: {
          include: {
            cartItems: true, // Include cart items to count them
          },
        },
      },
    });

    // If the user doesn't exist, return 0
    if (!user || !user.Cart) {
      return 0;
    }

    // Count the total number of items in the cart
    const cartLength = user.Cart.cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return cartLength;
  } catch (error) {
    console.error("Error getting cart length:", error);
    return 0;
  }
};

export default getCartLength;
