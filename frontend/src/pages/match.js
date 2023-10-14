import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import team from "../assets/teams.svg";
import SustainabilityScore from "../components/matched_results/SustainabilityScore";
import MoneySaved from "../components/matched_results/MoneySaved";


const MatchPage = () => {
  const location = useLocation();
  const [optimalMatch, setOptimalMatch] = useState(null);

  useEffect(() => {
    const fetchOptimalMatch = async () => {
      try {
        const payload = JSON.stringify(location.state);
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

  return (
    <div className="bg-white h-screen flex flex-col font-poppins ml-4 mt-4w ot ">
      <section className="relative pt-36">
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-8"
              data-aos="zoom-y-out"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800">
                Match Results 
              </span>
            </h1>
            <p
              className="text-xl text-gray-700 mb-8 "
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Empower your business by joining forces with others.
            </p>
              {/* widgets here */}
              <MoneySaved/>
              <SustainabilityScore/>
              <SustainabilityScore/>            
            <div>
              {/* insert text results here */}
              <img
                src={team}
                width={500}
                className="h-auto mx-auto mt-20"
                alt="Team"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    // <div className="p-4">
    //   <h1 className="text-xl font-bold mb-4">Match Result</h1>
    //   {optimalMatch ? (
    //     <div>
    //       {/* Display optimal match details here */}
    //       <p>Item Name: {optimalMatch.item}</p>
    //       <p>Quantity: {optimalMatch.quantity}</p>
    //       <p>Budget: {optimalMatch.budget}</p>
    //       <p>Location: {optimalMatch.location}</p>
    //       <p>Business Sector: {optimalMatch.business_sector}</p>
    //       <p>Combined Quantity: {optimalMatch.combined_quantity}</p>
    //       <p>Savings: {optimalMatch.savings}</p>
    //       {/* Add more display fields as required */}
    //     </div>
    //   ) : (
    //     <div>
    //       {/****/}
    //       <p>Item Name: Printer</p>
    //       <p>Quantity: 5</p>
    //       <p>Budget: 1000</p>
    //       <p>Location: Berlin, Germany</p>
    //       <p>Business Sector: IT</p>
    //       <p>Combined Quantity: 9</p>
    //       <p>Savings: 1800</p>
    //     </div>
    //     )}
    //   </div>
    );
  };

export default MatchPage;
