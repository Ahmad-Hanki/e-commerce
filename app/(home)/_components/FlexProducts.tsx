import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import iphone from "@/public/images/iphone.png";
import watch from "@/public/images/watch2.png";
import Image from "next/image";
const FlexProducts = () => {
  return (
    <div className="pb-20">
      <Container>
        <div className="flex flex-col gap-8">
          <h5 className="text-4xl font-semibold">Indirim urunler</h5>

          <div className="flex flex-col gap-2 sm:justify-between sm:items-center sm:flex-row">
            <div className="flex-1 w-full relative h-[400px]">
              <Image
                src={watch}
                alt="watch"
                className="object-contain object-center"
                fill
              />
            </div>
            <div className="flex-1">
              <h6 className="text-2xl font-semibold">Apple Watch</h6>
              <p className="text-lg mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <p className="text-2xl font-semibold mt-4">₺1.999</p>

              <Button className="text-2xl px-4 py-2 mt-5">Satın Al</Button>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:justify-between sm:items-center sm:flex-row">
            <div className="flex-1 w-full">
              <h6 className="text-2xl font-semibold">Iphone</h6>
              <p className="text-lg mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <p className="text-2xl font-semibold mt-4">₺1.999</p>

              <Button className="text-2xl px-4 py-2 mt-5">Satın Al</Button>
            </div>
            <div className="flex-1 w-full relative h-[400px]">
              <Image
                src={iphone}
                alt="watch"
                className="object-contain object-center"
                fill
              />
            </div>
          </div>
        </div>

        
      </Container>
    </div>
  );
};

export default FlexProducts;
