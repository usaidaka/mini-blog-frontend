import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";

import AsideLeft from "../HomePage/AsideLeft";

const SetEmail = () => {
  const changeEmail = async (values) => {
    console.log(values.currentEmail);
    console.log(values.newEmail);
  };

  const formik = useFormik({
    initialValues: {
      currentEmail: "",
      newEmail: "",
    },
    onSubmit: changeEmail,
    validationSchema: yup.object().shape({
      currentEmail: yup.string().required("email wajib diisi").email(),
      newEmail: yup.string().required("email wajib diisi").email(),
    }),
  });

  const handleForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

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
                <FormControl
                  className="flex flex-col"
                  isInvalid={formik.errors.currentEmail}
                >
                  <label>Current Email</label>
                  <input
                    onChange={handleForm}
                    type="email"
                    name="currentEmail"
                    className="py-1 px-2 border-2 border-blue-600 rounded-full"
                    autoComplete="off"
                  />
                  <FormErrorMessage className="text-red-500 text-sm font-medium">
                    {formik.errors.newEmail}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  className="flex flex-col"
                  isInvalid={formik.errors.email}
                >
                  <label>new Email</label>
                  <input
                    onChange={handleForm}
                    type="email"
                    name="newEmail"
                    className="py-1 px-2 border-2 border-blue-600 rounded-full"
                    autoComplete="off"
                  />
                  <FormErrorMessage className="text-red-500 text-sm font-medium">
                    {formik.errors.newEmail}
                  </FormErrorMessage>
                </FormControl>
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

export default SetEmail;
