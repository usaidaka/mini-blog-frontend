import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";

import Navbar from "./Navbar";

const SignupPageForm = () => {
  const registerUser = () => {
    alert("Submit form!");
  };

  const pwRgx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_+=!@#$%^&*])(?=.{8,})/;

  const phoneRgx =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: registerUser,
    validationSchema: yup.object().shape({
      username: yup.string().required().min(3).max(10),
      email: yup.string().required("email wajib diisi").email(),
      phoneNumber: yup
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
      <Navbar />
      <main className="grid justify-center items-center h-screen bg-background-poster bg-bottom bg-cover">
        <div className="w-96 h-fit border-2 bg-green-400 rounded-3xl">
          <div className="flex justify-center items-center mb-0">
            <h1 className="font-poppins font-bold mt-4">Sign in</h1>
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
                <label>Phone Number</label>
                <input
                  onChange={handleForm}
                  type="phoneNumber"
                  name="phoneNumber"
                  className="py-1 px-2 border-2 border-blue-600 rounded-full"
                />
                <FormErrorMessage className="text-red-500 text-sm font-medium">
                  {formik.errors.phoneNumber}
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
                />
                <FormErrorMessage className="text-red-500 text-sm font-medium">
                  {formik.errors.confirmPassword}
                </FormErrorMessage>
              </FormControl>

              <div className="flex flex-col justify-center items-center mt-3">
                <button
                  type="submit"
                  className="bg-blue-500 w-fit p-2 rounded-md text-center"
                >
                  Register Account
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default SignupPageForm;
