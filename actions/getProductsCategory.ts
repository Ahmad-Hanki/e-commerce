"use server";

import prisma from "@/lib/db";
import { Product } from "@prisma/client";

const getProductsCategory = async (
  categoryId: string
): Promise<{ products: Product[]; categoryName: string | null }> => {
  try {
    // Fetch products along with category information
    const products = await prisma.product.findMany({
      where: {
        categoryId,
      },
      include: {
        Category: {
          select: { name: true }, // Include only the name of the category
        },
      },
    });

    // If products are found, extract the category name from the first product
    const categoryName = products.length > 0 ? products[0].Category?.name || null : null;

    // Return products and category name
    return { products, categoryName };
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return { products: [], categoryName: null }; // Return empty products and null category name on error
  }
};

export default getProductsCategory;
