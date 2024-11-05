"use server";

import prisma from "@/lib/db";
import { AdressPlace } from "@prisma/client";

const createUserData = async (
  userId: string,
  data: {
    fullName: string;
    phone: string;
    email: string;
    adress: string;
    adressPlace: AdressPlace;
    vkn?: string;
    vergiDairesi?: string;
    firmaAdi?: string;
    Efatura: boolean;
  }
) => {
  try {
    await prisma.userData.create({
      data: {
        ...data,
        userId,
      },
    });

    return true;
  } catch (error) {
    console.error("Error creating user data:", error);
    return false;
  }
};

export default createUserData;