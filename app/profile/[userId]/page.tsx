import getAddresses from "@/app/cart/_action/getAddresses";
import ProfileContainer from "../_components/ProfileContainer";
import ShowData from "../_components/ShowData";

const ProfilePage = async ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const { userId } = await params;
  const userData = await getAddresses(userId);

  return (
    <div>
      <ProfileContainer userId={userId} />
      <ShowData userData={userData} />
    </div>
  );
};

export default ProfilePage;
