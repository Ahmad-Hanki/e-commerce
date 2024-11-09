"use server";

import prisma from "@/lib/db";
import { Product } from "@prisma/client";

const getProductBasedOnCategory = async (
  categoryId: string
): Promise<Product[]> => {
  try {
    const products = await prisma.product.findMany({
      where: {
        upperCategoryId: categoryId,
      },
    });
    return products;
  } catch (error) {
    return [];
  }
};

export default getProductBasedOnCategory;
