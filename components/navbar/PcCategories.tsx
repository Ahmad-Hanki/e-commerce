"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { UpperCategory } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface PcCategoryProps {
  categories: UpperCategory[]; // Expecting categories with 'id' and 'name'
}

export function PcCategory({ categories }: PcCategoryProps) {
  const pathname = usePathname();

  const categoriesLink = categories.map((category) => {
    return {
      href: `/category/${category.id}`,
      name: category.name,
      active: pathname.includes(`/category/${category.id}`),
    };
  });
  return (
    <div className="flex justify-start items-center  ">
      {categoriesLink.map((category) => (
        <Button
          className={cn(
            "text-xl hover:bg-primary/90 transition-all duration-300 py-7 px-2",
            category.active ? "bg-primary" : ""
          )}
          key={category.name}
          variant={"ghost"}
        >
          <Link className={`text-xl text-white `} href={category.href}>
            {category.name}
          </Link>
        </Button>
      ))}
    </div>
  );
}
