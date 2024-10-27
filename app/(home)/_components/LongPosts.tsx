import Container from "@/components/Container";
import Image from "next/image";

const LongPosts = () => {
  const posts = [
    {
      id: 1,

      image:
        "https://static.vecteezy.com/system/resources/thumbnails/012/998/155/small/illustration-of-podium-backgrounds-with-glowing-lights-stage-for-signs-corporate-advertisement-business-social-media-post-billboard-agency-advertising-ads-campaign-motion-video-landing-pages-web-vector.jpg",
    },
    {
      id: 2,

      image:
        "https://i.pinimg.com/564x/70/43/06/704306c0fa13c82144c5c76ae280fbb2.jpg",
    },
  ];
  return (
    <div className="pt-20">
      <Container>
        <div className="space-y-6">
            
        {posts.map((post) => (
          <div
            key={post.id}
            className="w-full h-[30vh] relative overflow-hidden "
          >
            <Image
              src={post.image}
              fill
              alt={"Posts"}
              className="object-cover object-center rounded-xl"
            />
          </div>
        ))}
        
        </div>
      </Container>
    </div>
  );
};

export default LongPosts;
