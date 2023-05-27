import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { lazy, Suspense } from "react";

import LoginPageForm from "./Main Components/LoginPageForm";
import SignupPageForm from "./Main Components/SignupPageForm";
import Footer from "./Main Components/Footer";
import SetUsername from "./Main Components/Sub Components/Setting/SetUsername";
import SetEmail from "./Main Components/Sub Components/Setting/SetEmail";
import SetPhone from "./Main Components/Sub Components/Setting/SetPhone";
import SetPassword from "./Main Components/Sub Components/Setting/SetPassword";
import CreateBlog from "./Main Components/CreateBlog";
import { userBlog } from "./features/userBlogSlice";
import { likeBlog } from "./features/likeBlogSlice";
import ForgotPasswordPage from "./Main Components/ForgotPasswordPage";
import logoLoading from "./assets/cool-loading-animated-gif-4.gif";
import EmailVerification from "./Main Components/EmailVerification";
import LikedPost from "./Main Components/LikedPost";

const Poster = lazy(() => import("./Main Components/Poster"));
const SinglePostPage = lazy(() =>
  import("./Main Components/Sub Components/Post/SinglePostPage")
);
const CategoryPostPage = lazy(() =>
  import("./Main Components/Sub Components/Post/CategoryPostPage")
);
const HomePage = lazy(() => import("./Main Components/HomePage"));
const SettingPage = lazy(() => import("./Main Components/SettingPage"));
const ProfilePage = lazy(() => import("./Main Components/ProfilePage"));
const SearchPage = lazy(() => import("./Main Components/SearchPage"));
const SinglePostPageGuest = lazy(() =>
  import("./Main Components/Sub Components/Post/SinglePostPageGuest")
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(userBlog(localStorage.getItem("token")));
      dispatch(likeBlog());
    }
  }, [dispatch]);

  return (
    <Router>
      <Suspense
        fallback={
          <div className="h-screen flex justify-center items-center">
            <img src={logoLoading} alt="" />
          </div>
        }
      >
        <Routes>
          <Route path="/loginpageform" element={<LoginPageForm />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
          <Route path="/signuppageform" element={<SignupPageForm />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/setting/username" element={<SetUsername />} />
          <Route path="/setting/email" element={<SetEmail />} />
          <Route path="/setting/phone" element={<SetPhone />} />
          <Route path="/setting/password" element={<SetPassword />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/likedpost" element={<LikedPost />} />
          <Route path="verification/:token" element={<EmailVerification />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/" element={<Poster />}>
            <Route path=":blogId" element={<SinglePostPage />} />
          </Route>
          <Route path="/guest">
            <Route path=":postId" element={<SinglePostPageGuest />} />
          </Route>
          <Route path="/post">
            <Route path=":postId" element={<SinglePostPage />} />
          </Route>
          <Route path="/category/:categoryId" element={<CategoryPostPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
