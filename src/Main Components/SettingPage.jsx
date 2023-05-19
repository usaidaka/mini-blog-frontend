import AsideLeft from "./Sub Components/HomePage/AsideLeft";
const SettingPage = () => {
  return (
    <div>
      <main className="grid grid-cols-6 justify-center gap-2">
        <AsideLeft />
        <section className="col-span-4 border-2 border-yellow-500  mx-10">
          <div className="my-6">
            <h1 className="text-3xl font-poppins font-medium">
              Public Profile
            </h1>
          </div>
          <div className="grid grid-cols-3 bg-slate-100 p-4 rounded-md">
            <div className="col-span-2 border-2 border-red-500 grid gap-4">
              <form action="">
                <label htmlFor="" className="block">
                  Username
                </label>
                <input type="text" className="border-2 " />
              </form>
              <form action="">
                <label htmlFor="" className="block">
                  Email
                </label>
                <input type="text" className="border-2 " />
              </form>
              <form action="">
                <label htmlFor="" className="block">
                  Phone Number
                </label>
                <input type="text" className="border-2 " />
              </form>
              <form action="" className="mt-2">
                <label htmlFor="">Password</label>
                <input type="password" className="border-2 ml-2 " />
                <label htmlFor="" className="ml-5">
                  Confirm Password
                </label>
                <input type="password" className="border-2 ml-2" />
              </form>
            </div>
            <div className="columns-1 border-2 border-green-500 flex justify-center items-center">
              <input
                type="image"
                src="https://source.unsplash.com/random?orientation=landscape&category=nature&size=200x200"
                alt=""
                className="rounded-full"
              />
            </div>
          </div>
        </section>
        <aside className="columns-1 border-2 border-green-500">
          <h1>ASIDE RIGHT</h1>
        </aside>
      </main>
    </div>
  );
};

export default SettingPage;
