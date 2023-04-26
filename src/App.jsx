import React from "react";
import Table from "./components/Table";

const App = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      email: "johndoe@example.com",
      phone: "555-1234",
      company: "Google",
      salary: 1860000,
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      email: "janesmith@example.com",
      phone: "555-5678",
      company: "Football",
      salary: 660000,
    },
    {
      id: 3,
      name: "Bob Johnson",
      age: 40,
      email: "bobjohnson@example.com",
      phone: "555-9876",
      company: "Netfilx",
      salary: 350000,
    },
    {
      id: 4,
      name: "Alice Brown",
      age: 35,
      email: "alicebrown@example.com",
      phone: "555-4321",
      company: "Facebook",
      salary: 860000,
    },
    {
      id: 5,
      name: "Charlie Lee",
      age: 28,
      email: "charlielee@example.com",
      phone: "555-8765",
      company: "Adobe",
      salary: 860000,
    },
    {
      id: 6,
      name: "John Doe",
      age: 30,
      email: "johndoe@example.com",
      phone: "555-1234",
      company: "Google",
      salary: 860000,
    },
    {
      id: 7,
      name: "Jane Smith",
      age: 25,
      email: "janesmith@example.com",
      phone: "555-5678",
      company: "Football",
      salary: 440000,
    },
    {
      id: 8,
      name: "Bob Johnson",
      age: 40,
      email: "bobjohnson@example.com",
      phone: "555-9876",
      company: "Netfilx",
      salary: 860000,
    },
    {
      id: 9,
      name: "Alice Brown",
      age: 35,
      email: "alicebrown@example.com",
      phone: "555-4321",
      company: "Facebook",
      salary: 860000,
    },
    {
      id: 10,
      name: "Charlie Lee",
      age: 28,
      email: "charlielee@example.com",
      phone: "555-8765",
      company: "Adobe",
      salary: 860000,
    },
    {
      id: 11,
      name: "John Doe",
      age: 30,
      email: "johndoe@example.com",
      phone: "555-1234",
      company: "Google",
      salary: 860000,
    },
    {
      id: 12,
      name: "Jane Smith",
      age: 25,
      email: "janesmith@example.com",
      phone: "555-5678",
      company: "Football",
      salary: 160000,
    },
    {
      id: 13,
      name: "Bob Johnson",
      age: 40,
      email: "bobjohnson@example.com",
      phone: "555-9876",
      company: "Netfilx",
      salary: 630000,
    },
    {
      id: 14,
      name: "Alice Brown",
      age: 35,
      email: "alicebrown@example.com",
      phone: "555-4321",
      company: "Facebook",
      salary: 670000,
    },
    {
      id: 15,
      name: "Charlie Lee",
      age: 28,
      email: "charlielee@example.com",
      phone: "555-8765",
      company: "Adobe",
      salary: 600000,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Carboledger Table</h1>
      <Table data={data} />
    </div>
  );
};

export default App;
