"use server";

import prisma from "@/lib/db";

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

const getOneProduct = async (id: string): Promise<FormattedProduct | null> => {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        Category: {
          select: {
            name: true,
            id: true,
          },
        },
      },
    });

    if (!product) return null;

    const formattedProduct: FormattedProduct = {
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
      freeShipping: product.freeShipping,
      extraInfo: product.extraInfo,
      rating: product.rating,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      mostSale: product.mostSale ?? undefined,  // Convert null to undefined if necessary

      category: {
        name: product.Category.name,
        id: product.Category.id,
      },
    };

    return formattedProduct;
  } catch (err) {
    console.error("Error fetching product by ID:", err);
    return null;
  }
};

export default getOneProduct;
