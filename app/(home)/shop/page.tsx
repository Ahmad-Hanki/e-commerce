import getAllProducts from "@/actions/getAllProducts";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { Separator } from "@/components/ui/separator";

const Shop = async () => {
  const allProducts = await getAllProducts();
  return (
    <div className="pb-10">
      <Container>
        <div className="space-y-6">
          <p className="text-xl">Stokta {allProducts.length} ürün bulunmaktadır.</p>
          <Separator />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
