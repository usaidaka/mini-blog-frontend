import { Link } from "react-router-dom";

import Navbar from "./Main Components/Navbar";
import loginPlease from "./assets/login.gif";

function withAuth(Component) {
  return (props) => {
    if (localStorage.getItem("token")) {
      return <Component {...props} />;
    }
    return (
      <>
        <Navbar />
        <div className="h-screen  grid grid-cols-2">
          <div className="columns-1">
            <img src={loginPlease} alt="" />
          </div>
          <div className="columns-1 h-full grid grid-rows-2">
            <div className="row-span-1 flex justify-center items-end mb-3">
              <h1 className="font-semibold font-poppins ">
                you are logged out
              </h1>
              <h1 className="text-4xl font-poppins font-bold">
                PLEASE <span className="bg-blue-500 text-white">LOG IN</span> OR{" "}
                <span className="bg-yellow-400">SIGN UP</span> TO GET YOUR
                BLOGGING ACCESS
              </h1>
            </div>
            <div className="row-span-1 flex gap-3">
              <Link to="/loginpageform">
                <button className="bg-blue-500 text-white px-3 py-1 font-semibold">
                  LOG IN
                </button>
              </Link>
              <Link to="/signuppageform">
                <button className="bg-yellow-500 text-black px-3 py-1 font-semibold">
                  SIGN UP
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };
}

export default withAuth;
