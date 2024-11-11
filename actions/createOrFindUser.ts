"use server";

import prisma from "@/lib/db";
import getKindeId from "./getKindeId";
import { redirect } from "next/navigation";

const createOrFindUser = async () => {
  try {
    const { kindeId } = await getKindeId();

    if (!kindeId) {
      redirect("/api/auth/login");
    }

    const user = await prisma.user.upsert({
      where: { kindeId },
      update: {},
      create: {
        kindeId,
      },
    });

    let cart = await prisma.cart.findFirst({
      where: { userId: user.id },
    });

    // If no cart exists, create one
    if (!cart) {
      cart = await prisma.cart.create({
        data: {
          userId: user.id,
        },
      });
    }

    return { user, cart };
  } catch (error) {
    console.error("Error creating or finding user and cart:", error);
    return;
  }
};

export default createOrFindUser;
