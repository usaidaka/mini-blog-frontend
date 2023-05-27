import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

import Navbar from "./Navbar";
import axios from "../API/axios";
import { EyeIcon } from "@heroicons/react/24/outline";
import { keep } from "../features/getTokenSlice";
import { useDispatch } from "react-redux";

/* VARIABLE STORE */

const LOGIN_URL = "/auth/login";
const KEEP_LOGIN = "/auth";

const LoginPageForm = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [errMsg, setErrMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginUser = async (values) => {
    alert("Submit form!");
    try {
      await axios
        .post(LOGIN_URL, values, {
          headers: { "Content-Type": "application/json" },
        })
        .then(async (res) => {
          const accessToken = res?.data?.token;
          dispatch(keep(accessToken));
          localStorage.setItem("token", accessToken);

          const token = localStorage.getItem("token");
          if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            try {
              await axios.get(KEEP_LOGIN);
              navigate("/home");
            } catch (error) {
              localStorage.removeItem("token");

              navigate("/loginpageform");
            }
          } else if (!token) {
            navigate("/loginpageform");
          }

          // setSuccess(true);
        })
        .catch((err) => {
          if (!err.response) {
            setErrMsg("No Server Response");
          } else if (err.response?.status === 400) {
            setErrMsg("Missing Username or Password");
          } else if (err.response?.status === 401) {
            setErrMsg("Unauthorized");
          } else {
            setErrMsg("Login failed");
          }
        });
    } catch (err) {
      throw new Error("Log in Error occur");
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: loginUser,
    validationSchema: yup.object().shape({
      username: yup.string().required().min(3).max(10),
      password: yup.string().required(),
    }),
  });

  const handleForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  return (
    <>
      <Navbar />
      <main className="grid justify-center items-center h-screen bg-background-poster bg-bottom bg-cover">
        <div className="w-96 h-fit rounded-3xl bg-blue-300 drop-shadow-2xl">
          <div className="flex justify-center items-center mb-0">
            <h1 className="font-poppins font-bold mt-4">Log in</h1>
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
                  autoFocus
                />
                <FormErrorMessage className="text-red-500 text-sm font-medium">
                  {formik.errors.username}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                className="flex flex-col"
                isInvalid={formik.errors.email}
              >
                <label>Password</label>
                <input
                  onChange={handleForm}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="py-1 px-2 border-2 border-blue-600 rounded-full"
                  autoComplete="off"
                />
                <FormErrorMessage className="text-red-500 text-sm font-medium">
                  {formik.errors.password}
                </FormErrorMessage>
              </FormControl>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <button
                type="submit"
                className="bg-blue-500 w-fit p-2 rounded-md text-center text-white"
              >
                Log in
              </button>
            </div>
          </form>
          <div className="flex flex-col items-center ">
            <button
              type="submit"
              className="w-fit p-2 rounded-md text-center "
              onClick={togglePassword}
            >
              <span className="flex">
                show password <EyeIcon className="w-5" />
              </span>
            </button>
            <div className="flex items-center">
              <span>Need an account? </span>
              <Link
                to="/loginpageform"
                className="text-blue-800 underline underline-offset-2 hover:text-white transition-all"
              >
                Sign up
              </Link>
            </div>
            <div className="flex items-center  mb-5">
              <Link
                to="/forgotpassword"
                className="text-blue-800 underline underline-offset-2 hover:text-white transition-all"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPageForm;
