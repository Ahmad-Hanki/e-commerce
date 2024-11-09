"use server";
import prisma from "@/lib/db";
import { FormattedProductWithPhoto } from "./getMostSailedProducts";

const getProductsSearch = async (
  searchResult: string
): Promise<FormattedProductWithPhoto[]> => {
  try {
    const products = await prisma.product.findMany({
      where: {
        description: {
          contains: searchResult,
        },
      },
      include: {
        Photos: {
          where: {
            primary: true,
          },
          select: {
            url: true,
          },
        },
      },
    });

    const formattedProducts = products.map((product) => ({
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

    return formattedProducts ;
  } catch (error) {
    console.error("Error fetching products by search:", error);
    return [];
  }
};

export default getProductsSearch;
