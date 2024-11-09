"use server";
import prisma from "@/lib/db";
import { FormattedProductWithPhoto } from "./getMostSailedProducts";

const getRandomProducts = async (): Promise<FormattedProductWithPhoto[]> => {
  try {
    const randomProducts = await prisma.product.findMany({
      take: 8,
      orderBy: {
        price: "asc", // Ordering products by price in ascending order
      },
      include: {
        Photos: {
          where: {
            primary: true, // Only include primary photos
          },
          select: {
            url: true, // Select only the URL of the photo
          },
        },
      },
    });

    // Format and return the products with the primary photos
    return randomProducts.map((product) => ({
      id: product.id,
      description: product.description,
      price: product.price,
      inStock: product.inStock,
      mostSale: product.mostSale ?? false, // Ensure mostSale defaults to false if null
      primaryImageUrl: product.Photos[0].url,
      oldPrice: product.oldPrice ?? null, // Ensure oldPrice can be null
      discount: product.discount ?? null, // Ensure discount can be null
      new: product.new ?? null, // Ensure new can be null
      freeShipping: product.freeShipping ?? null, // Ensure freeShipping can be null
      extraInfo: product.extraInfo ?? null, // Ensure extraInfo can be null
      rating: product.rating ?? null, // Ensure rating can be null
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      upperCategoryId: product.upperCategoryId,
      downerCategoryId: product.downerCategoryId,
    }));
  } catch (error) {
    console.error("Error fetching random products:", error);
    return []; // Return an empty array in case of an error
  }
};

export default getRandomProducts;
