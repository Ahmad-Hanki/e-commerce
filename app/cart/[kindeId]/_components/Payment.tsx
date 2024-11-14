"use client";

import SubmitButton from "@/components/SubmitButton";

import { userData } from "@prisma/client";
import { useState } from "react";
import UserDataRadio from "./UserDataRadio";
import CreatePaytrToken from "@/payment/CreatePaytrToken";
import { redirect } from "next/navigation";

interface PaymentFormProps {
  userData: userData[];
  userId: string;
  totalAmount: number;
  totalBeforeDiscount?: number;
  basketData: (string | number)[][];
}

const Payment = ({
  userData,
  userId,
  totalAmount,
  basketData,
}: PaymentFormProps) => {
  const [userDataId, setUserDataId] = useState<string>(userData[0]?.id ?? "");

  const checkOutSubmit = async () => {
    const res = await CreatePaytrToken(userDataId, {
      data: {
        email: userData.find((data) => data.id === userDataId)?.email ?? "",
        payment_amount: totalAmount,
        user_basket: basketData,
        user_name:
          userData.find((data) => data.id === userDataId)?.fullName ?? "",
        user_address:
          userData.find((data) => data.id === userDataId)?.adress ?? "",
        user_phone:
          userData.find((data) => data.id === userDataId)?.phone ?? "",
      },
    });

    if (res.status == "success") {
      redirect("/checkoutForm");
    }
  };
  return (
    <>
      <form action={checkOutSubmit}>
        <UserDataRadio
          userData={userData}
          userDataId={userDataId}
          setUserDataId={setUserDataId}
          userId={userId}
        />
        <SubmitButton
          submitting="Odemeye devam ediliyor"
          submit={userDataId ? "Odeme" : "Lütfen adresi seçin"}
          className="w-full"
          disabled={!userDataId}
        />
      </form>
    </>
  );
};

export default Payment;
