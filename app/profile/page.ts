import createOrFindUser from "@/actions/createOrFindUser";
import IsAuthenticated from "@/actions/isAuthenticated";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const isAuth = await IsAuthenticated();
  if (!isAuth) {
    redirect("api/auth/login");
  }

  const user = await createOrFindUser();

  redirect(`/profile/${user?.user.id}`);
};

export default ProfilePage;
