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
import Image from "next/image";

interface Product {
  id: string;
  description: string;
  image: string;
}
interface ChooseProductProps {
  productData: Product[];
  chosenProduct: Product | null;
  setChosenProduct: React.Dispatch<React.SetStateAction<Product | null>>;
}

export function ChooseProduct({
  productData,
  chosenProduct,
  setChosenProduct,
}: ChooseProductProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-[300px]" asChild>
        <Button
          variant="outline"
          className="w-full flex items-center justify-between gap-3"
        >
          <p>
            {chosenProduct?.id
              ? chosenProduct?.description
              : "Ürün Seçin (Gerekli)"}
          </p>
          {chosenProduct?.image && (
            <Image
              src={chosenProduct?.image}
              alt={chosenProduct?.description}
              width={50}
              height={50}
            />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px]">
        <DropdownMenuLabel className="w-[300px]">
        Ürün Seçin
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={chosenProduct?.id}
          onValueChange={(value) => {
            const selectedProduct = productData.find((pro) => pro.id === value);
            if (selectedProduct) setChosenProduct(selectedProduct);
          }}
        >
          {productData.map((product) => (
            <DropdownMenuRadioItem
              className="w-[300px] flex items-center gap-3 justify-between"
              key={product.id}
              value={product.id}
            >
              <p>{product.description}</p>
              <Image
                src={product.image}
                alt={product.description}
                width={50}
                height={50}
              />
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
