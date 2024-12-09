import React from "react";
import UserIcon from "../../../../assets/icons/UserIcon";
import image from "../../../../assets/image/Ellipse 14 (2).png";
import TicketMinus from "../../../../assets/icons/TicketMinus";
import RupeeIcon from "../../../../assets/icons/RupeeIcon";
 
// Mock data
const activities = [
  {
    date: "30/05/2024",
    time: "02:30 PM",
    icon: <UserIcon color="white" size={14} />, // Example icon type
    description: "Updated contact details",
    backgroundImg:'#60a5fa',
    user: "Added profile picture by Admin (18-Nov-2024, 09:00 AM)",
    image:image,
  },
  {
    date: "30/05/2024",
    time: "02:30 PM",
    icon: <UserIcon color="white" size={14} />,
    description: "License upgraded",
    backgroundImg:'#60a5fa',
    user: "License upgraded from 'Basic Plan' to 'Pro Plan' by Admin",
    image:image,
  },
  {
    date: "30/05/2024",
    time: "02:30 PM",
    icon: <TicketMinus size={14}/>,
    description: "Created ticket",
    backgroundImg:'#FF9933',
    user: "Created ticket #12345: 'Unable to access dashboard'",
    image:image,
  },
  {
    date: "30/05/2024",
    time: "02:30 PM",
    backgroundImg:"#63D1F4",
    icon: <RupeeIcon color="white" size={22} />,
    description: "Payment Recieved",
    user: "Payment of ₹10,000 received via Credit Card",
    image:image,
  }
];
 
// Timeline Component
const RecentActivityView: React.FC = () => {
 
  return (
    <div className="bg-white shadow-md rounded-lg  p-3">
        <h1 className="font-bold text-base mb-4">Recent Activities</h1>
      {/* Scrollable container */}
      <div className="h-[400px] overflow-y-auto -ms-5 mt-3 custom-scrollbar">
        <ul className="relative space-y-6">
          {activities.map((activity, index) => (
            <li key={index} className="flex items-start  space-x-6 relative ">
              {/* Vertical line */}
              {index !== activities.length - 0 && (
                <div className="absolute left-3 top-10 bottom-0 h-full w-0.5 ml-6 -mt-3 bg-gray-300"></div>
              )}
 
              {/* Icon */}
              <div
          className="rounded-full flex items-center justify-center w-7 h-7 z-10"
          style={{ backgroundColor: activity.backgroundImg || '#ccc' }} // Fallback to gray if no background color is provided
        >
          {activity.icon}
        </div>
 
              {/* Activity Details */}
              <div className="space-y-1">
                <p className="text-gray-600 text-xs font-normal">
                  {activity.date} <span className="text-xs font-normal ml-4">{activity.time}</span>
                </p>
                <p className="text-gray-800 font-semibold text-xs">{activity.description}</p>
                <div className="flex items-center space-x-3 w-48">
                  {/* User Name */}
                  <p className="text-gray-500 font-medium text-xs">{activity.user}</p>
                </div>
               
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
 
export default RecentActivityView;