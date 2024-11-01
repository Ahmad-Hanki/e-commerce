import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { Category, Product } from "@prisma/client";
import Link from "next/link";

interface CategoryNameProps {
  products: Product[];
  categoryName: string;
  categories?: Category[];
}

const CategoryName = ({
  products,
  categoryName,
  categories,
}: CategoryNameProps) => {
  return (
    <div className="pb-10" >
      <Container>
        <div className="w-full flex justify-start gap-5 flex-wrap pt-5">
          {categories?.map((category) => (
            <Link
              key={category.id}
              href={`/category/${categoryName}/${category.id}`}
              passHref
            >
              {category.name}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl text-center font-semibold py-10">
          {categoryName}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CategoryName;
