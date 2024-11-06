import { Separator } from "@/components/ui/separator";
import PaymentForm from "./PaymentForm";
import { userData } from "@prisma/client";

interface SummeryProps {
  totalAmount: number;
  totalBeforeDiscount?: number;
  products: {
    description: string;
    price: number;
    quantity: number;
  }[];
  userData: userData[];
  userId: string;
}
const Summery = ({
  totalAmount,
  totalBeforeDiscount,
  products,
  userId,
  userData,
}: SummeryProps) => {
  return (
    <div className="space-y-7 pt-10 md:pt-0">
      <Separator />

      <h2 className="text-3xl font-semibold text-primary ">Özet</h2>
      <div>
        <h3 className="text-xl font-semibold text-primary">Ürünler</h3>
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
          <p>İndirimden Önce Toplam</p>
          <p className="line-through">{totalBeforeDiscount} TL</p>
        </div>
        <div className="flex justify-between">
          <p>Toplam</p>
          <p>{totalAmount} TL</p>
        </div>
      </div>

      {/* Todo: */}

      <div>
        <PaymentForm
          totalBeforeDiscount={totalBeforeDiscount}
          totalAmount={totalAmount}
          userId={userId}
          userData={userData}
        />
      </div>
    </div>
  );
};

export default Summery;
