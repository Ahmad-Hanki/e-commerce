"use client";

import { ColumnDef } from "@tanstack/react-table";
import { FormattedOrder } from "../_actions/getAllOrders";
import Image from "next/image";
import { getCurrentYMD } from "@/utils/getCurrentYMD";
import { StatusRadio } from "./StatusRadio";
import { Eye } from "lucide-react";
import Link from "next/link";

export const OrdersColumns: ColumnDef<FormattedOrder>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-start w-full min-w-[120px]">Id</div>,
  },

  {
    id: "Image",
    header: () => (
      <div className="text-start max-w-[250px] min-w-[120px]">Resim</div>
    ),
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="flex flex-col gap-3">
          {data.orderItems.map((item, ix) => (
            <Image
              key={ix}
              src={item.product.primaryImageUrl}
              width={50}
              height={50}
              alt="Product Image"
            />
          ))}
        </div>
      );
    },
  },

  {
    id: "description",
    header: () => (
      <div className="text-start max-w-[250px] min-w-[120px]">Tanım</div>
    ),
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div
          className="flex flex-col justify-between"
          style={{
            height:
              data.orderItems.length > 1
                ? `${data.orderItems.length * 50}px`
                : "auto",
          }}
        >
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
      <div className="text-start max-w-[250px] min-w-[120px]">
        Kaç tane Paket
      </div>
    ),
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div
        className="flex flex-col justify-between"
        style={{
          height:
            data.orderItems.length > 1
              ? `${data.orderItems.length * 50}px`
              : "auto",
        }}
      >          {data.orderItems.map((item, ix) => (
            <p key={ix}>{item.quantity}</p>
          ))}
        </div>
      );
    },
  },

  {
    id: "PackageName",
    header: () => (
      <div className="text-start max-w-[250px] min-w-[120px]">Paketin Adi:</div>
    ),
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div
        className="flex flex-col justify-between"
        style={{
          height:
            data.orderItems.length > 1
              ? `${data.orderItems.length * 50}px`
              : "auto",
        }}
      >          {data.orderItems.map((item, ix) => (
            <p key={ix}>{item.PackageName}</p>
          ))}
        </div>
      );
    },
  },

  {
    id: "piece",
    header: () => (
      <div className="text-start max-w-[250px] min-w-[120px]">
        Pakette Parça sayısı:
      </div>
    ),
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div
        className="flex flex-col justify-between"
        style={{
          height:
            data.orderItems.length > 1
              ? `${data.orderItems.length * 50}px`
              : "auto",
        }}
      >          {data.orderItems.map((item, ix) => (
            <p key={ix}>{item.pieces}</p> // Corrected to access the 'pieces' property
          ))}
        </div>
      );
    },
  },

  {
    id: "Price",
    header: () => (
      <div className="text-start max-w-[250px] min-w-[120px]">Fiyat</div>
    ),
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div
        className="flex flex-col justify-between"
        style={{
          height:
            data.orderItems.length > 1
              ? `${data.orderItems.length * 50}px`
              : "auto",
        }}
      >          {data.orderItems.map((item, ix) => (
            <p key={ix}>
              {item.price} x {item.quantity}
            </p>
          ))}
        </div>
      );
    },
  },

  {
    accessorKey: "total",
    header: () => (
      <div className="text-start w-full min-w-[120px]">Toplam Fiyat</div>
    ),
  },

  {
    accessorKey: "status",
    header: () => <div className="text-start w-full min-w-[120px]">Durum</div>,
  },

  {
    id: "date",
    header: () => (
      <div className="text-start max-w-[250px] min-w-[120px]">Tarih</div>
    ),
    cell: ({ row }) => {
      const data = row.original;
      return <div>{getCurrentYMD(data.createdAt)}</div>;
    },
  },

  {
    id: "address",
    header: () => (
      <div className="text-start max-w-[250px] min-w-[120px]">Adres</div>
    ),
    cell: ({ row }) => {
      const data = row.original;
      return <div>{data.userAddress.address}</div>; // Corrected to match `userAddress`
    },
  },

  {
    id: "phone",
    header: () => (
      <div className="text-start max-w-[250px] min-w-[120px]">Telefon</div>
    ),
    cell: ({ row }) => {
      const data = row.original;
      return <div>{data.userAddress.phone}</div>;
    },
  },

  {
    id: "name",
    header: () => (
      <div className="text-start max-w-[250px] min-w-[120px]">İsim</div>
    ),
    cell: ({ row }) => {
      const data = row.original;
      return <div>{data.userAddress.fullName}</div>;
    },
  },

  {
    id: "details",
    header: () => (
      <div className="text-start max-w-[250px] min-w-[120px]">Detailer</div>
    ),
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div>
          <Link href={`/dashboard/order/findOrder/${data.id}`}>
            <Eye size={24} />
          </Link>
        </div>
      );
    },
  },

  {
    id: "actions",
    header: () => (
      <div className="text-start w-full min-w-[120px]">Verileri Yönet</div>
    ),
    cell: ({ row }) => {
      const data = row.original;
      return <StatusRadio orderId={data.id} statusOrder={data.status} />;
    },
  },

  {
    id: "placeName",
    header: () => (
      <div className="text-start max-w-[250px] min-w-[120px]">Yer adı</div>
    ),
    cell: ({ row }) => {
      const data = row.original;
      return <div>{data.userAddress.adressPlace}</div>;
    },
  },

  {
    id: "companyName",
    header: () => (
      <div className="text-start max-w-[250px] min-w-[120px]">Firma Adı</div>
    ),
    cell: ({ row }) => {
      const data = row.original;
      return <div>{data.userAddress.firmaAdi}</div>;
    },
  },

  {
    id: "vkn",
    header: () => (
      <div className="text-start max-w-[250px] min-w-[120px]">VKN</div>
    ),
    cell: ({ row }) => {
      const data = row.original;
      return <div>{data.userAddress.vkn}</div>;
    },
  },

  {
    id: "vergiDairesi",
    header: () => (
      <div className="text-start max-w-[250px] min-w-[120px]">
        Vergi Dairesi
      </div>
    ),
    cell: ({ row }) => {
      const data = row.original;
      return <div>{data.userAddress.vergiDairesi}</div>;
    },
  },

  {
    id: "Efatura",
    header: () => (
      <div className="text-start max-w-[250px] min-w-[120px]">E Fatura</div>
    ),
    cell: ({ row }) => {
      const data = row.original;
      return <div>{data.userAddress.eFatura ? "Yes" : "No"}</div>; // Boolean check
    },
  },
];
