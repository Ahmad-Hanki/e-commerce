"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Category } from "@prisma/client";
import CellAction from "./cellAction";

export const categoryColumns: ColumnDef<Category>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-start w-full">Kategori Adı</div>,
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
