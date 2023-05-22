import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../../features/postsSlice";

const CardCarousel = () => {
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
    <>
      <div className="w-52 h-52 bg-white rounded-3xl flex justify-center items-center shadow-lg">
        {newPosts.map((post) => (
          <>
            <p key={post.id}>{post.title}</p>
            <p key={post.id}>{post.content.slice(0, 20)}</p>
          </>
        ))}
      </div>
    </>
  );
};

export default CardCarousel;
