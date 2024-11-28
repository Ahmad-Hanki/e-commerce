import Container from "@/components/Container";
import watch2 from "@/public/images/watch2.png";
import { Rocket, Settings, Building, Telescope } from "lucide-react";
import Image from "next/image";

const data1 = [
  {
    icon: <Rocket size={30} />,
    title: "Yüksek Performans",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptates.",
  },
  {
    icon: <Settings size={30} />,
    title: "Yüksek Performans",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptates.",
  },
];

const data2 = [
  {
    icon: <Building size={30} />,
    title: "Yüksek Performans",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptates.",
  },
  {
    icon: <Telescope size={30} />,
    title: "Yüksek Performans",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptates.",
  },
];

const Hero2 = () => {
  return (
    <div className="pb-20 " >
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col h-full justify-between gap-3 md:gap-20 flex-1 w-full">
            {data1.map((item, index) => (
              <div key={index} className="flex gap-4 items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 w-full relative aspect-square">
            <Image
              src={watch2}
              alt="watch"
              className="object-cover object-center"
              fill
            />
          </div>

          <div className="flex flex-col h-full justify-between gap-3 md:gap-20 flex-1 w-full">
            {data2.map((item, index) => (
              <div key={index} className="flex gap-4 items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero2;
