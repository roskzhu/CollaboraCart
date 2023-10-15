import React, { useState, useEffect } from "react";

function WelcomeBanner() {
  const [companyName, setCompanyName] = useState("Business Name");

  useEffect(() => {
    // Fetch the most recent company name when the component mounts
    fetch("http://127.0.0.1:5000/GetMostRecentBusiness")
      .then((response) => response.json())
      .then((data) => {
        if (data.company_name) {
          setCompanyName(data.company_name);
        }
      })
      .catch((error) => {
        console.error("Error fetching the company name:", error);
      });
  }, []);

  // Function to get the appropriate greeting based on the current time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good morning";
    } else if (hour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 to-purple-100 p-6 sm:p-6 rounded-2xl overflow-hidden mb-8">
      <h1 className="text-xl md:text-3xl text-slate-800 font-bold mb-1">
        {`${getGreeting()}, ${companyName}. 👋`}
      </h1>
      <p className="text-slate-700">
        Here is what’s happening with your business today:
      </p>
    </div>
  );
}

export default WelcomeBanner;
