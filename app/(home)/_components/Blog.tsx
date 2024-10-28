import Container from "@/components/Container";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris auctor lorem, non consectetur dolor mauris id libero.",
      image:
        "https://www.upgrowth.in/wp-content/uploads/2018/08/successful-blog-post.png",
      createdAt: "2021-10-10",
    },
    {
      id: 2,
      title: "Blog 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris auctor lorem, non consectetur dolor mauris id libero.",
      image:
        "https://www.alastyr.com/blog/wp-content/uploads/2021/01/blog-ile-para-nasil-kazanilir.png",
      createdAt: "2021-10-10",
    },
  ];
  return (
    <div className="pb-20">
      <h1 className="text-4xl text-center font-semibold pb-10">Bloglar</h1>
      <Container >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Blog;

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div>
      <Card>
        <CardContent className="p-4">
            <div className="relative w-full  aspect-square overflow-hidden">
                <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover object-center rounded-2xl"
                />
            </div>
            <h2 className="text-center font-semibold mt-5">{blog.title}</h2>
            <p className="text-center text-muted-foreground line-clamp-2">{blog.content}</p>
        </CardContent>
      </Card>
    </div>
  );
};
