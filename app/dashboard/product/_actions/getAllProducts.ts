"use server";

import prisma from "@/lib/db";
import { UpperCategory } from "@prisma/client";

// Define a custom type that represents the formatted product with category info
export type FormattedProduct = {
  id: string;
  description: string;
  price: number;
  inStock: boolean;
  image: string;
  image2?: string | null;
  image3?: string | null;
  oldPrice?: number | null;
  discount?: number | null;
  new?: boolean | null;
  upperCategory: UpperCategory;
  freeShipping?: boolean | null;
  extraInfo?: string | null;
  rating?: number | null;
  mostSale?: boolean | null;
  createdAt: Date;
  updatedAt: Date;
  category: {
    name: string;
    id: string;
  };
};

const getAllProducts = async (): Promise<FormattedProduct[]> => {
  try {
    const products = await prisma.product.findMany({
      include: {
        upperCategory: true, // Includes all fields from UpperCategory model
        downerCategory: {
          select: {
            name: true,
            id: true,
          },
        },
      },
    });

    const formattedProducts: FormattedProduct[] = products.map((product) => ({
      id: product.id,
      description: product.description,
      price: product.price,
      inStock: product.inStock,
      image: product.image,
      image2: product.image2,
      image3: product.image3,
      oldPrice: product.oldPrice,
      discount: product.discount,
      new: product.new,
      upperCategory: product.upperCategory,
      freeShipping: product.freeShipping,
      extraInfo: product.extraInfo,
      rating: product.rating,
      mostSale: product.mostSale,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      category: {
        name: product.downerCategory.name,
        id: product.downerCategory.id,
      },
    }));

    return formattedProducts;
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
};

export default getAllProducts;
