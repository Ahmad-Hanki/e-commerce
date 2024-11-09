"use client";
import { UpperCategory } from "@prisma/client";
import Container from "../Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface CategoryBarProps {
  categories: UpperCategory[];
}

const CategoryBar = ({ categories }: CategoryBarProps) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        " py-3 hidden lg:block",

        pathname.includes("/dashboard") ? "!hidden" : ""
      )}
    >
      <Container>
        <div className="flex items-center w-full">
          <div className="flex gap-4 flex-nowrap w-fit">
            {categories.map((category) => (
              <Link
                href={"/category/" + category.id}
                key={category.id}
                className={cn(
                  "hover:text-yellow-600 transition-all duration-300 cursor-pointer text-lg lowercase first-letter:uppercase",
                  pathname.includes(`/category/${category.id}`)
                    ? "!text-primary underline"
                    : "text-gray-600"
                )}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryBar;
