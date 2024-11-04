import { Separator } from "@/components/ui/separator";
import PaymentForm from "./PaymentForm";
import UserDataForm from "./UserDataForm";

interface SummeryProps {
  totalAmount: number;
  totalBeforeDiscount?: number;
  products: {
    description: string;
    price: number;
    quantity: number;
  }[];

  userData: {
    id: string;
    name?: string;
    phone?: string;
    location?: string;
  };
}
const Summery = ({
  totalAmount,
  totalBeforeDiscount,
  products,
  userData,
}: SummeryProps) => {
  return (
    <div className="space-y-7 pt-10 md:pt-0">
      <UserDataForm userData={userData} />
      <Separator />

      <h2 className="text-3xl font-semibold text-primary ">Summery</h2>
      <div>
        <h3 className="text-xl font-semibold text-primary">Products</h3>
        <div className="space-y-3">
          {products.map((product, index) => (
            <div key={index} className="flex justify-between">
              <p>{product.description}</p>
              <p>x{product.quantity}</p>

              <p>{product.price}TL</p>
            </div>
          ))}
        </div>
      </div>

      <Separator />

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

      {/* Todo: */}

      <div>
        <PaymentForm
          disabled={
            userData.name && userData.phone && userData.location ? false : true
          }
        />
      </div>
    </div>
  );
};

export default Summery;
