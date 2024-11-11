"use server";

import prisma from "@/lib/db";
import getDiscountAmount from "@/utils/getDiscountAmount";

export interface ImagesType {
  url: string;
  primary: boolean;
}

interface AddProduct {
  price: number;
  description: string;
  upperCategoryId: string;
  downerCategoryId: string;
  images: ImagesType[];
  stokKodu: string;
  barkod: string;
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
  stokKodu,
  barkod,
  downerCategoryId,
  upperCategoryId,
  images,
  oldPrice,
  rating,
  inStock,
  New,
  freeShipping,
  mostSale,
  extraInfo,
}: AddProduct) => {
  try {
    // Check if the required fields are present
    if (
      !price ||
      !description ||
      images.length === 0 || // Ensure there is at least one image
      !upperCategoryId ||
      !downerCategoryId ||
      !stokKodu ||
      !barkod ||
      (oldPrice && oldPrice < price)
    ) {
      return false;
    }

    let discount;
    if (oldPrice) {
      discount = getDiscountAmount(oldPrice, price);
    }

    if (!images.some((image) => image.primary)) {
      images[0].primary = true;
    }

    // Create the product in the database
    const product = await prisma.product.create({
      data: {
        upperCategoryId,
        stokKodu,
        barkod,
        downerCategoryId,
        price,
        description,
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

    const photosData = images.map((image) => ({
      url: image.url,
      primary: image.primary,
      productId: product.id,
    }));

    await prisma.photo.createMany({
      data: photosData,
    });

    return true;
  } catch (error) {
    console.error("Error creating product: ", error);
    return false;
  }
};

export default addProduct;
