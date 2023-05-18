import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";

const LoginPageForm = () => {
  const navigate = useNavigate();

  const registerUser = () => {
    alert("Submit form!");
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: registerUser,
    validationSchema: yup.object().shape({
      username: yup.string().required().min(3).max(10),
      email: yup.string().required("email wajib diisi").email(),
      password: yup
        .string()
        .required()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_+=!@#$%^&*])(?=.{8,})/,
          "password must consist capital letters, lowercase, number, and special character"
        ),
    }),
  });

  const handleForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  const handleNavigate = () => {
    navigate("/home");
  };

  return (
    <>
      <Navbar />
      <main className="grid justify-center items-center h-screen bg-background-poster bg-bottom bg-cover">
        <div className="w-96 h-fit border-2 bg-green-400 rounded-3xl">
          <div className="flex justify-center items-center mb-0">
            <h1 className="font-poppins font-bold mt-4">Log in</h1>
          </div>
          <form onSubmit={formik.handleSubmit}>
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
                />
                <FormErrorMessage className="text-red-500 text-sm font-medium">
                  {formik.errors.email}
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
                />
                <FormErrorMessage className="text-red-500 text-sm font-medium">
                  {formik.errors.password}
                </FormErrorMessage>
              </FormControl>
            </div>
            <div className="flex flex-col justify-center items-center mb-5 ">
              <button
                type="submit"
                onClick={handleNavigate}
                className="bg-blue-500 w-fit p-2 rounded-md text-center"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default LoginPageForm;
