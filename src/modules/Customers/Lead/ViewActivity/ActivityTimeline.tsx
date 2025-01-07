import rightArrow from '../../../../assets/image/right-arrow.png'
import EditIcon from '../../../../assets/icons/EditIcon'
import profileImage from '../../../../assets/image/AvatarImg.png'
// import SortBy from '../../../../components/ui/SortBy'
import { useState } from 'react'

type Props = {}

const ActivityTimeline = ({}: Props) => {
    const [selectedMonth, setSelectedMonth] = useState("");
      const [selectedYear, setSelectedYear] = useState("");
    
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    
      const years = Array.from({ length: 50 }, (_, i) => 2000 + i);
    
      const handleMonthSelect = (month: string) => setSelectedMonth(month);
      const handleYearSelect = (year: string) => setSelectedYear(year);
    
      const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
      const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
    
    
      
  return (
    <div>
                <div className="w-full h-fit rounded-lg p-5 gap-5 bg-[#FFFFFF]">
            {/* <div className="flex gap-4 mb-2">
            <SortBy
            sort={[length=4, ]}
            />
            
             <SortBy
            sort={[length=4, ]}
            />
            </div> */}
             <div className="flex gap-4">
        {/* Month Dropdown */}
        <div className="relative">
          <button
            className="flex items-center px-4 py-2 border rounded-xl bg-[#FEFDFA]"
            onClick={() => setIsMonthDropdownOpen(!isMonthDropdownOpen)} // Toggle dropdown visibility
          >
            {selectedMonth || "All Activities"}
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isMonthDropdownOpen && ( // Show dropdown only when it's open
            <div className="absolute mt-2 bg-white border rounded-md shadow-lg">
              {months.map((month) => (
                <div
                  key={month}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() =>{ handleMonthSelect(month)
                   setIsMonthDropdownOpen(!isMonthDropdownOpen)}
                  }
                >
                  {month}
                </div>
              ))}
            </div>
          )}
        </div>
{/* Year Dropdown */}
<div className="relative">
  <button
    className="flex items-center px-4 py-2 border rounded-xl bg-[#FEFDFA]"
    onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)} // Toggle dropdown visibility
  >
    {selectedYear || "All Time Perios"}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ml-2 h-4 w-4 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>
  {isYearDropdownOpen && ( // Show dropdown only when it's open
    <div className="absolute mt-2 bg-white border rounded-md shadow-lg max-h-72 overflow-y-auto">
      {years.map((year) => (
        <div
          key={year}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => {
            setIsYearDropdownOpen(!isYearDropdownOpen);
            handleYearSelect(year.toString());
          }}
        >
          {year}
        </div>
      ))}
    </div>
  )}
