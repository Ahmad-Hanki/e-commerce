"use server";

import prisma from "@/lib/db";
import getDiscountAmount from "@/utils/getDiscountAmount";

interface AddPackage {
  price: number;

  productId: string;
  Piece: number;

  oldPrice?: number;
  inStock?: boolean;
}

const addPackage = async ({
  Piece,
  price,
  productId,
  inStock,
  oldPrice,
}: AddPackage) => {
  if (!Piece || !price || !productId) {
    return false;
  }
  let discount;
  if (oldPrice && oldPrice < price) {
    return false;
  }
  if (oldPrice) {
    discount = getDiscountAmount(oldPrice, price);
  }

  try {
    await prisma.package.create({
      data: {
        Piece,
        price,
        productId,
        inStock,
        discount,
        oldPrice,
      },
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default addPackage;