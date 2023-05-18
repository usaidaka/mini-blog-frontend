import { SearchSharp } from "@mui/icons-material";

const AsideRightSearch = () => {
  return (
    <div>
      <form className="flex flex-col row-span-1  border-2 border-black mt-10">
        <p>Find your fav blog</p>
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="w-full h-10 border-2 border-black"
            placeholder="Type a keyword and hit enter"
          />
          <label className="">
            <SearchSharp />
          </label>
        </div>
      </form>
    </div>
  );
};

export default AsideRightSearch;
