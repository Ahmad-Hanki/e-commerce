"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cellAction";
import { FormattedPackage } from "../../_actions/getAllPackages";

export const PackageColumns: ColumnDef<FormattedPackage>[] = [
  {
    accessorKey: "productDescription",
    header: () => <div className="text-start w-full">Which Product</div>,
  },
  {
    accessorKey: "piece",
    header: () => <div className="text-start w-full">Pieces</div>,
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
    header: () => <div className="text-start w-full">Discount</div>,
  },
  {
    accessorKey: "inStock",
    header: () => <div className="text-start w-full">In Stock</div>,
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
