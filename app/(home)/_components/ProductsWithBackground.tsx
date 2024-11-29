import Container from "@/components/Container";
import HeadsetBg from "@/public/images/headsetBackground.jpg";
import Image from "next/image";
import jbl from "@/public/images/jbl.webp";
import camera from "@/public/images/camera.webp";
import Link from "next/link";

const ProductsWithBackground = () => {
  const data = [
    {
      title: "Yüksek Performans",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptates.",
      href: "/",
      img: jbl,
      extraDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptates.",
    },
    {
      title: "Yüksek Performans",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptates.",
      href: "/",
      img: camera,
      extraDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptates.",
    },
  ];
  return (
    <div className="relative w-full h-full py-20">
      <Image src={HeadsetBg} alt="headset" fill className="object-center" />
      <div className="relative w-full h-full">
        <Container>
          <div className="flex flex-col md:flex-row gap-5 md:items-center md:justify-between">
            {data.map((item, index) => (
              <div key={index} className="bg-[#e6f5ff] rounded-xl py-10 px-5">
                <Link href={item.href}>
                  <div className="flex-col flex gap-4 md:items-center md:justify-between md:flex-row w-full ">
                    <div className="space-y-1 ">
                      <h5 className="text-xl font-semibold text-red-600">
                        {item.title}
                      </h5>
                      <div className="space-y-4">
                        <p>{item.desc}</p>
                        <p className="text-muted-foreground">
                          {" "}
                          {item.extraDesc}
                        </p>
                      </div>
                    </div>

                    <div className="relative aspect-square h-[250px] ">
                      <Image
                        src={item.img}
                        alt="img"
                        className="object-contain object-center"
                        fill
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ProductsWithBackground;
