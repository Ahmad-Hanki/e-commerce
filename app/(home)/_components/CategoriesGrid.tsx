import Container from "@/components/Container";
import cosmetics from "@/public/images/cosmetics.jpg";
import kisiSebBakim from "@/public/images/kişiselBakım.jpg";
import electronics from "@/public/images/electronics.jpg";
import Image from "next/image";

const CategoriesGrid = () => {
  return (
    <div className="pb-20">
      <Container>
        <div className="grid grid-cols-1 gap-1">
          <div className="flex gap-1 items-center">
            <div className="flex-1 relative w-full h-[200px] overflow-hidden">
              <Image
                src={cosmetics}
                alt="cosmetics"
                fill
                className=" object-center"
              />

              <div className="absolute inset-0 w-full h-full bg-black/40 z-0" />

              <div className="absolute inset-0 w-full h-full z-10 flex items-end justify-center">
                <h2 className="text-4xl font-semibold text-white">Kozmetik</h2>
              </div>
            </div>
            <div className="flex-1 relative w-full h-[200px] overflow-hidden">
              <Image
                src={kisiSebBakim}
                alt="kisiSebBakim"
                fill
                className=" object-center"
              />
              <div className="absolute inset-0 w-full h-full bg-black/40 z-0" />

              <div className="absolute inset-0 w-full h-full z-10 flex items-end justify-center">
                <h2 className="text-4xl font-semibold text-white">
                  Kişisel Bakım
                </h2>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[250px] overflow-hidden">
            <Image
              src={electronics}
              alt="kisiSebBakim"
              fill
              className="object-center"
            />
            <div className="absolute inset-0 w-full h-full bg-black/40 z-0" />

            <div className="absolute inset-0 w-full h-full z-10 flex items-end justify-center">
              <h2 className="text-4xl font-semibold text-white">Elektronik</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoriesGrid;
