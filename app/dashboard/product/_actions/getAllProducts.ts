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
  upperCategory: UpperCategory
  freeShipping?: boolean | null;
  extraInfo?: string | null;
  rating?: number | null;
  mostSale?: boolean | null; // Allow null
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
        Category: {
          select: {
            name: true,
            id: true,
          },
        },
      },
    });

    const formattedProducts: FormattedProduct[] = products.map((product) => ({
      id: product.id,
      upperCategory: product.upperCategory,
      description: product.description,
      price: product.price,
      inStock: product.inStock,
      image: product.image,
      image2: product.image2,
      image3: product.image3,
      oldPrice: product.oldPrice,
      discount: product.discount,
      new: product.new,
      freeShipping: product.freeShipping,
      extraInfo: product.extraInfo,
      rating: product.rating,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      mostSale: product.mostSale,

      category: {
        name: product.Category.name,
        id: product.Category.id,
      },
    }));

    return formattedProducts;
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
};

export default getAllProducts;
