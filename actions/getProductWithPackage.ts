"use server";
import prisma from "@/lib/db";
import { Package, Product as PrismaProduct } from "@prisma/client";

type ProductWithPackages = PrismaProduct & {
  Packages: Package[];
  categoryId: string;
};

const getProductWithPackage = async (
  productId: string
): Promise<ProductWithPackages | null> => {
  try {
    const product: ProductWithPackages | null = await prisma.product.findFirst({
      where: {
        id: productId,
      },
      include: {
        Packages: {
          select: {
            id: true,
            Piece: true,
            inStock: true,
            price: true,
            oldPrice: true,
            discount: true,
            productId: true,
          },
        },
        Category: {
          select: {
            id: true,
          },
        },
      },
    });

   

    return product;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getProductWithPackage;
