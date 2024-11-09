"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cellAction";
import { FormattedDownerCategoriesType } from "../../_actions/getDownerCategories";

export const categoryColumns: ColumnDef<FormattedDownerCategoriesType>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-start w-full">Kategori Adı</div>,
  },
  {
    accessorKey: "upperCategoryName",
    header: () => <div className="text-start w-full">Ust Kategori Adı</div>,
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
