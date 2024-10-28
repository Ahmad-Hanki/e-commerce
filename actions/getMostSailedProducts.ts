import prisma from "@/lib/db";
import { Product } from "@prisma/client";

const getMostSailedProducts = async (): Promise<Product[]> => {
  const mostSailed = await prisma.product.findMany({
    where: {
      categoryId: "7e4bd023-bf4e-49a1-9fa9-794985e7a549",
    },
    
  });

  return mostSailed;
};

export default getMostSailedProducts;
