import { notFound } from "next/navigation";
import getUserOrders from "../_actions/getUserOrders";
import OrdersTable from "../_components/OrdersTable";
import { Suspense } from "react";
import Loading from "@/components/loading";

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
      <Suspense fallback={<Loading />}>
        <OrdersTable userId={userId} orders={orders} />
      </Suspense>
    </div>
  );
};

export default UserOrders;
