import { useEffect } from "react";

import EachSectionMiddle from "./EachSectionMiddle";
import PostBlogPart from "./PostBlogPart";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../../features/postsSlice";

const SectionMiddle = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (posts.loading) {
    return <p>loading</p>;
  }

  const newPosts = posts.posts.result;

  return (
    <section className="col-span-4 border-2 border-yellow-500 ">
      <PostBlogPart />
      {newPosts.map((eachBlog) => (
        <EachSectionMiddle key={eachBlog.id} eachBlog={eachBlog} />
      ))}
    </section>
  );
};

export default SectionMiddle;
