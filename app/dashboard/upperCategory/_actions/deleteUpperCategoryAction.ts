"use server";

import prisma from "@/lib/db";

const deleteUpperCategoryAction = async (categoryId: string) => {
  try {
    await prisma.upperCategory.delete({
      where: {
        id: categoryId,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};

export default deleteUpperCategoryAction;
