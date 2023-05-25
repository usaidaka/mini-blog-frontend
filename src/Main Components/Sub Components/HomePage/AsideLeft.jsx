import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { accessAll } from "../../../features/authSlice";

const AsideLeft = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(accessAll());
  }, [dispatch]);

  if (auth.loading) {
    return <p className="h-screen">loading</p>;
  }

  const newAuth = auth.auth;

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
        <p className="text-center mt-3 text-white">@{newAuth.username}</p>
        <div className="ml-5 mt-10 text-2xl font-poppins font-extrabold">
          <ul className="flex flex-col gap-3 text-white ">
            <li className="w-fit hover:text-gray-200 transition-all ">
              <Link to="/home">HOME</Link>
            </li>
            <li className="w-fit hover:text-gray-200 transition-all">
              <Link to="/profile">PROFILE</Link>
            </li>
            <li className="w-fit hover:text-gray-200 transition-all">
              <Link to="/searchpage">SEARCH</Link>
            </li>
            <li className="w-fit hover:text-gray-200 transition-all">
              <Link to="/createblog">CREATE BLOG</Link>
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
