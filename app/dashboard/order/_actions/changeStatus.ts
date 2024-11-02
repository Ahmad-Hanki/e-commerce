"use server";

import prisma from "@/lib/db";
import { OrderStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

const changeStatusAction = async (orderId: string, status: OrderStatus) => {
  try {
    await prisma.order.update({
      where: { id: orderId },
      data: { status },
    });

    console.log(`Order ${orderId} status changed to ${status}`);
    revalidatePath("/dashboard/order/newOrder");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default changeStatusAction;
