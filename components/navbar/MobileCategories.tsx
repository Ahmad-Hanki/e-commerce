import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Category } from "@prisma/client";
import Link from "next/link";

const MobileCategories = ({ categories }: { categories: Category[] }) => {
  return (
    <div>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-3xl">Ürünlerimiz</AccordionTrigger>
          <AccordionContent className="pl-5">
            <div className="flex flex-col gap-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="hover:text-primary transition-all duration-300 cursor-pointer text-3xl"
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
