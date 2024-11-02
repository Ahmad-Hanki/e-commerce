"use client";

import SubmitButton from "@/components/SubmitButton";
import createOrder from "../../_action/orderButton";
import toast from "react-hot-toast";

const PaymentForm = () => {
  const checkOutSubmit = async () => {
    const res = await createOrder("an address");
    
    if (res) {
      toast.success("Order created successfully");
    }
  };
  return (
    <form action={checkOutSubmit}>
      <SubmitButton
        submitting="Checking Out..."
        submit="Checkout"
        className="w-full"
      />
    </form>
  );
};

export default PaymentForm;
