"use client";
import { useState } from "react";
import { Edit, Trash2, MoreVertical } from "lucide-react";
import DialogAlert from "@/app/dashboard/_components/DialogAlert"; 
import { UpperCategory } from "@prisma/client";

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
import deleteUpperCategoryAction from "../../_actions/deleteUpperCategoryAction";

interface cellActionProps {
  data: UpperCategory;
}

const CellAction = ({ data }: cellActionProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { id, name } = data;
  const onDelete = async () => {
    const response = await deleteUpperCategoryAction(id);
    if (response) {
      toast.success("Başarıyla Silindi");
      setOpen(false);
      router.push("/dashboard/upperCategory");
      return;
    }
    toast.error(
      "Kategori en az bir ürünle bağlantılı. Lütfen önce ürünü silin."
    );

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
          <DropdownMenuLabel>Verilerinizi yönetin</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              href={"/dashboard/upperCategory/" + id}
              className="flex items-center justify-between gap-2 w-full cursor-pointer"
            >
              <Label>Düzenlemek</Label>
              <Edit className="text-secondary-foreground h-4 w-4 cursor-pointer" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between gap-2 text-primary cursor-pointer "
            onClick={() => setOpen((prev) => !prev)}
          >
            <Label>Silmek</Label>

            <Trash2 className="text-primary h-4 w-4 " />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CellAction;
