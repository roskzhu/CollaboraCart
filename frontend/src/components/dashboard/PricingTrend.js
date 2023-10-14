import React from "react";
import ReactApexChart from "react-apexcharts";

function PricingTrendsCard() {
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
    <div className="max-w-lg w-full bg-white rounded-lg shadow p-4 md:p-6">
      <div className="flex justify-between mb-5">
        <div>
          <h5 className="leading-none text-3xl font-bold text-gray-900 pb-2">
            $12,423
          </h5>
          <p className="text-base font-normal text-gray-500">Sales this week</p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 text-center">
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

      <div id="grid-chart">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={200}
        />
      </div>

      <div className="grid grid-cols-1 items-center border-gray-200 border-t justify-between mt-5">
        <div className="flex justify-between items-center pt-5">
          {/* Dropdown component here */}
          <div className="relative inline-block text-left">
            <button className="text-sm font-medium text-gray-500 hover:text-gray-900 flex items-center">
              Last 7 days
              <svg className="w-2.5 ml-2" viewBox="0 0 10 6">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div className="origin-top-right z-10 absolute mt-2 w-56 rounded-md shadow-lg bg-white">
              <div className="rounded-md ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  {/* Dropdown items here */}
                  {/* ... */}
                </div>
              </div>
            </div>
          </div>

          <a
            href="#"
            className="uppercase text-sm font-semibold flex items-center rounded-lg text-blue-600 hover:text-blue-700 hover:bg-gray-100 px-3 py-2"
          >
            Sales Report
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

export default PricingTrendsCard;
