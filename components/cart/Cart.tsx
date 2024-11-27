import { cn } from "@/lib/utils";
import CartIcon from "@/public/icons/CartIcon";
import Link from "next/link";

interface CartProps {
  kindeId: string;
  cartLength: number;
}

const Cart = ({ kindeId, cartLength }: CartProps) => {
  return (
    <Link href={`/cart/${kindeId}`} className="relative flex items-center gap-2 border p-2 rounded-xl">
      <CartIcon
        className={cn(
          "transition-all duration-300  hover:text-yellow-500 w-9 h-9 lg:w-6 lg:h-6"
        )}
        
      />
      <p className="">Sepetim</p>
      {cartLength !== 0 && (
        <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center">
          <p className=" text-xs font-light text-white">{cartLength}</p>
        </div>
      )}
    </Link>
  );
};

export default Cart;
