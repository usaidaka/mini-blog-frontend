import AsideRightTopArticleEach from "./AsideRightTopArticleEach";

const AsideRightTopArticle = () => {
  return (
    <div className="row-span-1 border-2 border-purple-600">
      <h1>My Top Article</h1>
      <div className="grid grid-cols-3">
        <AsideRightTopArticleEach />
        <AsideRightTopArticleEach />
        <AsideRightTopArticleEach />
      </div>
    </div>
  );
};

export default AsideRightTopArticle;
