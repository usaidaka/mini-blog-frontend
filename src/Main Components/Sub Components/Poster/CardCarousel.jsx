const CardCarousel = ({ post }) => {
  return (
    <>
      <div className="w-52 h-52 bg-white rounded-3xl flex flex-col justify-center items-center shadow-lg">
        <p className="text-sm font-semibold px-2">{post.title}</p>
        <p className="text-sm  px-2">{post.content.slice(0, 60)} ...</p>
      </div>
    </>
  );
};

export default CardCarousel;
