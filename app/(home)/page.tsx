import CarouselHero from "./_components/CarouselHero";
import MostSells from "./_components/MostSells";

export default function Home() {
  return (
    <div>
      <CarouselHero />
      <MostSells products={products} />
    </div>
  );
}

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 90,
    oldPrice: 100,
    image: "https://www.foodstoreint.co.uk/images/brands2.png",
    description: "efr e r we rwe rewrw erwrwr w rwrwrew rewrewre wrwrwrwr 1",
    freeShipping: true,
    discount: 10,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    oldPrice: 250,
    image:
      "https://img.freepik.com/free-photo/3d-cartoon-beauty-products_23-2151503319.jpg",
    description: "Description 2",
    rating: 3,
    new: true,
    freeShipping: true,
    discount: 10,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image:
      "https://idahomilkproducts.b-cdn.net/wp-content/uploads/2021/09/processing-differences-common-dairy-products.jpg",
    description: "Description 3",
    rating: 5,
    new: true,
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    image:
      "https://res.cloudinary.com/epantry/image/upload/v1724451591/Visitor%20Homepage/2024%20Fall/Frame_2_FallMMCD_-_DESKTOP.png",
    description: "Description 4",
    rating: 2,
  },
];
