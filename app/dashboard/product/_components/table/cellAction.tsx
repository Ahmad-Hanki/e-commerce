"use client";
import { useState } from "react";
import { Edit, Trash2, MoreVertical } from "lucide-react";
import DialogAlert from "../../../_components/DialogAlert";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FormattedProduct } from "../../_actions/getAllProducts";
import deleteProduct from "../../_actions/deleteProduct";



const CellAction = ({ data }: {data: FormattedProduct}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { id, description } = data;
  const onDelete = async () => {
    const response = await deleteProduct(id);
    if (response) {
      toast.success("Deleted Successfully");
      setOpen(false);
      router.push("/dashboard/product");
      return;
    }
    toast.error(
      "Category is connected with at least one product. please delete the product first."
    );

    setOpen(false);
  };
  return (
    <div>
      <DialogAlert
        onSubmit={onDelete}
        open={open}
        setOpen={setOpen}
        title={description}
      />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreVertical className="text-secondary-foreground w-6 h-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{"Manage Your data"}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              href={"/dashboard/product/" + id}
              className="flex items-center justify-between gap-2 w-full cursor-pointer"
            >
              <Label>{"Edit"}</Label>
              <Edit className="text-secondary-foreground h-4 w-4 cursor-pointer" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between gap-2 text-primary cursor-pointer "
            onClick={() => setOpen((prev) => !prev)}
          >
            <Label>{"Delete"}</Label>

            <Trash2 className="text-primary h-4 w-4 " />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CellAction;
