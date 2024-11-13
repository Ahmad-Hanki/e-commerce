import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { DownerCategory } from "@prisma/client";
import CategoryLinks from "./CategoryLinks";
import { FormattedProductWithPhoto } from "@/actions/getMostSailedProducts";

interface CategoryNameProps {
  products: FormattedProductWithPhoto[];
  UpperCategoryName?: string;
  downerCategories?: DownerCategory[];
  upperCategoryId?: string;
}

const CategoryName = ({
  products,
  downerCategories,
  upperCategoryId,
  UpperCategoryName,
}: CategoryNameProps) => {
  return (
    <div className="pb-10">
      <Container>
        {UpperCategoryName && (
          <h1 className="text-3xl font-semibold my-5">{UpperCategoryName}</h1>
        )}
        {downerCategories && upperCategoryId && (
          <CategoryLinks
            downerCategories={downerCategories}
            upperCategoryId={upperCategoryId}
          />
        )}

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
