import { Suspense } from "react";
import getSpecificOrder from "../../_actions/getSpecificOrder";
import OrderData from "../../_components/OrderData";
import Loading from "@/components/loading";

const OrderId = async ({
  params,
}: {
  params: Promise<{ userId: string; orderId: string }>;
}) => {
  const { userId, orderId } = await params;

  const specificOrder = await getSpecificOrder(userId, orderId);

  if (!specificOrder) {
    return <div>Sipariş bulunamadı</div>;
  }

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <OrderData order={specificOrder} />
      </Suspense>
    </div>
  );
};

export default OrderId;
