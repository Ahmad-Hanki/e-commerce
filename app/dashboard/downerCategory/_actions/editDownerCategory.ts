"use server";

import prisma from "@/lib/db";

const editDownerCategory = async (
  categoryId: string,
  name: string,
  upperCategoryId: string
) => {
  try {
    await prisma.downerCategory.update({
      where: {
        id: categoryId,
      },
      data: {
        name: name,
        upperCategoryId,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};

export default editDownerCategory;
