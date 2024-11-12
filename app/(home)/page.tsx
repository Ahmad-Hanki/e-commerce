import MostSells from "./_components/MostSells";
import Hero from "./_components/Hero";
import img1 from "@/public/images/watch.png";
import img2 from "@/public/images/model.png";
import getRandomProducts from "@/actions/getRandomProducts";
import CarouselComponent from "@/components/Carousel";

import getMostSailedProducts from "@/actions/getMostSailedProducts";
import Features from "./_components/Features";
import Landing from "./_components/Landing";
// import { headers } from "next/headers";

export default async function Home() {
  // const header = await headers();
  // const ip = (header.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];
  // the api

  const mostSailed = await getMostSailedProducts();
  const randomProducts = await getRandomProducts();

  return (
    <div>
      <Landing />

      <Features />
      <MostSells products={mostSailed} />
      <Hero
        img={img1}
        title="En Sevdiğiniz Ürünlerde En İyi Fırsatları Keşfedin!"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus cupiditate natus inventore laudantium adipisci temporibus qui quis sint minus! Natus, assumenda vitae ut dignissimos mollitia culpa. Officiis, ad voluptas?"
      />

      <CarouselComponent products={randomProducts} />

      
    </div>
  );
}
