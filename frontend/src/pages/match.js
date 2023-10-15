import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import team from "../assets/teams.svg";
import SustainabilityScore from "../components/matched_results/SustainabilityScore";
import MoneySaved from "../components/matched_results/MoneySaved";
import MatchedResults from "../components/matched_results/Results";
import Aos from "aos";
import "aos/dist/aos.css";
import Fade from "react-reveal/Fade";

const MatchPage = () => {
  const location = useLocation();
  const formData = location.state;
  const [optimalMatch, setOptimalMatch] = useState(null);

  console.log("Received formData in MatchPage:", formData);

  useEffect(() => {
    // fetch matches for businesses
    const fetchOptimalMatch = async () => {
      try {
        const payload = formData;
        console.log("Sending payload:", payload); // Logging the payload

        const response = await fetch("http://127.0.0.1:5000/FindOptimalMatch", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
          },
          body: payload,
        });

        if (!response.ok) {
          throw new Error(`An error has occurred: ${response.status}`);
        }

        const result = await response.json();
        if (result.match) {
          setOptimalMatch(result.match);
        } else {
          // Handle no match scenario
          console.error(result.message);
        }
      } catch (error) {
        console.error("Failed to fetch match data:", error);
      }
    };

    // if (location.state) {
    fetchOptimalMatch();
    // }

  }, [location.state]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="bg-white h-screen flex flex-col font-poppins ml-4 mt-4w ot "
    >
      {/* gradient animations */}
    <div className="absolute z-[0] w-full h-[100%] top-1 left-0">
      <Fade clear delay={500}>
      <div
        className="absolute z-[0] w-1/6 h-3/6 animate-pulse-slow rounded-full"
        style={{
          right: "0px",
          top: "464px",
          background: "linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #fead6147 100%)", 
          mixBlendMode: "multiply",
          filter: "blur(100px)",
          animation: 'spin-slow 10s linear infinite'
        }}
      ></div>
      <div
        className="absolute z-[0] w-2/6 h-3/6 animate-pulse-slow rounded-full"
        style={{
          left: "-144px",
          top: "64px",
          background: "linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #0037ff3e 50%)", 
          mixBlendMode: "multiply",
          filter: "blur(80px)",
          animation: 'spin 3s linear infinite'
        }}
      ></div>
      </Fade>
    </div>
      <section className="relative pt-20">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
          aria-hidden="true"
        >
          <svg
            width="1360"
            height="578"
            viewBox="0 0 1360 578"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ... SVG content remains unchanged ... */}
          </svg>
        </div>

        <div className="text-center max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800 text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-5">
            Match Results
          </h1>
          <p className="text-xl text-gray-700 mb-8 ">
            <i>Empower your business by joining forces with others.</i>
          </p>
          <div className="w-full max-w-5xl p-5 mx-auto gap-5 columns-2 space-y-5">
            {/* widgets here */}
            <MoneySaved />
            <SustainabilityScore />
            <div></div>
          </div>
          {optimalMatch ? (
            <div>
              {/* Display optimal match details here */}
              <p>Item Name: {optimalMatch.item}</p>
              <p>Quantity: {optimalMatch.quantity}</p>
              <p>Budget: {optimalMatch.budget}</p>
              <p>Location: {optimalMatch.location}</p>
              <p>Business Sector: {optimalMatch.business_sector}</p>
              <p>Combined Quantity: {optimalMatch.combined_quantity}</p>
              <p>Savings: {optimalMatch.savings}</p>
              {/* Add more display fields as required */}
            </div>
          ) : (
            <MatchedResults formData={formData} />
          )}
        </div>
        
      </section>
      
    </div>
  );
};

export default MatchPage;