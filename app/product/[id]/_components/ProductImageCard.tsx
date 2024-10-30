"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface ProductImageCardProps {
  image: string; // Main image, required
  image2: string; // Optional images
  image3: string; // Optional images
}

const ProductImageCard = ({ image, image2, image3 }: ProductImageCardProps) => {
  const images = [image, image2, image3].filter(Boolean); // Filter out empty strings
  const [ChosenImage, setChosenImage] = useState(images[0]);

  return (
    <div className="w-full max-w-[40rem] mx-auto space-y-5">
      <div className="w-full min-h-[500px] relative overflow-hidden">
        <Image
          src={ChosenImage}
          fill
          className="object-contain object-center rounded-2xl"
          alt="Product Image"
        />
      </div>
      <div className="flex items-center gap-3">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setChosenImage(img)}
            className={cn(
              "rounded-xl",
              img === ChosenImage
                ? "border-2 border-primary"
                : "border-2 border-gray-300"
            )}
          >
            <Image
              src={img}
              width={100}
              height={100}
              className="object-contain object-center"
              alt={`Product Image ${index + 1}`}
            />
          </button>
        ))}
      </div>
      <div>
        <p>
          Ürün görselleri temsilidir. Gönderilecek ürün ile görsel arasında
          farklılıklar olabilir. Üretici firmalar ürün ambalajlarında önceden
          haber vermeksizin değişiklik yapabilmektedir.
        </p>
      </div>
    </div>
  );
};

export default ProductImageCard;
