import React from "react";
import axios from "axios";

const CheckoutComponent = () => {
  const handleCheckout = async () => {
    const amount = 50; // Get this from your frontend, perhaps a cart total or fixed amount

    const response = await axios.post("http://127.0.0.1:5000/start-etransfer", {
      amount: amount,
    });

    if (response.data.success) {
      // Redirect the user to Paybilt's eTransfer URL
      window.location.href = response.data.url;
    } else {
      // Handle any errors or show a message to the user
      console.error("Failed to initiate eTransfer with Paybilt");
    }
  };

  return (
    <div className="p-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleCheckout}
      >
        Pay with Paybilt
      </button>
    </div>
  );
};

export default CheckoutComponent;
