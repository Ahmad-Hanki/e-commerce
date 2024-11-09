"use server";

import prisma from "@/lib/db";
import { FormattedDownerCategoriesType } from "./getDownerCategories";

const getDownerCategory = async (
  categoryId: string
): Promise<FormattedDownerCategoriesType | null> => {
  try {
    const category = await prisma.downerCategory.findFirst({
      where: {
        id: categoryId,
      },
      include: {
        upper: true,
      },
    });

    // format
    if (!category) {
      return null;
    }

    const formattedDownerCategory = {
      id: category.id,
      name: category.name,
      upperCategoryId: category.upperCategoryId,
      upperCategoryName: category.upper.name,
    };

    return formattedDownerCategory;
  } catch (error) {
    return null;
  }
};

export default getDownerCategory;
