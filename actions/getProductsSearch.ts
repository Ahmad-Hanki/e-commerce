"use server";
import prisma from "@/lib/db";
import { Product } from "@prisma/client";

const getProductsSearch = async (searchResult: string): Promise<Product[]> => {
  try {
    const products = await prisma.product.findMany({
      where: {
        description: {
          contains: searchResult,
        },
      },
    });

    return products;
  } catch (error) {
    console.error("Error fetching products by search:", error);
    return [];
  }
};

export default getProductsSearch;
