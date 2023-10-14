import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function PortfolioCard() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const options = {
    chart: {
      type: "bar",
      width: "100%",
      height: 400,
      sparkline: { enabled: false },
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "80%", // Adjusted for thicker bars
        borderRadiusApplication: "end",
        borderRadius: 6,
        dataLabels: {
          enabled: false, // This line ensures the labels on the bars are hidden
        },
      },
    },

    xaxis: {
      categories: ["Aug", "Sep", "Oct", "Nov", "Dec"],
      labels: {
        show: true,
        formatter: function (value) {
          return "$" + value;
        },
      },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      labels: {
        show: true,
      },
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -20,
      },
    },
    fill: { opacity: 1 },
    tooltip: {
      shared: true,
      intersect: false,
      formatter: function (value) {
        return "$" + value;
      },
    },
  };

  const series = [
    {
      name: "Income",
      color: "#31c460",
      data: [3400, 3600, 3200, 3450, 4120],
    },
    {
      name: "Expense",
      color: "#F05252",
      data: [2810, 2866, 2788, 3100, 3200],
    },
  ];

  return (
    <div className="max-w-lg  w-full bg-white rounded-lg shadow p-4 md:p-6">
      <div className="flex justify-between border-gray-200 border-b pb-3">
        <dl>
          <dt className="text-base font-normal text-gray-500 pb-1">Profit</dt>
          <dd className="leading-none text-3xl font-bold text-gray-900">
            $5,405
          </dd>
        </dl>
        <div>
          <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md">
            {/*... SVG for arrow ...*/}
            Profit rate 23.5%
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 py-3">
        <dl>
          <dt className="text-base font-normal text-gray-500 pb-1">Income</dt>
          <dd className="leading-none text-xl font-bold text-green-500">
            $23,635
          </dd>
        </dl>
        <dl>
          <dt className="text-base font-normal text-gray-500 pb-1">Expense</dt>
          <dd className="leading-none text-xl font-bold text-red-600">
            -$18,230
          </dd>
        </dl>
      </div>
      <div id="bar-chart">
        <ReactApexChart options={options} series={series} type="bar" />
      </div>
      <div className="grid grid-cols-1 items-center border-gray-200 border-t justify-between">
        <div className="flex justify-between items-center pt-5">
          <button
            onClick={toggleDropdown}
            className="text-sm font-medium text-gray-500 hover:text-gray-900 text-center inline-flex items-center"
          >
            Last 6 months
            {/*... SVG for dropdown ...*/}
          </button>
          {isOpen && (
            <div
              id="lastDaysdropdown"
              className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
            >
              {/*... Dropdown menu items ...*/}
            </div>
          )}
          <a
            href="#"
            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 hover:bg-gray-100 px-3 py-2"
          >
            Revenue Report
            {/*... SVG for next ...*/}
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
