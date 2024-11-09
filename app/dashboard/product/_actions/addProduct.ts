"use server";

import prisma from "@/lib/db";
import getDiscountAmount from "@/utils/getDiscountAmount";
import { UpperCategory } from "@prisma/client";

interface AddProduct {
  price: number;
  description: string;
  image: string;
  upperCategoryId: string;
  downerCategoryId: string;

  image2?: string;
  image3?: string;

  extraInfo?: string;
  oldPrice?: number;
  rating?: number;
  inStock?: boolean;
  New?: boolean;
  freeShipping?: boolean;
  mostSale?: boolean;
}

const addProduct = async ({
  price,
  description,
  image,
  image2,
  image3,
  downerCategoryId,
  upperCategoryId,

  oldPrice,
  rating,
  inStock,
  New,
  freeShipping,
  mostSale,
  extraInfo,
}: AddProduct) => {
  try {
    if (!price || !description || !image || !upperCategoryId || !downerCategoryId) {
      return false;
    }

    if (oldPrice && oldPrice < price) {
      return false;
    }

    let discount;

    if (oldPrice) {
      discount = getDiscountAmount(oldPrice, price);
    }

    console.log(
      price,
      description,
      image,
      image2,
      image3,
      downerCategoryId,
      oldPrice,
      rating,
      inStock,
      New,
      freeShipping,
      mostSale,
      extraInfo,
      discount
    );

    await prisma.product.create({
      data: {
        upperCategoryId,
        downerCategoryId,
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
        mostSale,
        extraInfo,
        discount,
      },
    });

    return true;
  } catch (error) {
    console.error("Error creating product: ", error);
    return false;
  }
};

export default addProduct;
