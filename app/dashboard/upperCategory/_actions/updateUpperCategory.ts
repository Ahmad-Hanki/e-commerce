"use server";

import prisma from "@/lib/db";

const updateUpperCategory = async (categoryId: string, name: string) => {
  try {
    if (!categoryId || !name) {
      return false;
    }
    await prisma.upperCategory.update({
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

export default updateUpperCategory;
