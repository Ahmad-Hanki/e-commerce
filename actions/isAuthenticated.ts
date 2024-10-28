import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const IsAuthenticated = async (): Promise<boolean> => {
  try {
    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    return isUserAuthenticated;
  } catch (error) {
    return false;
  }
};

export default IsAuthenticated;
