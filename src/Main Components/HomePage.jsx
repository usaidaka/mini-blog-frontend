import AsideLeft from "./Sub Components/HomePage/AsideLeft";
import AsideRight from "./Sub Components/HomePage/AsideRight";
import SectionMiddle from "./Sub Components/HomePage/SectionMiddle";

const HomePage = () => {
  return (
    <div className="">
      <main className="grid grid-cols-6 justify-center gap-2">
        <AsideLeft />
        <SectionMiddle />
        <AsideRight />
      </main>
    </div>
  );
};

export default HomePage;
