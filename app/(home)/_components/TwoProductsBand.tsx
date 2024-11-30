import Container from "@/components/Container";
import phone from "@/public/images/phone.png";
import pc from "@/public/images/pc.png";
import Image from "next/image";
const TwoProducts = () => {
  return (
    <div className="bg-gradient-to-b start-reverse py-20">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between gap-4 md:items-center">
          <div className="flex-1 w-full relative aspect-square">
            <Image
              src={pc}
              alt="phone"
              fill
              className="object-contain object-center"
            />
          </div>
          <div className="flex-1 w-full aspect-square flex flex-col justify-center items-center">
            <h6 className="text-4xl font-semibold text-primary mb-6">
              sıcak fırsatlar
            </h6>
            <p className="text-2xl text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div className="flex-1 w-full relative aspect-square">
            <Image
              src={phone}
              alt="phone"
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TwoProducts;
