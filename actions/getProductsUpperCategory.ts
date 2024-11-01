"use server";

import prisma from "@/lib/db";
import { Product, UpperCategory, Category } from "@prisma/client";

const getProductsUpperCategory = async (
  categoryName: UpperCategory
): Promise<{ products: Product[]; categories: Category[] }> => {
  try {
    // Fetch products and include their categories
    const products = await prisma.product.findMany({
      where: {
        upperCategory: categoryName,
      },
      include: {
        Category: true,
      },
    });

    // Extract unique categories related to the fetched products
    const uniqueCategories = Array.from(
      new Map(
        products.map((product) => [product.Category.id, product.Category])
      ).values()
    );

    return { products, categories: uniqueCategories };
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return { products: [], categories: [] };
  }
};

export default getProductsUpperCategory;
