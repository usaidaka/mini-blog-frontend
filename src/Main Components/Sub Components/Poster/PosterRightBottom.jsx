import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

import CardCarousel from "./CardCarousel";

const PosterRightBottom = ({ scrollLeft, scrollRight }) => {
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
          <div className="snap-center">
            <CardCarousel />
          </div>
          <div className="snap-center">
            <CardCarousel />
          </div>
          <div className="snap-center">
            <CardCarousel />
          </div>
          <div className="snap-center">
            <CardCarousel />
          </div>
          <div className="snap-center">
            <CardCarousel />
          </div>
          <div className="snap-center">
            <CardCarousel />
          </div>
          <div className="snap-center">
            <CardCarousel />
          </div>
          <div className="snap-center">
            <CardCarousel />
          </div>
          <div className="snap-center">
            <CardCarousel />
          </div>
          <div className="snap-center">
            <CardCarousel />
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
