import getCartWithItems from "@/actions/getCartWithItem";
import getUser from "@/actions/getUser";
import Container from "@/components/Container";
import { notFound, redirect } from "next/navigation";
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

  // if (!userExists.location || !userExists.phone) {
  //   redirect(`/profile/${kindeId}`);
  // }

  const cartItem = await getCartWithItems(kindeId);

  const packageData =
    cartItem?.cartItems?.map((item) => {
      return {
        id: item.id,
        quantity: item.quantity,
        price: item.package.price,
        oldPrice: item.package.oldPrice || 0,
        discount: item.package.discount,
        Piece: item.package.Piece,
        inStock: item.package.inStock,
        img: item.package.products.image,
        description: item.package.products.description,
      };
    }) || [];

  const totalAmount = packageData.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const totalBeforeDiscount = packageData.reduce((acc, item) => {
    return acc + item.oldPrice * item.quantity; // Use oldPrice for total before discount
  }, 0);

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
              <Checkout
                items={packageData}
                summery={{
                  totalAmount,
                  totalBeforeDiscount,
                  products: packageData.map((item) => ({
                    description: item.description,
                    price: item.price,
                    quantity: item.quantity,
                  })),
                }}
              />
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
