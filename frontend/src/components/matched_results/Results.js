import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function MatchedResults({ formData }) {
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
    <div className="flex-initial px-10 py-5 rounded-lg shadow-md container-sm mx-auto mb-20">
      <h2 className="font-bold text-4xl p-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800">
        Summary of Match Results
      </h2>{" "}
      <p className="text-base font-normal text-gray-500 mb-5">
        <b className="text-xl">Congratulations on getting matched!</b> <br />
        Below is a table summarizing your savings and recommended
        <br /> purchase quantities based on your buying pool.
      </p>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-white-700 dark:text-black-400">
          <tr>
            <th scope="col" className="px-6 py-3 rounded-l-lg">
              Factor
            </th>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3 rounded-r-lg">
              Matched Value
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-white-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
            >
              Item
            </th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">{formData?.item_name}</td>
          </tr>
          <tr className="bg-white dark:bg-white-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
            >
              Quantity
            </th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">{formData?.quantity}</td>
          </tr>
          <tr className="bg-white dark:bg-white-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
            >
              Budget
            </th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">{formData?.budget}</td>
          </tr>
          <tr className="bg-white dark:bg-white-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
            >
              Location
            </th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">{formData?.location}</td>
          </tr>
          <tr className="bg-white dark:bg-white-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
            >
              Company
            </th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">{formData?.company_name}</td>
          </tr>
          <tr className="bg-white dark:bg-white-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
            >
              Business Sector
            </th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">{formData?.business_sector}</td>
          </tr>
          {/* ... other code ... */}
        </tbody>
        {/* ... other code ... */}
      </table>
      {/* ... other code ... */}
    </div>
  );
}
export default MatchedResults;
