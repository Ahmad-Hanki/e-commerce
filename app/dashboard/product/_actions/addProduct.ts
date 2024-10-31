"use server";

import prisma from "@/lib/db";
import getDiscountAmount from "@/utils/getDiscountAmount";

interface AddProduct {
  price: number;
  description: string;
  image: string;
  categoryId: string;

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
  categoryId,
  oldPrice,
  rating,
  inStock,
  New,
  freeShipping,
  mostSale,
  extraInfo,
}: AddProduct) => {
  try {

    if (!price || !description || !image || !categoryId) {
      return false;
    }

    if (oldPrice && oldPrice < price) {
        return false
    }

    let discount;

    if (oldPrice)
    {
        discount = getDiscountAmount(oldPrice, price);
    }

    console.log(price, description, image, image2, image3, categoryId, oldPrice, rating, inStock, New, freeShipping, mostSale, extraInfo, discount);
    await prisma.product.create({
      data: {
        price,
        description,
        image,
        image2,
        image3,
        categoryId,
        oldPrice,
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
    console.log(error);
    console.log(error);
    return false;
  }
};

export default addProduct;
