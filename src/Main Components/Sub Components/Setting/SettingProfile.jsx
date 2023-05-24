import { Link } from "react-router-dom";
import SetImage from "./SetImage";

const SettingProfile = () => {
  return (
    <>
      <section className="col-span-4 border-2 border-yellow-500  mx-10">
        <div className="my-6">
          <h1 className="text-3xl font-poppins font-medium">Public Profile</h1>
        </div>
        <div className="grid grid-cols-3 bg-slate-100 p-4 rounded-md">
          <div className="col-span-2 border-2 border-red-500 grid gap-4">
            <Link
              to="/setting/username"
              className="w-36 h-8 bg-blue-600 flex justify-center items-center rounded-3xl text-white font-poppins text-sm"
            >
              username
            </Link>

            <Link
              to="/setting/email"
              className="w-36 h-8 bg-blue-600 flex justify-center items-center rounded-3xl text-white font-poppins text-sm ml-10"
            >
              Email
            </Link>

            <Link
              to="/setting/phone"
              className="w-36 h-8 bg-blue-600 flex justify-center items-center rounded-3xl text-white font-poppins text-sm"
            >
              Phone
            </Link>

            <Link
              to="/setting/password"
              className="w-36 h-8 bg-blue-600 flex justify-center items-center rounded-3xl text-white font-poppins text-sm ml-10"
            >
              Password
            </Link>
          </div>
          <SetImage />
        </div>
      </section>
    </>
  );
};

export default SettingProfile;
