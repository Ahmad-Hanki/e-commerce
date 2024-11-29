import Image from "next/image";
import landing from "@/public/images/landing.jpg";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
const Landing = () => {
  return (
    <div className="relative w-full min-h-[80vh]">
      <Image
        src={landing}
        fill
        className="object-cover object-center"
        alt="hero"
      />

      <div className="absolute w-full h-full inset-0 flex items-center justify-center">
        <Container>
          <div className="space-y-5 max-w-xl ">
            <h6 className="text-4xl font-semibold text-primary ">
              Kaliteli Ürünler, Uygun Fiyatlar
            </h6>
            <p className=" text-3xl ">
              Özenle seçilmiş geniş ürün yelpazemizle tanışın! Uygun fiyatlar ve
              güvenilir alışveriş deneyimi için hemen keşfedin.
            </p>
          </div>
          <div className="pt-7 ">
            <Button className="px-4 py-2 text-xl">Şimdi Alışveriş Yap</Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Landing;
