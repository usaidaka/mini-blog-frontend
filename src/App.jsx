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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Poster />} />
        <Route path="/loginpageform" element={<LoginPageForm />} />
        <Route path="/signuppageform" element={<SignupPageForm />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="verification/:token" element={<EmailVerification />} />
        <Route path="/post">
          <Route path=":postId" element={<SinglePostPage />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
