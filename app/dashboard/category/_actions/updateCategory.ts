"use server";

import prisma from "@/lib/db";

const updateCategory = async (categoryId: string, name: string) => {
  try {
    if (!categoryId || !name) {
      return false;
    }
    await prisma.category.update({
      where: {
        id: categoryId,
      },
      data: {
        name: name,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};

export default updateCategory;
