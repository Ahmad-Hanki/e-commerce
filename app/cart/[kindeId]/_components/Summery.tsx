import { Button } from "@/components/ui/button";
import PaymentForm from "./PaymentForm";

interface SummeryProps {
  totalAmount: number;
  totalBeforeDiscount?: number;
  products: {
    description: string;
    price: number;
  }[];
}
const Summery = ({
  totalAmount,
  totalBeforeDiscount,
  products,
}: SummeryProps) => {
  return (
    <div className="space-y-7 pt-10 md:pt-0">
      <h2 className="text-3xl font-semibold text-primary ">Summery</h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <p>Total Before Discount</p>
          <p className="line-through">{totalBeforeDiscount} TL</p>
        </div>
        <div className="flex justify-between">
          <p>Total</p>
          <p>{totalAmount} TL</p>
        </div>
      </div>

      <div>
        <PaymentForm />
      </div>
    </div>
  );
};

export default Summery;
