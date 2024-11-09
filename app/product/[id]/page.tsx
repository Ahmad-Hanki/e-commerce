import ProductContainer from "./_components/ProductContainer";
import { Package, Product as PrismaProduct } from "@prisma/client";
import IsAuthenticated from "@/actions/isAuthenticated";
import { Suspense } from "react";
import Loading from "@/components/loading";
import getProductWithPackage from "@/actions/getProductWithPackage";
import CarouselComponent from "@/components/Carousel";
import getProductsCategory from "@/actions/getProductDownerCategory";
import createOrFindUser from "@/actions/createOrFindUser";
import { notFound } from "next/navigation";
import getProductBasedOnCategory from "@/actions/getProductBasedOnCategory";

// Define a type for the product with packages
type ProductWithPackages = PrismaProduct & {
  Packages: Package[];
  categoryId: string;
};

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const isLoggedIn = await IsAuthenticated();

  if (isLoggedIn) {
    await createOrFindUser();
  }

  const product = await getProductWithPackage(id);

  if (!product) {
    return notFound();
  }

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

  const productsCategory = await getProductBasedOnCategory(product.categoryId);

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
        <CarouselComponent like={true} products={productsCategory} />
      </Suspense>
    </div>
  );
};

export default ProductPage;
