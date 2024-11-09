"use server";

import prisma from "@/lib/db";
import { Product, DownerCategory } from "@prisma/client";

const getProductsUpperCategoryAndDownerCategories = async (
  upperCategoryId: string
): Promise<{ products: Product[]; downerCategories: DownerCategory[] }> => {
  try {
    // Fetch products and include their categories
    const products = await prisma.product.findMany({
      where: {
        upperCategoryId,
      },
    });

    const downerCategories = await prisma.downerCategory.findMany({
      where: {
        upperCategoryId,
      },
    });

    return { products, downerCategories };
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return { products: [], downerCategories: [] };
  }
};

export default getProductsUpperCategoryAndDownerCategories;
