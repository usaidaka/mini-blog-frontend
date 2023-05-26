import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { Folder } from "@mui/icons-material";
import dayjs from "dayjs";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { userBlog } from "../../../features/userBlogSlice";
import axios from "../../../API/axios";

const ArticlesEach = () => {
  const user = useSelector((state) => state.userBlog);
  const token = useSelector((state) => state.keepToken.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userBlog());
  }, [dispatch]);

  if (user.loading) {
    return <p className="w-screen h-screen">Loading</p>;
  }

  const handleDelete = async (id) => {
    try {
      await axios
        .patch(`/blog/remove/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
          axios
            .get("/blog/pagUser", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => console.log("get", res));
        });
      console.log("HAPUS");
    } catch (error) {
      console.log(error);
    }
  };

  const postUser = user.user.result;
  // console.log(postUser);

  const date = dayjs(userBlog.createdAt);
  const formattedDate = date.format("DD MMMM YYYY");

  return (
    <>
      {postUser.map((post) => (
        <>
          <div
            className="grid grid-row-4 bg-gray-100 rounded-lg mt-5 w-[40%] px-2 h-fit"
            key={post.id}
          >
            <div className="row-span-1 flex justify-center items-center mr-3 ">
              <Link to="">
                <img
                  src={`https://minpro-blog.purwadhikabootcamp.com/${post.imageURL}`}
                  alt=""
                  className=" w-64"
                />
              </Link>
            </div>
            <div className="row-span-3 flex flex-col gap-4 mt-2">
              <h1 className="text-xl">{post.title}</h1>
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
                  <p>{post.Category.name}</p>
                </div>
                <div className="flex justify-start items-center gap-1">
                  <p className="font-semibold text-xs italic">
                    By {post.User.username}
                  </p>
                </div>
              </div>
              <div className="flex">
                <div>
                  <p>{post?.content.slice(0, 150)} ...</p>
                  <Link
                    to={`/post/${post.id}`}
                    className="flex justify-start items-center text-blue-600 mb-3"
                  >
                    Read More <ChevronRightIcon className="w-4" />
                  </Link>
                </div>
                <div className="ml-2">
                  <button
                    onClick={() => {
                      if (confirm("yakin mau hapus?")) {
                        handleDelete(post.id);
                      }
                    }}
                    className="text-sm bg-red-500 px-2 py-1 rounded-lg text-white"
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default ArticlesEach;
