import { notFound } from "next/navigation";
import UserDataForm from "../../_components/form/UserDataForm";
import getKindeId from "@/actions/getKindeId";
import getOneUserData from "../../_actions/getOneUserData";

const EditPage = async ({
  params,
}: {
  params: Promise<{ userId: string; id: string }>;
}) => {
  const { userId, id } = await params;
  if (!userId || !id) {
    return notFound();
  }

  const email = (await getKindeId()).email;

  const userData = await getOneUserData(userId, id);

  if (!userData) {
    return notFound();
  }

  return (
    <div>
      <UserDataForm initialData={userData} email={email} userId={userId} />
    </div>
  );
};

export default EditPage;
