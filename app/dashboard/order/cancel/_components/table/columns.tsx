"use client";

import { ColumnDef } from "@tanstack/react-table";
import { OrderFormatType } from "../../../_actions/getAllOrders";
import Image from "next/image";
import { getCurrentYMD } from "@/utils/getCurrentYMD";
import { StatusRadio } from "../../../_components/StatusRadio";

export const OrdersColumns: ColumnDef<OrderFormatType>[] = [
  {
    id: "Image",
    header: () => <div className="text-start max-w-[250px]">Image</div>,

    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="flex flex-col gap-3">
          {data.orderItems.map((item, ix) => (
            <Image
              key={ix}
              src={item.product.image}
              width={70}
              height={70}
              alt="product"
            />
          ))}
        </div>
      );
    },
  },
  {
    id: "description",
    header: () => <div className="text-start max-w-[250px] ">Description</div>,

    cell: ({ row }) => {
      const data = row.original;
      return (
        <div>
          {data.orderItems.map((item, ix) => (
            <p key={ix}>{item.product.description}</p>
          ))}
        </div>
      );
    },
  },
  {
    id: "quantity",
    header: () => <div className="text-start max-w-[250px]">How Many</div>,

    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="flex flex-col gap-3">
          {data.orderItems.map((item, ix) => (
            <p key={ix}>{item.quantity}</p>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "total",
    header: () => <div className="text-start w-full">Price</div>,
  },
  {
    accessorKey: "status",
    header: () => <div className="text-start w-full">Status</div>,
  },
  {
    id: "date",
    header: () => <div className="text-start max-w-[250px]">Date</div>,

    cell: ({ row }) => {
      const data = row.original;
      return <div>{getCurrentYMD(data.createdAt)}</div>;
    },
  },

  {
    accessorKey: "shippingAddress",
    header: () => <div className="text-start w-full ">Shiping to</div>,
  },
  {
    accessorKey: "name",
    header: () => <div className="text-start w-full ">Name</div>,
  },
  {
    accessorKey: "phone",
    header: () => <div className="text-start w-full ">Phone</div>,
  },
  

  {
    id: "actions",
    header: () => <div className="text-start w-full">Manage Data</div>,

    cell: ({ row }) => {
      const data = row.original;
      return (
        <div>
          <StatusRadio orderId={data.id} statusOrder={data.status} />
        </div>
      );
    },
  },
];
