import React from "react";

const columns = [
  {
    headerText: "ID",
  },
  {
    headerText: "Name",
  },
  {
    headerText: "Email",
  },
  {
    headerText: "Phone",
  },
  {
    headerText: "Company",
  },
  {
    headerText: "salary",
  },
];

const TableHeader = () => {
  return (
    <thead className="sticky top-0 z-10 bg-sky-400">
      <tr>
        {columns.map((column, index) => (
          <th
            key={index}
            scope="col"
            className="px-3 py-2 text-xs font-medium text-white uppercase sm:px-6 sm:py-3"
          >
            {column.headerText}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
