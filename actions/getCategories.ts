"use server";

import prisma from "@/lib/db";
import { Category } from "@prisma/client";

const getCategories = async (): Promise<Category[]> => {
  try {
    const categories = await prisma.category.findMany({
      where: {
        NOT: {
          id: "7e4bd023-bf4e-49a1-9fa9-794985e7a549",
        },
      },
    });
    return categories;
  } catch (error) {
    console.error("Error getting categories:", error);
    return [];
  }
};

export default getCategories;
