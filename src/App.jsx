import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Poster from "./Main Components/Poster";
import LoginPageForm from "./Main Components/LoginPageForm";
import SignupPageForm from "./Main Components/SignupPageForm";
import HomePage from "./Main Components/HomePage";
import SettingPage from "./Main Components/SettingPage";
import ProfilePage from "./Main Components/ProfilePage";
import Footer from "./Main Components/Footer";
import SinglePostPage from "./Main Components/Sub Components/Post/SinglePostPage";
import EmailVerification from "./Main Components/EmailVerification";
import CategoryPostPage from "./Main Components/Sub Components/Post/CategoryPostPage";
import SetUsername from "./Main Components/Sub Components/Setting/SetUsername";
import SetEmail from "./Main Components/Sub Components/Setting/SetEmail";
import SetPhone from "./Main Components/Sub Components/Setting/SetPhone";
import SetPassword from "./Main Components/Sub Components/Setting/SetPassword";
import SearchPage from "./Main Components/SearchPage";
import CreateBlog from "./Main Components/CreateBlog";
import SinglePostPageGuest from "./Main Components/Sub Components/Post/SinglePostPageGuest";
import { postLike, userBlog } from "./features/userBlogSlice";
import { keep } from "./features/getTokenSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(keep(localStorage.getItem("token")));
      dispatch(userBlog(localStorage.getItem("token"))).then((likeResponse) => {
        dispatch(postLike(likeResponse.data));
      });
    }
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Poster />}>
          <Route path=":blogId" element={<SinglePostPage />} />
        </Route>
        <Route path="/loginpageform" element={<LoginPageForm />} />
        <Route path="/signuppageform" element={<SignupPageForm />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="/setting/username" element={<SetUsername />} />
        <Route path="/setting/email" element={<SetEmail />} />
        <Route path="/setting/phone" element={<SetPhone />} />
        <Route path="/setting/password" element={<SetPassword />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="verification/:token" element={<EmailVerification />} />
        <Route path="/searchpage" element={<SearchPage />} />
        <Route path="/post">
          <Route path=":postId" element={<SinglePostPage />} />
        </Route>
        <Route path="/category/:categoryId" element={<CategoryPostPage />} />
        <Route path="/guest">
          <Route path=":postId" element={<SinglePostPageGuest />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
