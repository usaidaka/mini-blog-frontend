import { useState, useEffect } from "react";
import axios from "../../../API/axios";

import EachSectionMiddle from "./EachSectionMiddle";
import PostBlogPart from "./PostBlogPart";

const GET_BLOG = "/blog";
const SectionMiddle = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    axios.get(GET_BLOG).then((res) => {
      setBlogList(res?.data?.result);
    });
  }, []);

  return (
    <section className="col-span-4 border-2 border-yellow-500 ">
      <PostBlogPart />
      {blogList.map((eachBlog) => (
        <EachSectionMiddle key={eachBlog.id} eachBlog={eachBlog} />
      ))}
    </section>
  );
};

export default SectionMiddle;
