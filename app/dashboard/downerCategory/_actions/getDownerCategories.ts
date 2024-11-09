"use server";

import prisma from "@/lib/db";

export type FormattedDownerCategoriesType = {
  id: string;
  name: string;
  upperCategoryId: string;
  upperCategoryName: string;
};

const getDownerCategories = async (): Promise<
  FormattedDownerCategoriesType[]
> => {
  try {
    const downerCategories = await prisma.downerCategory.findMany({
      include: {
        upper: true,
      },
    });

    const formattedDownerCategories = downerCategories.map((category) => {
      return {
        id: category.id,
        name: category.name,
        upperCategoryId: category.upperCategoryId,
        upperCategoryName: category.upper.name,
      };
    });

    return formattedDownerCategories ?? [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getDownerCategories;
