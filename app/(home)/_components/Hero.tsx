import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
const Hero = ({
  img,
  reverse,
  title,
  desc,
}: {
  img: StaticImageData;
  reverse?: boolean;
  title: string;
  desc: string;
}) => {
  return (
    <div className="bg-gray-100 ">
      <Container>
        <div
          className={cn(
            "flex sm:items-center sm:min-h-[100vh] gap-5",
            reverse && "sm:flex-row-reverse"
          )}
        >
          <div className="flex-1 space-y-5 sm:py-10 py-20">
            <div className="space-y-2 ">
              <h1 className="text-6xl font-semibold text-primary">{title}</h1>
              <p className="text-2xl ">{desc}</p>
            </div>
            <div>
              <Button className="px-4 py-2 text-xl">Şimdi Alışveriş Yap</Button>
            </div>
          </div>
          <div className="flex-1 w-full hidden sm:block">
            <div className="relative overflow-hidden aspect-[12/12] h-full w-full">
              <Image
                src={img}
                alt="img"
                className="object-center object-contain"
                fill
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
