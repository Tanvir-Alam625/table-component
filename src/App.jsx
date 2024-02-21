import { useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Table from "./components/Table";
import { users } from "./data/users";
import { CiMenuKebab } from "react-icons/ci";
import { LuSettings } from "react-icons/lu";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (row) => (
        <a
          className="text-blue-500 duration-200 ease-in-out hover:underline"
          href={`mailto:${row.email}`}
        >
          {row.email}
        </a>
      ),
    },
    {
      title: "Age",
      dataIndex: "age",
      render: (row) => (
        <span>
          {row.age} {row.age > 1 ? "years" : "year"}
        </span>
      ),
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      render: (row) => (
        <a
          className="text-blue-500 whitespace-nowrap duration-200 ease-in-out hover:underline"
          href={`tel:${row.phone}`}
        >
          {row.phone}
        </a>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="flex justify-end">
          <CiMenuKebab className="text-slate-700" />
        </div>
      ),
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold text-center text-slate-700  my-3">
        Table Task
      </h2>
      <div className="table-container">
        <div className="header">
          <h2 className="title">Users List</h2>
          <Dropdown setIsOpen={setIsOpen}>
            <Dropdown.Trigger onClick={() => setIsOpen(!isOpen)}>
              <LuSettings size={20} />
            </Dropdown.Trigger>
            <Dropdown.Content isOpen={isOpen}>
              <ul>
                <li>Dropdown Item 1</li>
                <li>Dropdown Item 2</li>
                <li>Dropdown Item 3</li>
              </ul>
            </Dropdown.Content>
          </Dropdown>
        </div>
        <Table isSerially data={users} columns={columns} />
      </div>
    </>
  );
}

export default App;
