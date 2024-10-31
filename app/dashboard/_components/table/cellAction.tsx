"use client";
import { useState } from "react";
import { Edit, Trash2, MoreVertical } from "lucide-react";
import DialogAlert from "../DialogAlert"; 
import { Category } from "@prisma/client";

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
import DeleteCategoryAction from "../../category/_actions/deleteLocationAction"; 


interface cellActionProps {
  data: Category;
}

const CellAction = ({ data }: cellActionProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { id, name } = data;
  const onDelete = async () => {
    const response = await DeleteCategoryAction(id);
    if (response) {
      toast.success("Deleted Successfully" );
      setOpen(false);
      router.push("/dashboard/category");
      return;
    }
    toast.error( "Something went wrong" );

    setOpen(false);
  };
  return (
    <div>
      <DialogAlert
        onSubmit={onDelete}
        open={open}
        setOpen={setOpen}
        title={name}
      />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreVertical className="text-secondary-foreground w-6 h-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            { "Manage Your data"}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              href={"/dashboard/category/" + id}
              className="flex items-center justify-between gap-2 w-full cursor-pointer"
            >
              <Label>{ "Edit" }</Label>
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
