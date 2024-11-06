"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cellAction";
import { FormattedPackage } from "../../_actions/getAllPackages";

export const PackageColumns: ColumnDef<FormattedPackage>[] = [
  {
    accessorKey: "productDescription",
    header: () => <div className="text-start w-full">Hangi Ürün</div>,
  },
  {
    accessorKey: "piece",
    header: () => <div className="text-start w-full">Parçalar</div>,
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
    header: () => <div className="text-start w-full">İndirim</div>,
  },
  {
    accessorKey: "inStock",
    header: () => <div className="text-start w-full">Stokta</div>,
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
