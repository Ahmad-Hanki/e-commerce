"use server";

import prisma from "@/lib/db";

const getProductsDownerCategory = async (
  downerCategoryId: string,
  upperCategoryId: string
) => {
  try {
    // Fetch products along with category information
    const products = await prisma.product.findMany({
      where: {
        downerCategoryId,
      },
    });

    const downerCategory = await prisma.downerCategory.findMany({
      where: {
        upperCategoryId,
      },
    });

    console.log("downerCategory", downerCategory);

    return { products, downerCategory };
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return { products: [], downerCategory: [] }; // Return empty products and null category name on error
  }
};

export default getProductsDownerCategory;
