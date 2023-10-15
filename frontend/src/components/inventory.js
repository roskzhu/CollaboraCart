import React, { useState } from "react";
import { Link } from "react-router-dom";

const InventoryTable = () => {
  const initialData = [
    { item: "A4 Paper Reams", category: "Stationery", quantity: 120 },
    { item: "Desk Chairs", category: "Furniture", quantity: 15 },
    { item: "LED Bulbs", category: "Electronics", quantity: 60 },
    // ... other items (add more as needed)
  ];

  const [inventoryData, setInventoryData] = useState(initialData);
  const [editIndex, setEditIndex] = useState(null); // Identify the row being edited
  const [tempEdit, setTempEdit] = useState({}); // Store temporary edits

  const startEdit = (index) => {
    setTempEdit(inventoryData[index]);
    setEditIndex(index);
  };

  const handleSave = () => {
    const newData = [...inventoryData];
    newData[editIndex] = tempEdit;
    setInventoryData(newData);
    setEditIndex(null);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      handleSave(index);
    }
  };

  const handleInputChange = (e, field) => {
    setTempEdit({ ...tempEdit, [field]: e.target.value });
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full max-w-6xl mx-auto mb-20">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Item
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((product, index) => (
            <tr
              key={index}
              className={`bg-white border-b hover:bg-gray-50 ${
                index === inventoryData.length - 1 && "border-none"
              }`}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {editIndex === index ? (
                  <input
                    value={tempEdit.item}
                    onKeyDown={(e) => handleKeyDown(e, "item")}
                    onChange={(e) => handleInputChange(e, "item")}
                  />
                ) : (
                  <>
                    {product.item}
                    {/* Alert icon for low stock */}
                    {product.quantity < 30 && (
                      <span className="text-red-600 ml-2 cursor-pointer relative">
                        <Link to="/ItemSubmission">⚠️</Link>
                      </span>
                    )}
                  </>
                )}
              </th>
              <td className="px-6 py-4">
                {editIndex === index ? (
                  <input
                    value={tempEdit.category}
                    onKeyDown={(e) => handleKeyDown(e, "category")}
                    onChange={(e) => handleInputChange(e, "category")}
                  />
                ) : (
                  product.category
                )}
              </td>
              <td className="px-6 py-4">
                {editIndex === index ? (
                  <input
                    type="number"
                    value={tempEdit.quantity}
                    onKeyDown={(e) => handleKeyDown(e, "quantity")}
                    onChange={(e) => handleInputChange(e, "quantity")}
                  />
                ) : (
                  product.quantity
                )}
              </td>
              <td className="px-6 py-4 text-right">
                {editIndex === index ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="font-medium text-blue-600 hover:underline mr-4"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditIndex(null)}
                      className="font-medium text-red-600 hover:underline"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => startEdit(index)}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
