"use server";
import prisma from "@/lib/db";
import { Package, Product as PrismaProduct } from "@prisma/client";

type ProductWithPackages = PrismaProduct & {
  Packages: Package[];
  categoryId: string; // The categoryId is coming from upperCategory.id
};

const getProductWithPackage = async (
  productId: string
): Promise<ProductWithPackages | null> => {
  try {
    const product = await prisma.product.findFirst({
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
        upperCategory: {
          select: {
            id: true,
          },
        },
      },
    });

    // If the product is found, map upperCategory.id to categoryId
    if (product) {
      return {
        ...product,
        categoryId: product.upperCategory?.id || "",
      };
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getProductWithPackage;
