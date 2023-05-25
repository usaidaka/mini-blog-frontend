import { useEffect } from "react";
import AsideRightTopArticleEach from "./AsideRightTopArticleEach";

import { useDispatch, useSelector } from "react-redux";
import { pagFav } from "../../../features/favSlice";

const AsideRightTopArticle = () => {
  const fav = useSelector((state) => state.pagFav);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pagFav());
  }, [dispatch]);

  if (fav.loading) {
    return <p className="h-screen"> LOADING</p>;
  }

  const newFav = fav.pagFav.result;

  return (
    <div className="row-span-1 border-2 border-purple-600">
      <h1>Top Article</h1>
      {newFav.map((post) => (
        <>
          <div className="grid grid-cols-3">
            <AsideRightTopArticleEach post={post} />
          </div>
        </>
      ))}
    </div>
  );
};

export default AsideRightTopArticle;
