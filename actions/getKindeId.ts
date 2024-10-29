"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const getKindeId = async (): Promise<string> => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return user.id || "";
};

export default getKindeId;
