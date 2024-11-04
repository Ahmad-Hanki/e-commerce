"use client";

import SubmitButton from "@/components/SubmitButton";
import createOrder from "../../_action/orderButton";
import toast from "react-hot-toast";
import { userData } from "@prisma/client";
import { useState } from "react";
import UserDataRadio from "./UserDataRadio";

interface PaymentFormProps {
  userData: userData[];
  userId: string;
}

const PaymentForm = ({ userData, userId }: PaymentFormProps) => {
  const [userDataId, setUserDataId] = useState<string>(userData[0]?.id ?? "");

  const checkOutSubmit = async () => {
    const res = await createOrder(userDataId);

    if (res) {
      toast.success("Order created successfully");
    }
  };
  return (
    <form action={checkOutSubmit}>
      <UserDataRadio
        userData={userData}
        userDataId={userDataId}
        setUserDataId={setUserDataId}
        userId={userId}
      />
      <SubmitButton
        submitting="Checking Out..."
        submit={userDataId ? "Submit" : "Please select address"}
        className="w-full"
      />
    </form>
  );
};

export default PaymentForm;
