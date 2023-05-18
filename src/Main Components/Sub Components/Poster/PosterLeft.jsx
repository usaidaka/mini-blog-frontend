import { Link } from "react-router-dom";

const PosterLeft = () => {
  return (
    <>
      <div className="lg:h-screen lg:columns-1 lg:border-r-8 lg:border-white lg:border-dashed flex justify-center items-center flex-col">
        <div className=" lg:w-96 bg-white/20 p-9 rounded-lg shadow-lg mx-4">
          <h3 className="lg:text-3xl text-justify font-poppins font-bold ">
            You may not write well every day, but you can always edit a bad
            page. You can't edit a blank page
          </h3>
          <h5 className="text-md mt-5 italic font-bold font-mono">
            -Jodi Picoult
          </h5>
        </div>
        <Link to="/loginpageform">
          <button className="w-44 h-10 rounded-full bg-blue-500 blur-sm hover:blur-none transition-all mt-5 text-white border-4 border-blue-600 font-poppins text-sm active:scale-90">
            Start Writing
          </button>
        </Link>
      </div>
    </>
  );
};

export default PosterLeft;
