"use client";

import { ColumnDef } from "@tanstack/react-table";
import { OrderFormatType } from "../_actions/getAllOrders";
import Image from "next/image";
import { getCurrentYMD } from "@/utils/getCurrentYMD";
import { StatusRadio } from "./StatusRadio";

export const OrdersColumns: ColumnDef<OrderFormatType>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-start w-full  min-w-[120px]">Id</div>,
  },

  {
    id: "Image",
    header: () => (
      <div className="text-start max-w-[250px] min-w-[120px]">Image</div>
    ),

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
    header: () => (
      <div className="text-start max-w-[250px] min-w-[120px] ">Description</div>
    ),

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
    header: () => (
      <div className="text-start max-w-[250px] min-w-[120px]">How Many</div>
    ),

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
    header: () => <div className="text-start w-full  min-w-[120px]">Price</div>,
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="text-start w-full  min-w-[120px]">Status</div>
    ),
  },
  {
    id: "date",
    header: () => (
      <div className="text-start max-w-[250px]  min-w-[120px]">Date</div>
    ),

    cell: ({ row }) => {
      const data = row.original;
      return <div>{getCurrentYMD(data.createdAt)}</div>;
    },
  },
  {
    id: "address",
    accessorKey: "address",
    header: () => (
      <div className="text-start max-w-[250px]  min-w-[120px]">Address</div>
    ),

    cell: ({ row }) => {
      const data = row.original;
      return <div>{data.userData.adress}</div>;
    },
  },
  {
    id: "phone",
    header: () => (
      <div className="text-start max-w-[250px]  min-w-[120px]">Phone</div>
    ),

    cell: ({ row }) => {
      const data = row.original;
      return <div>{data.userData.phone}</div>;
    },
  },
  {
    id: "name",
    header: () => (
      <div className="text-start max-w-[250px]  min-w-[120px]">Name</div>
    ),

    cell: ({ row }) => {
      const data = row.original;
      return <div>{data.userData.fullName}</div>;
    },
  },
  {
    id: "actions",
    header: () => (
      <div className="text-start w-full  min-w-[120px]">Manage Data</div>
    ),

    cell: ({ row }) => {
      const data = row.original;
      return (
        <div>
          <StatusRadio orderId={data.id} statusOrder={data.status} />
        </div>
      );
    },
  },
  {
    id: "placeName",
    header: () => (
      <div className="text-start max-w-[250px]  min-w-[120px]">Place name</div>
    ),

    cell: ({ row }) => {
      const data = row.original;
      return <div>{data.userData.adressPlace}</div>;
    },
  },
  {
    id: "companyName",
    header: () => (
      <div className="text-start max-w-[250px]  min-w-[120px]">
        Company name
      </div>
    ),

    cell: ({ row }) => {
      const data = row.original;
      return <div>{data.userData.firmaAdi}</div>;
    },
  },
  {
    id: "vkn",
    header: () => (
      <div className="text-start max-w-[250px]  min-w-[120px]">VKN</div>
    ),

    cell: ({ row }) => {
      const data = row.original;
      return <div>{data.userData.vkn}</div>;
    },
  },
  {
    id: "vergiDairesi",
    header: () => (
      <div className="text-start max-w-[250px]  min-w-[120px]">
        Vergi Dairesi
      </div>
    ),

    cell: ({ row }) => {
      const data = row.original;
      return <div>{data.userData.vergiDairesi}</div>;
    },
  },
  {
    id: "Efatura",
    header: () => (
      <div className="text-start max-w-[250px]  min-w-[120px]">E Fatura</div>
    ),

    cell: ({ row }) => {
      const data = row.original;
      return <div>{data.userData.Efatura}</div>;
    },
  },
];
