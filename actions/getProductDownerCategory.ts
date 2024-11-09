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
      include: {
        Photos: {
          where: {
            primary: true, // Only include photos where primary is true
          },
          select: {
            url: true,
          },
        },
      },
    });

    const formattedProduct = products.map((product) => ({
      id: product.id,
      description: product.description,
      price: product.price,
      inStock: product.inStock,

      oldPrice: product.oldPrice, // Can be null
      discount: product.discount, // Can be null
      new: product.new, // Can be null
      freeShipping: product.freeShipping, // Can be null
      extraInfo: product.extraInfo, // Can be null
      rating: product.rating,
      mostSale: product.mostSale,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      upperCategoryId: product.upperCategoryId,
      downerCategoryId: product.downerCategoryId,
      primaryImageUrl: product.Photos[0].url,
    }));

    const downerCategory = await prisma.downerCategory.findMany({
      where: {
        upperCategoryId,
      },
    });

    return { products: formattedProduct, downerCategory };
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return { products: [], downerCategory: [] }; // Return empty products and null category name on error
  }
};

export default getProductsDownerCategory;
