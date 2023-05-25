import { useEffect, useState } from "react";
import axios from "../../../API/axios";
import { Link } from "react-router-dom";
import { Folder } from "@mui/icons-material";
import {
  ChevronRightIcon,
  CalendarDaysIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import dayjs from "dayjs";

const SearchBarPoster = () => {
  const [filter, setFilter] = useState({
    search: "",
    id_cat: "",
    sort: "",
  });

  const handleInput = (e) => {
    const copyFilter = { ...filter };
    copyFilter.search = e.target.value;
    setFilter(copyFilter);
  };

  const handleCategory = (id) => {
    const copyFilter = { ...filter };
    copyFilter.id_cat = id + "";
    setFilter(copyFilter);
  };

  const handleSort = (param) => {
    const copyFilter = { ...filter };
    copyFilter.sort = param;
    setFilter(copyFilter);
  };

  const buttonFilterBlog = (e) => {
    e.preventDefault();

    const tempData = {};
    if (filter.search) {
      tempData.search = filter.search;
    }

    if (filter.id_cat) {
      tempData.id_cat = filter.id_cat;
    }

    if (filter.sort) {
      tempData.sort = filter.sort;
    }

    const params = new URLSearchParams(tempData);
    const paramsStr = params.toString();
    const GET_BLOG = "/blog";

    axios
      .get(`${GET_BLOG}?${paramsStr}`)
      .then((res) => {
        console.log(res);
        setAllBlog(res.data.result);
      })
      .catch((err) => console.log(err));
  };

  // untuk searchFilter
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [allCategory, setAllCategory] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  const ALL_CATEGORY = "/blog/allCategory";
  const GET_BLOG = "/blog";

  /* kurang useEffect AllCategories */
  useEffect(() => {
    axios
      .get(`${ALL_CATEGORY}`)
      .then((resp) => {
        setAllCategory(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // untuk cardbloglanding
  const [allBlog, setAllBlog] = useState([]);

  /* kurang useEffect Blog */
  useEffect(() => {
    axios
      .get(`${GET_BLOG}`)
      .then((resp) => {
        setAllBlog(resp.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(allBlog);

  const date = dayjs(allBlog?.createdAt);
  const formattedDate = date.format("DD MMMM YYYY");

  return (
    <section className="col-span-5 border-2 border-yellow-500 w-full">
      <div className="w-full ">
        <div className="w-full grid grid-flow-row content-center">
          <p className="text-4xl font-poppins my-4">
            Looking for some specific topic?
          </p>
          <div>
            {/* ini searchfilter */}
            <form>
              <div className="flex">
                <div className="relative">
                  <button
                    id="dropdown-button"
                    onClick={toggleDropdown}
                    className=" font-fira text-s w-44 flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
                    type="button"
                  >
                    Search by Categories
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="dropdown"
                    className={`z-10 absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${
                      isDropdownOpen ? "block" : "hidden"
                    }`}
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdown-button"
                    >
                      {allCategory.map((result) => {
                        return (
                          <>
                            <li>
                              <button
                                type="button"
                                onClick={() => {
                                  handleCategory(result.id);
                                  setIsClicked(!isClicked);
                                }}
                                className={`inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white `}
                              >
                                {result.name}
                              </button>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <button
                    id="dropdown-button2"
                    onClick={toggleDropdown2}
                    className=" font-fira text-s w-44 flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
                    type="button"
                  >
                    Sort by
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="dropdown"
                    className={`z-10 absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 ${
                      isDropdownOpen2 ? "block" : "hidden"
                    }`}
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdown-button"
                    >
                      <li>
                        <button
                          type="button"
                          onClick={() => handleSort("ASC")}
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Ascending
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={() => handleSort("DESC")}
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Descending
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    onChange={handleInput}
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-darkcho focus:border-darkcho"
                    placeholder="Search by Title or Keyword..."
                  />
                  <button
                    type="submit"
                    onClick={buttonFilterBlog}
                    className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-darkcho rounded-r-lg border border-darkcho hover:bg-olive focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="w-11/12 font-monts text-xl mx-2 my-4 underline decoration-2 ml-[0.90rem]"></div>
          <div className="mb-4">
            <div>
              {/* ini cardbloglanding */}
              {allBlog.map((result) => (
                <>
                  <div className="grid grid-cols-4 bg-gray-100 rounded-lg mt-5 w- mb-10">
                    <div className="columns-1 flex justify-center items-center mr-3">
                      <Link to="">
                        <img
                          src="https://source.unsplash.com/random?orientation=landscape&category=technology&size=200x200"
                          alt=""
                          className="rounded-full w-36"
                        />
                      </Link>
                    </div>
                    <div className="col-span-3 flex flex-col gap-4 mt-2">
                      <h1 className="text-3xl">{result?.title}</h1>
                      <div className="flex justify-start gap-3">
                        <div className="flex justify-start items-center gap-1">
                          <p className="w-6">
                            <CalendarDaysIcon />
                          </p>
                          <p>{formattedDate}</p>
                        </div>
                        <div className="flex justify-start items-center gap-1">
                          <p className="w-5">
                            <Folder />
                          </p>
                          <p>{result.Category.name}</p>
                        </div>
                        <div className="flex justify-start items-center gap-1">
                          <p className="w-6">
                            <HeartIcon />
                          </p>
                          <p>Likes 9</p>
                        </div>
                        <div>
                          <p className="font-semibold italic">
                            By {result.User.username}
                          </p>
                        </div>
                      </div>
                      <div className="grid gap-3">
                        <p>{result?.content.slice(0, 150)} ...</p>
                        <Link
                          to={`/guest/${result.id}`}
                          className="flex justify-start items-center text-blue-600 mb-3"
                        >
                          Read More <ChevronRightIcon className="w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBarPoster;
