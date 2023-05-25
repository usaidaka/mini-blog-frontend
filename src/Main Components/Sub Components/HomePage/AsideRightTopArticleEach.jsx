import {
  CalendarDaysIcon,
  FolderOpenIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import dayjs from "dayjs";

const AsideRightTopArticleEach = ({ post }) => {
  const date = dayjs(post?.createdAt);
  const formattedDate = date.format("DD MMMM YYYY");
  return (
    <>
      <div className="columns-1 grid justify-center items-center">
        <img
          src="https://source.unsplash.com/random?orientation=human&category=technology&size=200x200"
          alt=""
          className="w-16"
        />
      </div>
      <div className="col-span-2">
        <h1 className="text-sm font-semibold">{post.title}</h1>
        <div className="flex justify-start flex-wrap text-xs gap-1">
          <div className="flex justify-start items-center ">
            <p className="w-4 ">
              <CalendarDaysIcon />
            </p>
            <p>{formattedDate}</p>
          </div>
          <div className="flex justify-start items-center flex-wrap">
            <p className="w-4">
              <FolderOpenIcon />
            </p>
            <p>{post.Category.name}</p>
          </div>
          <div className="flex justify-start items-center ">
            <p className="w-4">
              <HeartIcon />
            </p>
            <p>{post.total_fav}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AsideRightTopArticleEach;
