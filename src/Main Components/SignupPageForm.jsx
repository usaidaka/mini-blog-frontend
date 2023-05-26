import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import axios from "../API/axios";
import Navbar from "./Navbar";
import VerifyPage from "./VerifyPage";

/* VARIABLE STORE */
const pwRgx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_+=!@#$%^&*])(?=.{8,})/;
const phoneRgx =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const REGISTER_URL = "/auth";

const SignupPageForm = () => {
  const userRef = useRef();

  const [errMsg, setErrMsg] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const registerUser = async (values, { setStatus, resetForm }) => {
    alert("Submit form!");
    try {
      const response = await axios.post(REGISTER_URL, values, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        const token = response.data;
        console.log("Token:", token);
        resetForm();
        setStatus({ success: true, token });
        setStatus({
          success: true,
          message:
            "Sign up successful. Please check your email for verification.",
        });
        setIsVisible(true);
      } else {
        throw new Error("Login Failed");
      }
    } catch (err) {
      console.log(err);
      if (!err.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username taken");
      } else if (err.response?.status === 400) {
        setErrMsg("Email already used");
      } else {
        setErrMsg("Registration failed");
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: registerUser,
    validationSchema: yup.object().shape({
      username: yup.string().required().min(3).max(20),
      email: yup.string().required("email wajib diisi").email(),
      phone: yup
        .string()
        .required("required")
        .min(10)
        .max(13)
        .matches(phoneRgx, "Phone number is not valid"),
      password: yup
        .string()
        .min(6)
        .required()
        .matches(
          pwRgx,
          "Kata sandi harus ada huruf besar, huruf kecil, angka, dan karakter spesial"
        ),
      confirmPassword: yup
        .string()
        .oneOf(
          [yup.ref("password"), null],
          "Konfirmasi password harus sesuai dengan password"
        )
        .matches(
          pwRgx,
          "Kata sandi harus ada huruf besar, huruf kecil, angka, dan karakter spesial"
        )
        .required("Konfirmasi password harus diisi"),
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
            <div className="w-96 h-fit rounded-3xl bg-blue-300 drop-shadow-2xl">
              <div className="flex justify-center items-center mb-0">
                <h1 className="font-poppins font-bold mt-4">Sign in</h1>
              </div>
              <form onSubmit={formik.handleSubmit}>
                {errMsg ? (
                  <div className="w-full bg-red-200 text-red-700 h-10 flex justify-center items-center mt-2">
                    <p>{errMsg}</p>
                  </div>
                ) : null}

                <div className="grid gap-2 p-5">
                  <FormControl
                    className="flex flex-col"
                    isInvalid={formik.errors.username}
                  >
                    <label>Username</label>
                    <input
                      onChange={handleForm}
                      type="text"
                      name="username"
                      className="py-1 px-2 border-2 border-blue-600 rounded-full"
                      autoComplete="off"
                      ref={userRef}
                    />
                    <FormErrorMessage className="text-red-500 text-sm font-medium">
                      {formik.errors.username}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    className="flex flex-col"
                    isInvalid={formik.errors.email}
                  >
                    <label>Email</label>
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
                  <FormControl
                    className="flex flex-col"
                    isInvalid={formik.errors.password}
                  >
                    <label>Phone Number</label>
                    <input
                      onChange={handleForm}
                      type="text"
                      name="phone"
                      className="py-1 px-2 border-2 border-blue-600 rounded-full"
                      autoComplete="off"
                    />
                    <FormErrorMessage className="text-red-500 text-sm font-medium">
                      {formik.errors.phone}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    className="flex flex-col"
                    isInvalid={formik.errors.password}
                  >
                    <label>Password</label>
                    <input
                      onChange={handleForm}
                      type="password"
                      name="password"
                      className="py-1 px-2 border-2 border-blue-600 rounded-full"
                      autoComplete="off"
                    />
                    <FormErrorMessage className="text-red-500 text-sm font-medium">
                      {formik.errors.password}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    className="flex flex-col"
                    isInvalid={formik.errors.confirmPassword}
                  >
                    <label>Confirm Password</label>
                    <input
                      onChange={handleForm}
                      type="password"
                      name="confirmPassword"
                      className="py-1 px-2 border-2 border-blue-600 rounded-full"
                      autoComplete="off"
                    />
                    <FormErrorMessage className="text-red-500 text-sm font-medium">
                      {formik.errors.confirmPassword}
                    </FormErrorMessage>
                  </FormControl>

                  <div className="flex flex-col justify-center items-center mt-3">
                    <button
                      type="submit"
                      className="bg-blue-500 w-fit p-2 rounded-md text-center text-white font-poppins hover:bg-blue-800 transition-all"
                    >
                      Register Account
                    </button>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <span>Already registered? </span>
                    <Link
                      to="/loginpageform"
                      className="text-blue-800 underline underline-offset-2 hover:text-white transition-all"
                    >
                      Log in
                    </Link>
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

export default SignupPageForm;
