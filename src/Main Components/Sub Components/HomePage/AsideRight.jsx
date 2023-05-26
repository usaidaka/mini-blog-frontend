import AsideRightTopArticle from "./AsideRightTopArticle";
import AsideRightCategory from "./AsideRightCategory";

const AsideRight = () => {
  return (
    <aside className="columns-1 ">
      <div className="grid  gap-5">
        <AsideRightCategory />
        <AsideRightTopArticle />
      </div>
    </aside>
  );
};

export default AsideRight;
