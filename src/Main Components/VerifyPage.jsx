import Navbar from "./Navbar";

const VerifyPage = () => {
  return (
    <>
      <Navbar />
      <main className=" h-screen bg-background-poster bg-bottom bg-cover flex justify-center items-center">
        <div className="shadow-2xl w-80 h-72 rounded-3xl bg-white flex flex-col justify-start items-center">
          <div>
            <img
              src="https://cdn.dribbble.com/users/4874/screenshots/3074660/gmaildribbble.gif"
              alt=""
              className="rounded-3xl"
            />
          </div>
          <div>
            <h1 className="text-sm font-poppins font-semibold text-center">
              check your email for verify your account
            </h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default VerifyPage;
