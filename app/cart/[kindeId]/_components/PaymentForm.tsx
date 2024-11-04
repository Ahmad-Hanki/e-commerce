"use client";

import SubmitButton from "@/components/SubmitButton";
import createOrder from "../../_action/orderButton";
import toast from "react-hot-toast";

const PaymentForm = ({ disabled }: { disabled: boolean }) => {
  const checkOutSubmit = async () => {
    const res = await createOrder();

    if (res) {
      toast.success("Order created successfully");
    }
  };
  return (
    <form action={checkOutSubmit}>
      <SubmitButton
        submitting="Checking Out..."
        submit={disabled ? "Please fill the form" : "Check Out"}
        className="w-full"
        disabled={disabled}
      />
    </form>
  );
};

export default PaymentForm;
