import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CalendarDaysIcon, HeartIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import { Folder } from "@mui/icons-material";

import { fetchPosts } from "../../../features/postsSlice";
import Navbar from "../../Navbar";

const SinglePostPageGuest = () => {
  const { postId } = useParams();

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
    <div className="">
      <Navbar />
      <main className="grid grid-cols-6 justify-center gap-2 h-screen">
        <section className="col-span-6  mx-10 ">
          {newPosts
            .filter((blog) => blog.id === Number(postId))
            .map((post) => (
              <>
                <div className="grid grid-cols-4 bg-gray-100 rounded-lg mt-5 w-fit mb-10 h-96">
                  <div className="columns-1 flex justify-center items-center mr-3">
                    <img
                      src="https://source.unsplash.com/random?orientation=landscape&category=technology&size=200x200"
                      alt=""
                      className="rounded-full w-36"
                    />
                  </div>
                  <div className="col-span-3 flex flex-col gap-4 mt-2">
                    <h1 className="text-3xl">{post.title}</h1>
                    <div className="flex justify-start gap-3">
                      <div className="flex justify-start items-center gap-1">
                        <p className="w-6">
                          <CalendarDaysIcon />
                        </p>
                        <p>{dayjs(post.createdAt).format("DD MMMM YYYY")}</p>
                      </div>
                      <div className="flex justify-start items-center gap-1">
                        <p className="w-5">
                          <Folder />
                        </p>
                        <p>{post.Category.name}</p>
                      </div>
                      <div className="flex justify-start items-center gap-1">
                        <p className="w-6">
                          <HeartIcon />
                        </p>
                        <p>Likes 9</p>
                      </div>
                      <div>
                        <p className="font-semibold italic">
                          By {post.User.username}
                        </p>
                      </div>
                    </div>
                    <div className="grid gap-3">
                      <p>{post.content} ...</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </section>
      </main>
    </div>
  );
};

export default SinglePostPageGuest;
