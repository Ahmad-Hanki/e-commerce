"use server";

import prisma from "@/lib/db";

const getAllProductForThePackages = async () => {
  try {
    const products = await prisma.product.findMany({
      select: {
        id: true,
        description: true,
        image: true,
      },
    });

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default getAllProductForThePackages;
