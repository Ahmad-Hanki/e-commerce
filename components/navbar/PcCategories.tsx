"use client";

import { Button } from "@/components/ui/button";

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
    <div className="flex justify-start items-center gap-2">
      {categoriesLink.map((category) => (
        <Button className="text-xl px-0" key={category.name} variant={"link"}>
          <Link
            className={`text-base text-muted-foreground hover:text-yellow-500 transition-all duration-300 hover:underline ${
              category.active ? "text-lg text-primary " : ""
            }`}
            href={category.href}
          >
            {category.name}
          </Link>
        </Button>
      ))}
    </div>
  );
}
