import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "../src/pages/home/HomePage";
import LoginPage from "../src/pages/login/LoginPage";
import RegisterPage from "../src/pages/register/RegisterPage";
import UserSettingsPage from "./pages/user/UserSettingsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/usersettings" element={<UserSettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
