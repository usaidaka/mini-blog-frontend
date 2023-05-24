import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../API/axios";

import LoginPageForm from "./LoginPageForm";

const PATCH_SIGNUP = "/auth/verify";
const EmailVerification = () => {
  const { token } = useParams();

  useEffect(() => {
    axios
      .patch(PATCH_SIGNUP, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => console.log(error));
  });

  return (
    <>
      <div className="h-screen bg-background-poster bg-bottom bg-covern">
        <LoginPageForm />
      </div>
    </>
  );
};

export default EmailVerification;
