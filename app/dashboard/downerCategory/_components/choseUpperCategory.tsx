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
import { Dispatch } from "react";

interface ChooseUpperCategoryProps {
  chosenUpperCategory: UpperCategory | null;
  setChosenUpperCategory: Dispatch<React.SetStateAction<UpperCategory | null>>;
  UpperCategoryData: UpperCategory[];
}

const ChooseUpperCategory = ({
  UpperCategoryData,
  chosenUpperCategory,
  setChosenUpperCategory,
}: ChooseUpperCategoryProps) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-[300px]" asChild>
          <Button variant="outline">
            {chosenUpperCategory
              ? chosenUpperCategory.name
              : "Üst Kategoriyi Seçin (Gerekli)"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[300px]">
          <DropdownMenuLabel>Üst Kategoriyi Seçin</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={chosenUpperCategory?.id ?? ""}
            onValueChange={(value) => {
              const selectedCategory = UpperCategoryData.find(
                (category) => category.id === value
              );
              setChosenUpperCategory(selectedCategory || null);
            }}
          >
            {UpperCategoryData.map((category) => (
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
    </div>
  );
};

export default ChooseUpperCategory;
