import MostSells from "./_components/MostSells";
import Hero from "./_components/Hero";
import img1 from "@/public/images/watch.png";
import img2 from "@/public/images/model.png";
import getRandomProducts from "@/actions/getRandomProducts";
import CarouselComponent from "@/components/Carousel";

import getMostSailedProducts from "@/actions/getMostSailedProducts";

export default async function Home() {
  const mostSailed = await getMostSailedProducts();
  const randomProducts = await getRandomProducts();

  return (
    <div>
      <Hero
        img={img1}
        title="En Sevdiğiniz Ürünlerde En İyi Fırsatları Keşfedin!"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus cupiditate natus inventore laudantium adipisci temporibus qui quis sint minus! Natus, assumenda vitae ut dignissimos mollitia culpa. Officiis, ad voluptas?"
      />
      <MostSells products={mostSailed} />
      <Hero
        img={img2}
        reverse
        title="Güvenebileceğiniz Kalite, Bayılacağınız Fiyatlar"
        desc="      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus cupiditate natus inventore laudantium adipisci temporibus qui quis sint minus! Natus, assumenda vitae ut dignissimos mollitia culpa. Officiis, ad voluptas?"
      />

      <CarouselComponent products={randomProducts} />

      {/* <Blog /> */}
    </div>
  );
}
