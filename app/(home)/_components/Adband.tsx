import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import cream from "@/public/images/cream.png";
import Image from "next/image";

const Adband = () => {
  return (
    <div className="">
      <Container>
        <div className="bg-[#e6f5ff]">
          <div className="flex justify-between items-center sm:px-10">
            <div className="w-full space-y-4 flex flex-col items-center sm:items-start">
              <h2 className="text-4xl font-semibold text-red-600">Indirim!</h2>
              <p className="text-2xl"> 
                2. Ürüne %50 İndirim Fırsatı
              </p>

              <Button className="px-4 py-2 text-2xl">
                Hemen Alışveriş Yap
              </Button>
            </div>
            <div className="relative min-h-[250px] aspect-square overflow-hidden hidden sm:block">
              <Image
                src={cream}
                alt="cream"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Adband;
