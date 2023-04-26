import React from "react";

const TableRow = ({ id, name, email, phone, company, salary }) => {
  const isOdd = id % 2 !== 0;
  const rowColor = isOdd ? "bg-gray-50" : "";

  return (
    <tr className={`text-sm ${rowColor}`}>
      <td className="px-6 py-4 whitespace-nowrap">{id}</td>
      <td className="px-6 py-4 whitespace-nowrap">{name}</td>
      <td className="px-6 py-4 whitespace-nowrap">{email}</td>
      <td className="px-6 py-4 whitespace-nowrap">{phone}</td>
      <td className="px-6 py-4 whitespace-nowrap">{company}</td>
      <td className="px-6 py-4 whitespace-nowrap">{salary}</td>
    </tr>
  );
};

export default TableRow;
