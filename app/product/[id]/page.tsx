import ProductContainer from "./_components/ProductContainer";
import { Package, Product as PrismaProduct } from "@prisma/client";
import IsAuthenticated from "@/actions/isAuthenticated";
import { Suspense } from "react";
import Loading from "@/components/loading";
import getProductWithPackage from "@/actions/getProductWithPackage";
import CarouselComponent from "@/components/Carousel";
import getProductsCategory from "@/actions/getProductCategory";

// Define a type for the product with packages
type ProductWithPackages = PrismaProduct & {
  Packages: Package[];
  categoryId: string;
};

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const [isLoggedIn, product] = await Promise.all([
    IsAuthenticated(),
    getProductWithPackage(id),
  ]);

  const extractPackages = (product: ProductWithPackages | null): Package[] => {
    return product?.Packages || [];
  };

  const packages = extractPackages(product);

  const images = {
    image: product?.image ?? "",
    image2: product?.image2 ?? "",
    image3: product?.image3 ?? "",
  };

  const productData = {
    id: product?.id ?? "",
    description: product?.description ?? "",
    rating: product?.rating ?? 0,
    extraInfo: product?.extraInfo ?? "",
  };

  const productsCategory = product?.categoryId 
    ? await getProductsCategory(product.categoryId)
    : { products: [] }; // Fallback in case categoryId is undefined

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <ProductContainer
          product={productData}
          packages={packages}
          images={images}
          isLoggedIn={isLoggedIn}
        />
      </Suspense>
      
      <Suspense fallback={<Loading />}>
        <CarouselComponent like={true} products={productsCategory.products ?? []} />
      </Suspense>
    </div>
  );
};

export default ProductPage;
