// import { useEffect, useState } from "react";
// import ArrowRight from "../../../assets/icons/ArrowRight";
// import PencilLine from "../../../assets/icons/PencilLine";
// import Trash from "../../../assets/icons/Trash";
// import Button from "../../../components/ui/Button";
// import UserIcon from "../../../assets/icons/UserIcon";
// import SortBy from "../../../components/ui/SortBy";
// import SearchBar from "../../../components/ui/SearchBar";
// import No_Data_found from "../../assets/image/NO_DATA.png";


// type Props = {}

// const TargetTable = ({}: Props) => {
    
//     const Table = <T extends object>({
//       data,
//       columns,
//       headerContents,
//       actionList,
     
//       noPagination,
    
//       skeltonCount=5
//     }: TableProps<T>) => {
//       const [searchValue, setSearchValue] = useState<string>("");
//       const [currentPage, setCurrentPage] = useState<number>(1);
//       const [rowsPerPage, setRowsPerPage] = useState<number>(10);
//       const [noDataFound, setNoDataFound] = useState(false);
//       // Filter data based on the search value
//       const filteredData: any = useMemo(() => {
//         return data?.filter((row) =>
//           Object.values(row).some((value) =>
//             String(value).toLowerCase().includes(searchValue.toLowerCase())
//           )
//         );
//       }, [data, searchValue]);
    
//       // Paginate the filtered data
//       const paginatedData: any = useMemo(() => {
//         const start = (currentPage - 1) * rowsPerPage;
//         return filteredData?.reverse().slice(start, start + rowsPerPage);
//       }, [filteredData, currentPage, rowsPerPage]);
    
//       const totalPages = Math.ceil(filteredData?.length / rowsPerPage);
    
//       const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         setRowsPerPage(Number(e.target.value));
//         setCurrentPage(1);
//       };
//     // Render table header
//   const renderHeader = () => (
//     <div
//       className={`flex  ${
//         headerContents.search && !headerContents.title && !headerContents.sort
//           ? "justify-start"
//           : "justify-between"
//       } items-center mb-4`}
//     >
//       {headerContents.title && (
//         <h2 className="text-lg font-bold">{headerContents.title}</h2>
//       )}
//       {headerContents.search && (
//         <div className={`w-[440px] ${headerContents.title && "ms-auto me-2"}`}>
//           <SearchBar
//             searchValue={searchValue}
//             onSearchChange={setSearchValue}
//             placeholder={headerContents.search.placeholder}
//           />
//         </div>
//       )}
//       {headerContents.sort && (
//         <div className="flex gap-2">
//           {headerContents.sort.map((sort, index) => (
//             <SortBy key={index} sort={sort} />
//           ))}
//         </div>
//       )}
//     </div>
//   );

//   const renderImageAndLabel = (data: any) => {
//     for (const { key, imageKey } of ImageAndLabel) {
//       const keyValue = getNestedValue(data, key);
//       const imageValue = getNestedValue(data, imageKey);
//       if (keyValue) {
//         if (imageValue && imageValue.length > 500) {
//           return (
//             <>
//               <img
//                 src={`${imageValue}`}
//                 alt={keyValue}
//                 className="w-6 h-6 rounded-full bg"
//               />
//               <p>{keyValue}</p>
//             </>
//           );
//         } else {
//           return (
//             <>
//               <p className="w-6 h-6  bg-black rounded-full flex justify-center items-center">
//                 <UserIcon color="white" size={15} />
//               </p>
//               <p>{keyValue}</p>
//             </>
//           );
//         }
//       }
//     }
//     return "N/A";
//   };

//   const renderSkeletonLoader = () => (
//     <tr>
//       <td colSpan={columns.length + 2}>
//         <div className="flex flex-col   gap-2 mt-2">
//           {Array.from({ length: skeltonCount }).map((_, index) => (
//             <div key={index} className="flex gap-2 animate-pulse">
//               {columns.map((_, colIndex) => (
//                 <div
//                   key={colIndex}
//                   className="h-6 w-full bg-gray-200 rounded-lg skeleton"
//                 ></div>
//               ))}
            
//                 <div className="h-6 w-full bg-gray-200 skeleton"></div>
             
