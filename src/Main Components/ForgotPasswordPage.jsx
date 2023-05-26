import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";

import axios from "../API/axios";
import Navbar from "./Navbar";
import VerifyPage from "./VerifyPage";

const REGISTER_URL = "auth/forgotPass";

const ForgotPasswordPage = () => {
  const [errMsg, setErrMsg] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const registerUser = async (values) => {
    alert("Submit form!");
    try {
      const response = await axios.post(REGISTER_URL, values, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        const token = response.data;
        console.log("Token:", token);
        setIsVisible(true);
      } else {
        throw new Error("Login Failed");
      }
    } catch (err) {
      console.log(err);
      if (!err.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg(
          "indicates a request conflict with the current state of the target resource"
        );
      } else if (err.response?.status === 400) {
        setErrMsg("Bad request");
      } else {
        setErrMsg("Registration failed");
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: registerUser,
    validationSchema: yup.object().shape({
      email: yup.string().required("email wajib diisi").email(),
    }),
  });

  const handleForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  return (
    <>
      {isVisible ? (
        <VerifyPage />
      ) : (
        <>
          <Navbar />
          <main className="grid justify-center items-center h-screen bg-background-poster bg-bottom bg-cover">
            <div className="w-96 h-fit rounded-3xl bg-blue-200">
              <div className="flex justify-center items-center mb-0">
                <h1 className="font-poppins font-bold mt-4">
                  Forgot Your Password?
                </h1>
              </div>
              <form onSubmit={formik.handleSubmit}>
                {errMsg ? (
                  <div className="w-full bg-red-200 text-red-700 h-10 flex justify-center items-center mt-2">
                    <p>{errMsg}</p>
                  </div>
                ) : null}

                <div className="grid gap-2 p-5">
                  <img
                    src="https://media1.giphy.com/media/6IPNUgkpCsDRK/giphy.gif?cid=6c09b9528hksymbfrv7jvkug3jccathggmrskqjcijbfb0y2&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                    alt=""
                  />
                  <FormControl
                    className="flex flex-col"
                    isInvalid={formik.errors.email}
                  >
                    <label className="text-center font-semibold">Email</label>
                    <input
                      onChange={handleForm}
                      type="email"
                      name="email"
                      className="py-1 px-2 border-2 border-blue-600 rounded-full"
                      autoComplete="off"
                    />
                    <FormErrorMessage className="text-red-500 text-sm font-medium">
                      {formik.errors.email}
                    </FormErrorMessage>
                  </FormControl>

                  <div className="flex flex-col justify-center items-center mt-3">
                    <button
                      type="submit"
                      className="bg-blue-500 w-fit p-2 rounded-md text-center text-white font-poppins hover:bg-blue-800 transition-all"
                    >
                      Forgot Password
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default ForgotPasswordPage;
