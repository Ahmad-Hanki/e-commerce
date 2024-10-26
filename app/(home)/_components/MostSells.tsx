import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating?: number;
  freeShipping?: boolean;
  new?: boolean;
  discount?: number;
  oldPrice?: number;
}

interface MostSellsProps {
  products: Product[];
}

const MostSells = ({ products }: MostSellsProps) => {
  return (
    <div className="py-20">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MostSells;
