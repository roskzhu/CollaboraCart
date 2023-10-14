import React from "react";

import WelcomeBanner from '../partials/dashboard/WelcomeBanner';

import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';

const Landing = () => {
  return (
    
    <div className="bg-slate-100 h-screen flex flex-col inline-block font-poppins ml-4 mt-4w ot ">
      
      <h1 className="align-text-top bg-gradient-to-r from-indigo-600 to-emerald-500 text-3xl font-bold mb-20 text-transparent bg-clip-text">CollaboraCart</h1>
      <div className="px-3 sm:px-6 lg:px-8 py-4 w-full max-w-8xl mx-auto">

        {/* Welcome banner */}
        <WelcomeBanner />

        {/* Dashboard actions */}

      </div>
      <div class="flex w-200">
        <DashboardCard01 class="bg-indigo-100"/>
        <div className="flex-initial px-10 shadow-md container-sm mx-auto hover:shadow-2xl"> 
            <h2 className = "font-bold text-2xl p-4">Budget</h2>
            
          
        </div>
        <div className="flex-initial px-10 shadow-md container-sm mx-auto hover:shadow-2xl"> 
            <h2 className = "font-bold text-2xl p-4">2</h2>
          
        </div>
        
        </div>
      <div className= "p-20">
        <DashboardCard02 class="bg-indigo-100"/>
        </div>
      
      <div className="mt-8">
        <button className="bg-[#0084fc] hover:bg-[#4168bb] text-white font-semibold py-2 sm px-4 rounded-full">
          Get Started
        </button>
      </div>
      
    </div>
    
  );
};

export default Landing;
