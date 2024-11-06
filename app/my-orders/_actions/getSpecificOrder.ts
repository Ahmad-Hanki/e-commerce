"use server";
import prisma from "@/lib/db";
import { OrderStatus } from "@prisma/client";

// Define the types for the order response
type Product = {
  description: string; // Ensure this matches your data
};

type Package = {
  products: Product; // Change this to a single product
  Piece: number; // Add this to capture the Piece value
};

type OrderItem = {
  quantity: number;
  package: Package; // Ensure this aligns with your returned structure
};

// Define userData type within the OrderResponse structure
type UserData = {
  fullName: string;
  phone: string;
  email: string;
  adress: string;
  adressPlace: string; // "individual" or "company"
  vkn?: string;
  vergiDairesi?: string;
  firmaAdi?: string;
  Efatura?: boolean;
};

export type OrderResponse = {
  id: string;
  total: number;
  status: OrderStatus;
  createdAt: Date;
  orderItems: OrderItem[];
  userData: UserData;
};

const getSpecificOrder = async (
  userId: string,
  orderId: string
): Promise<OrderResponse | null> => {
  try {
    const order = await prisma.order.findFirst({
      where: {
        userId,
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

export default getSpecificOrder;
