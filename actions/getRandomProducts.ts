"use server";
import prisma from "@/lib/db";
import { Product } from "@prisma/client";

const getRandomProducts = async (): Promise<Product[]> => {
  try {
    const randomProducts = await prisma.product.findMany({
      take: 8,
      orderBy: {
        price: "asc",
      },
    });

    return randomProducts;
  } catch (error) {
    return [];
  }
};

export default getRandomProducts;
