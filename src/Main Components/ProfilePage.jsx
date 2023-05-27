import Articles from "./Sub Components/ProfilePage/Articles";
import AsideLeft from "./Sub Components/HomePage/AsideLeft";
import withAuth from "../withAuth";

const ProfilePage = () => {
  return (
    <div className="">
      <main className="grid grid-cols-6 justify-center gap-2 ">
        <AsideLeft />
        <section className="col-span-5">
          <div className="flex justify-center items-center mt-2">
            <h1 className="text-2xl font-poppins font-medium">
              Welcome To Your Own Blog Page
            </h1>
          </div>
          <Articles />
        </section>
      </main>
    </div>
  );
};

export default withAuth(ProfilePage);
