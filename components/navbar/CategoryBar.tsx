import Container from "../Container";

const CategoryBar = () => {
  const categories = [
    "Electronics",
    "Mobiles",
    "Books",
    "Fashion",
    "Beauty",
    "Sports",
    "Home",
    "Kitchen",
    "Appliances",
  ];
  return (
    <div className="bg-secondary py-3 hidden lg:block">
      <Container>
        <div className="flex items-center justify-center w-full ">
          <div className="flex gap-4 flex-nowrap w-fit">
            {categories.map((category, index) => (
              <p
                key={index}
                className="text-secondary-foreground hover:text-yellow-500 transition-all duration-300 cursor-pointer"
              >
                {category}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryBar;
