import getCartWithItems from "@/actions/getCartWithItem";
import getUser from "@/actions/getUser";
import Container from "@/components/Container";
import { notFound } from "next/navigation";
import Checkout from "./_components/Checkout";
import { Suspense } from "react";
import Loading from "@/components/loading";
import IsAuthenticated from "@/actions/isAuthenticated";
import createOrFindUser from "@/actions/createOrFindUser";
import getAddresses from "../_action/getAddresses";

const CartPage = async ({
  params,
}: {
  params: Promise<{
    kindeId: string;
  }>;
}) => {


  const { kindeId } = await params;
  const isLoggedIn = await IsAuthenticated();

  if (isLoggedIn) {
    await createOrFindUser();
  }
  const userExists = await getUser(kindeId);

  if (!userExists) {
    notFound();
  }

  const cartItem = await getCartWithItems(kindeId);

  const userData = await getAddresses(userExists.id);

  const packageData =
    cartItem?.cartItems?.map((item) => {
      return {
        id: item.id,
        quantity: item.quantity,
        name: item.package.name,
        price: item.package.price,
        Piece: item.package.Piece,
        oldPrice: item.package.oldPrice || 0,
        discount: item.package.discount,
        inStock: item.package.inStock,
        img: item.package.products.Photos.find((photo) => photo.primary)!.url,
        description: item.package.products.description,
      };
    }) || [];

  // give me the paytr data

  const basketData = packageData.map((item) => [
    item.name + " " + item.description, // Product name
    item.price.toFixed(2), // Product price (formatted to 2 decimal places)
    item.quantity, // Product quantity
  ]);

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
                userId={userExists.id}
                items={packageData}
                summery={{
                  totalAmount,
                  totalBeforeDiscount,
                  products: packageData.map((item) => ({
                    description: item.description,
                    price: item.price,
                    quantity: item.quantity,
                    piece: item.Piece,
                  })),
                }}
                userData={userData}
                basketData={basketData}
              />
            ) : (
              <p>Sepette ürün yok</p>
            )}
          </div>
        </Suspense>
      </Container>
    </div>
  );
};

export default CartPage;
