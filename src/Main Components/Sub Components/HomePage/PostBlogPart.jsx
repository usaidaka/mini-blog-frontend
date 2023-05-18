const PostBlogPart = () => {
  return (
    <section>
      <div className="bg-gray-200 mt-5 rounded-2xl p-5">
        <form action="" className="flex flex-col gap-2">
          <label htmlFor="">Title</label>
          <input
            type="text"
            className="border-2 border-black rounded-md px-1"
          />
          <label htmlFor="">Blog something</label>
          <textarea
            name=""
            className="resize-none border-2 border-black h-44 rounded-md px-1"
          ></textarea>
          <div className="flex justify-end ">
            <button className="bg-blue-500 text-white font-poppins w-24 h-7 mt-4 rounded-md">
              Post
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PostBlogPart;
