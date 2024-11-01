"use server";
import prisma from "@/lib/db";
import { FormattedPackage } from "./getAllPackages";

// Modify the function to specify the return type
const getOnePackage = async (id: string): Promise<FormattedPackage> => {
  try {
    const pkg = await prisma.package.findFirst({
      include: {
        products: {
          select: {
            id: true,
            description: true,
            image: true,
          },
        },
      },
      where: {
        id,
      },
    });

    if (!pkg) {
      return {} as FormattedPackage;
    }

    return {
      id: pkg!.id,
      price: pkg!.price,
      inStock: pkg!.inStock,
      oldPrice: pkg?.oldPrice,
      discount: pkg?.discount,
      piece: pkg!.Piece!,
      productImage: pkg?.products.image,
      productId: pkg!.products.id,
      productDescription: pkg!.products.description,
    };

    // Formatting the data to match the Package type
  } catch (error) {
    console.error("Error fetching packages:", error);
    return {} as FormattedPackage;
  }
};

export default getOnePackage;
