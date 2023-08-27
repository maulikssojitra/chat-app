import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import ReSetPass from "./components/auth/ReSetPass";
import SignUp from "./components/auth/SignUp";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/reset-password" element={<ReSetPass />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
