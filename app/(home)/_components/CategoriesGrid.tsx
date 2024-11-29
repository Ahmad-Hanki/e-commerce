import Container from "@/components/Container";
import cosmetics from "@/public/images/cosmetics.jpg";
import kisiSebBakim from "@/public/images/kişiselBakım.jpg";
import electronics from "@/public/images/electronics.jpg";
import Image from "next/image";

const CategoriesGrid = () => {
  return (
    <div className="pb-20">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  h-[500px]">
          {/* First column, first row */}
          <div className="row-span-1 relative h-full overflow-hidden rounded-2xl cursor-pointer group">
            <Image
              src={cosmetics}
              alt="cosmetics"
              fill
              className="object-center transition-all duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-transparent group-hover:bg-black/40 z-0" />
            <div className="absolute top-10 transition-all duration-300 ease-in-out group-hover:top-0 w-full h-full z-10 flex items-end justify-center">
              <h3 className="text-2xl md:text-4xl font-semibold text-white whitespace-nowrap">
                Kozmetik
              </h3>
            </div>
          </div>

          {/* Second column spans two rows */}
          <div className="relative sm:row-span-2 h-full overflow-hidden rounded-2xl cursor-pointer group">
            <Image
              src={electronics}
              alt="electronics"
              fill
              className="object-center transition-all duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-transparent group-hover:bg-black/40 z-0" />
            <div className="absolute top-10 transition-all duration-300 ease-in-out group-hover:top-0 w-full h-full z-10 flex items-end justify-center">
              <h2 className="text-2xl md:text-4xl font-semibold text-white">
                Elektronik
              </h2>
            </div>
          </div>

          {/* First column, second row */}
          <div className="relative h-full overflow-hidden rounded-2xl cursor-pointer group">
            <Image
              src={kisiSebBakim}
              alt="kisiSebBakim"
              fill
              className="object-center transition-all duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-transparent group-hover:bg-black/40 z-0" />
            <div className="absolute top-10 transition-all duration-300 ease-in-out group-hover:top-0 w-full h-full z-10 flex items-end justify-center">
              <h2 className="text-2xl md:text-4xl font-semibold text-white whitespace-nowrap">
                Kişisel Bakım
              </h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoriesGrid;
