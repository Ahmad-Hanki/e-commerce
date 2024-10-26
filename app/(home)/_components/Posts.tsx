import Container from "@/components/Container";
import Image from "next/image";

const Posts = () => {
  const posts = [
    {
      id: 1,

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuNAgPJCRFxuTzOSn2ycg6MznY1_JuXHbuQ&s",
    },
    {
      id: 2,

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3vTnVGpLgS8dfKQw8KOnrT3gQwPNoydQQaw7DU6_8FUn9G5sntKqJWoHIOQeRnXeZdo&usqp=CAU",
    },
    {
      id: 3,

      image:
        "https://wwwmpa.mpa-garching.mpg.de/galform/cr/CR_TCDM_dump40_400_170000_12000_100_red.gif",
    },
  
  ];
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border border-primary p-[1px] rounded-md w-full aspect-square relative overflow-hidden"
            >
              <Image
                src={post.image}
                fill
                alt={"Posts"}
                className="object-cover object-center rounded-md transition-all duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Posts;
