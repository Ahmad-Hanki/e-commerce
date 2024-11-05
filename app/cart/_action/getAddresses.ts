"use server";
import prisma from "@/lib/db";
import { userData } from "@prisma/client";

const getAddresses = async (userId: string): Promise<userData[]> => {
  try {
    const data = await prisma.userData.findMany({
      where: {
        userId,
        NOT: {
          softDelete: true,
        }
      },

      
    });
    return data;

  } catch (error) {
    console.error("Error getting addresses:", error);
    return [];
  }
};

export default getAddresses;
