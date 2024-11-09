"use server";
import prisma from "@/lib/db";
import { Product } from "@prisma/client";

// Define a type for the response format, allowing null values for optional fields
export interface FormattedProductWithPhoto {
  id: string;
  description: string;
  price: number;
  inStock: boolean;
  oldPrice: number | null; // Allow oldPrice to be null
  discount: number | null; // Allow discount to be null
  new: boolean | null; // Allow new to be null
  freeShipping: boolean | null; // Allow freeShipping to be null
  extraInfo: string | null; // Allow extraInfo to be null
  rating: number | null; // Allow rating to be null (fixing the issue here)
  mostSale: boolean | null; // mostSale is nullable to match the Prisma schema
  createdAt: Date;
  updatedAt: Date;
  upperCategoryId: string;
  downerCategoryId: string;
  primaryImageUrl: string;
}

const getMostSailedProducts = async (): Promise<
  FormattedProductWithPhoto[]
> => {
  try {
    const mostSailed = await prisma.product.findMany({
      where: {
        mostSale: true,
      },
      take: 8,
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

export default getMostSailedProducts;
