import React, { useState, useMemo } from "react";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";
import PreviousIcon from "../../assets/icons/PreviousIcon";
import NextIcon from "../../assets/icons/NextIcon";
import UpwardIcon from "../../assets/icons/UpwardIcon";
import PencilLine from "../../assets/icons/PencilLine";
import Eye from "../../assets/icons/Eye";
import Trash from "../../assets/icons/Trash";
import { useNavigate } from "react-router-dom";
import { string } from "yup";

interface TableProps<T> {
  data: T[];
  columns: { key: keyof T; label: string }[];
  headerContents: {
    title?: string;
    search?: { placeholder: string };
    sort?: {
      sortHead: string;
      sortList: { label: string; icon: React.ReactNode }[];
    }[];
  };
  actionList?: {
    label: string;
    function: (editId?: any, viewId?: any, deleteId?: any) => void;
  }[];
}

const Table = <T extends object>({
  data,
  columns,
  headerContents,
  actionList,
}: TableProps<T>) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  // Filter data based on the search value
  const filteredData = useMemo(() => {
    return data.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [data, searchValue]);

  // Paginate the filtered data
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return filteredData.slice(start, start + rowsPerPage);
  }, [filteredData, currentPage, rowsPerPage]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  // Function to determine row styles based on `status`
  const getStatusClass = (status: string | undefined) => {
    switch (status) {
      case "New":
        return "bg-red-500 text-white py-2 px-2 w-fit rounded-lg";
      case "Contacted":
        return "bg-green-400 text-white py-2 px-2 rounded-lg";
      case "Closed":
        return "bg-blue-300 text-white py-2 px-2 rounded-lg";
      default:
        return "";
    }
  };

  // Render table header
  const renderHeader = () => (
    <div className={`flex  ${headerContents.search&&!headerContents.title&&!headerContents.sort?"justify-start":'justify-between'} items-center mb-4`}>
      {headerContents.title && (
        <h2 className="text-lg font-bold">{headerContents.title}</h2>
      )}
      {headerContents.search && (
        <div className={`w-[440px] ${headerContents.title && "ms-auto me-2"}`}>
          <SearchBar
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            placeholder={headerContents.search.placeholder}
          />
        </div>
      )}
      {headerContents.sort && (
        <div className="flex gap-2">
          {headerContents.sort.map((sort, index) => (
            <SortBy key={index} sort={sort} />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full bg-white rounded-lg p-4">
      {renderHeader()}
      <table className="w-full border-collapse border text-left">
        <thead>
          <tr>
            <th className="border p-4 bg-[#F6F9FC] text-sm text-center text-[#303F58] font-medium">
              SI No.
            </th>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="border p-4 bg-[#F6F9FC] text-sm text-center text-[#303F58] font-medium"
              >
                {col.label}
              </th>
            ))}
            <th className="border p-4 bg-[#F6F9FC] text-center text-sm text-[#303F58] font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                <td className="border-b border-gray-300 p-4 text-xs gap-2 text-[#4B5C79] font-medium bg-[#FFFFFF] text-center">
                  {rowIndex + 1}
                </td>
                {columns.map((col) => (
                  <td
                    key={String(col.key)}
                    className={`border border-gray-300 p-4 text-xs text-[#4B5C79] font-medium bg-[#FFFFFF] text-center`}
                  >
                    <div className={` flex justify-center`}>
                      <p
                        className={`${
                          col.key === "status"
                            ? getStatusClass(row[col.key] as string)
                            : ""
                        }`}
                      >
                        {row[col.key] as string}
                      </p>
                    </div>
                  </td>
                ))}
                <td className="border-b border-gray-300 p-4 text-xs text-[#4B5C79] font-medium bg-[#FFFFFF] text-center">
                  <div className="flex justify-center gap-2">
                    {actionList?.map(
                      (action, index) =>
                        action.label === "edit" && (
                          <p
                            key={index}
                            className="cursor-pointer"
                            onClick={() => action.function(1, null, null)}
                          >
                            <PencilLine color="#4B5C79" size={16} />
                          </p>
                        )
                    )}
                    {actionList?.map(
                      (action, index) =>
                        action.label === "view" && (
                          <p
                            key={index}
                            className="cursor-pointer"
                            onClick={() => action.function(null, 1, null)}
                          >
                            <Eye color="#4B5C79" size={16} />
                          </p>
                        )
                    )}
                    {actionList?.map(
                      (action, index) =>
                        action.label === "delete" && (
                          <p
                            key={index}
                            className="cursor-pointer"
                            onClick={() => action.function(null, null, 2)}
                          >
                            <Trash color="#4B5C79" size={16} />
                          </p>
                        )
                    )}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length + 2}
                className="text-center py-4 text-gray-500"
              >
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <div className="text-xs text-[#71736B] font-medium flex gap-2">
          Showing {currentPage} of {totalPages || 1}
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <PreviousIcon size={20} color="#71736B" />
            </button>
            <button className="border text-[#FFFFFF] bg-[#97998E] px-2 py-1">
              {currentPage}
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages || totalPages === 0}
            >
              <NextIcon size={20} color="#71736B" />
            </button>
          </div>
        </div>
        <div className="flex gap-2 items-center text-[#71736B] font-medium text-xs">
          Rows per page
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="border border-gray-300 rounded-md p-1 text-sm"
          >
            {[5, 10, 20, 50].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Table;
