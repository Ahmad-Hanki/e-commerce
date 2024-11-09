"use server";

import prisma from "@/lib/db";

const getCartWithItems = async (kindeId: string) => {
  try {
    const cartWithItems = await prisma.cart.findFirst({
      where: {
        user: {
          kindeId,
        },
      },
      include: {
        cartItems: {
          include: {
            package: {
              include: {
                products: {
                  select: {
                    description: true,
                    freeShipping: true,
                    Photos:{
                      select: {
                        url: true,
                        primary: true,
                      }
                    }
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!cartWithItems) {
      console.error("Cart or Cart Items not found");
      return null;
    }

    return cartWithItems;
  } catch (error) {
    console.error("Error getting cart with items:", error);
    return null;
  }
};

export default getCartWithItems;
