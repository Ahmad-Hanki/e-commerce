import getUser from "@/actions/getUser";
import { notFound } from "next/navigation";

const CartPage = async ({
  params: { kindeId },
}: {
  params: {
    kindeId: string;
  };
}) => {
  const userExists = await getUser(kindeId);

  if (!userExists) {
    notFound();
  }

  return <div>
    
  </div>;
};

export default CartPage;
