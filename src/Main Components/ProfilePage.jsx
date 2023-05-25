import Articles from "./Sub Components/ProfilePage/Articles";
import AsideLeft from "./Sub Components/HomePage/AsideLeft";

const ProfilePage = () => {
  return (
    <div className="">
      <main className="grid grid-cols-6 justify-center gap-2">
        <AsideLeft />
        <section className="col-span-5 border-2 border-yellow-500 ">
          <div className="flex justify-center items-center mt-2">
            <h1 className="text-2xl font-poppins font-medium">
              Welcome To Your Own Blog Page
            </h1>
          </div>
          <section className="flex flex-col justify-center items-center">
            <div className="bg-gray-200 mt-5 rounded-2xl p-5 w-[90%]">
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
          <Articles />
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
