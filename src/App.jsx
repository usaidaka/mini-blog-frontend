import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

function App() {
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
