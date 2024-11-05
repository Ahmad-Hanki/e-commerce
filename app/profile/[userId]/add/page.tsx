import { notFound } from "next/navigation";
import UserDataForm from "../../_components/form/UserDataForm";
import getKindeId from "@/actions/getKindeId";

const AddPage = async ({ params }: { params: Promise<{ userId: string }> }) => {
  const { userId } = await params;
  if (!userId) {
    return notFound();
  }

  const email = (await getKindeId()).email;

  return (
    <div>
      <UserDataForm email={email} userId={userId} />
    </div>
  );
};

export default AddPage;
