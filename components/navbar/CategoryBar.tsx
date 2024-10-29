import { Category } from "@prisma/client";
import Container from "../Container";
import Link from "next/link";

interface CategoryBarProps {
  categories: Category[];
}

const CategoryBar = ({ categories }: CategoryBarProps) => {
  return (
    <div className=" py-3 hidden lg:block">
      <Container>
        <div className="flex items-center w-full">
          <div className="flex gap-4 flex-nowrap w-fit">
            {categories.map((category) => (
              <Link
                href={"/category/" + category.id}
                key={category.id}
                className="hover:text-primary transition-all duration-300 cursor-pointer "
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
