import createOrFindUser from "@/actions/createOrFindUser";
import { redirect } from "next/navigation";

const CreateUser = async () => {
  await createOrFindUser();
  redirect("/");
};

export default CreateUser;
