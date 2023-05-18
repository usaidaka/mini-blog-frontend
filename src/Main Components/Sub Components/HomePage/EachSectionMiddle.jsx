import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import EachSectionMiddleInfo from "./EachSectionMiddleInfo";

const EachSectionMiddle = () => {
  return (
    <div className="grid grid-cols-4 bg-gray-100 rounded-lg mt-5 w-fit">
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
        <EachSectionMiddleInfo />
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

export default EachSectionMiddle;
