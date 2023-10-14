import React from "react";

import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import CurrentStockCard from "../components/dashboard/CurrentStock";
import PortfolioCard from "../components/dashboard/PortfolioCard";
import PricingTrendsCard from "../components/dashboard/PricingTrend";
import TransactionHistoryCard from "../components/dashboard/TransactionHistory";
import InventoryTable from "../components/inventory";

const Dashboard = () => {
  return (
    <div className="bg-white h-screen flex flex-col font-poppins ml-4 mt-4w ot ">
      <h1 className="align-text-top pl-6 pt-5 bg-gradient-to-r from-indigo-600 to-emerald-500 text-3xl font-bold mb-10 text-transparent bg-clip-text">
        CollaboraCart
      </h1>
      <div className="px-3 sm:px-6 lg:px-8 py-4 w-full max-w-8xl mx-auto">
        {/* Welcome banner */}
        <WelcomeBanner />
      </div>

      <div className="w-full max-w-5xl p-5 pb-10 mx-auto gap-5 columns-2 space-y-5">
        <PricingTrendsCard />
        <CurrentStockCard />
        <PortfolioCard />
        <TransactionHistoryCard />
      </div>
      <div>
        <InventoryTable />
      </div>
    </div>
  );
};

export default Dashboard;
