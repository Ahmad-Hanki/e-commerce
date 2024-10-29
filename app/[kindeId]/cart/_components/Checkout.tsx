import CartItemCard from "./CartItemCard";

interface CheckoutProps {
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
}
const Checkout = ({ items }: CheckoutProps) => {
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
      <div className="w-full md:w-[30%]"></div>
    </div>
  );
};

export default Checkout;
