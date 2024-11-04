"use server";

import getKindeId from "@/actions/getKindeId";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

const EditUserData = async (
  userId: string,
  fullName: string,
  phone: string,
  location: string
) => {
  try {
    const kindeId = (await getKindeId()).kindeId;

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        fullName,
        phone,
        location,
      },
    });

    revalidatePath("/cart/" + kindeId);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default EditUserData;
