import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";

import AsideLeft from "../HomePage/AsideLeft";

const phoneRgx =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SetPhone = () => {
  const registerUser = async (values) => {
    console.log(values.currentPhone);
    console.log(values.newPhone);
  };

  const formik = useFormik({
    initialValues: {
      currentPhone: "",
      newPhone: "",
    },
    onSubmit: registerUser,
    validationSchema: yup.object().shape({
      currentPhone: yup
        .string()
        .required("required")
        .min(10)
        .max(13)
        .matches(phoneRgx, "Phone number is not valid"),
      newPhone: yup
        .string()
        .required("required")
        .min(10)
        .max(13)
        .matches(phoneRgx, "Phone number is not valid"),
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
          <section className="col-span-4   mx-10">
            <div className="my-6">
              <h1 className="text-3xl font-poppins font-medium">
                Public Profile
              </h1>
            </div>
            <div className="grid grid-cols-3 bg-slate-100 p-4 rounded-md">
              <div className="col-span-2  grid gap-4">
                <FormControl
                  className="flex flex-col"
                  isInvalid={formik.errors.currentPhone}
                >
                  <label>Current Phone Number</label>
                  <input
                    onChange={handleForm}
                    type="text"
                    name="currentPhone"
                    className="py-1 px-2 border-2 border-blue-600 rounded-full"
                    autoComplete="off"
                  />
                  <FormErrorMessage className="text-red-500 text-sm font-medium">
                    {formik.errors.currentPhone}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  className="flex flex-col"
                  isInvalid={formik.errors.newPhone}
                >
                  <label>New Phone Number</label>
                  <input
                    onChange={handleForm}
                    type="text"
                    name="newPhone"
                    className="py-1 px-2 border-2 border-blue-600 rounded-full"
                    autoComplete="off"
                  />
                  <FormErrorMessage className="text-red-500 text-sm font-medium">
                    {formik.errors.newPhone}
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

export default SetPhone;
