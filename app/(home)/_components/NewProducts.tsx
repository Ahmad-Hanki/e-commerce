import { FormattedProductWithPhoto } from "@/actions/getMostSailedProducts";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NewProductsProps {
  products: FormattedProductWithPhoto[];
}

const NewProducts = ({ products }: NewProductsProps) => {
  return (
    <div className="py-20">
      <Container>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:items-center pb-10">
          <p className="text-4xl font-semibold">Yeni Ürünler</p>

          <Link href="/product">
            <Button className="w-fit text-2xl ">Tümünü Gör</Button>
          </Link>
        </div>
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
