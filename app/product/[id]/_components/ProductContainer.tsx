import Container from "@/components/Container";
import ProductImageCard from "./ProductImageCard";
import ProductPackageCard from "./ProductPackageCard";
import { Package } from "@prisma/client";
import { Card } from "@/components/ui/card";

interface ProductData {
  id: string;
  description: string;
  rating: number | null; // Allow null
}

interface ProductContainerProps {
  images: {
    image: string;
    image2: string;
    image3: string;
  };

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
    <div className="py-20">
      <Container>
        <Card className="py-6 px-5">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <ProductImageCard
              image={images.image}
              image2={images?.image2}
              image3={images?.image3}
            />
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
