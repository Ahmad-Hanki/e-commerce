import MostSells from "./_components/MostSells";
import Hero from "./_components/Hero";
import img1 from "@/public/images/watch.png";
import img2 from "@/public/images/model.png";
import getRandomProducts from "@/actions/getRandomProducts";
import CarouselComponent from "@/components/Carousel";

import getMostSailedProducts from "@/actions/getMostSailedProducts";
import Features from "./_components/Features";
// import Landing from "./_components/Landing";
import NewProducts from "./_components/NewProducts";
import getNewProducts from "@/actions/getNewProducts";

export default async function Home() {
 

  const mostSailed = await getMostSailedProducts();
  const randomProducts = await getRandomProducts();
  const newProducts = await getNewProducts();

  return (
    <div>
      <Hero
        img={img2}
        title="En Sevdiğiniz Ürünlerde En İyi Fırsatları Keşfedin!"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus cupiditate natus inventore laudantium adipisci temporibus qui quis sint minus! Natus, assumenda vitae ut dignissimos mollitia culpa. Officiis, ad voluptas?"
      />
      <Features />
      <MostSells products={mostSailed} />
      <NewProducts products={newProducts} />
      <Hero
        img={img1}
        title="En Sevdiğiniz Ürünlerde En İyi Fırsatları Keşfedin!"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus cupiditate natus inventore laudantium adipisci temporibus qui quis sint minus! Natus, assumenda vitae ut dignissimos mollitia culpa. Officiis, ad voluptas?"
        reverse
      />

      <CarouselComponent products={randomProducts} />
    </div>
  );
}
