import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";

function MoneySaved() {
  const series = [
    {
      name: "Developer Edition",
      data: [1500, 1418, 1456, 1526, 1356, 1256],
    },
    {
      name: "Designer Edition",
      data: [643, 413, 765, 412, 1423, 1731],
    },
  ];

  const options = {
    chart: {
      fontFamily: "Inter, sans-serif",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "01 Oct.",
        "02 Oct.",
        "03 Oct.",
        "04 Oct.",
        "05 Oct.",
        "06 Oct.",
        "07 Oct.",
      ],
    },
  };

  return (
    <div className="max-w-lg w-full bg-white rounded-lg shadow p-4 md:p-6 bg-gradient-to-br from-blue-700 to-blue-400">
      <div className="flex justify-between mb-5">
        <div className="pt-40 pb-24">
          <h5 className="text-center leading-none text-8xl font-bold text-white pb-2">
          {"\n"} $1,423 {"\n"}
          </h5>
          <p className="text-base font-normal text-white">Saved this purchase</p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-300 text-center">
          23%
          <svg className="w-3 h-3 ml-1" viewBox="0 0 10 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13V1m0 0L1 5m4-4 4 4"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 items-center border-gray-200 border-t justify-between mt-5">
        <div className="flex justify-between items-center pt-5">
          <a
            href="#"
            className="uppercase text-sm font-semibold flex items-center rounded-lg text-red-300 hover:text-red-500 hover:bg-gray-100 px-3 py-2"
          >
            <Link to="/dashboard">
            Back to Dashboard
            </Link>
            <svg className="w-2.5 h-2.5 ml-1.5" viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
export default MoneySaved;