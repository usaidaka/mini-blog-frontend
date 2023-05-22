import { useEffect, useState } from "react";

import AsideLeft from "./Sub Components/HomePage/AsideLeft";
import Articles from "./Sub Components/ProfilePage/Articles";
import axios from "../API/axios";

const GET_BLOG = "/blog";

const ProfilePage = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    axios.get(GET_BLOG).then((res) => {
      setBlogList(res?.data?.result);
      console.log(res?.data?.result);
      console.log(
        res?.data?.result
          .filter((x) => x.User.username === "denoxet58")
          .map((x) => console.log(x))
      );
    });
  }, []);

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
          <Articles blogList={blogList} />
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
