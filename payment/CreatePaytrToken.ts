export type PaytrDataType = {
  data: {
    merchant_id?: string; // Merchant ID (Mağaza no) provided by PayTR
    user_ip?: string; // User IP address (Make sure it's the external IP)
    merchant_oid?: string; // Unique order ID for the transaction
    email: string; // User email address (registered or received via the order form)
    payment_amount: number; // Total payment amount (in the smallest currency unit, e.g., cents)
    currency: "TL" | "EUR" | "USD" | "GBP" | "RUB"; // Currency (TL is assumed if not sent)
    user_basket: string; // User basket/order contents (base64 encoded)
    no_installment: number; // 1 to disable installment options, 0 to enable them
    max_installment: number; // Maximum number of installments (0 means the maximum available installment will be used)
    paytr_token: string; // PayTR token for ensuring request integrity
    user_name: string; // User name (first and last name)
    user_address: string; // User address
    user_phone: string; // User phone number
    merchant_ok_url: string; // Success URL after payment
    merchant_fail_url: string; // Failure URL if payment fails
    lang: "tr" | "en"; // Language for payment pages (tr is assumed if not sent)

    // Optional fields (can be left out)
    test_mode?: "0" | "1"; // 1 for test mode, 0 for live mode (defaults to 0)
    debug_on?: number; // 1 to display errors for debugging purposes
    timeout_limit?: number;
  }; // Time limit for payment completion in minutes (defaults to 30 if not sent)
};

import axios from "axios";
import { headers } from "next/headers";

const CreatePaytrToken = async ({ data }: PaytrDataType) => {
    const header = await headers();
    const ip = (header.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];
    const merchant_id = process.env.PAYTR_MERCHANT_ID;

    data.user_ip = ip;

  try {
    const response = await axios.post(
      "https://www.paytr.com/odeme/api/get-token",
      data
    );
    console.log("Paytr token generated:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error generating token:", error);
  }
};

export default CreatePaytrToken;
