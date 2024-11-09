"use server";

import prisma from "@/lib/db";

// Define the type for the product with primary photos
type ProductWithPrimaryPhoto = {
  id: string;
  description: string;
  image: string;
};

const getAllProductForThePackages = async (): Promise<
  ProductWithPrimaryPhoto[]
> => {
  try {
    const products = await prisma.product.findMany({
      include: {
        Photos: {
          where: {
            primary: true, // Only include primary photos
          },
        },
      },
    });

    // Map the result to the proper type
    return products.map((product) => ({
      id: product.id,
      description: product.description,
      image: product.Photos.find((photo) => photo.primary)?.url || "",
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default getAllProductForThePackages;
