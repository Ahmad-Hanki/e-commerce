import getMostSailedProducts from "@/actions/getMostSailedProducts";
import Blog from "./_components/Blog";
import CarouselHero from "./_components/CarouselHero";
import LongPosts from "./_components/LongPosts";
import MostSells from "./_components/MostSells";
import Posts from "./_components/Posts";
import { Product } from "@prisma/client";

export default async function  Home() {
  const mostSailed:Product[] = await getMostSailedProducts();
  return (
    <div>
      <CarouselHero />

      <MostSells products={mostSailed} />
      <Posts />
      <LongPosts />
      <MostSells products={mostSailed} />
      <Blog />
    </div>
  );
}
