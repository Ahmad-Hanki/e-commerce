import prisma from "@/lib/db";

const getUser = async (kindeId: string): Promise<boolean> => {
  try {
    const user = await prisma.user.findUnique({
      where: { kindeId },
    });
    if (user) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export default getUser;
