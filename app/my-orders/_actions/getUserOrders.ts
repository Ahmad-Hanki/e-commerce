"use server";

import prisma from "@/lib/db";
import { OrderStatus } from "@prisma/client";
type Order = {
  id: string;
  name: string | null;
  total: number;
  status: OrderStatus;
  createdAt: Date;
};
const getUserOrders = async (userId: string): Promise<Order[]> => {
  try {
    const orders = await prisma.order.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        name: true,
        total: true,
        status: true,
        createdAt: true,
      },
    });

    return orders;
  } catch (error) {
    console.error("Error getting user orders:", error);
    return [];
  }
};

export default getUserOrders;
