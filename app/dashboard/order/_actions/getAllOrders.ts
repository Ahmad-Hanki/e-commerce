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
  piece: number; 

  discount?: number | null;
  product: ProductInfo;
};

export type OrderFormatType = {
  id: string;
  status: OrderStatus;
  total: number;
  shippingFee: number | null;
  discount: number | null;
  freeShipping: boolean;
  billingAddress?: string | null;
  paymentMethod?: string | null;
  createdAt: Date;
  updatedAt: Date;
  orderItems: OrderItemInfo[];
  userData: {
    fullName: string;
    phone: string;
    email: string;
    adress: string;
    adressPlace: "individual" | "company";
    firmaAdi?: string | null;
    vkn?: string | null;
    vergiDairesi?: string | null;
    Efatura?: boolean | null;
  };
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
                  select: {
                    description: true,
                    image: true,
                  },
                },
              },
            },
          },
        },
        address: { // Fetch userData (address)
          select: {
            fullName: true,
            phone: true,
            email: true,
            adress: true,
            adressPlace: true,
            firmaAdi: true,
            vkn: true,
            vergiDairesi: true,
            Efatura: true,
          },
        },
      },
    });

    const formattedOrders: OrderFormatType[] = orders.map((order) => ({
      id: order.id,
      status: order.status,
      total: order.total,
      shippingFee: order.shippingFee,
      discount: order.discount,
      freeShipping: order.freeShipping,
      billingAddress: order.billingAddress,
      paymentMethod: order.paymentMethod,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
      orderItems: order.orderItems.map((orderItem) => ({
        packageId: orderItem.packageId,
        quantity: orderItem.quantity,
        price: orderItem.price,
        discount: orderItem.discount,
        piece: orderItem.package.Piece, 
        product: {
          description: orderItem.package.products.description,
          image: orderItem.package.products.image,
        },
      })),
      userData: {
        fullName: order.address.fullName,
        phone: order.address.phone,
        email: order.address.email,
        adress: order.address.adress,
        adressPlace: order.address.adressPlace,
        firmaAdi: order.address.firmaAdi,
        vkn: order.address.vkn,
        vergiDairesi: order.address.vergiDairesi,
        Efatura: order.address.Efatura,
      },
    }));

    return formattedOrders;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw new Error("Failed to fetch orders.");
  }
};

export default getAllOrders;
