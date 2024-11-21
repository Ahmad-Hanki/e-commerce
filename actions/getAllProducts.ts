"use server";
import prisma from "@/lib/db";
import { FormattedProductWithPhoto } from "./getMostSailedProducts";


const getAllProducts = async (): Promise<FormattedProductWithPhoto[]> => {
  try {
    const mostSailed = await prisma.product.findMany({
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

    // Format the response to match the defined type
    return mostSailed.map((product) => ({
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
    console.error("Error fetching most sailed products:", error);
    return [];
  }
};

export default getAllProducts;
