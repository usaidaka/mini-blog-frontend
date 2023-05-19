import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Poster from "./Main Components/Poster";
import LoginPageForm from "./Main Components/LoginPageForm";
import SignupPageForm from "./Main Components/SignupPageForm";
import HomePage from "./Main Components/HomePage";
import SettingPage from "./Main Components/SettingPage";
import ProfilePage from "./Main Components/ProfilePage";

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
      </Routes>
    </Router>
  );
}

export default App;
