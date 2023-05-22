import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import "dayjs/locale/id";

import EachSectionMiddleInfo from "./EachSectionMiddleInfo";

const EachSectionMiddle = ({ eachBlog }) => {
  const date = dayjs(eachBlog?.createdAt);
  const formattedDate = date.format("DD MMMM YYYY");

  return (
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
        <h1 className="text-3xl">{eachBlog?.title}</h1>
        <EachSectionMiddleInfo
          formattedDate={formattedDate}
          eachBlog={eachBlog}
        />
        <div className="grid gap-3">
          <p>{eachBlog?.content.slice(0, 150)} ...</p>
          <Link
            to={`/post/${eachBlog.id}`}
            className="flex justify-start items-center text-blue-600 mb-3"
          >
            Read More <ChevronRightIcon className="w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EachSectionMiddle;
