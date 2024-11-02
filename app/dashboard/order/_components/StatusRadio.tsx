"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { OrderStatus } from "@prisma/client";
import { useState } from "react";
import toast from "react-hot-toast";
import changeStatusAction from "../_actions/changeStatus";

export function StatusRadio({
  statusOrder,
  orderId,
}: {
  statusOrder: OrderStatus;
  orderId: string;
}) {
  const [status, setStatus] = useState<OrderStatus>(statusOrder);

  const StatusSumption = async (value: string) => {
    const res = await changeStatusAction(orderId, value as OrderStatus);

    if (res) {
      setStatus(value as OrderStatus);
      toast.success("Status changed successfully");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Manage State</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup
          value={status}
          onValueChange={async (value) => {
            await StatusSumption(value);
          }}
        >
          <DropdownMenuRadioItem value="PENDING">PENDING</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="SHIPPED">SHIPPED</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="CANCELED">
            CANCELED
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
