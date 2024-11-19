import React, { useState, useMemo } from "react";
import SearchBar from "./SearchBar";

interface TableProps<T> {
  data: T[]; // Table data as an array of objects
  columns: { key: keyof T; label: string }[]; // Columns config
  title: string; // Table title
}

const Table = <T extends object>({ data, columns, title }: TableProps<T>) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  // Filtered and paginated data
  const filteredData = useMemo(() => {
    return data.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [data, searchValue]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return filteredData.slice(start, start + rowsPerPage);
  }, [filteredData, currentPage, rowsPerPage]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <div className="w-full bg-white rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <div className="flex justify-between items-center mb-4">
        <SearchBar
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          placeholder="Search table..."
        />

        <select
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className="border border-gray-300 rounded-md p-2 text-sm"
        >
          {[5, 10, 20, 50].map((option) => (
            <option key={option} value={option}>
              Show {option}
            </option>
          ))}
        </select>
      </div>

      <table className="w-full border-collapse border border-gray-300 text-left">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="border border-gray-300 px-4 py-2 bg-gray-100"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {columns.map((col) => (
                  <td
                    key={String(col.key)}
                    className="border border-gray-300 px-4 py-2"
                  >
                    {row[col.key] as any}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-4 text-gray-500"
              >
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <p className="text-sm">
          Showing {currentPage} of {totalPages || 1} | Rows {rowsPerPage}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-3 py-1 border border-gray-300 rounded-md"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-3 py-1 border border-gray-300 rounded-md"
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
