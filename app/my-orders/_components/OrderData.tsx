import Container from "@/components/Container";
import { OrderResponse } from "../_actions/getSpecificOrder";

interface OrderDataProps {
  order: OrderResponse | null; // Allow order to be null
}

const OrderData = ({ order }: OrderDataProps) => {
  if (!order) {
    return (
      <Container>
        <h1 className="text-3xl font-semibold text-primary">
          Sipariş Bulunamadı
        </h1>
      </Container>
    );
  }

  return (
    <div className="py-20">
      <Container>
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-semibold text-primary">
            Sipariş Öğeleri
          </h1>
          <ul className="list-disc list-inside">
            {order.orderItems.map((item, index) => (
              <div className="pb-4" key={index}>
                <p className="text-lg font-medium text-gray-600">
                  Adet: {item.quantity}
                </p>
                <p className="text-lg font-medium text-gray-600">
                  Ürün: {item.package.products.description}
                </p>
                <p className="text-lg font-medium text-gray-600">
                  Pakette kac adet: {item.package.Piece}{" "}
                  {/* Display Piece value */}
                </p>
                
              </div>
            ))}
          </ul>
          <div>
            <h1 className="text-3xl font-semibold text-primary">
              Sipariş Detayları
            </h1>
            <p className="text-lg font-medium text-gray-600">
              Sipariş Kimliği: {order.id}
            </p>
            <p className="text-lg font-medium text-gray-600">
              Toplam: {order.total.toFixed(2)}TL
            </p>
            <p className="text-lg font-medium text-gray-600">
              Durum: {order.status}
            </p>
            <p className="text-lg font-medium text-gray-600">
              Oluşturuldu: {new Date(order.createdAt).toLocaleString()}
            </p>
          </div>

          <div>
            <h1 className="text-3xl font-semibold text-primary">
              Müşteri Detayları
            </h1>
            <p className="text-lg font-medium text-gray-600">
              Ad Soyad: {order.userData.fullName}
            </p>
            <p className="text-lg font-medium text-gray-600">
              Telefon: {order.userData.phone}
            </p>
            <p className="text-lg font-medium text-gray-600">
              E-posta: {order.userData.email}
            </p>
            <p className="text-lg font-medium text-gray-600">
              Adres: {order.userData.adress}
            </p>
            <p className="text-lg font-medium text-gray-600">
              Adres Türü: {order.userData.adressPlace}
            </p>
            {order.userData.firmaAdi && (
              <p className="text-lg font-medium text-gray-600">
                Firma Adı: {order.userData.firmaAdi}
              </p>
            )}
            {order.userData.vkn && (
              <p className="text-lg font-medium text-gray-600">
                VKN: {order.userData.vkn}
              </p>
            )}
            {order.userData.vergiDairesi && (
              <p className="text-lg font-medium text-gray-600">
                Vergi Dairesi: {order.userData.vergiDairesi}
              </p>
            )}
            <p className="text-lg font-medium text-gray-600">
              E-Fatura: {order.userData.Efatura ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrderData;
