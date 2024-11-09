"use server";

import prisma from "@/lib/db";

const getProductImages = async (productId: string) => {
  try {
    if (!productId) {
      return false;
    }
    const images = await prisma.photo.findMany({
      where: {
        productId,
      },
    });


    return images;
  } catch (error) {
    return false;
  }
};


export default getProductImages;