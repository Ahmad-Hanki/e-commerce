import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import effect from "@/public/images/effect.gif";
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
    <div className={cn("bg-gradient-to-b", reverse ? "start" : "end")}>
      <Container>
        <div
          className={cn(
            "flex sm:items-center sm:min-h-[100vh] gap-5 py-20 relative",
            reverse && "sm:flex-row-reverse"
          )}
        >
          {!reverse && (
            <Image
              className="object-cover object-center"
              src={effect}
              alt="effect"
              fill
            />
          )}
          <div className="flex-1 sm:py-10 flex flex-col gap-7 z-10">
            <div className="space-y-2 ">
              <h1 className="text-6xl font-semibold text-primary">{title}</h1>
              <p className="text-2xl ">{desc}</p>
            </div>
            <Link href={"/product"}>
              <Button className="px-4 py-2 text-xl">Şimdi Alışveriş Yap</Button>
            </Link>
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
