"use server";
import prisma from "@/lib/db";
import { OrderStatus } from "@prisma/client";

// Define the types for the order response
type Product = {
  description: string; // Ensure this matches your data
};

type Package = {
  products: Product; // Change this to a single product
};

type OrderItem = {
  quantity: number;
  package: Package; // Make sure this aligns with your returned structure
};

export type OrderResponse = {
  id: string;
  name: string | null;
  total: number;
  status: OrderStatus; // Use specific status type if available
  createdAt: Date;
  shippingAddress: string;
  phone: string;
  orderItems: OrderItem[];
};

const getSpecificOrder = async (
  userId: string,
  orderId: string
): Promise<OrderResponse | null> => { // Change return type to OrderResponse or null
  try {
    const order = await prisma.order.findFirst({ // Changed from findMany to findFirst
      where: {
        userId,
        id: orderId,
      },
      select: {
        id: true,
        name: true,
        total: true,
        status: true,
        createdAt: true,
        shippingAddress: true,
        phone: true,
        orderItems: {
          select: {
            quantity: true,
            package: {
              select: {
                products: {
                  select: {
                    description: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    // Return null if order is not found
    if (!order) return null;

    // Format the data into the OrderResponse structure
    const formattedOrder: OrderResponse = {
      id: order.id,
      name: order.name,
      total: order.total,
      status: order.status,
      createdAt: order.createdAt,
      shippingAddress: order.shippingAddress,
      phone: order.phone,
      orderItems: order.orderItems.map(item => ({
        quantity: item.quantity,
        package: {
          products: item.package.products, // Directly accessing the product object
        },
      })),
    };

    return formattedOrder; 
  } catch (err) {
    console.error("Error getting specific order:", err);
    return null; 
  }
};

export default getSpecificOrder;
