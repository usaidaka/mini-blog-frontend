import AsideLeft from "./Sub Components/HomePage/AsideLeft";
import SearchBar from "./SearchBar";

const SearchPage = () => {
  return (
    <div className="">
      <main className="grid grid-cols-6 justify-center gap-2">
        <AsideLeft />
        <SearchBar />
      </main>
    </div>
  );
};

export default SearchPage;
