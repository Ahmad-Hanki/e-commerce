"use server";

import prisma from "@/lib/db";
import { Category } from "@prisma/client";

const getCategory = async (categoryId: string): Promise<Category | null> => {
  try {
    const category = await prisma.category.findFirst({
      where: {
        id: categoryId,
      },
    });

    return category;
  } catch (error) {
    return null;
  }
};

export default getCategory;
