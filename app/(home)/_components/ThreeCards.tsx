import Container from "@/components/Container";
import oralB from "@/public/images/oral-b.jpg";
import headset from "@/public/images/headset.png";
import iron from "@/public/images/iron.webp";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const data = [
  {
    img: oralB,
    title: "Oral-B Diş Fırçası",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus",
    url: "/product/1",
  },
  {
    img: headset,
    title: "Kulaklık",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus",
    url: "/product/2",
  },
  {
    img: iron,
    title: "Ütü",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus",
    url: "/product/3",
  },
];

const ThreeCards = () => {
  return (
    <div className="py-20  bg-[#e6f5ff]">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between w-full ">
          {data.map((item, index) => (
            <div
              key={index}
              className="md:flex-1 w-full relative h-[300px] md:h-[550px] group cursor-pointer overflow-hidden"
            >
              <Image
                src={item.img}
                alt={item.title}
                className="object-cover object-center"
                fill
              />
              <div className="absolute inset-0 w-full h-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Text */}
              <div className="absolute inset-0 flex items-end justify-start p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10 ">
                <div className="text-white">
                  <h6 className="text-2xl font-semibold">{item.title}</h6>
                  <p className="mt-2">{item.desc}</p>
                  <Button className="mt-3 text-2xl">Ürünü İncele</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ThreeCards;
