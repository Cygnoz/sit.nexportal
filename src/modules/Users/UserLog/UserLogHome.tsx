import React, { useEffect, useMemo, useState } from 'react'
import PencilLine from '../../../assets/icons/PencilLine'
import Trash from '../../../assets/icons/Trash'
import Eye from '../../../assets/icons/Eye'
import PreviousIcon from '../../../assets/icons/PreviousIcon'
import NextIcon from '../../../assets/icons/NextIcon'
import Input from '../../../components/form/Input'
import Select from '../../../components/form/Select'
import SearchIcon from '../../../assets/icons/SearchIcon'
import useApi from '../../../Hooks/useApi'
import { endPoints } from '../../../services/apiEndpoints'

type Props = {}
interface UserLogData {
    screen: string;
    date: string;
    time: string;
    remarks: string;
  }

  interface User {
    _id: string;
    userId: {
      _id: string;
      userName: string;
      role: string;
    };
    activity: string;
    status: string;
    date:string;
    time:string
    action: string;
    __v: number;
  }

function UserLogHome({}: Props) {
  const {request:getActivityLog}=useApi('get',3002)
  const [allUserLog,setAllUserLog]=useState<User[]>([])
  const getAllActivityLog = async () => {
    try {
      const { response, error } = await getActivityLog(endPoints.GET_ACTIVITY_LOGS);
      console.log("res", response);
      console.log("err", error);
  
      if (response && !error) {
        const logs = response?.data?.logs || [];
        
        const formattedLogs = logs.map((log: any) => {
          // Extract the timestamp and split it into date and time
          const timestamp = log.timestamp;
          const [date, time] = timestamp.split(" "); // Split into date and time
          
          return {
            ...log, // Retain all other properties
            date,    // Date part (27/11/24)
            time     // Time part (15:18:14 (IST))
          };
        });
  
        setAllUserLog(formattedLogs.reverse()); // Set the formatted logs in state
      }
    } catch (err) {
      console.error('Error fetching activity logs:', err);
    }
  };

  console.log(allUserLog);
  function getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((acc, part) => acc?.[part], obj);
  }

  useEffect(()=>{
    getAllActivityLog()
  },[])

      

      const columns: { key: keyof User | string; label: string }[] = [
        { key: "userId.role", label: "Screen" },
        { key: "action", label: "Action" },
        { key: "date", label: "Date" },
        { key: "time", label: "Time" },
        { key: "activity", label: "Remarks" },
      ];

      const actionColorMap: { [key: string]: string } = {
        Add: "text-green-700",      // Green for "Add"
        Edit: "text-orange-400",    // Orange for "Edit"
        Delete: "text-red-700",     // Red for "Delete"
        Login: "text-blue-600",
        View: "text-yellow-800",      // Rose color for "Login"
      };
      

      const [currentPage, setCurrentPage] = useState<number>(1);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);

     // Paginate the filtered data
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return allUserLog.slice(start, start + rowsPerPage);
  }, [allUserLog, currentPage, rowsPerPage]);

  const totalPages = Math.ceil(allUserLog.length / rowsPerPage);

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
        
        <div className='p-[10px] rounded-lg flex justify-center items-center border  -mt-4'>
           <p><SearchIcon className="size-4 text-gray-200"/></p>
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
          </tr>
        </thead>
        <tbody>
  {paginatedData.length > 0 ? (
    paginatedData.map((row, rowIndex) => (
      <tr key={rowIndex} className="hover:bg-gray-50">
        {/* Update SI No based on currentPage and rowsPerPage */}
        <td className="border-b border-gray-300 p-4 text-xs gap-2 text-[#4B5C79] font-medium bg-[#FFFFFF] text-center">
          { (currentPage - 1) * rowsPerPage + rowIndex + 1 }
        </td>
        {columns.map((col) => (
          <td
            key={String(col.key)}
            className="border border-gray-300 p-4 text-xs text-[#4B5C79] font-medium bg-[#FFFFFF] text-center"
          >
            <div className="flex justify-center">
              <p>
                {/* Accessing the value using getNestedValue if col.key is a string */}
                {typeof col.key === 'string' ? (
                  // Check if the key is "action" and apply color
                  col.key === 'action' ? (
                    <span className={actionColorMap[row[col.key]] || ""}>
                      {row[col.key]}
                    </span>
                  ) : (
                    getNestedValue(row, col.key)
                  )
                ) : (
                  row[col.key]
                )}
              </p>
            </div>
          </td>
        ))}
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