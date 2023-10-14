import React, { useState } from "react";
const sdk = require('@paybilt/v2.0.0#1lhfu46xylim1dveo');

const Dashboard = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });

  const [paymentInstructions, setPaymentInstructions] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePayment = async () => {
    const paymentData = {
      email: formData.email,
      phone: formData.phone,
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
    };

    const authorizationToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2NDQ5MWY2MjdjM2FhZWQ2ZDg3OTA4MGUiLCJFbnYiOiJzYW5kYm94IiwiQ3JlYXRlRGF0ZVRpbWUiOiIyMDIzLTEwLTEzIDE2OjI3OjIwLjAxNTg5MSIsIkhhc1Nlc3Npb25UaW1lT3V0IjpmYWxzZSwiU2Vzc2lvblRpbWVJbkhvdXJzIjo0MzgwMCwiU2l0ZUlkIjoxODQsImlhdCI6MTY5NzIxNDQ0MCwiZXhwIjoxODU0ODk0NDQwLCJpc3MiOiJNZXJjaGFudEFwaSBJc3N1ZXIiLCJhdWQiOiJNZXJjaGFudEFwaSJ9.dJP2h4BcQbyq1GSes1S5x7C0TS41LEXg-vap_6Ousp8'; // Replace with your actual API token

    try {
      const response = await sdk.eTransferPayment1(paymentData, { authorization: authorizationToken });
      const responseData = response.data;

      if (responseData.status === "approved") {
        setPaymentInstructions(responseData.message);
        setError(null);
      } else {
        setPaymentInstructions("");
        setError(responseData.message);
      }
    } catch (error) {
      console.error("Error while processing payment:", error);
      setPaymentInstructions("");
      setError("An error occurred during the payment process.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f0f0] font-inter">
      {/* Your existing JSX code... */}
      
      <div className="p-4 text-center">
        <h2>Enter Your Information:</h2>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <button
          className="bg-[#0084fc] text-white rounded-lg p-4 shadow-lg"
          onClick={handlePayment}
        >
          Buy More Stock
        </button>
        {paymentInstructions && (
          <div>
            <h3>Payment Instructions:</h3>
            <p>{paymentInstructions}</p>
          </div>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Dashboard;
