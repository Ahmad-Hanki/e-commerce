import MostSells from "./_components/MostSells";
import Hero from "./_components/Hero";
import img1 from "@/public/images/watch.png";
import img2 from "@/public/images/xbox.png";
import getRandomProducts from "@/actions/getRandomProducts";
import CarouselComponent from "@/components/Marquee";

import getMostSailedProducts from "@/actions/getMostSailedProducts";
import Features from "./_components/Features";
// import Landing from "./_components/Landing";
import NewProducts from "./_components/NewProducts";
import getNewProducts from "@/actions/getNewProducts";
import TwoProducts from "./_components/TwoProductsBand";
import ScrollableTrends from "./_components/ScrollableTrends";
import Hero2 from "./_components/Hero2";
import ThreeCards from "./_components/ThreeCards";
// import Adband from "./_components/Adband";
import CategoriesGrid from "./_components/CategoriesGrid";
import FlexProducts from "./_components/FlexProducts";
import ProductsWithBackground from "./_components/ProductsWithBackground";

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
      {/* <Landing /> */}
      <Features />
      <CategoriesGrid />
      <Hero2 />

      <ScrollableTrends products={mostSailed} />
      <TwoProducts />
      {/* <Adband /> */}
      <MostSells products={mostSailed} />

      <ThreeCards />
      <NewProducts products={newProducts} />
      <FlexProducts />
      <Hero
        img={img1}
        title="En Sevdiğiniz Ürünlerde En İyi Fırsatları Keşfedin!"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus cupiditate natus inventore laudantium adipisci temporibus qui quis sint minus! Natus, assumenda vitae ut dignissimos mollitia culpa. Officiis, ad voluptas?"
        reverse
      />

      <CarouselComponent products={randomProducts} />

      <ProductsWithBackground />
    </div>
  );
}
