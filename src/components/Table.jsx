import React, { useRef, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({ data }) => {
  const tableBodyRef = useRef(null);

  useEffect(() => {
    // Set the height of the table body to enable scrolling
    if (tableBodyRef.current) {
      const headerRowHeight =
        tableBodyRef.current.querySelector("tr").clientHeight;
      tableBodyRef.current.style.height = `calc(100% - ${headerRowHeight}px)`;
    }
  }, []);

  return (
    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <div className="table-wrapper">
        <table className="min-w-full divide-y divide-gray-200">
          <TableHeader />
          <tbody
            ref={tableBodyRef}
            className="bg-white divide-y divide-gray-200 overflow-auto text-center"
          >
            {data.map((item) => (
              <TableRow key={item.id} {...item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
