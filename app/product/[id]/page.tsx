import Container from "@/components/Container";
import prisma from "@/lib/db";
import ProductContainer from "./_components/ProductContainer";
import { Package } from "@prisma/client";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await prisma.product.findFirst({
    where: {
      id: params.id,
    },
    include: {
      Packages: {
        select: {
          id: true,
          Piece: true,
          inStock: true,
          price: true,
          oldPrice: true,
          discount: true,
          productId: true,
        },
      },
    },
  });

  const extractPackages = (product: any): Package[] => {
    return product?.Packages || [];
  };

  const packages = extractPackages(product);

  const images = {
    image: product!.image,
    image2: product?.image2 ?? "",
    image3: product?.image3 ?? "",
  };

  const productData = {
    id: product!.id,
    description: product!.description,
    rating: product!.rating,
    extraInfo: product?.extraInfo,
  };

  return (
    <div>
      <ProductContainer
        product={productData}
        packages={packages}
        images={images}
      />
    </div>
  );
};

export default ProductPage;
