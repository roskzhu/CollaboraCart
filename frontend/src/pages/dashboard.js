import React, { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePayment = () => {
    setLoading(true);

    // Define your API request payload
    const data = {
      email: email,
      phone: phone,
      first_name: 'Brandon',
      last_name: 'Martin',
      address: '3291 Craven Place',
      city: 'Medicine Hat',
      state: 'Alberta',
      country: 'CA',
      zip_code: 'T1A 0N1',
      ip_address: '127.0.0.1',
      ntf_url: 'https://postback.url',
      shipping_cost: 0,
      udfs: ['udf1'],
      bank_id: 101,
      return_url: 'https://google.ca',
      convenience_fee: 0,
    };

    // Add the Authorization header with your Bearer token
    const config = {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2NDQ5MWY2MjdjM2FhZWQ2ZDg3OTA4MGUiLCJFbnYiOiJzYW5kYm94IiwiQ3JlYXRlRGF0ZVRpbWUiOiIyMDIzLTEwLTEzIDE2OjI3OjIwLjAxNTg5MSIsIkhhc1Nlc3Npb25UaW1lT3V0IjpmYWxzZSwiU2Vzc2lvblRpbWVJbkhvdXJzIjo0MzgwMCwiU2l0ZUlkIjoxODQsImlhdCI6MTY5NzIxNDQ0MCwiZXhwIjoxODU0ODk0NDQwLCJpc3MiOiJNZXJjaGFudEFwaSBJc3N1ZXIiLCJhdWQiOiJNZXJjaGFudEFwaSJ9.dJP2h4BcQbyq1GSes1S5x7C0TS41LEXg-vap_6Ousp8',
      },
    };

    // Make a POST request to the API with the Authorization header
    axios
      .post("/api/v2/payment/eTransfer", data, config) // Use the proxy route to the API
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        console.error("Error while processing payment:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };


  return (
    <div className="min-h-screen bg-[#f0f0f0] font-inter">
      <div className="text-center mt-5">
        <h1 className="text-4xl font-extrabold mt-4 text-[#0084fc]">
          Payment Page
        </h1>
      </div>

      <div className="w-full max-w-md p-6 mx-auto mt-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-[#333333]">Make a Payment</h2>
        <p className="text-gray-600 mt-2">
          Please enter your email and phone number for payment:
        </p>

        <form className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:ring focus:ring-lightPurple focus:ring-opacity-50"
              placeholder="you@example.com"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:ring focus:ring-lightPurple focus:ring-opacity-50"
              placeholder="123-456-7890"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div>

          <div className="flex items-center">
            <button
              type="button"
              onClick={handlePayment}
              className="bg-[#0084fc] text-white rounded-lg p-2 w-full ml-4 shadow-lg"
              disabled={loading}
            >
              <div className="relative flex items-center space-x-4 justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/InteracLogo.svg/2048px-InteracLogo.svg.png"
                  className="w-5 h-5 absolute left-0"
                  alt="Interac logo"
                />
                {loading ? "Processing..." : "Pay with Interac"}
              </div>
            </button>
          </div>
        </form>
      </div>

      {response && (
        <div className="mt-6 bg-white rounded-lg p-4">
          <h2 className="text-xl font-semibold text-[#0084fc]">Payment Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
