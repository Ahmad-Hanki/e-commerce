import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { Product } from "@prisma/client";

interface CategoryNameProps {
  products: Product[];
  categoryName: string;
}

const CategoryName = ({ products, categoryName }: CategoryNameProps) => {
  return (
    <div className="py-20">
      <Container>
        <h1 className="text-4xl text-center font-semibold pb-10">
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
