import EachSectionMiddle from "./EachSectionMiddle";
import PostBlogPart from "./PostBlogPart";

const SectionMiddle = () => {
  return (
    <section className="col-span-4 border-2 border-yellow-500 ">
      <PostBlogPart />
      <EachSectionMiddle />
      <EachSectionMiddle />
      <EachSectionMiddle />
      <EachSectionMiddle />
      <EachSectionMiddle />
      <EachSectionMiddle />
      <EachSectionMiddle />
    </section>
  );
};

export default SectionMiddle;
