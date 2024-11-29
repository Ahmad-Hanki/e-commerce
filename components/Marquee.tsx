import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { FormattedProductWithPhoto } from "@/actions/getMostSailedProducts";

import Marquee from "react-fast-marquee";

export default function MarqueeComponent({
  products,
  like,
}: {
  products: FormattedProductWithPhoto[];
  like?: boolean;
}) {
  const duplicatedProducts = products.length
    ? Array(10).fill(products[0]) // Repeat the first product 10 times
    : [];

  return (
    <div className="py-20">
      <Container>
        <h2 className="text-4xl font-semibold  mb-6">
          {like && "Şunları da beğenebilirsiniz"}
        </h2>
        <h2 className="text-4xl font-semibold  mb-6">
          {!like && "Sizin için seçildi"}
        </h2>
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          className="w-full !overflow-visible"
        >
          <div className="w-full flex items-center ">
            {duplicatedProducts.map((product, i) => (
              <div key={i} className="group px-4">
                <Link href={`/product/${product.id}`} className="p-1">
                  <Card className="px-4 py-3">
                    <CardContent className="aspect-square rounded-2xl relative overflow-hidden p-0 duration-300 ease-in-out transition-all group-hover:scale-105">
                      <Image
                        src={product.primaryImageUrl}
                        fill
                        className="object-cover object-center rounded-2xl"
                        alt={product.description}
                      />
                    </CardContent>

                    <div className="flex flex-col gap-3 mt-5">
                      <div className="h-full">
                        <p className="text-secondary-foreground/70 text-2xl ">
                          {product.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-primary text-2xl font-semibold">
                          {product.price} ₺
                        </p>
                        {product.oldPrice && (
                          <p className="text-muted-foreground font-light line-through text-lg">
                            {product.oldPrice} ₺
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </Marquee>
      </Container>
    </div>
  );
}
