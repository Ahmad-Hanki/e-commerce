"use server";

import prisma from "@/lib/db";
import { UpperCategory } from "@prisma/client";

const getUpperCategory = async (
  categoryId: string
): Promise<UpperCategory | null> => {
  try {
    const category = await prisma.upperCategory.findFirst({
      where: {
        id: categoryId,
      },
    });

    return category;
  } catch (error) {
    return null;
  }
};

export default getUpperCategory;
