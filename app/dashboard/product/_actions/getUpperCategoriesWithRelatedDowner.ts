"use server";

import prisma from "@/lib/db";

export type UpperCategoryWithDowner = {
  id: string;
  name: string;
  DownerCategory: {
    id: string;
    name: string;
    upperCategoryId: string;
  }[];
};

const getUpperCategoriesWithRelatedDowner = async (): Promise<UpperCategoryWithDowner[]> => {
  try {
    const upperCategories = await prisma.upperCategory.findMany({
      include: {
        DownerCategory: true,
      },
    });

    return (upperCategories as UpperCategoryWithDowner[]) ?? [];
  } catch (error) {
    console.error("Error fetching upper categories with related downer categories:", error);
    return [];
  }
};

export default getUpperCategoriesWithRelatedDowner;
