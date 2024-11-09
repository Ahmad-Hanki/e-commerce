"use server";

import prisma from "@/lib/db";
import { FormattedProductWithPhoto } from "./getMostSailedProducts";

const getProductBasedOnCategory = async (
  categoryId: string
): Promise<FormattedProductWithPhoto[]> => {
  try {
    const products = await prisma.product.findMany({
      where: {
        upperCategoryId: categoryId,
      },
      include: {
        Photos: {
          where: {
            primary: true, // Only include primary photos
          },
          select: {
            url: true, // Select only the URL of the primary photo
          },
        },
      },
    });

    // Format the fetched products to match FormattedProductWithPhoto type
    return products.map((product) => ({
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
  } catch (error) {
    console.error("Error fetching products based on category:", error);
    return [];
  }
};

export default getProductBasedOnCategory;
