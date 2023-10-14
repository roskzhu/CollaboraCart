// src/components/dashboard/TransactionHistory.js

import React from "react";

function TransactionHistory() {
  // Sample transaction data
  const transactions = [
    {
      id: 1,
      date: "2023-10-14",
      description: "Office Supplies",
      amount: 150.0,
    },
    {
      id: 2,
      date: "2023-10-13",
      description: "Printer Ink",
      amount: 45.99,
    },
    {
      id: 3,
      date: "2023-10-12",
      description: "Cleaning Supplies",
      amount: 75.5,
    },
    // Add more transactions as needed
  ];

  return (
    <div className="flex-initial px-10 py-5 rounded-lg shadow-md container-sm mx-auto">
      <h2 className="font-bold text-2xl p-4">Transaction History</h2>
      <div className="p-4">
        <ul className="divide-y divide-gray-300">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="py-2">
              <div className="flex justify-between">
                <div className="text-lg font-semibold">
                  {transaction.description}
                </div>
                <div className="text-gray-600">{transaction.date}</div>
              </div>
              <div className="flex justify-between mt-1">
                <div className="text-gray-600">Amount:</div>
                <div className="text-lg font-semibold">
                  ${transaction.amount.toFixed(2)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TransactionHistory;
