import { useSelector } from "react-redux";
import axios from "../../../API/axios";
import { useState } from "react";

const CHANGE_PHOTO = "/profile/single-uploaded";
const SetImage = () => {
  const auth = useSelector((state) => state.auth.auth);
  const [newPic, setNewPic] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files;
    console.log(file);
    setNewPic([...file]);
  };

  const handleChangePhoto = () => {
    if (newPic) {
      const formData = new FormData();
      formData.append("file", newPic[0]);
      console.log(newPic);
      try {
        axios
          .post(CHANGE_PHOTO, formData, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            console.log(res);
            setNewPic(null);
            location.reload();
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="columns-1 flex flex-col justify-center items-center">
      <div>
        {auth.imgProfile ? (
          <img
            src={`https://minpro-blog.purwadhikabootcamp.com/${auth.imgProfile}`}
            alt=""
          />
        ) : (
          <img
            src="https://source.unsplash.com/random?orientation=landscape&category=nature&size=200x200"
            alt=""
          />
        )}
      </div>
      <div>
        <input type="file" alt="" className="" onChange={handleChange} />
        <button onClick={handleChangePhoto}>CHANGE PHOTO</button>
      </div>
    </div>
  );
};

export default SetImage;
