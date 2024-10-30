import getCartWithItems from "@/actions/getCartWithItem";
import getUser from "@/actions/getUser";
import Container from "@/components/Container";
import { notFound } from "next/navigation";
import Checkout from "./_components/Checkout";
import { Suspense } from "react";
import Loading from "@/components/loading";

const CartPage = async ({
  params,
}: {
  params: Promise<{
    kindeId: string;
  }>;
}) => {
  const { kindeId } = await params;
  const userExists = await getUser(kindeId);

  if (!userExists) {
    notFound();
  }

  const cartItem = await getCartWithItems(kindeId);

  const packageData =
    cartItem?.cartItems?.map((item) => {
      return {
        id: item.id,
        quantity: item.quantity,
        price: item.package.price,
        oldPrice: item.package.oldPrice,
        discount: item.package.discount,
        Piece: item.package.Piece,
        inStock: item.package.inStock,
        img: item.package.products.image,
        description: item.package.products.description,
      };
    }) || [];

  // const total = packageData?.reduce((acc, item) => {
  //   const itemPrice = item.discount
  //     ? item.price * ((100 - item.discount) / 100) // Apply discount if it exists
  //     : item.price;
  //   return acc + itemPrice * item.quantity;
  // }, 0);

  return (
    <div>
      <Container>
        <h1 className="text-3xl font-semibold text-primary ">
          Sepete{" "}
          <span className="text-xl text-muted-foreground">
            {`(${packageData?.length} ürün) `}
          </span>
        </h1>

        <Suspense fallback={<Loading />}>
          <div className="mt-10 pb-20 ">
            {packageData?.length > 0 ? (
              <Checkout items={packageData} />
            ) : (
              <p>No items in the cart</p>
            )}
          </div>
        </Suspense>
      </Container>
    </div>
  );
};

export default CartPage;
