"use server";

import prisma from "@/lib/db";
import { FormattedProduct } from "./getAllProducts";

const getOneProduct = async (id: string): Promise<FormattedProduct | null> => {
  try {
    const product = await prisma.product.findFirst({
      where: { id },
      include: {
        upperCategory: true, // Include upper category data
        downerCategory: {
          select: {
            name: true,
            id: true,
          },
        },
        Photos: true,
      },
    });

    if (!product) return null;

    const formattedProduct: FormattedProduct = {
      id: product.id,
      description: product.description,
      price: product.price,
      inStock: product.inStock,
      upperCategory: product.upperCategory, // Get the full upperCategory data
      oldPrice: product.oldPrice,
      discount: product.discount,
      new: product.new,
      freeShipping: product.freeShipping,
      extraInfo: product.extraInfo,
      rating: product.rating,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      mostSale: product.mostSale ?? undefined, // Convert null to undefined if necessary
      photos: product.Photos,
      category: {
        name: product.downerCategory.name,
        id: product.downerCategory.id,
      },
    };

    return formattedProduct;
  } catch (err) {
    console.error("Error fetching product by ID:", err);
    return null;
  }
};

export default getOneProduct;
