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

interface ChooseUpperCategoryProps {
  chosenUpperCategory: UpperCategory | null;
  setChosenUpperCategory: React.Dispatch<
    React.SetStateAction<UpperCategory | null>
  >;
}

export function ChooseUpperCategory({
  chosenUpperCategory,
  setChosenUpperCategory,
}: ChooseUpperCategoryProps) {
  const upperCategoryData: UpperCategory[] = [
    "ELECTRONICS",
    "CLOTHING",
    "BEAUTY",
    "HOME",
    "SPORTS",
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-[300px]" asChild>
        <Button variant="outline">
          {chosenUpperCategory ? chosenUpperCategory : "Select Upper Category (Required)"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px]">
        <DropdownMenuLabel className="w-[300px]">
          Choose Upper Category
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={chosenUpperCategory ?? ""}
          onValueChange={(value) => {
            setChosenUpperCategory(value as UpperCategory);
          }}
        >
          {upperCategoryData.map((category) => (
            <DropdownMenuRadioItem
              className="w-[300px]"
              key={category}
              value={category}
            >
              {category}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
