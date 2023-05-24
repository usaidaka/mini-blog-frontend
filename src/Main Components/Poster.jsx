import Navbar from "./Navbar";
import PosterLeft from "./Sub Components/Poster/PosterLeft";
import PosterRightBottom from "./Sub Components/Poster/PosterRightBottom";
import SearchBarPoster from "./Sub Components/Poster/SearchBarPoster";

const scrollLeft = () => {
  document.getElementById("card").scrollLeft -= 20;
};
const scrollRight = () => {
  document.getElementById("card").scrollLeft += 20;
};

const Poster = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="h-screen bg-background-poster bg-bottom bg-cover lg:bg-cover md:bg-right md:bg-cover lg:grid lg:grid-cols-2  grid grid-rows-2">
          <PosterLeft />
          <div className=" lg:column-1 grid grid-rows-2 lg:h-screen">
            <div className="row-1 flex justify-center items-center flex-col">
              <h1 className=" text-4xl text-center font-poppins font-bold text-white tracking-widest drop-shadow-xl">
                Explore the depths of knowledge and
              </h1>
              <h1 className=" text-4xl text-center font-poppins font-bold text-white tracking-widest drop-shadow-xl">
                be inspired by engaging stories
              </h1>
            </div>
            <PosterRightBottom
              scrollLeft={scrollLeft}
              scrollRight={scrollRight}
            />
          </div>
        </div>
      </div>
      <SearchBarPoster />
    </>
  );
};

export default Poster;
