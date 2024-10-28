"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const getKindeId = async (): Promise<string> => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const userId = user.id;
  return userId;
};

export default getKindeId;