//             </div>
//           ))}
//         </div>
//       </td>
//     </tr>
//   );

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       if (data?.length === 0) {
//         setNoDataFound(true);
//       } else {
//         setNoDataFound(false);
//       }
//     }, 3000);
//     return () => clearTimeout(timeout);
//   }, [data]);
//   return (
//     <div>
//          <div className="w-full  bg-white rounded-lg p-4">
//       {renderHeader()}

     
       
//             <tr>
//               <th className="border border-[#e7e6e6] p-4 text-sm  text-[#303F58] font-medium">
//                 SI No.
//               </th>
//               {columns.map((col: any) => (
//                 <th
//                   key={String(col.key)}
//                   className={`border border-[#e7e6e6]  p-4 text-sm  text-[#303F58] font-medium ${
//                     col.key == "convert"
//                       ? "w-48 text-center"
//                       : col.key?.toLowerCase().includes("status") &&
//                         "text-center min-w-[120px]"
//                   }`}
//                 >
//                   {col.key == "convert" ? "Convert" : col.label}
//                 </th>
//               ))}
             
//                 <th className="border border-[#e7e6e6] p-4 text-sm text-[#303F58] text-center font-medium">
//                   Action
//                 </th>
              
//             </tr>
        
//           <tbody>
//             {noDataFound ? (
//               <tr>
//                 <td
//                   colSpan={columns?.length + 2}
//                   className="text-center py-4 text-gray-500"
//                 >
//                   <div className="flex justify-center flex-col items-center">
//                     <img width={70} src={No_Data_found} alt="No Data Found" />
//                     <p className="font-bold text-red-700">No Records Found!</p>
//                   </div>
//                 </td>
//               </tr>
//             ) : data?.length === 0 ? (
//               renderSkeletonLoader()
//             ) : Array.isArray(paginatedData) && paginatedData.length > 0 ? (
//               paginatedData.map((row: any, rowIndex: number) => (
//                 <tr onClick={() => actionList?.find((data) => data.label === "view")?.function(row?._id)}  key={rowIndex} className="hover:bg-gray-50 z-10 cursor-pointer">
//                   <td className="border-b border-[#e7e6e6] p-4 text-xs text-[#4B5C79] font-medium bg-[#FFFFFF]">
//                     {(currentPage - 1) * rowsPerPage + rowIndex + 1}
//                   </td>
//                   {columns.map((col: any) => (
//                     <td
//                       key={col.key}
//                       className="border border-[#e7e6e6] p-4 text-xs text-[#4B5C79] font-medium bg-[#FFFFFF]"
//                     >
//                       <div
//                         className={`flex ${
//                           col.key.toLowerCase().includes("status") ||
//                           col?.key == "convert"
//                             ? "justify-center"
//                             : "justify-start"
//                         } items-center gap-2`}
//                       >
//                         {col.key === "country" ? (
//                           countryLogo(getNestedValue(row, col.key))
//                         ) : [
//                             "userName",
//                             "user.userName",
//                             "leadName",
//                             "firstName",
//                           ].includes(col.key) ? (
//                           renderImageAndLabel(row)
//                         ) : col.key.toLowerCase().includes("status") ? (
//                           <p className={getStatusClass(row[col.key])}>
//                             {row[col.key]}
//                           </p>
//                         ) : col?.key == "convert" ? (
//                           row["leadStatus"] == "Won" ? (
//                             <Button
//                               onClick={() => col.label(row._id)}
//                               variant="tertiary"
//                               className="h-8 text-sm  text-[#565148]  border border-[#565148] rounded-xl"
//                               // size="lg"
//                             >
//                               Convert to Trial
//                               <ArrowRight />
//                             </Button>
//                           ) : (
//                             ""
//                           )
//                         ) : (
//                           getNestedValue(row, col.key) || "N/A"
//                         )}
//                       </div>
//                     </td>
//                   ))}
                 
//                     <td className="border-b border-[#e7e6e6] p-4 text-xs text-[#4B5C79] font-medium bg-[#FFFFFF]">
//                       <div className="flex justify-center gap-2">
                       
                        
                           
//                               <p
                               
//                                 className="cursor-pointer"
//                                 //onClick={() => action.function(row?._id)}
//                               >
                               
//                                   <PencilLine color="#4B5C79" size={16} />
                               
                              
//                                   <Trash color="#4B5C79" size={16} />
                              
//                               </p>
                           
//                       </div>
//                     </td>
                 
//                 </tr>
//               ))
//             ) : null}
//           </tbody>
//         </table>
//       </div>

//       {!noPagination && (
//         <div className="flex justify-between items-center mt-4">
//           <div className="text-xs text-[#71736B] font-medium flex gap-2">
//             Showing {currentPage} of {totalPages || 1}
//             <div className="flex gap-2">
//               <button
//                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                 disabled={currentPage === 1}
//               >
//                 <PreviousIcon size={20} color="#71736B" />
//               </button>
//               <button className="border text-[#FFFFFF] bg-[#97998E] px-2 py-1">
//                 {currentPage}
//               </button>
//               <button
//                 onClick={() =>
//                   setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//                 }
//                 disabled={currentPage === totalPages || totalPages === 0}
//               >
//                 <NextIcon size={20} color="#71736B" />
//               </button>
//             </div>
//           </div>
//           <div className="flex gap-2 items-center text-[#71736B] font-medium text-xs">
//             Rows per page
//             <select
//               value={rowsPerPage}
//               onChange={handleRowsPerPageChange}
//               className="border border-gray-300 rounded-md p-1 text-sm"
//             >
//               {[5, 10, 20, 50].map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       )}
//     </div>
//     </div>
//   )
// }

// export default TargetTable