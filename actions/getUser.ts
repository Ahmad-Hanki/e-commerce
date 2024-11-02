import prisma from "@/lib/db";
import { User } from "@prisma/client";

const getUser = async (kindeId: string): Promise<User | null> => {
  try {
    const user = await prisma.user.findUnique({
      where: { kindeId },
    });
    if (user) {
      return user;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export default getUser;
