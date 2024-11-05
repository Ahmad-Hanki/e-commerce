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
                  Adet: {item.quantity}
                </p>
                <p className="text-lg font-medium text-gray-600">
                  Product: {item.package.products.description}
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
              Created At: {new Date(order.createdAt).toLocaleString()}
            </p>
          </div>

          <div>
            <h1 className="text-3xl font-semibold text-primary">
              Customer Details
            </h1>
            <p className="text-lg font-medium text-gray-600">
              Full Name: {order.userData.fullName}
            </p>
            <p className="text-lg font-medium text-gray-600">
              Phone: {order.userData.phone}
            </p>
            <p className="text-lg font-medium text-gray-600">
              Email: {order.userData.email}
            </p>
            <p className="text-lg font-medium text-gray-600">
              Address: {order.userData.adress}
            </p>
            <p className="text-lg font-medium text-gray-600">
              Address Type: {order.userData.adressPlace}
            </p>
            {order.userData.firmaAdi && (
              <p className="text-lg font-medium text-gray-600">
                Company Name: {order.userData.firmaAdi}
              </p>
            )}
            {order.userData.vkn && (
              <p className="text-lg font-medium text-gray-600">
                VKN: {order.userData.vkn}
              </p>
            )}
            {order.userData.vergiDairesi && (
              <p className="text-lg font-medium text-gray-600">
                Tax Office: {order.userData.vergiDairesi}
              </p>
            )}
            <p className="text-lg font-medium text-gray-600">
              E-Invoice: {order.userData.Efatura ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrderData;
