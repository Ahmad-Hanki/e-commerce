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
import { UpperCategory } from "@prisma/client";
import { redirect } from "next/navigation";
import { useState } from "react";

interface PcCategoryProps {
  categories: UpperCategory[]; // Expecting categories with 'id' and 'name'
}

export function PcCategory({ categories }: PcCategoryProps) {
  const [position, setPosition] = useState("Kategori Sec");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-2xl" variant="outline">
          {position}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Kategoriler:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {categories.map((category) => (
            <DropdownMenuRadioItem
              className="text-xl"
              onClick={() => {
                redirect("/category/" + category.id);
              }}
              key={category.id}
              value={category.id}
            >
              {category.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
