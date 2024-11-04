import CartItemCard from "./CartItemCard";
import Summery from "./Summery";

interface CheckoutProps {
  userData: {
    id: string;
    name?: string;
    phone?: string;
    location?: string;
  };
  items:
    | {
        id: string;
        quantity: number;
        price: number;
        oldPrice: number | null;
        discount: number | null;
        Piece: number;
        inStock: boolean;
        img: string;
        description: string;
      }[]
    | undefined;

  summery: {
    totalAmount: number;
    totalBeforeDiscount?: number;
    products: {
      description: string;
      price: number;
      quantity: number;
    }[];
  };
}
const Checkout = ({ items, summery, userData }: CheckoutProps) => {
  if (!items && items == undefined) {
    return null;
  }
  return (
    <div className="flex flex-col gap-6  md:flex-row md:justify-between">
      <div className="w-full md:w-[70%] space-y-5">
        {items?.map((item) => (
          <CartItemCard key={item.id} item={item} />
        ))}
      </div>
      <div className="w-full md:w-[30%]">
        <Summery
          userData={userData}
          totalAmount={summery.totalAmount}
          totalBeforeDiscount={summery.totalBeforeDiscount}
          products={summery.products}
        />
      </div>
    </div>
  );
};

export default Checkout;
