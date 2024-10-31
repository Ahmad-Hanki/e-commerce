"use server";

import prisma from "@/lib/db";

const deleteCategoryAction = async (categoryId: string) => {
  try {
    await prisma.category.delete({
      where: {
        id: categoryId,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};

export default deleteCategoryAction;
