import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { useEffect } from "react";
import { CalendarDaysIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Folder } from "@mui/icons-material";

import { getLike } from "../features/getLikeSlice";
import AsideLeft from "./Sub Components/HomePage/AsideLeft";
import AsideRight from "./Sub Components/HomePage/AsideRight";
import withAuth from "../withAuth";

const LikedPost = () => {
  const pagLike = useSelector((state) => state.likeInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLike());
  }, [dispatch]);

  if (pagLike.loading) {
    return <p className="h-screen"> loading </p>;
  }

  const newPagLike = pagLike.like.result;
  console.log(newPagLike);

  return (
    <div>
      <main className="grid grid-cols-6 justify-center gap-2">
        <AsideLeft />
        <section className="col-span-4  ">
          {newPagLike.map((like) => (
            <>
              <div
                className="grid grid-cols-4 bg-gray-100 rounded-lg mt-5   w-full mb-10"
                key={like.id}
              >
                <div className="col-span-3 flex flex-col gap-4 mt-2">
                  <h1 className="text-3xl">{like.Blog.title}</h1>
                  <div className="flex justify-start gap-3">
                    <div className="flex justify-start items-center gap-1">
                      <p className="w-6">
                        <CalendarDaysIcon />
                      </p>
                      <p>{dayjs(like.createdAt).format("DD MMMM YYYY")}</p>
                    </div>
                    <div className="flex justify-start items-center gap-1">
                      <p className="w-5">
                        <Folder />
                      </p>
                      <p>{like.Blog.Category?.name}</p>
                    </div>
                    <div className="flex justify-start items-center gap-1">
                      <p className="w-6">
                        <HeartIcon />
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <p>{like.Blog.content}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </section>
        <AsideRight />
      </main>
    </div>
  );
};

export default withAuth(LikedPost);
