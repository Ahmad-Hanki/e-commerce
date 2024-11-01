"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cellAction";
import { FormattedProduct } from "../../_actions/getAllProducts";

export const productColumns: ColumnDef<FormattedProduct>[] = [
  {
    id: "description",
    header: () => <div className="text-start max-w-[250px]">Category</div>,

    cell: ({ row }) => {
      const data = row.original;
      return <div>{data.description}</div>;
    },
  },
  {
    accessorKey: "price",
    header: () => <div className="text-start w-full">Price</div>,
  },
  {
    accessorKey: "oldPrice",
    header: () => <div className="text-start w-full">Old Price</div>,
  },
  {
    accessorKey: "discount",
    header: () => <div className="text-start w-full">Discount %</div>,
  },
  {
    accessorKey: "freeShipping",
    header: () => <div className="text-start w-full ">Free shipping</div>,
  },
  {
    accessorKey: "new",
    header: () => <div className="text-start w-full">New</div>,
  },
  {
    accessorKey: "inStock",
    header: () => <div className="text-start w-full">In Stock</div>,
  },
  {
    accessorKey: "rating",
    header: () => <div className="text-start w-full">rate</div>,
  },
  {
    accessorKey: "mostSale",
    header: () => <div className="text-start w-full">Most Sale</div>,
  },
  {
    accessorKey: "upperCategory",
    header: () => <div className="text-start w-full">Upper Category</div>,
  },
  {
    id: "category",
    header: () => <div className="text-start w-full">Category</div>,

    cell: ({ row }) => {
      const data = row.original;
      return <div>{data.category.name}</div>;
    },
  },
  {
    id: "actions",
    header: () => <div className="text-start w-full">Manage Data</div>,

    cell: ({ row }) => {
      const data = row.original;
      return <CellAction data={data} />;
    },
  },
];
