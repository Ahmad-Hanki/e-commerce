import prisma from "@/lib/db";
import { Product } from "@prisma/client";

const getMostSailedProducts = async (): Promise<Product[]> => {
  try {
    const mostSailed = await prisma.product.findMany({
      where: {
        mostSale: true,
      },
      take: 8,
    });

    return mostSailed;
  } catch (error) {
    return [];
  }
};

export default getMostSailedProducts;
