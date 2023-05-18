import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Poster from "./Main Components/Poster";
import LoginPageForm from "./Main Components/LoginPageForm";
import SignupPageForm from "./Main Components/SignupPageForm";
import HomePage from "./Main Components/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Poster />} />
        <Route path="/loginpageform" element={<LoginPageForm />} />
        <Route path="/signuppageform" element={<SignupPageForm />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
