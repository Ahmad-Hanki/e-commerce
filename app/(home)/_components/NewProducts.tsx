import { FormattedProductWithPhoto } from "@/actions/getMostSailedProducts";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";

interface NewProductsProps {
  products: FormattedProductWithPhoto[];
}

const NewProducts = ({ products }: NewProductsProps) => {
  return (
    <div className="pb-20">
      <Container>
        <p className="text-4xl font-semibold pb-10">
          Yeni Ürünler
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NewProducts;
