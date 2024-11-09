"use server";

import prisma from "@/lib/db";
import getDiscountAmount from "@/utils/getDiscountAmount";

interface ImagesType {
  url: string;
  primary: boolean;
}

interface UpdateProduct {
  id: string;
  price: number;
  description: string;
  upperCategoryId: string;
  downerCategoryId: string;
  images: ImagesType[]; // Added images to the request
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
  oldPrice,
  rating,
  inStock,
  New,
  freeShipping,
  downerCategoryId,
  mostSale,
  extraInfo,
  upperCategoryId,
  images, // Receive images array
}: UpdateProduct) => {
  try {
    if (
      !price ||
      !description ||
      !upperCategoryId ||
      !downerCategoryId ||
      !id ||
      images.length < 1 // Ensure there is at least one image
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

    // If no image is set as primary, make the first image the primary
    if (!images.some((image) => image.primary)) {
      images[0].primary = true; // Set the first image as primary
    }

    // Delete all images connected to the product
    await prisma.photo.deleteMany({
      where: {
        productId: id,
      },
    });

    // Create new photos and link them to the product
    const photosData = images.map((image) => ({
      url: image.url,
      primary: image.primary,
      productId: id,
    }));

    await prisma.photo.createMany({
      data: photosData,
    });

    // Update the product with the new details
    await prisma.product.update({
      where: {
        id,
      },
      data: {
        price,
        description,
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
    console.error("Error updating product: ", error);
    return false;
  }
};

export default updateProduct;
