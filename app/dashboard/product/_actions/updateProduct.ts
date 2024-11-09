"use server";

import prisma from "@/lib/db";
import getDiscountAmount from "@/utils/getDiscountAmount";
import { UpperCategory } from "@prisma/client";
interface UpdateProduct {
  id: string;
  price: number;
  description: string;
  image: string;

  image2?: string;
  image3?: string;
  upperCategoryId: string;
  downerCategoryId: string;
  extraInfo?: string;
  oldPrice?: number;
  rating?: number;
  inStock?: boolean;
  New?: boolean;
  freeShipping?: boolean;
  mostSale?: boolean;
}

const updateProduct = async ({
  id,
  price,
  description,
  image,
  image2,
  image3,
  oldPrice,
  rating,
  inStock,
  New,
  freeShipping,
  downerCategoryId,
  mostSale,
  extraInfo,
  upperCategoryId,
}: UpdateProduct) => {
  try {
    if (
      !price ||
      !description ||
      !image ||
      !upperCategoryId ||
      !downerCategoryId ||
      !id
    ) {
      return false;
    }

    if (oldPrice && oldPrice < price) {
      return false;
    }

    let discount;

    if (oldPrice) {
      discount = getDiscountAmount(oldPrice, price);
    }
    // qwlks dkd]
    await prisma.product.update({
      where: {
        id,
      },
      data: {
        price,
        description,
        image,
        image2,
        image3,
        oldPrice: oldPrice == 0 ? null : oldPrice,
        rating,
        inStock,
        new: New,
        freeShipping,
        upperCategoryId,
        downerCategoryId,
        mostSale,
        extraInfo,
        discount,
      },
    });

    return true;
  } catch (error) {
    return false;
  }
};

export default updateProduct;
