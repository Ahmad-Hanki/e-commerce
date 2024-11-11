'use server'

import prisma from "@/lib/db";

const getOneUserData = async (userId: string, dataId:string) => {
    if (!userId || !dataId) {
        return false;
    }
    try {
        const userData = await prisma.userData.findFirst({
            where: {
                userId,
                id: dataId
            }
        });

        return userData;
    } catch (error) {
        console.error("Error getting user data:", error);
        return false;
    }
}

export default getOneUserData