import Container from "@/components/Container";
import ProductImageCard from "./ProductImageCard";
import ProductPackageCard from "./ProductPackageCard";
import { Package, Photo } from "@prisma/client";
import { Card } from "@/components/ui/card";

interface ProductData {
  id: string;
  description: string;
  rating: number | null; // Allow null
}

interface ProductContainerProps {
  images: Photo[];

  product: ProductData;

  packages: Package[];
  isLoggedIn: boolean;
}

const ProductContainer = ({
  images,
  packages,
  product,
  isLoggedIn,
}: ProductContainerProps) => {
  return (
    <div className="pt-20">
      <Container>
        <Card className="py-6 px-5">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <ProductImageCard images={images} />
            <ProductPackageCard
              isLoggedIn={isLoggedIn}
              product={product}
              packages={packages}
            />
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default ProductContainer;
