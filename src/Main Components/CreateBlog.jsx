import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import axios from "../API/axios";
import AsideLeft from "./Sub Components/HomePage/AsideLeft";

import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../features/categorySlice";

const CREATE_BLOG = "/blog";
const CreateBlog = () => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [errMsg, setErrMsg] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const createBlog = async (values) => {
    alert("Submit form!");

    const formData = new FormData();
    formData.append("data", JSON.stringify(values));
    formData.append("file", image[0]);

    try {
      axios
        .post(CREATE_BLOG, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      console.log(err);
      if (!err.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg(
          "indicates a request conflict with the current state of the target resource"
        );
      } else if (err.response?.status === 400) {
        setErrMsg("Bad Request");
      } else {
        setErrMsg("Registration failed");
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      country: "",
      CategoryId: "",
      url: "",
      keywords: "",
    },
    onSubmit: createBlog,
    validationSchema: yup.object().shape({
      title: yup.string().required(),
      content: yup.string().required().max(255),
      country: yup.string().required(),
      CategoryId: yup.string().required(),
      url: yup.string(),
      keywords: yup.string(),
    }),
  });

  if (category.loading) {
    return <p>loading</p>;
  }

  const allCategory = category.posts;
  // console.log(allCategory);

  const handleForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  const handleFile = (e) => {
    const files = e.target.files;

    setImage([...files]);
  };

  return (
    <div className="">
      <main className="grid grid-cols-6 justify-center gap-2">
        <AsideLeft />
        <main className=" w-fit bg-slate-200">
          <div className="">
            <div className=" flex justify-center items-center">
              <h1 className="text-xl font-poppins mt-2">CREATE BLOG</h1>
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
                  isInvalid={formik.errors.title}
                >
                  <label>Title</label>
                  <input
                    onChange={handleForm}
                    type="text"
                    name="title"
                    className="py-1 px-2 border-2 border-blue-600 rounded-full"
                    autoComplete="off"
                  />
                  <FormErrorMessage className="text-red-500 text-sm font-medium">
                    {formik.errors.title}
                  </FormErrorMessage>
                </FormControl>

                <FormControl
                  className="flex flex-col"
                  isInvalid={formik.errors.content}
                >
                  <label>Content</label>
                  <textarea
                    onChange={handleForm}
                    type="text"
                    name="content"
                    className="py-1 px-2 w-104 h-52 border-2 border-blue-600 rounded-lg resize-none"
                    autoComplete="off"
                  />
                  <FormErrorMessage className="text-red-500 text-sm font-medium">
                    {formik.errors.content}
                  </FormErrorMessage>
                </FormControl>

                <FormControl
                  className="flex flex-col"
                  isInvalid={formik.errors.country}
                >
                  <label>Country</label>
                  <input
                    onChange={handleForm}
                    type="text"
                    name="country"
                    className="py-1 px-2 border-2 border-blue-600 rounded-full"
                    autoComplete="off"
                  />
                  <FormErrorMessage className="text-red-500 text-sm font-medium">
                    {formik.errors.country}
                  </FormErrorMessage>
                </FormControl>

                <FormControl
                  className="flex flex-col"
                  isInvalid={formik.errors.CategoryId}
                >
                  <label className="mt-1">Select your category</label>
                  <select
                    onChange={handleForm}
                    name="CategoryId"
                    className="border-2 border-blue-500 rounded-full p-1 "
                  >
                    <option>All Categories</option>
                    {allCategory.map((post) => (
                      <>
                        <option value={post.id} key={post.id}>
                          {post.name}
                        </option>
                      </>
                    ))}
                  </select>

                  <FormErrorMessage className="text-red-500 text-sm font-medium">
                    {formik.errors.CategoryId}
                  </FormErrorMessage>
                </FormControl>

                <FormControl
                  className="flex flex-col"
                  isInvalid={formik.errors.url}
                >
                  <label>url</label>
                  <input
                    onChange={handleForm}
                    type="text"
                    name="url"
                    className="py-1 px-2 border-2 border-blue-600 rounded-full"
                    autoComplete="off"
                  />
                  <FormErrorMessage className="text-red-500 text-sm font-medium">
                    {formik.errors.url}
                  </FormErrorMessage>
                </FormControl>

                <FormControl
                  className="flex flex-col"
                  isInvalid={formik.errors.keyword}
                >
                  <label>keyword</label>
                  <input
                    onChange={handleForm}
                    type="text"
                    name="keywords"
                    className="py-1 px-2 border-2 border-blue-600 rounded-full"
                    autoComplete="off"
                  />
                  <FormErrorMessage className="text-red-500 text-sm font-medium">
                    {formik.errors.keyword}
                  </FormErrorMessage>
                </FormControl>

                <FormControl
                  className="flex flex-col"
                  isInvalid={formik.errors.photo}
                >
                  <label>photo</label>
                  <input
                    onChange={handleFile}
                    type="file"
                    name="photo"
                    className="py-1 px-2 rounded-full"
                    autoComplete="off"
                    accept="image/png, image/gif, image/jpeg"
                  />
                  <FormErrorMessage className="text-red-500 text-sm font-medium">
                    {formik.errors.photo}
                  </FormErrorMessage>
                </FormControl>

                <div className="flex flex-col justify-center items-center mt-3">
                  <button
                    type="submit"
                    className="bg-blue-500 w-fit p-2 rounded-md text-center text-white font-poppins hover:bg-blue-800 transition-all"
                  >
                    POST
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </main>
    </div>
  );
};

export default CreateBlog;
