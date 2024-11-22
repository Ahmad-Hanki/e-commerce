import ProductContainer from "./_components/ProductContainer";
import { Package, Product as PrismaProduct } from "@prisma/client";
import IsAuthenticated from "@/actions/isAuthenticated";
import { Suspense } from "react";
import Loading from "@/components/loading";
import getProductWithPackage from "@/actions/getProductWithPackage";
import CarouselComponent from "@/components/Carousel";
import createOrFindUser from "@/actions/createOrFindUser";
import { notFound } from "next/navigation";
import getProductBasedOnCategory from "@/actions/getProductBasedOnCategory";
import getProductImages from "@/actions/getProductImages";
import { Metadata } from "next";

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
  const images = await getProductImages(id);

  if (!product || !images) {
    return notFound();
  }

  const extractPackages = (product: ProductWithPackages | null): Package[] => {
    return product?.Packages || [];
  };

  const packages = extractPackages(product);

  const productData = {
    id: product?.id ?? "",
    description: product?.description ?? "",
    rating: product?.rating ?? 0,
    extraInfo: product?.extraInfo ?? "",
    stokKodu: product?.stokKodu ?? "",
    barkod: product?.barkod ?? "",
  };

  const productsCategory = await getProductBasedOnCategory(product.categoryId);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.description,
    description: product.description,
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
    </section>
  );
};

export default ProductPage;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductWithPackage(id);
  const images = await getProductImages(id);

  const imgUrl = images.find((image) => image.primary)?.url;

  return {
    title: `${product?.description} || ${product?.barkod} || ${product?.stokKodu}`,
    openGraph: {
      images: [{ url: imgUrl! }],
    },
    description: product?.description,
    category: product?.categoryId,
  };
}

// export const dynamicParams = false

// export async function generateStaticParams() {
//   const products = await getAllProducts();

//   return products.map((product) => ({
//     params: { id: product.id },
//   }));
// }
