"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { UpperCategory } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileCategories = ({ categories }: { categories: UpperCategory[] }) => {
  const pathname = usePathname();
  return (
    <div>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-3xl">Ürünlerimiz</AccordionTrigger>
          <AccordionContent className="pl-5">
            <div className="flex flex-col gap-4">
              {categories?.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className={cn(
                    "cursor-pointer text-3xl lowercase first-letter:uppercase",
                    pathname == `category/${category}`
                      ? "text-primary"
                      : "text-gray-600"
                  )}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MobileCategories;
