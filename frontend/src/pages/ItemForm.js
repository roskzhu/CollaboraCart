import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const ItemForm = () => {
  const [businessInfo, setBusinessInfo] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBusinessInfo = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
        };

        const response = await fetch(
          `http://127.0.0.1:5000/GetMostRecentBusiness`,
          { headers }
        );

        if (!response.ok) {
          throw new Error(`An error has occurred: ${response.status}`);
        }

        const result = await response.json();

        // Then fetch full business details based on the company name
        const businessResponse = await fetch(
          `http://127.0.0.1:5000/GetBusinessInfo?company_name=${encodeURIComponent(
            result.company_name
          )}`
        );

        if (!businessResponse.ok) {
          throw new Error(`An error has occurred: ${businessResponse.status}`);
        }

        const businessResult = await businessResponse.json();

        setBusinessInfo(businessResult);
        console.log("Business Information fetched:", businessResult);
      } catch (error) {
        console.error("Failed to fetch business information:", error);
      }
    };

    fetchBusinessInfo();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Convert the form string values to floating numbers
    const itemQuantity = parseFloat(event.target.floating_amount.value);
    const itemBudget = parseFloat(event.target.floating_budget.value);

    const data = {
      item_name: event.target.floating_item.value,
      quantity: itemQuantity, // Using the parsed value
      budget: itemBudget, // Using the parsed value
      notes: event.target.floating_notes.value,
      ...businessInfo,
    };

    console.log("Form data to submit:", data);

    try {
      const response = await fetch("http://127.0.0.1:5000/ItemSubmission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`);
      }

      const result = await response.json();
      console.log("Form submission result:", result);
      // Pass payload to matches page
      console.log("Data to pass", data);
      navigate("/match", { state: data });
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="bg-white h-screen flex flex-col justify-center items-center font-inter"
    >
      <h1 className="text-3xl text-black font-bold mb-4">Need another item?</h1>
      <p className="text-gray-500 text-base">
        Fill in the form and we'll connect
      </p>
      <p className="text-gray-500 text-base pb-7">you to another business.</p>

      <form onSubmit={handleSubmit}>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="item"
            name="floating_item"
            id="floating_item"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_item"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Item Name
          </label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="floating_amount"
              id="floating_amount"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_amount"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Quantity
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="floating_budget"
              id="floating_budget"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_budget"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Budget
            </label>
          </div>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="name"
            name="floating_notes"
            id="floating_notes"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_notes"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>
        <div className="flex flex-col items-center mt-4 space-y-4">
          {" "}
          {/* This div centers the buttons */}
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-14 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="text-blue-600 hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-blue-600"
          >
            Back to Dashboard
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
