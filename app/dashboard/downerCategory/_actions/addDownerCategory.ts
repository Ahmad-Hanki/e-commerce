"use server";

import prisma from "@/lib/db";

const addDownerCategory = async (name: string, upperCategoryId: string) => {
  try {
    if (!name || !upperCategoryId) {
      return false;
    }
    await prisma.downerCategory.create({
      data: {
        name: name,
        upperCategoryId: upperCategoryId,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};

export default addDownerCategory;
