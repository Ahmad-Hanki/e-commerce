import getMostSailedProducts from "@/actions/getMostSailedProducts";
import Blog from "./_components/Blog";
import MostSells from "./_components/MostSells";
import Hero from "./_components/Hero";
import img1 from "@/public/images/watch.png";
import img2 from "@/public/images/model.png";
import getRandomProducts from "@/actions/getRandomProducts";
import CarouselComponent from "@/components/Carousel";

export default async function Home() {
  const [mostSailed, randomProducts] = await Promise.all([
    getMostSailedProducts(),
    getRandomProducts(),
  ]);

  return (
    <div>
      <Hero
        img={img1}
        title="Discover the Best Deals on Your Favorite Products!"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus cupiditate natus inventore laudantium adipisci temporibus qui quis sint minus! Natus, assumenda vitae ut dignissimos mollitia culpa. Officiis, ad voluptas?"
      />
      <MostSells products={mostSailed} />
      <Hero
        img={img2}
        reverse
        title="Quality You Can Trust, Prices You’ll Love"
        desc="      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus cupiditate natus inventore laudantium adipisci temporibus qui quis sint minus! Natus, assumenda vitae ut dignissimos mollitia culpa. Officiis, ad voluptas?"
      />

      <CarouselComponent products={randomProducts} />

      <Blog />


    </div>
  );
}
