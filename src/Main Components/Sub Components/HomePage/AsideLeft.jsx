import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AsideLeft = () => {
  const navigate = useNavigate();
  return (
    <aside className="columns-1 border-2 border-red-500 h-screen sticky top-0 bg-blue-500">
      <nav>
        <div className="flex justify-center mt-10 ">
          <img
            src="https://source.unsplash.com/random?orientation=landscape&category=nature&size=100x100"
            alt=""
            className="rounded-full"
          />
        </div>
        <p className="text-center mt-3 text-white">@usaidaka</p>
        <div className="flex justify-evenly text-center mt-5 text-white">
          <div className="">
            <h5>45</h5>
            <p>Post</p>
          </div>
          <div className="">
            <h5>1,545</h5>
            <p>followers</p>
          </div>
          <div className="">
            <h5>18K</h5>
            <p>Likes</p>
          </div>
        </div>
        <div className="ml-5 mt-10 text-2xl font-poppins font-extrabold">
          <ul className="flex flex-col gap-3 text-white ">
            <li className="w-fit hover:text-gray-200 transition-all ">
              <Link to="/home">HOME</Link>
            </li>
            <li className="w-fit hover:text-gray-200 transition-all">
              <Link to="/profile">PROFILE</Link>
            </li>
            <li className="w-fit hover:text-gray-200 transition-all">
              <Link to="/setting">SETTING</Link>
            </li>
            <li className="w-fit hover:text-gray-200 transition-all">
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/loginpageform");
                }}
              >
                LOG OUT
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default AsideLeft;
