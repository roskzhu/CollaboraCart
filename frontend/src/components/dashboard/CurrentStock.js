// src/components/dashboard/CurrentStockCard.js

import React from "react";
import ReactApexChart from "react-apexcharts";

function CurrentStockCard() {
  const getChartOptions = () => {
    return {
      series: [52.8, 22.8],
      colors: ["#2AC58E", "#928DDF",],
      chart: {
        height: 420,
        width: "100%",
        type: "pie",
      },
      labels: ["Sustainably Sourced Stock", "Non-Sustainably Sourced Stock"], // Updated labels
      plotOptions: {
        pie: {
          labels: {
            show: true,
            name: {
              offsetY: 22, // Adjust the label position vertically
            },
            value: {
              offsetY: 0, // Center the percentage value
            },
          },
        },
      },
      legend: {
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      // Add other chart options here as needed
    };
  };

  return (
    <div className="flex-initial px-10 shadow-md container-sm mx-auto">
      <h2 className="font-bold text-2xl p-3">Your Sustainability Score:</h2>{" "}
      <h2 className="font-bold text-4xl px-3">7</h2>{" "}
      {/* Updated title */}
      <div className="p-4">
        <ReactApexChart
          options={getChartOptions()}
          series={getChartOptions().series}
          type="pie"
          height={420}
        />
      </div>
    </div>
  );
}

export default CurrentStockCard;
