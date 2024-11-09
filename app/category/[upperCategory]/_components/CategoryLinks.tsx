"use client";
import { cn } from "@/lib/utils";
import { DownerCategory } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryLinks = ({
  downerCategories,
  upperCategoryId,
}: {
  downerCategories: DownerCategory[];
  upperCategoryId: string;
}) => {
  const pathname = usePathname();
  return (
    <div>
      <div className="w-full flex justify-start gap-5 flex-wrap pb-5">
        {downerCategories?.map((category) => (
          <Link
            key={category.id}
            href={`/category/${upperCategoryId}/${category.id}`}
            className={cn(
              "hover:text-yellow-600 transition-all duration-300 cursor-pointer text-lg lowercase first-letter:uppercase",
              pathname.includes(`/${category.id}`)
                ? "!text-primary underline"
                : "text-gray-600"
            )}
          >
            {category.name}
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryLinks;
