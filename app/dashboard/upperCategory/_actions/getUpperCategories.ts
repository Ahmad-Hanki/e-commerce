"use server";

import prisma from "@/lib/db";
import { UpperCategory } from "@prisma/client";

const getUpperCategories = async (): Promise<UpperCategory[]> => {
  try {
    const UpperCategories = await prisma.upperCategory.findMany();
    return UpperCategories ?? [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getUpperCategories;
