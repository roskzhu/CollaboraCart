import React from "react";

function WelcomeBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-purple-100  p-6 sm:p-6 rounded-2xl overflow-hidden mb-8">
      <h1 className="text-xl md:text-3xl text-slate-800 font-bold mb-1">
        Good afternoon, Small Business Name. 👋
      </h1>
      <p className="text-slate-700">
        Here is what’s happening with your business today:
      </p>
    </div>
  );
}

export default WelcomeBanner;
