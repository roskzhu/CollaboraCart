import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function SustainabilityScore() {
  const getChartOptions = () => {
    return {
      series: [90, 85, 70],
      colors: ["#25ac00", "#d67b35", "#01870e"],
      chart: {
        height: "380px",
        width: "100%",
        type: "radialBar",
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          track: {
            background: "#E5E7EB",
          },
          dataLabels: {
            show: false,
          },
          hollow: {
            margin: 0,
            size: "32%",
          },
        },
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -23,
          bottom: -20,
        },
      },
      labels: [
        "Sustainability Score",
        "Carbon Footprint",
        "Distance Travelled",
      ],
      legend: {
        show: true,
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      yaxis: {
        show: false,
        labels: {
          formatter: function (value) {
            return value + "%";
          },
        },
      },
    };
  };

  return (
    <div className="flex-initial px-10 py-5 rounded-lg shadow-md container-sm mx-auto ">
      {/* max-w-lg w-full bg-white rounded-lg shadow p-4 md:p-6 */}
      {/* flex-initial px-10 shadow-md container-sm mx-auto */}
      <h2 className="font-bold text-3xl p-4 bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-600">
        Sustainability Score
      </h2>{" "}
      {/* Updated title */}
      <div className="p-4">
        <ReactApexChart
          options={getChartOptions()}
          series={getChartOptions().series}
          type="radialBar"
          height={420}
        />
      </div>
    </div>
  );
}
export default SustainabilityScore;
