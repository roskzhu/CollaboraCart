import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";

function Recommendations({ formData }) {
  const [apiResponse, setApiResponse] = useState(null);

  const handleRecommendations = async (payload) => {
    const url = "http://127.0.0.1:5000/send_purchases";
    const token =
      "I1NiIsInR5cCI6IkpXVCJ9.OiM2FhZWQ2ZDg3OTA4MGUiLCJFbnYiOiJzYW5kYm94IiwiQ3JlYXRlRGF0ZVRpbWUiOiIyMDIzLTEwLTEzIDE2OjI3OjIwLjAxNTg5MSIsIkhhc1Nlc3Npb25UaW1lT3V0IjpmYWxzZSwiU2Vzc2lvblRpbWVJbkhvdXJzIjo0MzgwMCwiU2l0ZUlkIjoxODQsImlhdCI6MTY5NzIxNDQ0MCwiZXhwIjoxODU0ODk0NDQwLCJpc3MiOiJNZXJjaGFudEFwaSBJc3N1ZXIiLCJhdWQiOiJNZXJjaGFudEFwaSJ9.dJP2h4BcQbyq1GSes1S5x7C0TS41LEXg-vap_6Ousp8";

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
      console.log("Recombee API Response:", data); // Handle the API response here

    } catch (error) {
      console.error("Failed to call Recombee API:", error);
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

  return ( <>
    <div className="bg-slate-100 flex-initial px-10 py-5 rounded-lg shadow-md container-sm mx-auto mb-20">
            <h2 className="font-bold text-4xl p-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800">
              Suggestions based on your purchase history
            </h2>
            <div className=" container flex">
              <div className = "text-sm bg-white container flex-initial p-5 m-2 shadow-md">
              <img class="max-h-13 max-w-full" src="https://m.media-amazon.com/images/I/81eH0O03zFS.__AC_SX300_SY300_QL70_ML2_.jpg" alt="image description"></img>
                150×100×18mm Oversized Lettermail Postal Boxes
                <div>
                  <a href="./ItemSubmission" class="bg-white border border-gray-400 font-semibold text-black font-bold py-2 px-4 rounded inline-block hover:bg-slate-100">
                    Buy Now with 
                    <br></br>
                    <span className="bg-clip-text text-sm px-1 text-transparent font-bold bg-gradient-to-r from-blue-500 to-blue-800">
                      CollaboraCart
                    </span>
                  </a>

                </div>
                
              </div>
              <div className = "text-sm bg-white container flex-initial p-5 m-2 shadow-md">
              <img class="max-h-13 max-w-full" src="https://img.uline.com/is/image/uline/S-1070?$Mobile_SI$" alt="image description"></img>
                Cloth Mailing Bags - 3 x 5"
                  <br></br>
                  <br></br>
                  <a href="./ItemSubmission" class="bg-white border border-gray-400 font-semibold text-black font-bold py-2 px-4 rounded inline-block hover:bg-slate-100">
                    Buy Now with 
                    <br></br>
                    <span className="bg-clip-text text-sm px-1 text-transparent font-bold bg-gradient-to-r from-blue-500 to-blue-800">
                      CollaboraCart
                    </span>
                  </a>

                </div>
              <div className = "text-sm bg-white container flex-initial p-5 m-2 shadow-md">
              <img class="max-h-13 max-w-full" src="https://img.uline.com/is/image/uline/S-3401?$Mobile_SI$" alt="image description"></img>
                  Returnable Poly Mailers - 19 x 24"
                  <br></br>
                  <a href="./ItemSubmission" class="bg-white border border-gray-400 font-semibold text-black font-bold py-2 px-4 rounded inline-block hover:bg-slate-100">
                    Buy Now with 
                    <br></br>
                    <span className="bg-clip-text text-sm px-1 text-transparent font-bold bg-gradient-to-r from-blue-500 to-blue-800">
                      CollaboraCart
                    </span>
                  </a>

              </div>
              <div className = "text-sm bg-white container flex-initial p-5 m-2 shadow-md">
              <img class="max-h-13 max-w-full" src="https://img.uline.com/is/image/uline/S-22402P?$Mobile_Zoom$" alt="image description"></img>
              Colored Poly Bubble Mailers #0 - 6 x 10", Pink
              <br></br>
                  <a href="./ItemSubmission" class="bg-white border border-gray-400 font-semibold text-black font-bold py-2 px-4 rounded inline-block hover:bg-slate-100">
                    Buy Now with 
                    <br></br>
                    <span className="bg-clip-text text-sm px-1 text-transparent font-bold bg-gradient-to-r from-blue-500 to-blue-800">
                      CollaboraCart
                    </span>
                  </a>

              </div>
              
            </div>
          

          </div>
    </>
  );

};

export default Recommendations;