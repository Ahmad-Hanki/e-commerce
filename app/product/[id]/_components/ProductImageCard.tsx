"use client";

import { cn } from "@/lib/utils";
import { Photo } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";

interface ProductImageCardProps {
  images: Photo[];
}

const ProductImageCard = ({ images }: ProductImageCardProps) => {
  const [chosenImage, setChosenImage] = useState(
    images.find((img) => img.primary)?.url ?? images[0]?.url
  );

  return (
    <div className="w-full max-w-[40rem] mx-auto space-y-5">
      <div className="w-full min-h-[500px] relative overflow-hidden">
        {chosenImage && (
          <Image
            src={chosenImage}
            fill
            className="object-contain object-center rounded-2xl"
            alt="Product Image"
          />
        )}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setChosenImage(img.url)}
            className={cn(
              "rounded-xl",
              img.url === chosenImage
                ? "border-2 border-primary"
                : "border-2 border-gray-300"
            )}
          >
            <Image
              src={img.url}
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
