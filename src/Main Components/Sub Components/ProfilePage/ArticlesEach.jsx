import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Folder } from "@mui/icons-material";

const ArticlesEach = () => {
  return (
    <div className="grid grid-cols-4 bg-gray-100 rounded-lg mt-5 w-[40%] px-2">
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
        <h1 className="text-3xl">Lorem ipsum dolor sit amet.</h1>
        <div className="flex justify-start gap-3">
          <div className="flex justify-start items-center gap-1">
            <p className="w-6">
              <CalendarDaysIcon />
            </p>
            <p>June 28, 2019</p>
          </div>
          <div className="flex justify-start items-center gap-1">
            <p className="w-5">
              <Folder />
            </p>
            <p>Technology</p>
          </div>
          <div className="flex justify-start items-center gap-1">
            <p className="w-6">
              <HeartIcon />
            </p>
            <p>Likes 9</p>
          </div>
        </div>
        <div className="grid gap-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel
            animi magni? Aliquam nisi expedita voluptatem repellendus dolore
            obcaecati voluptatum similique eaque culpa suscipit consequatur
            optio, est quidem nobis corporis?
          </p>
          <Link
            to=""
            className="flex justify-start items-center text-blue-600 mb-3"
          >
            Read More <ChevronRightIcon className="w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticlesEach;
