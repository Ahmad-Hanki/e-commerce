"use client";
import decreesQuantity from "@/actions/decreesQuantity";
import deleteCartItem from "@/actions/deleteCartItem";
import increaseQuantity from "@/actions/increseQuantity";
import SubmitButton from "@/components/SubmitButton";
import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

interface CartItemCardProps {
  item: {
    id: string;
    quantity: number;
    price: number;
    oldPrice: number | null;
    discount: number | null;
    Piece: number;
    inStock: boolean;
    img: string;
    description: string;
  };
}

const CartItemCard = ({ item }: CartItemCardProps) => {
  const deleteItem = async () => {
    const res = await deleteCartItem(item.id);

    if (res) {
      toast.success("Successfully Deleted From Cart!");
      return;
    } else {
      toast.error("Something went wrong!");
    }
  };
  const increaseItem = async () => {
    const res = await increaseQuantity(item.id);

    if (res) {
      toast.success("Successfully Increased Item!");
      return;
    } else {
      toast.error("Something went wrong!");
    }
  };
  const decreesItem = async () => {
    const res = await decreesQuantity(item.id);

    if (res) {
      toast.success("Successfully Decreased Item!");
      return;
    } else {
      toast.error("Something went wrong!");
    }
  };
  return (
    <div className="flex gap-12 ">
      <div className="h-full min-h-[200px] aspect-[10/12] relative ">
        <Image
          src={item.img}
          fill
          alt={item.description}
          className="object-contain object-top"
        />
      </div>

      <div className="space-y-2">
        <h1 className="text-xl font-semibold">{item.description}</h1>
        <div className="flex flex-col gap-3 sm:items-center sm:flex-row">
          <p className="text-base text-gray-500 line-through ">
            {item?.oldPrice && `Eski Fiyat: ${item?.oldPrice} ₺`}
          </p>
          <p className="text-lg text-primary font-medium">
            Fiyat: {item.price} ₺
          </p>
        </div>
        <p className="text-lg text-green-500  ">
          {item?.discount && ` ${item?.discount}% Off`}
        </p>
        <div className="flex gap-3 items-center">
          <Truck className="text-blue-600 h-6 w-6" />
          <p className="text-lg text-primary ">Free shipping</p>
        </div>

        <div className="flex flex-col gap-3 w-fit">
          <div className="flex items-center gap-3 ">
            <form action={decreesItem}>
              <SubmitButton
                submit="-"
                submitting="-"
                className="border border-gray-300   w-full"
              />
            </form>

            <p className=" font-semibold">{item.quantity}</p>
            <form action={increaseItem}>
              <SubmitButton
                submit="+"
                submitting="+"
                className="border border-gray-300  w-full"
              />
            </form>
          </div>

          <form action={deleteItem}>
            <SubmitButton
              submit="Sil"
              submitting="Sepete'den Siliniyor ..."
              type="submit"
              className="w-full "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
