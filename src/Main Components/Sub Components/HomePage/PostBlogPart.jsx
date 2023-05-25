import { Carousel } from "flowbite-react";
import { useSelector } from "react-redux";

const PostBlogPart = () => {
  const posts = useSelector((state) => state.posts);

  const newPosts = posts.posts.result;

  return (
    <section className="">
      <Carousel>
        {newPosts.map((post) => (
          <>
            <div className="border-4 rounded-xl h-96 flex flex-col">
              <div className=" h-full w-full">
                <div className="">
                  <img
                    src={`https://minpro-blog.purwadhikabootcamp.com/${newPosts.imageURL}`}
                    alt="image"
                    className="w-96 h-80 "
                  />
                  <figcaption className=""></figcaption>
                </div>
                <div className=" h-full">
                  <h1 className="text-2xl">{post.title}</h1>
                </div>
              </div>
            </div>
          </>
        ))}
      </Carousel>
    </section>
  );
};

export default PostBlogPart;
