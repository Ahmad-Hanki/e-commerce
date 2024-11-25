"use server";
import prisma from "@/lib/db";

export type FormattedPackage = {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
  oldPrice?: number | null;
  discount?: number | null;
  piece: number;
  productId: string;
  productDescription: string;
  productImage?: string;
};

const getAllPackages = async (): Promise<FormattedPackage[]> => {
  try {
    const packages = await prisma.package.findMany({
      include: {
        products: {
          select: {
            id: true,
            description: true,
            Photos: {
              select: {
                url: true,
                primary: true,
              },
            },
          },
        },
      },
      orderBy: {
        products: {
          createdAt: "desc",
        },
      },
    });


    return packages.map((pkg) => ({
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      inStock: pkg.inStock,
      oldPrice: pkg.oldPrice,
      discount: pkg.discount,
      piece: pkg.Piece,
      productImage: pkg.products.Photos.find((photo) => photo.primary)?.url,
      productId: pkg.products.id,
      productDescription: pkg.products.description,
    }));
  } catch (error) {
    console.error("Error fetching packages:", error);
    return [];
  }
};

export default getAllPackages;
