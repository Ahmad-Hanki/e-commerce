import Image from "next/image";
import Link from "next/link";
import { FormattedProductWithPhoto } from "@/actions/getMostSailedProducts";
import { Button } from "./ui/button";

interface ProductCardProps {
  product: FormattedProductWithPhoto;
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
      <Link href={`/product/${product.id}`}>
        <div
          key={product.id}
          className="flex flex-col gap-2 py-6 group h-full min-w-[300px] group overflow-hidden"
        >
          <div className="relative rounded-2xl  aspect-square w-full bg-[#e6f5ff] ">
            <div className="absolute inset-0 w-full h-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[7]" />

            <div className="absolute inset-0 flex items-end justify-start p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10 ">
              <div className="text-white">
                <Button className="mt-3 text-2xl">Ürünü İncele </Button>
              </div>
            </div>

            <Image
              src={product.primaryImageUrl}
              alt={product.description}
              fill
              className="object-cover object-center"
            />

            <div className="absolute left-3 top-3 w-full space-y-1">
              {product.new && (
                <div className="w-fit px-3 py-1 border rounded-lg ">Yeni</div>
              )}
              {product.mostSale && (
                <div className="w-fit px-3 py-1 border rounded-lg ">
                  En Çok Satan
                </div>
              )}
            </div>
          </div>

          <p className="text-2xl tracking-wide	">{product.description}</p>

          {product.rating && product.rating != 0 && (
            <div className=" w-full flex items-center ">
              {[...Array(product.rating)].map((_, index) => (
                <p key={index} className="text-primary text-2xl">
                  ★
                </p>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2">
            <p className="text-2xl text-red-500 font-bold">
              {product.price} TL
            </p>
            {product.oldPrice && (
              <p className="text-lg text-gray-400 line-through">
                {product.oldPrice} TL
              </p>
            )}
          </div>

          <Button className="sm:hidden w-fit text-xl ">Sepete Ekle</Button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
