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

    console.log(user ? "User found or created" : "User created");
    return user;
  } catch (error) {
    console.error("Error creating or finding user:", error);
  }
};

export default createOrFindUser;
