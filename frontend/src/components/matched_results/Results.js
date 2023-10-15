import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";


function MatchedResults() {
  const [apiResponse, setApiResponse] = useState(null);

  const handleOrderClick = async () => {
    const url = "http://127.0.0.1:5000/paybilt/api/v2/payment/OnlineBanking"; 
    function generateUniqueUDFS() {
      return "udf_" + Date.now(); // Using a timestamp as a unique identifier
    }   
    const payload = {
      "email": "Brandon@gmail.com",
      "phone": "+14034881071",
      "first_name": "Brandon",
      "last_name": "Martin",
      "address": "3291 Craven Place",
      "city": "Medicine Hat",
      "state": "Alberta",
      "country": "CA",
      "zip_code": "T1A 0N1",
      "ip_address": "127.0.0.1",
      "ntf_url": "https://postback.url",
      "shipping_cost": 0,
      "udfs": [
        generateUniqueUDFS()
      ],
      "items": [{quantity: 1, unit_price: 3.0}]
    };
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2NDQ5MWY2MjdjM2FhZWQ2ZDg3OTA4MGUiLCJFbnYiOiJzYW5kYm94IiwiQ3JlYXRlRGF0ZVRpbWUiOiIyMDIzLTEwLTEzIDE2OjI3OjIwLjAxNTg5MSIsIkhhc1Nlc3Npb25UaW1lT3V0IjpmYWxzZSwiU2Vzc2lvblRpbWVJbkhvdXJzIjo0MzgwMCwiU2l0ZUlkIjoxODQsImlhdCI6MTY5NzIxNDQ0MCwiZXhwIjoxODU0ODk0NDQwLCJpc3MiOiJNZXJjaGFudEFwaSBJc3N1ZXIiLCJhdWQiOiJNZXJjaGFudEFwaSJ9.dJP2h4BcQbyq1GSes1S5x7C0TS41LEXg-vap_6Ousp8"

    try {  
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ${token}", 
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`);
      }

      const data = await response.json();
      console.log('Paybilt API Response:', data); // Handle the API response here

      window.open(data.bank_payment_url, '_blank');
    } catch (error) {
      console.error("Failed to call Paybilt API:", error);
    }
  };

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
        Summary of Match Results{" "}
      </h2>{" "}
      <p className="text-base font-normal text-gray-500 mb-5">
        <div className="relative overflow-x-auto pb-10">
          <p className="text-base font-normal text-gray-500 mb-5">
            Congratulations on getting matched! <br />
            Below is a table summarizing your savings and recommended purchase quantities based on your buying pool.
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
                  Quantity
                </th>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">5</td>
              </tr>
              <tr className="bg-white dark:bg-white-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                >
                  Budget
                </th>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">1000</td>
              </tr>
              <tr className="bg-white dark:bg-white-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                >
                  Location
                </th>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">Berlin, Germany</td>
              </tr>
              <tr className="bg-white dark:bg-white-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                >
                  Business Sector
                </th>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">IT</td>
              </tr>
              <tr className="bg-white dark:bg-white-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                >
                  Combined Quantity
                </th>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">9</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="font-semibold text-gray-900 dark:text-gray-900">
                <th scope="row" className="px-6 py-3 text-base">
                Savings
                </th>
                <td className="px-6 py-3"></td>
                <td className="px-6 py-3">1800</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <Link
          onClick={handleOrderClick}
          className="btn text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 
                      py-3 px-6 rounded-full transition-transform transform hover:scale-105 text-2xl font-bold"
        >
          Make Your Order
        </Link>
      </p>
    </div>
  );
}
export default MatchedResults;
