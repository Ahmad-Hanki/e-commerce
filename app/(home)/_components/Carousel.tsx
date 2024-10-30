import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/Container";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function CarouselComponent({
  products,
}: {
  products: Product[];
}) {
  return (
    <div className="py-20">
      <Container>
        <Carousel className="w-full">
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className=" md:basis-1/2 lg:basis-1/3 group px-4"
              >
                <Link href={`/product/${product.id}`} className="p-1">
                  <Card className="px-4 py-3">
                    <CardContent className="aspect-square rounded-2xl relative overflow-hidden p-0">
                      <Image
                        src={product.image}
                        fill
                        className="object-cover object-center rounded-2xl"
                        alt={product.description}
                      />
                    </CardContent>

                    <div className="flex flex-col gap-3 mt-5">
                      <div className="h-full">
                        <p className="text-secondary-foreground/70 t">
                          {product.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        {product.oldPrice && (
                          <p className="text-muted-foreground text-base font-light line-through">
                            {product.oldPrice} ₺
                          </p>
                        )}
                        <p className="text-primary text-lg font-semibold">
                          {product.price} ₺
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </div>
  );
}
