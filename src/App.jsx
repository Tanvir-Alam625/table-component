import { useMemo, useState } from "react";
import { users } from "./data/users";
import { CiMenuKebab } from "react-icons/ci";
import { LuSettings } from "react-icons/lu";
import Dropdown from "./components/Dropdown/Dropdown";
import Table from "./components/Table/Table";
import "./styles/App.css";
import CheckBox from "./components/CheckBox/CheckBox";
const columnsData = [
  {
    title: "Sr. No.",
    dataIndex: "id",
    show: true,
  },
  {
    title: "Name",
    dataIndex: "name",
    show: true,
  },
  {
    title: "Email",
    dataIndex: "email",
    show: true,
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
    show: true,
    render: (row) => (
      <span>
        {row.age} {row.age > 1 ? "years" : "year"}
      </span>
    ),
  },
  {
    title: "Address",
    dataIndex: "address",
    show: false,
  },
  {
    title: "Phone",
    dataIndex: "phone",
    show: true,
    render: (row) => (
      <a
        className="text-blue-500 inline-block px-2 whitespace-nowrap duration-200 ease-in-out hover:underline"
        href={`tel:${row.phone}`}
      >
        {row.phone}
      </a>
    ),
  },
  {
    title: "Occupation",
    dataIndex: "occupation",
    show: false,
  },
  {
    title: "Education",
    dataIndex: "education",
    show: false,
  },
  {
    title: "Action",
    dataIndex: "action",
    show: true,
    render: () => (
      <div className="flex justify-end">
        <CiMenuKebab className="text-slate-700" />
      </div>
    ),
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [columns, setColumns] = useState(columnsData);

  const toggleColumns = (index) => {
    setColumns((prevState) => {
      return prevState.map((item, idx) => {
        if (idx === index) {
          return {
            ...item,
            show: !item.show,
          };
        }
        return item;
      });
    });
  };

  const availableColumns = useMemo(() => {
    return columns.filter((column) => column.show === true);
  }, [columns]);

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
                {columns?.map((col, index) => {
                  return (
                    <div
                      className="flex gap-2 cursor-pointer my-1 items-center"
                      key={index}
                    >
                      <CheckBox
                        name={`checkbox_${index}`}
                        id={`checkbox_${index}`}
                        checked={col?.show || false}
                        onChange={() => toggleColumns(index)}
                        className="my-checkbox"
                      />
                      <label htmlFor={`checkbox_${index}`}>{col.title}</label>
                    </div>
                  );
                })}
              </ul>
            </Dropdown.Content>
          </Dropdown>
        </div>
        {availableColumns.length > 0 ? (
          <Table data={users} columns={availableColumns} />
        ) : (
          <div className="text-center">No columns selected</div>
        )}
      </div>
    </>
  );
}

export default App;
