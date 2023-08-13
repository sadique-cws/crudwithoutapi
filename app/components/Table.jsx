"use client";
import Link from "next/link";
import { deleteStudent } from "../actions";
import { useEffect, useState } from "react";

const Table = ({ data }) => {
  const [records, setRecords] = useState(data);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search == "") {
      setRecords(data);
    } else {
      setRecords(
        data.filter((datum) => {
          if (datum.name == search) {
            return datum;
          }
        })
      );
    }
  };

  return (
    <div className="mt-4 px-10">
      <div className="flex-1 flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold capitalize mb-3">View all Records</h1>
        <form method="get" onSubmit={handleSubmit}>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 text-lg outline-0 focus:border-teal-600 rounded border-2"
            placeholder="Search Here..."
          />
          <input
            type="submit"
            className="bg-teal-600 hover:bg-teal-900 text-white px-3 py-2 text-lg border-2 border-teal-300"
          />
        </form>
      </div>
      <div className="border shadow-xl p-5 rounded-lg w-full">
        <div className="px-10">
          <table className="w-full border">
            <thead>
              <tr>
                <th className="border p-3">id</th>
                <th className="border p-3">name</th>
                <th className="border p-3">Contact</th>
                <th className="border p-3">email</th>
                <th className="border p-3">City</th>
                <th className="border p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map((value, key) => (
                <tr>
                  <td className="border p-2">{value._id}</td>
                  <td className="border p-2">{value.name}</td>
                  <td className="border p-2">{value.contact}</td>
                  <td className="border p-2">{value.email}</td>
                  <td className="border p-2">{value.city}</td>
                  <td className="border p-2 flex gap-2">
                    <form action={deleteStudent} method="post">
                      <input type="hidden" value={value._id} name="id" />
                      <input
                        type="submit"
                        value="Delete"
                        className="bg-red-600 text-white hover:bg-red-700 px-3 py-2 rounded"
                      />
                    </form>
                    <Link
                      href={`/edit/${value._id}`}
                      className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-2 rounded"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
