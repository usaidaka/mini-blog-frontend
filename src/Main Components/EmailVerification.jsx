import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../API/axios";
import { Link } from "react-router-dom";

const PATCH_SIGNUP = "/auth/verify";
const EmailVerification = () => {
  const [verify, setVerify] = useState(false);

  const { token } = useParams();

  useEffect(() => {
    axios
      .patch(PATCH_SIGNUP, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => setVerify(true))
      .catch((error) => console.log(error));
  });

  return (
    <div className=" h-screen bg-background-poster grid content-center justify-center bg-blue-500">
      <div className="w-[28rem] h-[25rem] grid grid-flow-row rounded overflow-hidden shadow-2xl">
        <div className="bg-header w-full h-32 ">
          <div className=" bg-white font-monts font-bold text-6xl text-center text-ivory drop-shadow-5xl m-6">
            COZY
          </div>
        </div>
        <div className="mt-14 h-[27rem] w-full">
          <div className="grid grid-flow-row gap-2 w-full">
            {verify ? (
              <>
                <div className="font-monts font-bold text-xl text-center text-darkcho m-4">
                  <h3>Glad to have you with us!</h3>
                </div>
                <Link
                  to="/loginpageform"
                  className="m-auto grid grid-flow-row w-60 content-center"
                >
                  <button
                    className="w-full py-2 my-4 bg-olive text-ivory hover:bg-sage hover:text-black hover:font-bold"
                    type="submit"
                  >
                    Go Log in
                  </button>
                </Link>
              </>
            ) : (
              <>
                <div className="font-monts font-bold text-xl text-center text-darkcho m-4">
                  <h3>You have not verify your email.</h3>
                </div>
                <span className="m-auto grid grid-flow-row w-60 content-center">
                  <button
                    className="w-full py-2 my-4 bg-gray-400 text-ivory"
                    type="submit"
                    disabled={true} // --->
                  >
                    Go Log in
                  </button>
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
