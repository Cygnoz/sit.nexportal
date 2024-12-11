import React, { useMemo, useState } from "react";
import Eye from "../../assets/icons/Eye";
import NextIcon from "../../assets/icons/NextIcon";
import PencilLine from "../../assets/icons/PencilLine";
import PreviousIcon from "../../assets/icons/PreviousIcon";
import Trash from "../../assets/icons/Trash";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";
import IndiaLogo from "../../assets/image/IndiaLogo.png";
import SaudhiLogo from "../../assets/image/SaudiLogo.png";
import UAELogo from "../../assets/image/UAELogo.webp";
import UserIcon from "../../assets/icons/UserIcon";
// import Button from "./Button";
// import ArrowRight from "../../assets/icons/ArrowRight";

const ImageAndLabel = [
  { key: "userName", imageKey: "userImage" },
  { key: "rmName", imageKey: "rmImage" },
  { key: "user.userName", imageKey: "user.userImage" },
];

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
    label: "view" | "edit" | "delete";
    function: (id: any) => void;
  }[];
  // noButton?:boolean;
  noAction?: boolean;
  noPagination?: boolean;
  maxHeight?: string;
}

const Table = <T extends object>({
  data,
  columns,
  headerContents,
  actionList,
  // noButton,
  noAction,
  noPagination,
  maxHeight,
}: TableProps<T>) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  // Filter data based on the search value
  const filteredData = useMemo(() => {
    return data?.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [data, searchValue]);

  // Paginate the filtered data
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return filteredData?.reverse().slice(start, start + rowsPerPage);
  }, [filteredData, currentPage, rowsPerPage]);

  const totalPages = Math.ceil(filteredData?.length / rowsPerPage);

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  // Function to determine row styles based on `status`
  const getStatusClass = (status: string | undefined) => {
    switch (status) {
      case "New":
        return "bg-red-500 text-white py-2  px-2 w-fit rounded-lg";
      case "Contacted":
        return "bg-green-400 text-white py-2 px-2 rounded-lg";
      case "Closed":
        return "bg-blue-300 text-white py-2 px-2 rounded-lg";
      case "Active":
        return "bg-red-500 text-white py-2 px-2 w-fit rounded-lg";
      case "Converted":
        return "bg-green-400 text-white py-2 px-2 rounded-lg";
      case "Expired":
        return "bg-blue-300 text-white py-2 px-2 rounded-lg";
      case "Pending Renewal":
        return "bg-green-400 text-white py-2 px-2 rounded-lg";
      case "Open":
        return "bg-green-400 text-white py-2 px-2 rounded-lg";
      case "Pending":
        return "bg-green-400 text-white py-2 px-2 rounded-lg";
      case "High":
        return "bg-red-500 text-white py-2 px-2 w-fit rounded-lg";
      case "Medium":
        return "bg-green-400 text-white py-2 px-2 rounded-lg";
      case "Low":
        return "bg-blue-300 text-white py-2 px-2 rounded-lg";
      case "Resolved":
        return "bg-green-200 text-black py-2 px-2 rounded-lg";
      case "Paid":
        return "bg-[#EDE7FB] text-black py-2 px-2 rounded-lg";
      default:
        return "";
    }
  };

  function getNestedValue(obj: any, path: string): any {
    // If no dots in path, return the direct property value
    if (!path.includes(".")) {
      return obj?.[path];
    }
    // Otherwise, traverse the nested structure
    return path.split(".").reduce((acc, part) => acc?.[part], obj);
  }

  const countryLogo = (key: string) => {
    if (key == "India") {
      return (
        <>
          <img src={IndiaLogo} alt="India" className="w-5 h-5 rounded-full" />
          <p>India</p>
        </>
      );
    } else if (key == "United Arab Emirates") {
      return (
        <>
          <img src={UAELogo} alt="UAE" className="w-5 h-5 rounded-full" />
          <p>UAE</p>
        </>
      );
    } else {
      return (
        <>
          <img
            src={SaudhiLogo}
            alt="Saudi Arabia"
            className="w-5 h-5 rounded-full"
          />
          <p>Saudi</p>
        </>
      );
    }
  };

  // Render table header
  const renderHeader = () => (
    <div
      className={`flex  ${
        headerContents.search && !headerContents.title && !headerContents.sort
          ? "justify-start"
          : "justify-between"
      } items-center mb-4`}
    >
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

  const renderImageAndLabel = (data: any) => {
    for (const { key, imageKey } of ImageAndLabel) {
      const keyValue = getNestedValue(data, key); // Get the value for key, possibly nested
      const imageValue = getNestedValue(data, imageKey); // Get the value for imageKey, possibly nested

      if (keyValue) {
        if (imageValue && imageValue.length > 500) {
          return (
            <>
              <img
                src={`${imageValue}`}
                alt={keyValue}
                className="w-6 h-6 rounded-full"
              />
              <p>{keyValue}</p>
            </>
          );
        } else {
          return (
            <>
              <p className="w-6 h-6  border border-[#a6a6a8] bg-[#FFFFFF] rounded-full flex justify-center items-center">
                <UserIcon color="#768294" size={15} />
              </p>
              <p>{keyValue}</p>
            </>
          );
        }
      }
    }
    return "N/A"; // Return N/A if no match is found
  };


  return (
    <div className="w-full  bg-white rounded-lg p-4">
      {renderHeader()}

      <div
        style={maxHeight ? { maxHeight: maxHeight, overflowY: "auto" } : {}}
        className={maxHeight ? "custom-scrollbar" : "hide-scrollbar"}
      >
        <table
          className={`w-full border-collapse border text-left  ${
            maxHeight && "table-fixed"
          }`}
        >
          <thead
            className={` bg-[#F6F9FC]  ${maxHeight && "z-40 sticky top-0"}`}
          >
            <tr>
              <th className="border p-4 text-sm  text-[#303F58] font-medium">
                SI No.
              </th>
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className={`border p-4 text-sm  text-[#303F58] font-medium ${
                    col.key == "status" && "text-center"
                  }`}
                >
                  {col.label}
                </th>
              ))}
              {!noAction && (
                <th className="border p-4 text-sm text-[#303F58] text-center font-medium">
                  Action
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {paginatedData?.length > 0 ? (
              paginatedData.map((row: any, rowIndex: number) => (
                <tr key={rowIndex} className="hover:bg-gray-50 z-10">
                  <td className="border-b border-gray-300 p-4 text-xs text-[#4B5C79] font-medium bg-[#FFFFFF] ">
                    {(currentPage - 1) * rowsPerPage + rowIndex + 1}
                  </td>
                  {columns.map((col: any) => (
                    <td
                      key={String(col.key)}
                      className="border border-gray-300 p-4 text-xs text-[#4B5C79] font-medium bg-[#FFFFFF] "
                    >
                      <div
                        className={`flex justify-start items-center gap-2 ${
                          col.key == "status"
                            ? "justify-center"
                            : "justify-start"
                        }`}
                      >
                        {col.key === "country" ? (
                          countryLogo(getNestedValue(row, col.key))
                        ) : ["userName", "user.userName", "amName"].includes(
                            col.key
                          ) ? (
                          renderImageAndLabel(row)
                        ) : col.key === "status" ? (
                          <p className={getStatusClass(row[col.key])}>
                            {row[col.key]}
                          </p>
                        ) : (
                          getNestedValue(row, col.key) || "N/A"
                        )}
                      </div>
                    </td>
                    
                  ))}
                      {/* {!noButton&&(
                    <td className="border border-gray-300 p-4 text-xs text-[#4B5C79] font-medium bg-[#FFFFFF] ">
                    {row.status === "New" && (
                      <div className="flex justify-center gap-2">
                        <Button variant="tertiary">
                          convert to Trail
                          <ArrowRight size={10} color="#565148" />
                        </Button>
                      </div>
                    )}
                  </td>
                  )} */}

                  {!noAction && (
                    <td className="border-b border-gray-300 p-4 text-xs text-[#4B5C79] font-medium bg-[#FFFFFF] ">
                      <div className="flex justify-center gap-2">
                        {actionList?.map((action, index) =>
                          action.label === "edit" ? (
                            <p
                              key={index}
                              className="cursor-pointer"
                              onClick={() => action.function(row?._id)}
                            >
                              <PencilLine color="#4B5C79" size={16} />
                            </p>
                          ) : action.label === "view" ? (
                            <p
                              key={index}
                              className="cursor-pointer"
                              onClick={() => action.function(row?._id)}
                            >
                              <Eye color="#4B5C79" size={16} />
                            </p>
                          ) : action.label === "delete" ? (
                            <p
                              key={index}
                              className="cursor-pointer"
                              onClick={() => action.function(row?._id)}
                            >
                              <Trash color="#4B5C79" size={16} />
                            </p>
                          ) : (
                            "N/A"
                          )
                        )}
                      </div>
                    </td>
                    
                  )}
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
      </div>

      {!noPagination && (
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
      )}
    </div>
  );
};

export default Table;
