"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Category } from "@prisma/client";
import CellAction from "./cellAction";

export const categoryColumns: ColumnDef<Category>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-start w-full">Category Name</div>,
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
