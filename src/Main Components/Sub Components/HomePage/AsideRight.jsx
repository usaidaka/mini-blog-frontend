import AsideRightTopArticle from "./AsideRightTopArticle";
import AsideRightCategory from "./AsideRightCategory";
import AsideRightSearch from "./AsideRightSearch";

const AsideRight = () => {
  return (
    <aside className="columns-1 border-2 border-green-500">
      <div className="grid grid-rows-3 gap-5">
        <AsideRightSearch />
        <AsideRightCategory />
        <AsideRightTopArticle />
      </div>
    </aside>
  );
};

export default AsideRight;
