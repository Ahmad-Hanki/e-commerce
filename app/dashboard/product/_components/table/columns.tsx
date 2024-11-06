"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cellAction";
import { FormattedProduct } from "../../_actions/getAllProducts";

export const productColumns: ColumnDef<FormattedProduct>[] = [
  {
    id: "description",
    header: () => <div className="text-start max-w-[250px]">Kategori</div>,

    cell: ({ row }) => {
      const data = row.original;
      return <div>{data.description}</div>;
    },
  },
  {
    accessorKey: "price",
    header: () => <div className="text-start w-full">Fiyat</div>,
  },
  {
    accessorKey: "oldPrice",
    header: () => <div className="text-start w-full">Eski Fiyat</div>,
  },
  {
    accessorKey: "discount",
    header: () => <div className="text-start w-full">İndirim %</div>,
  },
  {
    accessorKey: "freeShipping",
    header: () => <div className="text-start w-full ">Ücretsiz kargo</div>,
  },
  {
    accessorKey: "new",
    header: () => <div className="text-start w-full">Yeni</div>,
  },
  {
    accessorKey: "inStock",
    header: () => <div className="text-start w-full">Stokta</div>,
  },
  {
    accessorKey: "rating",
    header: () => <div className="text-start w-full">Ürün derecelendirmesi</div>,
  },
  {
    accessorKey: "mostSale",
    header: () => <div className="text-start w-full">En Çok Satılan</div>,
  },
  {
    accessorKey: "upperCategory",
    header: () => <div className="text-start w-full">Üst Kategori</div>,
  },
  {
    id: "category",
    header: () => <div className="text-start w-full">Kategori</div>,

    cell: ({ row }) => {
      const data = row.original;
      return <div>{data.category.name}</div>;
    },
  },
  {
    id: "actions",
    header: () => <div className="text-start w-full">Verileri Yönet</div>,

    cell: ({ row }) => {
      const data = row.original;
      return <CellAction data={data} />;
    },
  },
];
