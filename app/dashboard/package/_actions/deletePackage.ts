"use server";
import prisma from "@/lib/db";

const deletePackage = async (id: string): Promise<boolean> => {
  try {
    await prisma.package.delete({
      where: {
        id,
      },
    });
    return true;
  } catch (error) {
    console.error("Error fetching packages:", error);
    return false;
  }
};

export default deletePackage;
