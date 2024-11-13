"use server";

import prisma from "@/lib/db";
import { Product, DownerCategory } from "@prisma/client";
import { FormattedProductWithPhoto } from "./getMostSailedProducts";

const getProductsUpperCategoryAndDownerCategories = async (
  upperCategoryId: string
): Promise<{
  products: FormattedProductWithPhoto[];
  downerCategories: DownerCategory[];
}> => {
  try {
    // Fetch products and include their categories
    const products = await prisma.product.findMany({
      where: {
        upperCategoryId,
      },

      include: {
        upperCategory: {
          select: {
            name: true,
          },
        },
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
      categoryName: product.upperCategory.name,
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

    const downerCategories = await prisma.downerCategory.findMany({
      where: {
        upperCategoryId,
      },
    });

    return { products: formattedProduct, downerCategories };
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return { products: [], downerCategories: [] };
  }
};

export default getProductsUpperCategoryAndDownerCategories;
