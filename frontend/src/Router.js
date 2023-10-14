import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import BusinessForm from "./pages/BusinessForm";
// import { Landing, BusinessForm } from "./pages";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/BusinessSignUp" element={<BusinessForm />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