</div>

      </div>
            <p className="text-[#303F58] text-sm font-bold mt-3">Today, November 21,2024</p>
            <div className="bg-[#F5F9FC] p-5 rounded-lg my-4">
                <div className="flex gap-6">
                <div className="mt-2 w-11 h-11 bg-[#EBEFF4] rounded-full">
                    <img className="w-6 h-6 ms-3 mt-[25%]" src={rightArrow} alt="" />
                </div>
                <div className="ms-2"><p className="text-[#4B5C79] text-sm font-bold mt-1">Lead Lifecycle Stage Updated</p></div>
                <div className="rounded-full bg-[#C8C8C8] w-2 h-2 mt-3 "></div>
                <div className="flex gap-2 mt-1">
                    <EditIcon size={20}/>
                    <div className="flex gap-2 bg-[#FFFFFF] w-32 h-8 p-1 rounded-3xl -mt-1">
                    <div className="rounded-full w-5 h-5 overflow-hidden ms-1 mt-[1%]">
                        <img src={profileImage} alt="" />
                    </div>
                    <p className="text-[#4B5C79] text-xs font-medium mt-1">Kristin Watson</p>
                    </div>
                </div>
                <div className="rounded-full bg-[#C8C8C8] w-2 h-2 mt-3 "></div>
                <div><p className="text-[#4B5C79] text-xs font-medium mt-2">19 minutes ago</p></div>
                </div>
                <div className="ms-20 -mt-4">
                    <p className="text-[#4B5C79] text-xs font-medium">Updated to <span className="text-[#4B5C79] text-sm font-bold ms-1">Lead: Trail</span></p>
                </div>
            </div>
            <div className="bg-[#F5F9FC] p-5 rounded-lg my-4">
                <div className="flex gap-6">
                <div className="mt-2 w-11 h-11 bg-[#EBEFF4] rounded-full">
                    <img className="w-6 h-6 ms-3 mt-[25%]" src={rightArrow} alt="" />
                </div>
                <div className="ms-2"><p className="text-[#4B5C79] text-sm font-bold mt-1">In-person meeting scheduled</p></div>
                <div className="rounded-full bg-[#C8C8C8] w-2 h-2 mt-3 "></div>
                <div className="flex gap-2 mt-1">
                    <EditIcon size={20}/>
                    <div className="flex gap-2 bg-[#FFFFFF] w-32 h-8 p-1 rounded-3xl -mt-1">
                    <div className="rounded-full w-5 h-5 overflow-hidden ms-1 mt-[1%]">
                        <img src={profileImage} alt="" />
                    </div>
                    <p className="text-[#4B5C79] text-xs font-medium mt-1">Kristin Watson</p>
                    </div>
                </div>
                <div className="rounded-full bg-[#C8C8C8] w-2 h-2 mt-3 "></div>
                <div><p className="text-[#4B5C79] text-xs font-medium mt-2">11 minutes ago</p></div>
                </div>
                <div className="ms-20 -mt-4">
                    <p className="text-[#4B5C79] text-xs font-medium">Details <span className="text-[#4B5C79] text-sm font-bold ms-1">Location: ABC Ltd. Office</span></p>
                </div>
            </div>
            <div className="bg-[#F5F9FC] p-5 rounded-lg my-4">
                <div className="flex gap-6">
                <div className="mt-2 w-11 h-11 bg-[#EBEFF4] rounded-full">
                    <img className="w-6 h-6 ms-3 mt-[25%]" src={rightArrow} alt="" />
                </div>
                <div className="ms-2"><p className="text-[#4B5C79] text-sm font-bold mt-1">Meeting completed</p></div>
                <div className="rounded-full bg-[#C8C8C8] w-2 h-2 mt-3 "></div>
                <div className="flex gap-2 mt-1">
                    <EditIcon size={20}/>
                    <div className="flex gap-2 bg-[#FFFFFF] w-32 h-8 p-1 rounded-3xl -mt-1">
                    <div className="rounded-full w-5 h-5 overflow-hidden ms-1 mt-[1%]">
                        <img src={profileImage} alt="" />
                    </div>
                    <p className="text-[#4B5C79] text-xs font-medium mt-1">Kristin Watson</p>
                    </div>
                </div>
                <div className="rounded-full bg-[#C8C8C8] w-2 h-2 mt-3 "></div>
                <div><p className="text-[#4B5C79] text-xs font-medium mt-2">19 minutes ago</p></div>
                </div>
                <div className="ms-20 -mt-4">
                    <p className="text-[#4B5C79] text-xs font-medium">Details <span className="text-[#4B5C79] text-sm font-bold ms-1">Provided demo, answered queries, discussed custom solutions</span></p>
                </div>
            </div>
            <div className="bg-[#F5F9FC] p-5 rounded-lg my-4">
                <div className="flex gap-6">
                <div className="mt-2 w-11 h-11 bg-[#EBEFF4] rounded-full">
                    <img className="w-6 h-6 ms-3 mt-[25%]" src={rightArrow} alt="" />
                </div>
                <div className="ms-2"><p className="text-[#4B5C79] text-sm font-bold mt-1">Lead Lifecycle Stage Updated</p></div>
                <div className="rounded-full bg-[#C8C8C8] w-2 h-2 mt-3 "></div>
                <div className="flex gap-2 mt-1">
                    <EditIcon size={20}/>
                    <div className="flex gap-2 bg-[#FFFFFF] w-32 h-8 p-1 rounded-3xl -mt-1">
                    <div className="rounded-full w-5 h-5 overflow-hidden ms-1 mt-[1%]">
                        <img src={profileImage} alt="" />
                    </div>
                    <p className="text-[#4B5C79] text-xs font-medium mt-1">Kristin Watson</p>
                    </div>
                </div>
                <div className="rounded-full bg-[#C8C8C8] w-2 h-2 mt-3 "></div>
                <div><p className="text-[#4B5C79] text-xs font-medium mt-2">19 minutes ago</p></div>
                </div>
                <div className="ms-20 -mt-4">
                    <p className="text-[#4B5C79] text-xs font-medium">Updated to <span className="text-[#4B5C79] text-sm font-bold ms-1">Lead: Trail</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ActivityTimeline