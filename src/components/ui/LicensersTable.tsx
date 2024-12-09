import React, { useMemo, useState } from "react";
import NextIcon from "../../assets/icons/NextIcon";
import PreviousIcon from "../../assets/icons/PreviousIcon";
import SearchBar from "./SearchBar";
import IndiaLogo from "../../assets/image/IndiaLogo.png";
import SaudhiLogo from "../../assets/image/SaudiLogo.png";
import UAELogo from "../../assets/image/UAELogo.webp";
import UserIcon from "../../assets/icons/UserIcon";
import Button from "./Button";

const ImageAndLabel = [
  { key: "userName", imageKey: "userImage" },
  { key: "rmName", imageKey: "rmImage" },
  {key:'',imageKey:''}
];

interface TableProps<T> {
  data: T[];
  columns: { key: keyof T; label: string }[];
  headerContents: {
    title?: string;
    search?: { placeholder: string };
    
  };
  maxHeight?: string;
}

const LicensersTable = <T extends object>({
  data,
  columns,
  headerContents,
  maxHeight,
  
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
    return filteredData.reverse().slice(start, start + rowsPerPage);
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
        case "Upcoming Renewal":
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
    } else if (key =="United Arab Emirates") {
      return (
        <>
          <img src={UAELogo} alt="UAE" className="w-5 h-5 rounded-full" />
          <p>UAE</p>
        </>
      );
    }else  {
      return (
        <>
          <img src={SaudhiLogo} alt="Saudi Arabia" className="w-5 h-5 rounded-full" />
          <p>Saudi</p>
        </>
      );
    } 
  };

  // Render table header
  const renderHeader = () => (
    <div
      className={`flex  ${
        headerContents.search && !headerContents.title 
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
    </div>
  );

  const renderImageAndLabel = (data: any) => {
    for (const { key, imageKey } of ImageAndLabel) {
      if (data[key] && data[imageKey]) {
        return (
          <>
            {data[imageKey].length > 500? (
              <img
                src={`${data[imageKey]}`}
                alt={data[key]}
                className="w-5 h-5 rounded-full"
              />
            ):
            <p className="w-5 h-5 border border-[#E7E8EB] bg-[#FFFFFF] rounded-full flex justify-center items-center">
          <UserIcon color="#768294" size={15}/> 
        </p>
            }
            <p>{data[key]}</p>
          </>
        );
      }
    }
    return "Null" // Return null if no match is found
  };

  return (
    <div className="w-full  bg-white rounded-lg p-4">
      {renderHeader()}

      <div
        style={maxHeight ? { maxHeight: maxHeight, overflowY: "auto" } : {}}
        className={maxHeight ? "custom-scrollbar" : "hide-scrollbar"}
      >
        <table
          className={`w-full ${
            maxHeight && "table-fixed"
          }`}
        >
          {/* <thead
            className={` bg-[#F6F9FC]  ${maxHeight && "z-40 sticky top-0"}`}
          >
            <tr>
              <th className="border p-4 text-sm  text-[#303F58] font-medium">
                SI No.
              </th>
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className={`border p-4 text-sm  text-[#303F58] font-medium ${col.key=='status'&&'text-center'}`}
                >
                  {col.label}
                </th>
              ))}
              
                <th className="border p-4 text-sm text-[#303F58] text-center font-medium">
                  Action
                </th>
              
            </tr>
          </thead> */}
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row: any, rowIndex: number) => (
                <tr key={rowIndex} className="hover:bg-gray-50 z-10">
                  <td className="p-4 text-xs text-[#4B5C79] font-medium border-b-8 border-y-white bg-[#F7FBFE] rounded-lg">
                    {(currentPage - 1) * rowsPerPage + rowIndex + 1}
                  </td>
                  {columns.map((col: any) => (
                    <td
                      key={String(col.key)}
                      className=" p-4 text-xs text-[#4B5C79] font-medium border-b-8 border-y-white bg-[#F7FBFE]"
                    >
                      <div className={`flex justify-start items-center gap-2 ${col.key=='status'?'justify-center':'justify-start'}`}>
                        {col.key === "country" ? (
                          countryLogo(getNestedValue(row, col.key))
                        ) : ["userName", "rmName", "amName"].includes(
                            col.key
                          ) ? (
                          renderImageAndLabel(row)
                        ) : col.key === "status" ? (
                          <p className={getStatusClass(row[col.key])}>
                            {row[col.key]}
                          </p>
                        ) : (
                          getNestedValue(row, col.key) || "Null"
                        )}
                      </div>
                    </td>
                  ))}
                  
                    <td className="p-4 text-xs text-[#4B5C79] font-medium border-b-8 border-y-white bg-[#F7FBFE] rounded-lg">
                      <div className="flex justify-center gap-2">
                        <Button  variant="tertiary">Upgrade</Button>
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
      </div>

      
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

export default LicensersTable;
