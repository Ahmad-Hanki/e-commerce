import prisma from "@/lib/db";
import ProductContainer from "./_components/ProductContainer";
import { Package, Product as PrismaProduct } from "@prisma/client";
import IsAuthenticated from "@/actions/isAuthenticated";

// Define a type for the product with packages
type ProductWithPackages = PrismaProduct & {
  Packages: Package[];
};

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const isLoggedIn = await IsAuthenticated();

  const product: ProductWithPackages | null = await prisma.product.findFirst({
    where: {
      id
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

  const extractPackages = (product: ProductWithPackages | null): Package[] => {
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
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
};

export default ProductPage;
