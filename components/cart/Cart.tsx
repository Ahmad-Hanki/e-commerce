"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import CartIcon from "@/public/icons/CartIcon";
import { usePathname } from "next/navigation";

const Cart = () => {
 
  return (
   
      <Dialog>
        <DialogTrigger className="relative ">

          <CartIcon
            className={cn(
              "transition-all duration-200  hover:text-primary/70 w-9 h-9 lg:w-8 lg:h-8"
            )}
          />

          {/* TODO: motion */}
          <div className="absolute -top-3 right-0">
            <span className="text-xs bg-primary text-white rounded-full px-1 py-0.5">
              3
            </span>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
  );
};

export default Cart;
