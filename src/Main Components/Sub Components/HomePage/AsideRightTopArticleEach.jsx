import {
  CalendarDaysIcon,
  FolderOpenIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const AsideRightTopArticleEach = () => {
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
        <h1 className="text-sm font-semibold">Lorem ipsum dolor sit amet.</h1>
        <div className="flex justify-start flex-wrap text-xs gap-1">
          <div className="flex justify-start items-center ">
            <p className="w-4 ">
              <CalendarDaysIcon />
            </p>
            <p>June 28, 2019</p>
          </div>
          <div className="flex justify-start items-center flex-wrap">
            <p className="w-4">
              <FolderOpenIcon />
            </p>
            <p>Technology</p>
          </div>
          <div className="flex justify-start items-center ">
            <p className="w-4">
              <HeartIcon />
            </p>
            <p>Likes 9</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AsideRightTopArticleEach;
