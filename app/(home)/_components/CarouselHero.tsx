import bg1 from "@/public/images/bg-1.jpg";
import bg2 from "@/public/images/bg-2.jpg";
import bg3 from "@/public/images/bg-3.jpg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function CarouselHero() {
  const images = [bg1, bg2, bg3];
  return (
    <Carousel className="w-full md:w-[90vw] mx-auto">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="w-full h-[80vh] relative overflow-hidden aspect-auto">
                  <Image
                    src={src}
                    fill
                    className="object-cover object-center"
                    alt="Background Image"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselHero;
