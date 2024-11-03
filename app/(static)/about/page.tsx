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
                Elevate Your Shopping Experience with Us!
              </h1>
              <p className="text-lg mt-4 text-gray-600">
                At [Your Brand Name], we believe that every shopping journey
                should be exceptional. Our e-commerce platform is designed to
                bring you the latest products and unbeatable deals, all while
                providing a seamless, personalized experience. With easy
                navigation, secure checkout, and dedicated customer support, we
                empower you to shop with confidence. Join thousands of satisfied
                customers who trust us for quality, value, and convenience.
                Explore our diverse range of products today and discover the
                difference!
              </p>

              <Link href="/">
                <Button className="h-[40px] px-5 py-2 w-fit">Shop Now</Button>
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
