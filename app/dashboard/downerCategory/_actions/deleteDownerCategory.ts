"use server";

import prisma from "@/lib/db";

const deleteDownerCategory = async (categoryId: string) => {
  try {
    await prisma.downerCategory.delete({
      where: {
        id: categoryId,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};

export default deleteDownerCategory;
