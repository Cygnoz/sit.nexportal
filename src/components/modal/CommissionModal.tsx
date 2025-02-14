import { useState } from "react";
import ChevronDown from "../../assets/icons/ChevronDown";
import SearchBar from "../ui/SearchBar";
import ArrowUpIcon from "../../assets/icons/ArrowUpIcon";
import TicketCheck from "../../assets/icons/TicketCheck";
import BookCheckIcon from "../../assets/icons/BookCheckIcon";


type Props = {
  onClose: () => void;
}
const activities = [
  {
    id: 1,
    title: "Salary paid to Darrell Steward",
    date: "27, Oct 2024",
    time: "10:32 AM",
    type: "salary",
    details: "Darrel received his monthly salary of ₹12,000 for October 2024, paid via direct deposit on the 27th."
  },
  {
    id: 2,
    title: "Paid Overtime work payment of ₹ 500",
    date: "02, Oct 2024",
    time: "11:11 AM",
    type: "overtime",
    details: "Overtime payment processed for extra working hours."
  },
  {
    id: 3,
    title: "Paid Overtime work payment of ₹ 500",
    date: "02, Oct 2024",
    time: "11:11 AM",
    type: "increase",
    details: "Overtime payment processed for extra working hours."
  },
  {
    id: 4,
    title: "Paid Overtime work payment of ₹ 500",
    date: "02, Oct 2024",
    time: "11:11 AM",
    type: "overtime",
    details: "Overtime payment processed for extra working hours."
  },
];

const CommissionModal = ({ onClose }: Props) => {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<number | null>(null);
  const filteredActivities = activities.filter((activity) =>
    activity.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <div className="px-2 ">
          <h1 className="font-bold text-sm">Commission Profile</h1>
          <p className="text-xs mt-2 font-normal text-[#8F99A9]"> Growth is the only constant, let's chase it together</p>

        </div>
        {/* <button
                    type="button"
                    onClick={onClose}
                    className="text-gray-600 hover:text-gray-900 font-bold "
                >
                    <p className="text-xl">&times;</p>
                </button> */}
        <button
          type="button"
          onClick={onClose}
          className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900"
        >
          &times;
        </button>

      </div>
      <div className="flex justify-between p-4 border rounded-lg bg-gray-100 mt-3">
        <div>
          <p className="text-[#8F99A9] text-xs font-medium">Salary type</p>
          <p className="font-bold text-xs text-[#303F58]">Fixed Salary</p>
        </div>
        <div>
          <p className="text-[#8F99A9] text-xs font-medium">Salary Amount</p>
          <p className="font-bold text-xs text-[#303F58]">₹ 12,000</p>
        </div>
        <div>
          <p className="text-[#8F99A9] text-xs font-medium">No of License</p>
          <p className="font-bold text-xs text-[#303F58]">23</p>
        </div>
        <div>
          <p className="text-[#8F99A9] text-xs font-medium">Recurring Percentage</p>
          <p className="font-bold text-xs text-[#303F58]">23%</p>
        </div>
      </div>
      {/* Activity Timeline */}
      <div className="mt-4 flex justify-between">
        <h2 className="text-sm font-bold mt-2 ms-2">Activity Timeline</h2>
        <div className="relative">
          <SearchBar
            placeholder="Search Category"
            searchValue=""
            onSearchChange={() => { setSearch }}
          />
        </div>
      </div>

      <div className="mt-4 pl-2 space-y-6 relative">
        <div className="absolute left-7 top-0 bottom-0 w-1 bg-gray-200"></div>
        {filteredActivities.map((activity) => (
          <div key={activity.id} className="relative">
            {/* Main Activity Line */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full text-white text-lg z-10 bg-[#A7EFAC]"
                >
                  {activity.type === "salary" ? <ArrowUpIcon size={14} /> :
                    activity.type === "overtime" ? <TicketCheck color="#303F58" /> :
                      <BookCheckIcon size={18} />}
                </div>
                <p className="font-semibold text-xs text-[#303F58]">{activity.title}</p>
              </div>
              <div className="flex items-center gap-4 text-gray-500">
                <p className="font-semibold text-xs text-[#303F58]">{activity.date}, {activity.time}</p>
                <button onClick={() => setExpanded(expanded === activity.id ? null : activity.id)}>
                  <ChevronDown color="#303F58" />
                </button>
              </div>
            </div>

            {/* Expanded Section */}
            {expanded === activity.id && (
              <div className="mt-4 ml-2 p-3 bg-red-100 font-semibold text-xs text-[#303F58] rounded-lg w-full">
                {activity.details}
              </div>
            )}
          </div>
        ))}
      </div>


    </div>
  )
}

export default CommissionModal