// getAllOrders.ts
"use server";

import prisma from "@/lib/db";
import { OrderStatus } from "@prisma/client";

export interface FormattedOrderItem {
  id: string;
  quantity: number;
  price: number;
  pieces: number;
  PackageName: string;
  discount: number | null;
  product: {
    id: string;
    description: string;
    price: number;
    oldPrice: number | null;
    inStock: boolean;
    primaryImageUrl: string;
  };
}

export interface FormattedOrder {
  id: string;
  status: OrderStatus;
  total: number;
  shippingFee: number;
  discount: number | null;
  freeShipping: boolean;
  billingAddress: string | null;
  paymentMethod: string | null;
  createdAt: Date;
  updatedAt: Date;

  // Optional fields
  userAddress: {
    fullName: string;
    phone: string;
    email: string;
    address: string;
    vkn?: string;
    vergiDairesi?: string;
    firmaAdi?: string;
    adressPlace: "individual" | "company";
    eFatura?: boolean;
  };

  orderItems: FormattedOrderItem[];
}

const getAllOrders = async (status: OrderStatus): Promise<FormattedOrder[]> => {
  try {
    const orders = await prisma.order.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        status,
      },
      include: {
        address: true, // Includes user address data
        orderItems: {
          include: {
            package: {
              include: {
                products: {
                  include: {
                    Photos: {
                      where: { primary: true },
                      select: { url: true }, // Select primary image URL only
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    // Format the fetched orders to match FormattedOrder type
    return orders.map((order) => ({
      status: order.status,
      id: order.id,

      total: order.total,
      shippingFee: order.shippingFee ?? 0.0,
      discount: order.discount ?? null,
      freeShipping: order.freeShipping,
      billingAddress: order.billingAddress ?? null,
      paymentMethod: order.paymentMethod ?? null,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
      userAddress: {
        fullName: order.address.fullName,
        phone: order.address.phone,
        email: order.address.email,
        address: order.address.adress,
        adressPlace: order.address.adressPlace,
        vkn: order.address.vkn ?? undefined, // Convert null to undefined
        vergiDairesi: order.address.vergiDairesi ?? undefined, // Convert null to undefined
        firmaAdi: order.address.firmaAdi ?? undefined, // Convert null to undefined
        eFatura: order.address.Efatura ?? false,
      },
      orderItems: order.orderItems.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        price: item.price,
        PackageName: item.package.name,
        pieces: item.package.Piece,
        discount: item.discount ?? null,
        product: {
          id: item.package.products.id,
          description: item.package.products.description,
          price: item.package.products.price,
          oldPrice: item.package.products.oldPrice ?? null,
          inStock: item.package.products.inStock,
          primaryImageUrl: item.package.products.Photos[0]?.url || "", // Primary image URL
          pieces: item.package.Piece, // Access Piece from Package
        },
      })),
    }));
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
};

export default getAllOrders;
