import { useEffect, useState } from "react";

import EachSectionMiddle from "./EachSectionMiddle";
import PostBlogPart from "./PostBlogPart";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../../features/postsSlice";
import PaginationPage from "./PaginationPage";

const SectionMiddle = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts())
      .unwrap()
      .then((data) => setTotalPage(Math.ceil(data.rows / 8)));
  }, [dispatch]);

  const handlePage = (page) => {
    setCurrentPage(page);
    dispatch(fetchPosts(page))
      .unwrap()
      .then((data) => {
        setTotalPage(Math.ceil(data.rows / 8));
      });
  };

  if (posts.loading) {
    return <p className="h-screen">loading</p>;
  }

  const newPosts = posts.posts.result;

  return (
    <section className="col-span-4  ">
      <PostBlogPart />
      <div className="grid grid-cols-2 w-full ">
        {newPosts.map((eachBlog) => (
          <EachSectionMiddle key={eachBlog.id} eachBlog={eachBlog} />
        ))}
      </div>
      <PaginationPage
        currentPage={currentPage}
        totalPage={totalPage}
        handlePage={handlePage}
      />
    </section>
  );
};

export default SectionMiddle;
