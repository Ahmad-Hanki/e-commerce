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
import { DownerCategory } from "@prisma/client";
import { Dispatch } from "react";

interface ChooseCategoryProps {
  categoryData: DownerCategory[];
  chosenCategory: DownerCategory | null;
  setChosenCategory: Dispatch<React.SetStateAction<DownerCategory | null>>;
}

export function ChooseCategory({
  categoryData,
  chosenCategory,
  setChosenCategory,
}: ChooseCategoryProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-[300px]" asChild>
        <Button variant="outline">
          {chosenCategory ? chosenCategory.name : "Kategori Seçin (Gerekli)"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px]">
        <DropdownMenuLabel className="w-[300px]">
          Kategori Seçin
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={chosenCategory?.id}
          onValueChange={(value) => {
            const selectedCategory = categoryData.find(
              (cat) => cat.id === value
            );
            if (selectedCategory) setChosenCategory(selectedCategory);
          }}
        >
          {categoryData.map((category) => (
            <DropdownMenuRadioItem
              className="w-[300px]"
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
