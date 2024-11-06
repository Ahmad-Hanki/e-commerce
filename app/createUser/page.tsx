import createOrFindUser from "@/actions/createOrFindUser";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";

const CreateUser = async () => {
  await createOrFindUser();
  redirect("/");
};

export default CreateUser;

