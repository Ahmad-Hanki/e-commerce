"use client";

import getKindeId from "@/actions/getKindeId";
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
import Link from "next/link";

interface CartProps {
  kindeId: string;
}

const Cart = async ({ kindeId }: CartProps) => {
  return (
    <Link href={`/${kindeId}/cart`}>
      <CartIcon
        className={cn(
          "transition-all duration-300  hover:text-primary w-9 h-9 lg:w-8 lg:h-8"
        )}
      />
    </Link>
  );
};

export default Cart;
