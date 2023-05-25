import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

import CardCarousel from "./CardCarousel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../../../features/postsSlice";

const PosterRightBottom = ({ scrollLeft, scrollRight }) => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (posts.loading) {
    return <p className="h-screen">loading</p>;
  }

  const newPosts = posts.posts.result;
  return (
    <>
      <div className=" row-1 min-w-full snap-x snap-mandatory grid justify-center">
        <div className="flex justify-center  ">
          <h1 className="lg:text-4xl text-white text-justify font-poppins font-bold ">
            TOP 10 BLOGS
          </h1>
        </div>
        <div
          id="card"
          className="scrollbar-hide flex items-center justify-start  lg:overflow-x-auto gap-x-2 snap-mandatory snap-x scroll-smooth "
        >
          <div className="snap-center flex gap-2">
            {newPosts.map((post) => (
              <CardCarousel key={post.id} post={post} />
            ))}
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="flex justify-center items-center w-10 h-10 bg-white rounded-full drop-shadow-2xl border-4 border-gray-200 active:scale-90 transition-all">
            <button onClick={scrollLeft} className="w-8 h-8 text-blue-400  ">
              <ChevronDoubleLeftIcon />
            </button>
          </div>
          <div className="flex justify-center items-center w-10 h-10 bg-white rounded-full drop-shadow-2xl border-4 border-gray-200 active:scale-90 transition-all">
            <button
              onClick={scrollRight}
              className="w-8 h-8 text-blue-400 active:scale-90"
            >
              <ChevronDoubleRightIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PosterRightBottom;
