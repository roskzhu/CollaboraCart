import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#f0f0f0] font-inter">
      <div className="bg-[#0084fc] text-white py-4 px-8">
        <h1 className="text-4xl font-extrabold">Dashboard</h1>
      </div>

      <div className="mt-4 p-4">
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <h2 className="text-2xl font-semibold text-[#333333]">My Current Stock</h2>
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th className="border px-4 py-2">Product 1</th>
                <th className="border px-4 py-2">Product 2</th>
                <th className="border px-4 py-2">Product 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 text-center">100</td>
                <td className="border px-4 py-2 text-center">200</td>
                <td className="border px-4 py-2 text-center">300</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="p-4">
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <h2 className="text-2xl font-semibold text-[#333333]">Supplies Status</h2>
          <p className="text-lg text-green-500">Sufficient Supplies</p>
        </div>
      </div>

      <div className="mt-4 flex justify-between p-4">
        <div className="bg-white rounded-full w-1/4 p-4 shadow-lg text-center mx-auto">
          <h2 className="text-2xl font-semibold text-[#333333]">Market Price</h2>
          <p className="text-lg text-[#666666]">$500</p>
        </div>
        <div className="bg-white rounded-full w-1/4 p-4 shadow-lg text-center mx-auto">
          <h2 className="text-2xl font-semibold text-[#333333]">Current Price</h2>
          <p className="text-lg text-[#666666]">$400</p>
        </div>
      </div>

      <div className="mt-4 p-4 text-center">
        <div className="bg-[#23A779] rounded-full w-1/4 p-4 shadow-lg mx-auto">
          <h2 className="text-2xl font-semibold text-white">Profit</h2>
          <p className="text-lg text-white">$100</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
