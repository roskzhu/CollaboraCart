import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import BusinessForm from "./pages/BusinessForm";
import ItemForm from "./pages/ItemForm";
import SignUp from "./pages/auth/signup";
import SignIn from "./pages/auth/signin";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/BusinessSignUp" element={<BusinessForm />} />
        <Route path="/ItemSubmission" element={<ItemForm />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
