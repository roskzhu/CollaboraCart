import React from 'react';

function WelcomeBanner() {
  return (
    <div className="bg-indigo-200 p-6 sm:p-6 rounded-sm overflow-hidden mb-8">
        <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">Good afternoon, Small Business Name. 👋</h1>
        <p className="dark:text-indigo-200">Here is what’s happening with your projects today:</p>
    </div>
  );
}

export default WelcomeBanner;