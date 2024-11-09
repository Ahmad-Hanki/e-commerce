"use server";
import prisma from "@/lib/db";

const addUpperCategory = async (name: string) => {
  try {
    if (!name) {
      return false
    }
    await prisma.upperCategory.create({
      data: {
        name: name,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};

export default addUpperCategory;
