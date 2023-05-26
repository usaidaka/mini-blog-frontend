const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-2 grid-rows-2 h-56 bg-blue-500">
        <div className="w-full  flex justify-center items-center">
          <h1 className="font-bold text-3xl">Follow our newest update blog</h1>
        </div>
        <div className="w-full  flex justify-center items-center">
          <form>
            <input
              type="email"
              placeholder="your email"
              className="px-3 rounded-l-xl"
            />
            <button className="bg-yellow-400 w-fit px-4 font-semibold rounded-r-xl">
              subscribe
            </button>
          </form>
        </div>
        <div className="col-span-2 row-span-1 ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-poppins font-bold ">
              Reach us on our social media
            </h1>
            <p className="font-poppins text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad vel
              soluta eius saepe maiores, fuga deserunt veniam expedita harum
              doloremque!
            </p>
          </div>
          <div className="flex justify-center gap-3 mt-2">
            <a href="">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png"
                alt=""
                className="w-9"
              />
            </a>
            <a href="">
              <img
                src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
                alt=""
                className="w-10"
              />
            </a>
            <a href="">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt=""
                className="w-10"
              />
            </a>
            <a href="">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png"
                alt=""
                className="w-10"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
