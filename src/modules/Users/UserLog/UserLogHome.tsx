import React, { useMemo, useState } from 'react'
import PencilLine from '../../../assets/icons/PencilLine'
import Trash from '../../../assets/icons/Trash'
import Eye from '../../../assets/icons/Eye'
import PreviousIcon from '../../../assets/icons/PreviousIcon'
import NextIcon from '../../../assets/icons/NextIcon'
import Input from '../../../components/form/Input'
import Select from '../../../components/form/Select'
import SearchIcon from '../../../assets/icons/SearchIcon'

type Props = {}
interface UserLogData {
    screen: string;
    date: string;
    time: string;
    remarks: string;
  }

function UserLogHome({}: Props) {
    

    const UserLogData: UserLogData[] = [
        { screen: "lead", date: "12-2-24", time: "9.30", remarks: "filed login" },
        { screen: "salesManager", date: "12-2-24", time: "10.00", remarks: "meeting scheduled" },
        { screen: "lead", date: "12-2-24", time: "11.15", remarks: "call made" },
        { screen: "lead", date: "12-2-24", time: "12.30", remarks: "email sent" },
        { screen: "salesManager", date: "12-2-24", time: "13.45", remarks: "proposal reviewed" },
        { screen: "lead", date: "12-2-24", time: "14.00", remarks: "follow-up call" },
        { screen: "lead", date: "12-2-24", time: "15.30", remarks: "filed login" },
        { screen: "salesManager", date: "12-2-24", time: "16.00", remarks: "meeting concluded" },
        { screen: "lead", date: "12-2-24", time: "17.15", remarks: "contract signed" },
        { screen: "salesManager", date: "12-2-24", time: "18.30", remarks: "project kickoff" },
        { screen: "lead", date: "12-2-24", time: "19.45", remarks: "client feedback" },
        { screen: "lead", date: "12-2-24", time: "20.00", remarks: "filed login" },
        { screen: "salesManager", date: "12-2-24", time: "21.30", remarks: "final review" },
        { screen: "lead", date: "12-2-24", time: "22.00", remarks: "call made" },
        { screen: "lead", date: "12-2-24", time: "23.15", remarks: "email sent" },
        { screen: "salesManager", date: "12-2-24", time: "00.30", remarks: "meeting scheduled" },
      ];
      

      const columns: { key: keyof UserLogData; label: string }[] = [
        { key: "screen", label: "Screen" },
        { key: "date", label: "Date" },
        { key: "time", label: "Time" },
        { key: "remarks", label: "Remarks" },
      ];

      const [currentPage, setCurrentPage] = useState<number>(1);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);

     // Paginate the filtered data
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return UserLogData.slice(start, start + rowsPerPage);
  }, [UserLogData, currentPage, rowsPerPage]);

  const totalPages = Math.ceil(UserLogData.length / rowsPerPage);

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const leadSource = [
    { label: "Hi", value: "hi" },
    { label: "Bi", value: "bi" },
    { label: "Ci", value: "ci" },
  ];

  return (
    <div className="text-[#303F58] space-y-4">
    <h1 className="text-2xl font-bold">User Log</h1>
    <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque natus iusto maiores ducimus optio</p>
    <div className="w-full bg-white rounded-lg p-4">
       <div  className='flex  items-center gap-2'>
       <div className='grid grid-cols-5 w-full gap-2 mb-4'>
        <Input
              placeholder="Select from date"
              type='date'
            />
      <Input
              placeholder="Select to Date"
              type='date'
            />
        <Select  
              placeholder="Select User"
              options={leadSource}/>
              <Select  
              placeholder="Select Screen"
              options={leadSource}/>
              <Select  
              placeholder="Action"
              options={leadSource}/>
        </div>
        
        <div className='p-[18px] rounded-lg flex justify-center items-center border  -mt-4'>
           <SearchIcon/>
        </div>
       </div>
    
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
                      >
                        {row[col.key] as string}
                      </p>
                    </div>
                  </td>
                ))}
                <td className="border-b border-gray-300 p-4 text-xs text-[#4B5C79] font-medium bg-[#FFFFFF] text-center">
                  <div className="flex justify-center gap-2">
                    
                          <p
                         
                            className="cursor-pointer"
                            // onClick={() => action.function(1, null, null)}
                          >
                            <PencilLine color="#4B5C79" size={16} />
                          </p>
                        
                    
                          <p
                            
                            className="cursor-pointer"
                            // onClick={() => action.function(null, 1, null)}
                          >
                            <Eye color="#4B5C79" size={16} />
                          </p>
                       
                   
                          <p
                         
                            className="cursor-pointer"
                            // onClick={() => action.function(null, null, 2)}
                          >
                            <Trash color="#4B5C79" size={16} />
                          </p>

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
    </div>
  )
}

export default UserLogHome