import getSpecificOrder from "../../_actions/getSpecificOrder";
import OrderData from "../../_components/OrderData";

const OrderId = async ({
  params,
}: {
  params: Promise<{ userId: string; orderId: string }>;
}) => {
  const { userId, orderId } = await params;

  const specificOrder = await getSpecificOrder(userId, orderId);

    if (!specificOrder) {
        return <div>No order found</div>;
    }


  return <div>
    <OrderData order={specificOrder} />
  </div>;
};

export default OrderId;
