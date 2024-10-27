import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const IsAuthenticated = async (): Promise<boolean> => {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  return isUserAuthenticated;
};

export default IsAuthenticated;
