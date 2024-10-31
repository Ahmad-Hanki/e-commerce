"use server";
import prisma from "@/lib/db";

const addCategory = async (name: string) => {
  try {
    if (!name) {
      return false
    }
    await prisma.category.create({
      data: {
        name: name,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};

export default addCategory;
