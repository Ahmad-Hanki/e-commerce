import Container from "@/components/Container";
import Image from "next/image";
import img from "@/public/images/aboutUs.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export const dynamic = "force-static";

const AboutUsPage = () => {
  return (
    <div className="bg-gray-50">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row py-20">
          <div className="w-full flex-1">
            <div className="flex flex-col gap-5">
              <p className="text-2xl  leading-5 text-muted-foreground">
                Hakkımızda
              </p>
              <h1 className="text-6xl text-primary font-semibold">
                Alışveriş Deneyiminizi Bizimle Bir Üst Seviyeye Taşıyın!{" "}
              </h1>
              <p className="text-lg mt-4 text-gray-600">
                [Marka Adınız] olarak, her alışveriş yolculuğunun olağanüstü
                olması gerektiğine inanıyoruz. E-ticaret platformumuz, size en
                son ürünleri ve rakipsiz fırsatları sunarken, kusursuz ve
                kişiselleştirilmiş bir deneyim sağlamak için tasarlanmıştır.
                Kolay gezinme, güvenli ödeme ve özel müşteri desteğiyle, güvenle
                alışveriş yapmanızı sağlıyoruz. Kalite, değer ve rahatlık için
                bize güvenen binlerce memnun müşteriye katılın. Bugün çeşitli
                ürün yelpazemizi keşfedin ve farkı keşfedin!
              </p>

              <Link href="/">
                <Button className="h-[40px] px-5 py-2 w-fit">Şimdi Alışveriş Yap</Button>
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full relative min-h-[400px] aspect-auto">
            <Image
              src={img}
              fill
              className="object-center object-contain"
              alt="about us image"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsPage;
