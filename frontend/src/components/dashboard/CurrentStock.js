// src/components/dashboard/CurrentStockCard.js

import React from "react";
import ReactApexChart from "react-apexcharts";

function CurrentStockCard() {
  const getChartOptions = () => {
    return {
      series: [52.8, 26.8, 20.4],
      colors: ["#1C64F2", "#16BDCA", "#9061F9"],
      chart: {
        height: 420,
        width: "100%",
        type: "pie",
      },
      labels: ["Item1", "Item2", "Item3"], // Updated labels
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
      <h2 className="font-bold text-2xl p-4">Inventory</h2>{" "}
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
