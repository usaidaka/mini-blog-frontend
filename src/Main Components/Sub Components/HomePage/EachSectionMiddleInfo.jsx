import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { Folder } from "@mui/icons-material";

const EachSectionMiddleInfo = ({ eachBlog, formattedDate }) => {
  return (
    <div className="flex justify-start gap-3">
      <div className="flex justify-start items-center gap-1">
        <p className="w-6">
          <CalendarDaysIcon />
        </p>
        <p>{formattedDate}</p>
      </div>
      <div className="flex justify-start items-center gap-1">
        <p className="w-5">
          <Folder />
        </p>
        <p>{eachBlog.Category.name}</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="font-semibold text-xs italic">
          By {eachBlog.User.username}
        </p>
      </div>
    </div>
  );
};

export default EachSectionMiddleInfo;
