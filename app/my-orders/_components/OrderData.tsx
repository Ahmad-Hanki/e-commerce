import Container from "@/components/Container";
import { OrderResponse } from "../_actions/getSpecificOrder";

interface OrderDataProps {
  order: OrderResponse | null; // Allow order to be null
}

const OrderData = ({ order }: OrderDataProps) => {
  if (!order) {
    return (
      <Container>
        <h1 className="text-3xl font-semibold text-primary">Order Not Found</h1>
      </Container>
    );
  }

  return (
    <div className="py-20">
      <Container>
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-semibold text-primary">Order Items</h1>
          <ul className="list-disc list-inside">
            {order.orderItems.map((item, index) => (
              <div key={index}>
                <p className="text-lg font-medium text-gray-600">
                  How many: {item.quantity}
                </p>

                <p className="text-lg font-medium text-gray-600">
                  Product: {item.package.products.description}{" "}
                </p>
              </div>
            ))}
          </ul>
          <div>
            <h1 className="text-3xl font-semibold text-primary">
              Order Details
            </h1>
            <p className="text-lg font-medium text-gray-600">
              Order ID: {order.id}
            </p>
         
            <p className="text-lg font-medium text-gray-600">
              Total: ${order.total.toFixed(2)}
            </p>
            <p className="text-lg font-medium text-gray-600">
              Status: {order.status}
            </p>
            <p className="text-lg font-medium text-gray-600">
              Created At: {new Date(order.createdAt).toLocaleString()}{" "}
              {/* Format date */}
            </p>
            
            
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default OrderData;
