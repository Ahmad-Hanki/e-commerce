import Container from "@/components/Container";
import prisma from "@/lib/db";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await prisma.product.findFirst({
    where: {
      id: params.id,
    },
    include: {
      Packages: {
        select: {
          Piece: true,
          inStock: true,
          price: true,
          oldPrice: true,
          discount: true,
        },
      },
    },
  });

  return (
    <div>
      <Container>
        <div>
          
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
