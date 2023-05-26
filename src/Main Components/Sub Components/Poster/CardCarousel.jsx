const CardCarousel = ({ post }) => {
  return (
    <>
      <div
        className={`w-96 h-52 bg-white rounded-3xl flex flex-col justify-end items-start shadow-lg bg-cover`}
        style={{
          backgroundImage: `url(https://minpro-blog.purwadhikabootcamp.com/${post.imageURL})`,
        }}
      >
        <div
          className="py-10 px-5 w-full rounded-b-3xl "
          style={{
            background:
              "linear-gradient(0deg, rgba(252,220,0,1) 0%, rgba(0,0,0,1) 0%, rgba(196,0,255,0) 100%)",
          }}
        >
          <p className="text-4xl text-white font-semibold px-2 ">
            {post.title}
          </p>
          <p className="text-sm text-white px-2">
            {post.content.slice(0, 60)} ...
          </p>
        </div>
      </div>
    </>
  );
};

export default CardCarousel;
