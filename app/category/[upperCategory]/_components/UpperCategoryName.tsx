import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { Product, DownerCategory } from "@prisma/client";
import CategoryLinks from "./CategoryLinks";

interface CategoryNameProps {
  products: Product[];
  categoryName?: string;
  downerCategories: DownerCategory[];
  upperCategoryId: string;
}

const CategoryName = ({
  products,
  downerCategories,
  upperCategoryId,
}: CategoryNameProps) => {
  return (
    <div className="pb-10">
      <Container>
        <CategoryLinks
          downerCategories={downerCategories}
          upperCategoryId={upperCategoryId}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CategoryName;
