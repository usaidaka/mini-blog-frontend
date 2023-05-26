import * as yup from "yup";
import { useFormik } from "formik";

import axios from "../../../API/axios";

const LIKE_POST = "/blog/like";
const LikePost = () => {
  const likePost = async (values) => {
    alert("Submit form!");
    try {
      await axios.post(LIKE_POST, values, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      BlogId: "",
    },
    onSubmit: likePost,
    validationSchema: yup.object().shape({
      BlogId: yup,
    }),
  });

  const handleForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  return (
    <div>
      <button onClick={handleForm} name="BlogId">
        LIKE
      </button>
    </div>
  );
};

export default LikePost;
