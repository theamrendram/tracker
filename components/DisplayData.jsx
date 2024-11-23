"use client";
import React, { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "./ExpenseContext";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

function extractDate(d) {
  const [date, time] = d.split("T");
  let newDate = date.split("-").reverse().join("-");
  return `${newDate}`;
}

const DisplayData = () => {
  const [data, setData] = useState([]);
  const { expenses } = useContext(ExpenseContext);

  useEffect(() => {
    setData(expenses);
    console.log("expenses", expenses);
  }, [expenses]);

  // Define columns
  const columns = [
    {
      accessorKey: "expense",
      header: "Name",
      cell: (info) => <span className="font-medium">{info.getValue()}</span>,
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: (info) => <span className="font-medium">{info.getValue()}</span>,
    },
    {
      accessorKey: "message",
      header: "Message",
      cell: (info) => <span>{info.getValue()}</span>,
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: (info) => <span>{extractDate(info.getValue())}</span>,
    },
  ];

  const table = useReactTable({
    data: expenses,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(), // Enable pagination
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 10, // Default rows per page
      },
    },
  });

  return (
    <div className="w-full h-full">
      {data.length > 0 ? (
        <div className="flex flex-col rounded-lg">
          <table className="min-w-full border border-gray-300">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="border-b border-gray-300 px-4 py-2 text-left">
                      {!header.isPlaceholder && header.column.columnDef.header}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="even:bg-slate-50 odd:bg-slate-300 text-black">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="border-b border-gray-300 px-4 py-2">
                      {cell.column.columnDef.cell(cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
                className="px-2 py-1 border rounded disabled:opacity-50">
                {"<<"}
              </button>
              <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="px-2 py-1 border rounded disabled:opacity-50">
                {"<"}
              </button>
              <button
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="px-2 py-1 border rounded disabled:opacity-50">
                {">"}
              </button>
              <button
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
                className="px-2 py-1 border rounded disabled:opacity-50">
                {">>"}
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span>
                Page{" "}
                <strong>
                  {table.getState().pagination.pageIndex + 1} of{" "}
                  {table.getPageCount()}
                </strong>
              </span>
              <select
                value={table.getState().pagination.pageSize}
                onChange={(e) => table.setPageSize(Number(e.target.value))}
                className="border rounded px-2 py-1">
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center p-4">Loading...</div>
      )}
    </div>
  );
};

export default DisplayData;
