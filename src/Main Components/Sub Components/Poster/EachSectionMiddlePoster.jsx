import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import "dayjs/locale/id";
import EachSectionMiddleInfoPoster from "./EachSectionMiddleInfoPoster";

const EachSectionMiddlePoster = ({ eachBlog }) => {
  const date = dayjs(eachBlog?.createdAt);
  const formattedDate = date.format("DD MMMM YYYY");

  return (
    <div className="grid grid-cols-2 bg-gray-100 rounded-lg mt-5 w-104 mb-10 mx-10">
      <div className="columns-1 flex justify-center items-center mr-3 w-full">
        <div className="">
          <img
            src={`https://minpro-blog.purwadhikabootcamp.com/${eachBlog.imageURL}`}
            alt=""
            className=" w-80"
          />
        </div>
      </div>
      <div className="col-span-3 flex flex-col gap-4 mt-2">
        <h1 className="text-xl">{eachBlog?.title}</h1>
        <EachSectionMiddleInfoPoster
          formattedDate={formattedDate}
          eachBlog={eachBlog}
        />
        <div className="grid gap-3">
          <p>{eachBlog?.content.slice(0, 150)} ...</p>
          <Link
            to={`/guest/${eachBlog.id}`}
            className="flex justify-start items-center text-blue-600 mb-3"
          >
            Read More <ChevronRightIcon className="w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EachSectionMiddlePoster;
