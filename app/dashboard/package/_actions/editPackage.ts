"use server";

import prisma from "@/lib/db";
import getDiscountAmount from "@/utils/getDiscountAmount";

interface EditPackage {
  id: string;
  name: string;
  price: number;

  productId: string;
  Piece: number;

  oldPrice?: number;
  inStock?: boolean;
}

const editPackage = async ({
  id,
  name,
  Piece,
  price,
  productId,
  inStock,
  oldPrice,
}: EditPackage) => {
  if (
    !Piece ||
    !price ||
    !productId ||
    !id ||
    !name ||
    (oldPrice && oldPrice < price)
  ) {
    return false;
  }
  let discount;

  if (oldPrice) {
    discount = getDiscountAmount(oldPrice, price);
  }

  try {
    await prisma.package.update({
      where: {
        id,
      },
      data: {
        Piece,
        name,
        price,
        productId,
        inStock,
        discount,
        oldPrice: oldPrice || null,
      },
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default editPackage;
