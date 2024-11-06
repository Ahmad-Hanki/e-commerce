import { notFound } from "next/navigation";
import getUserOrders from "../_actions/getUserOrders";
import OrdersTable from "../_components/OrdersTable";

const UserOrders = async ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const { userId } = await params;
  if (!userId) {
    notFound();
  }

  const orders = await getUserOrders(userId);

  if (!orders) {
    return <div>Hiçbir sipariş bulunamadı</div>;
  }

  return (
    <div>
      <OrdersTable userId={userId} orders={orders} />
    </div>
  );
};

export default UserOrders;
