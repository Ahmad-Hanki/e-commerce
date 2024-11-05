"use server";
import prisma from "@/lib/db";

const deleteUserData = async (userDataId: string) => {
  try {
    await prisma.userData.update({
      where: {
        id: userDataId,
      },
      data: {
        softDelete: true,
      },
    });

    return true;
  } catch (error) {
    console.error("Error deleting user data:", error);
    return false;
  }
};

export default deleteUserData;
