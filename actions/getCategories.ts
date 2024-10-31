"use server";

import prisma from "@/lib/db";
import { Category } from "@prisma/client";

const getCategories = async (): Promise<Category[]> => {
  try {
    const categories = await prisma.category.findMany({
     
    });
    return categories;
  } catch (error) {
    console.error("Error getting categories:", error);
    return [];
  }
};

export default getCategories;
