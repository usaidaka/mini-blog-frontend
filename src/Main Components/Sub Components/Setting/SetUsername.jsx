import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { changeUname } from "../../../features/changeUsernameSlice";
import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { useEffect } from "react";
import { accessAll } from "../../../features/authSlice";
import AsideLeft from "../HomePage/AsideLeft";

const SetUsername = () => {
  const username = useSelector((state) => state.changesUsername);
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(accessAll());
  }, [dispatch]);

  const changeUsername = async (values) => {
    dispatch(
      changeUname({
        currentUsername: values.currentUsername,
        newUsername: values.currentUsername,
      })
    );
    console.log("Test");
  };

  console.log("username", username);
  console.log("auth", auth.username);

  const formik = useFormik({
    initialValues: {
      currentUsername: "",
      newUsername: "",
    },
    onSubmit: changeUsername,
    validationSchema: yup.object().shape({
      currentUsername: yup.string().required(),
      newUsername: yup.string().required().min(3).max(20),
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
          <section className="col-span-4  mx-10">
            <div className="my-6">
              <h1 className="text-3xl font-poppins font-medium">
                Public Profile
              </h1>
            </div>
            <div className="grid grid-cols-3 bg-slate-100 p-4 rounded-md">
              <div className="col-span-2  grid gap-4">
                <form action="" onSubmit={formik.handleSubmit}>
                  <FormControl
                    className="flex flex-col"
                    isInvalid={formik.errors.currentUsername}
                  >
                    <label>Current Username</label>
                    <input
                      onChange={handleForm}
                      type="text"
                      name="currentUsername"
                      className="py-1 px-2 border-2 border-blue-600 rounded-full"
                      autoComplete="off"
                      placeholder={auth.username}
                    />
                    <FormErrorMessage className="text-red-500 text-sm font-medium">
                      {formik.errors.currentUsername}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    className="flex flex-col"
                    isInvalid={formik.errors.newUsername}
                  >
                    <label>New Username</label>
                    <input
                      onChange={handleForm}
                      type="text"
                      name="newUsername"
                      className="py-1 px-2 border-2 border-blue-600 rounded-full"
                      autoComplete="off"
                      placeholder={auth.username}
                    />
                    <FormErrorMessage className="text-red-500 text-sm font-medium">
                      {formik.errors.newUsername}
                    </FormErrorMessage>
                  </FormControl>
                  <button type="submit">change name</button>
                </form>
              </div>
              <div className="columns-1  flex justify-center items-center">
                <input
                  type="image"
                  src="https://source.unsplash.com/random?orientation=landscape&category=nature&size=200x200"
                  alt=""
                  className="rounded-full"
                />
              </div>
            </div>
          </section>
          <aside className="columns-1 ">
            <h1>ASIDE RIGHT</h1>
          </aside>
        </main>
      </div>
    </>
  );
};

export default SetUsername;
