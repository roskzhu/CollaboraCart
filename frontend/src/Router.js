import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import BusinessForm from "./pages/BusinessForm";
import ItemForm from "./pages/ItemForm";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/BusinessSignUp" element={<BusinessForm />} />
        <Route path="/ItemSubmission" element={<ItemForm />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
