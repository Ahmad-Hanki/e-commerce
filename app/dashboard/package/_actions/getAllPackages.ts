"use server";
import prisma from "@/lib/db";


export type FormattedPackage = {
  id: string;
  price: number;
  inStock: boolean;
  oldPrice?: number | null;
  discount?: number | null;
  piece: number;
  productId: string;
  productDescription: string;
  productImage?: string;
};

// Modify the function to specify the return type
const getAllPackages = async (): Promise<FormattedPackage[]> => {
  try {
    const packages = await prisma.package.findMany({
      include: {
        products: {
          select: {
            id: true,
            description: true,
            image: true,
          },
        },
      },
      orderBy: {
        products: {
          createdAt: "desc",
        },
      },
    });

    // Formatting the data to match the Package type
    return packages.map((pkg) => ({
      id: pkg.id,
      price: pkg.price,
      inStock: pkg.inStock,
      oldPrice: pkg.oldPrice,
      discount: pkg.discount,
      piece: pkg.Piece,
      productImage: pkg.products.image,
      productId: pkg.products.id,
      productDescription: pkg.products.description,
    }));
  } catch (error) {
    console.error("Error fetching packages:", error);
    return [];
  }
};

export default getAllPackages;
