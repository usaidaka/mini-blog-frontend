import ArticlesEach from "./ArticlesEach";

const Articles = ({ blogList }) => {
  return (
    <div className="flex flex-wrap gap-9 justify-center items-center mb-10">
      {blogList
        .filter((eachBlog) => eachBlog.User.username === "denoxet58")
        .map((userBlog) => (
          <ArticlesEach key={userBlog.id} userBlog={userBlog} />
        ))}
    </div>
  );
};

export default Articles;
