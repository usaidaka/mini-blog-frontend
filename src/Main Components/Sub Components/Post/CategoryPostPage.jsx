import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AsideLeft from "../HomePage/AsideLeft";
import {
  CalendarDaysIcon,
  ChevronRightIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { Folder } from "@mui/icons-material";
import AsideRight from "../HomePage/AsideRight";

const CategoryPostPage = () => {
  const { categoryId } = useParams();

  const [cat, setCat] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=${categoryId}&sort=DESC`
      )
      .then((response) => setCat(response.data.result))
      .catch((error) => console.log(error));
  }, [categoryId]);

  if (cat === "") {
    return <p className="h-screen">Loading</p>;
  }

  console.log(cat);

  return (
    <div>
      <main className="grid grid-cols-6 justify-center gap-2">
        <AsideLeft />
        <section className="col-span-4 ">
          {cat.map((item) => (
            <>
              <div className="grid grid-cols-4 bg-gray-100 rounded-lg mt-5 w-fit mb-10">
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
                  <h1 className="text-3xl" key={cat.id}>
                    {item?.title}
                  </h1>
                  <div className="flex justify-start gap-3">
                    <div className="flex justify-start items-center gap-1">
                      <p className="w-6">
                        <CalendarDaysIcon />
                      </p>
                      <p></p>
                    </div>
                    <div className="flex justify-start items-center gap-1">
                      <p className="w-5">
                        <Folder />
                      </p>
                      <p></p>
                    </div>
                    <div className="flex justify-start items-center gap-1">
                      <p className="w-6">
                        <HeartIcon />
                      </p>
                      <p>Likes 9</p>
                    </div>
                    <div>
                      <p className="font-semibold italic" key={cat.id}>
                        By {item.User.username}
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <p key={cat.id}>{item.content}</p>
                    <Link
                      to={`/post/`}
                      className="flex justify-start items-center text-blue-600 mb-3"
                    >
                      Read More <ChevronRightIcon className="w-4" />
                    </Link>
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

export default CategoryPostPage;
