// src/components/dashboard/TransactionHistory.js

import React from "react";

function TransactionHistory() {
  // Sample transaction data
  const transactions = [
    {
      id: 1,
      date: "2023-10-11",
      description: "Espresso Coffee Beans (5kg)",
      amount: 125.0,
    },
    {
      id: 2,
      date: "2023-10-09",
      description: "Paper Coffee Cups (1000 units)",
      amount: 95.0,
    },
    {
      id: 3,
      date: "2023-10-06",
      description: "Stir Sticks (500 units)",
      amount: 25.0,
    },
    // ... other transactions (add more as needed)
  ];

  return (
    <div className="flex-initial px-10 py-10 rounded-lg shadow-md container-sm mx-auto">
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
