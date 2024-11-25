import { Suspense } from "react";
import { OrderResponse } from "@/app/my-orders/_actions/getSpecificOrder";
import OrderData from "@/app/my-orders/_components/OrderData";
import Loading from "@/components/loading";
import prisma from "@/lib/db";

const OrderId = async ({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) => {
  const { orderId } = await params;

  const specificOrder = await getOneOrder(orderId);

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

const getOneOrder = async (orderId: string): Promise<OrderResponse | null> => {
  try {
    const order = await prisma.order.findFirst({
      where: {
        id: orderId,
      },
      select: {
        id: true,
        total: true,
        status: true,
        createdAt: true,

        orderItems: {
          select: {
            quantity: true,
            package: {
              select: {
                Piece: true,
                name: true,
                products: {
                  select: {
                    description: true,
                  },
                },
              },
            },
          },
        },

        // Include the userData related to the order
        address: {
          select: {
            fullName: true,
            phone: true,
            email: true,
            adress: true,
            adressPlace: true,
            vkn: true,
            vergiDairesi: true,
            firmaAdi: true,
            Efatura: true,
          },
        },
      },
    });

    if (!order) return null;

    // Format the data into the OrderResponse structure
    const formattedOrder: OrderResponse = {
      id: order.id,
      total: order.total,
      status: order.status,
      createdAt: order.createdAt,

      orderItems: order.orderItems.map((item) => ({
        quantity: item.quantity,
        package: {
          Piece: item.package.Piece, // Include Piece here
          name: item.package.name,

          products: item.package.products,
        },
      })),

      userData: {
        fullName: order.address.fullName,
        phone: order.address.phone,
        email: order.address.email,
        adress: order.address.adress,
        adressPlace: order.address.adressPlace,
        vkn: order.address.vkn || undefined,
        vergiDairesi: order.address.vergiDairesi || undefined,
        firmaAdi: order.address.firmaAdi || undefined,
        Efatura: order.address.Efatura || false,
      },
    };

    return formattedOrder;
  } catch (err) {
    console.error("Error getting specific order:", err);
    return null;
  }
};
