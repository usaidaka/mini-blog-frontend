import { CalendarDaysIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Folder } from "@mui/icons-material";

const EachSectionMiddleInfo = () => {
  return (
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
  );
};

export default EachSectionMiddleInfo;
