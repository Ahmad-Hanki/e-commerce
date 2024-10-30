"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const getKindeId = async (): Promise<{ kindeId: string; email: string }> => {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    return { kindeId: user.id, email: user.email ?? "" };
  } catch (error) {
    console.error("Error getting kindeId:", error);
    return { kindeId: "", email: "" };
  }
};

export default getKindeId;
