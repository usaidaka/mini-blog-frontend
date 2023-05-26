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
            <div
              className="border-4 rounded-xl h-104 flex flex-col"
              key={post.id}
            >
              <div className=" h-full w-full" key={post.id}>
                <div className="">
                  <img
                    src={`https://minpro-blog.purwadhikabootcamp.com/${post.imageURL}`}
                    alt="image"
                    className="w-full h-80 "
                  />
                  <figcaption className=""></figcaption>
                </div>
                <div className=" h-full m-2">
                  <h1 className="text-2xl font-semibold">
                    {post.title} :{" "}
                    <span className="font-normal">
                      {post.content.slice(0, 50)}
                    </span>
                  </h1>
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
