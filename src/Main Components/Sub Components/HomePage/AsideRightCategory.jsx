import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../../features/categorySlice";
import { Link } from "react-router-dom";

const AsideRightCategory = () => {
  const cat = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  if (cat.loading) {
    return <p className="h-screen">loading</p>;
  }

  const newCategory = cat.posts;

  return (
    <div className=" h-fit mt-10">
      <h1 className="font-satisfy text-2xl">Category</h1>
      <div className="mt-1">
        {newCategory.map((cat) => (
          <>
            <ul key={cat.id}>
              <li key={cat.id}>
                <Link to={`/category/${cat.id}`} key={cat.id}>
                  {cat.name}
                </Link>
              </li>
            </ul>
          </>
        ))}
      </div>
    </div>
  );
};

export default AsideRightCategory;
