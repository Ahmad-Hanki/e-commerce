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
import { FormattedProductWithPhoto } from "@/actions/getMostSailedProducts";
import Link from "next/link";
import Image from "next/image";

function ScrollableTrends({
  products,
}: {
  products: FormattedProductWithPhoto[];
}) {
  return (
    <div className="pt-20">
      <Container>
        <div className="flex flex-col gap-4 sm:gap-20 sm:flex-row sm:items-center sm:justify-between">
          <div className="sm:w-[30%] text-center">
            <h2 className="text-2xl font-semibold mb-6">
              2024 Trendleri
            </h2>
            <p className="text-xl text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
           
            </p>
          </div>
          <Carousel className="w-full">
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="md:basis-1/2 lg:basis-1/3  group px-4"
                >
                  <Link href={`/product/${product.id}`} className="p-1">
                    <Card className="px-4 py-3">
                      <CardContent className="aspect-square rounded-2xl relative overflow-hidden p-0">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Container>
    </div>
  );
}

export default ScrollableTrends;
