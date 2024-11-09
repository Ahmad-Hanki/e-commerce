import Image from "next/image";
import { Card, CardContent } from "./ui/card";

import newImage from "@/public/images/new.png";
import Link from "next/link";
import { FormattedProductWithPhoto } from "@/actions/getMostSailedProducts";

interface ProductCardProps {
  product: FormattedProductWithPhoto;
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
      <Link href={`/product/${product.id}`}>
        <Card
          key={product.id}
          className="flex flex-col gap-4 py-6 group h-full"
        >
          <CardContent>
            <div className="relative w-full h-[300px] sm:h-[220px] aspect-square ">
              <Image
                src={product.primaryImageUrl}
                fill
                className="object-cover object-center transition-all duration-300 group-hover:scale-110 rounded-2xl"
                alt={product.description}
              />

              {product.freeShipping && (
                <div className="absolute right-0 -top-2 z-10 rounded-md ">
                  <p className="text-white text-sm font-bold bg-green-500/80 p-1">
                    Ücretsiz Kargo
                  </p>
                </div>
              )}

              {product.discount && (
                <div className="text-white text-sm font-bold w-full  group-hover:flex justify-end hidden absolute right-0 top-5">
                  <p className="bg-primary/80 p-1">%{product.discount}</p>
                </div>
              )}
              {product.new && (
                <div className="absolute -top-4 -left-4 z-10 rounded-full h-16 w-16 flex justify-center items-center">
                  <Image
                    src={newImage}
                    alt="Yeni Ürün"
                    fill
                    className=" object-center rounded-full "
                  />
                </div>
              )}

              {product.rating && (
                <div className="hidden absolute -bottom-2 w-full group-hover:flex justify-center z-10 ">
                  {/* make an array with the number of index of rating */}
                  {[...Array(product.rating)].map((_, index) => (
                    <p key={index} className="text-yellow-400 text-3xl">
                      ★
                    </p>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1 mt-5">
              <p className="text-center text-muted-foreground">
                {product.description}
              </p>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <p className="text-2xl text-red-500 font-bold">
                {product.price} TL
              </p>
              {product.oldPrice && (
                <p className="text-lg text-gray-400 line-through">
                  {product.oldPrice} TL
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default ProductCard;
