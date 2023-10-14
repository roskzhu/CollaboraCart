import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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

    if (location.state) {
      fetchOptimalMatch();
    }
  }, [location.state]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Match Result</h1>
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
        <p>Loading match data...</p>
      )}
    </div>
  );
};

export default MatchPage;
