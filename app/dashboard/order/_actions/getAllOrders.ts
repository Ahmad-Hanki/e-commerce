"use server";

import prisma from "@/lib/db";
import { OrderStatus } from "@prisma/client";

type ProductInfo = {
  description: string;
  image: string;
};

export type OrderItemInfo = {
  packageId: string;
  quantity: number;
  price: number;
  discount?: number | null; // Allow discount to be null
  product: ProductInfo; // Changed to single ProductInfo instead of array
};

export type OrderFormatType = {
  id: string;
  status: OrderStatus;
  total: number;
  shippingFee: number | null;
  phone: string;
  name: string;
  discount: number | null;
  freeShipping: boolean;
  shippingAddress: string;
  billingAddress?: string | null;
  paymentMethod?: string | null;
  createdAt: Date;
  updatedAt: Date;
  orderItems: OrderItemInfo[];
};

const getAllOrders = async (
  status: OrderStatus,
  userId?: string
): Promise<OrderFormatType[]> => {
  try {
    const orders = await prisma.order.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        status,
        userId,
      },
      include: {
        orderItems: {
          include: {
            package: {
              include: {
                products: {
                  // Include product data through the package relation
                  select: {
                    description: true,
                    image: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    // Format the orders to match OrderFormatType
    const formattedOrders: OrderFormatType[] = orders.map((order) => ({
      id: order.id,
      status: order.status,
      total: order.total,
      shippingFee: order.shippingFee,
      discount: order.discount,
      freeShipping: order.freeShipping,
      phone: order.phone,
      name: order.name!,
      shippingAddress: order.shippingAddress,
      billingAddress: order.billingAddress,
      paymentMethod: order.paymentMethod,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
      orderItems: order.orderItems.map((orderItem) => ({
        packageId: orderItem.packageId,
        quantity: orderItem.quantity,
        price: orderItem.price,
        discount: orderItem.discount,
        product: {
          description: orderItem.package.products.description, // Accessing product description
          image: orderItem.package.products.image, // Accessing product image
        },
      })),
    }));

    return formattedOrders;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw new Error("Failed to fetch orders.");
  }
};

export default getAllOrders;
