import React from "react";
import BusinessForm from "./BusinessForm";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center font-inter">
      <h1 className="text-3xl text-black font-bold mb-4">CollaboraCart</h1>
      <p className="text-black text-lg">Welcome to CollaboraCart!</p>
      <div className="mt-8">
        <Link to="/BusinessSignUp">
        <button className="bg-[#0084fc] hover:bg-[#4168bb] text-white font-semibold py-2 px-4 rounded-full">
          Get Started
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
