'use server'

import prisma from "@/lib/db";
import { AdressPlace } from "@prisma/client";


const editUserData = async (
    userId: string,
    dataId: string,
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
    if (!userId || !data.fullName || !data.phone || !data.email || !data.adress || !dataId) {
        return false;
    }
    try {
        await prisma.userData.update({
            where: {
                id: dataId
            },
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
  
}

export default editUserData
