import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { changePass } from "../../../features/changePwdSlice";
import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import AsideLeft from "../HomePage/AsideLeft";

const pwRgx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_+=!@#$%^&*])(?=.{8,})/;
const SetPassword = () => {
  const password = useSelector((state) => state.changesPwd);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [success, setSucces] = useState(false);

  const changePassword = (values) => {
    dispatch(
      changePass({
        currentPassword: values.currentPassword,
        password: values.password,
        confirmPassword: values.confirmPassword,
      })
    );
    setSucces(true);
    setTimeout(() => {
      localStorage.removeItem("token");
      navigate("/loginpageform");
    }, 4000);
  };

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: changePassword,
    validationSchema: yup.object().shape({
      currentPassword: yup.string().required(),
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

  console.log("password", password);
  return (
    <>
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
                {success ? <p>password berhasil diganti</p> : null}
                <form onSubmit={formik.handleSubmit}>
                  <FormControl
                    className="flex flex-col"
                    isInvalid={formik.errors.currentPassword}
                  >
                    <label>Current Password</label>
                    <input
                      onChange={handleForm}
                      type="password"
                      name="currentPassword"
                      className="py-1 px-2 border-2 border-blue-600 rounded-full"
                      autoComplete="off"
                    />
                    <FormErrorMessage className="text-red-500 text-sm font-medium">
                      {formik.errors.currentPassword}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    className="flex flex-col"
                    isInvalid={formik.errors.password}
                  >
                    <label>New Password</label>
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
                  <button type="submit">Submit password</button>
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
    </>
  );
};

export default SetPassword;
