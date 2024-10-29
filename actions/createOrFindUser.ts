"use server";

import prisma from "@/lib/db";
import getKindeId from "./getKindeId";

const createOrFindUser = async () => {
  try {
    const kindeId = await getKindeId();
    const user = await prisma.user.upsert({
      where: { kindeId },
      update: {},
      create: { kindeId },
    });

    return user;
  } catch (error) {
    console.error("Error creating or finding user:", error);
    return ;
  }
};

export default createOrFindUser;
