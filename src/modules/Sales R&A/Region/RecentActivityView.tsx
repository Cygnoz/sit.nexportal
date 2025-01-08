import React, { useEffect, useState } from "react";

import { endPoints } from "../../../services/apiEndpoints";
import useApi from "../../../Hooks/useApi";
import { useParams } from "react-router-dom";
import UserIcon from "../../../assets/icons/UserIcon";
import No_Data_found from '../../../assets/image/NO_DATA.png';
import AreaIcon from "../../../assets/icons/AreaIcon";
import RegionIcon from "../../../assets/icons/RegionIcon";
import CalenderClock from "../../../assets/icons/CalenderClock";
import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";


// Timeline Component
const RecentActivityView: React.FC = () => {
  const { request: getActivities } = useApi("get", 3003);
  const { id } = useParams()
  const [data, setData] = useState<any[]>([])

  const getRecentActivities = async () => {
    try {
      const { response, error } = await getActivities(`${endPoints.ACTIVITIES}/${id}`)
      if (response && !error) {
        console.log(response.data);
        setData(response.data)

      }
      else {
        console.log(error.data.message);

      }
    }
    catch (err) {
      console.log(err);

    }
  }

  useEffect(() => {
    getRecentActivities()
  }, [])
  console.log(data);
  // Updated screenIcons with an array for possible screen names
  const screenIcons = [
    {
      screens: ['Area'], // Array of possible screen names for this icon
      icon: AreaIcon
    },
    {
      screens: ['Region'], // Array of possible screen names for this icon
      icon: RegionIcon
    },
    {
      screens: ['Area Manager', 'Region Manager', 'BDA', 'Support Agent', 'Supervisor'], // Multiple screen names
      icon: AreaManagerIcon
    },
    {
      screens: ['Lead','Trial','Licenser'], // Multiple screen names
      icon: UserIcon
    },
   
  ];


  return (
    <>
    <div className="bg-white shadow-md rounded-lg h-full p-3">
      <h1 className="font-bold text-base ">Recent Activities</h1>
      {/* Scrollable container */}
      {data && data.length > 0 ? (
    <div className="h-96 overflow-y-auto -ms-5 mt-4 custom-scrollbar">
      <ul className="relative space-y-6">
        {data.map((activity, index) => (
          <li key={index} className="flex items-start space-x-6 relative">
            {/* Vertical line */}
            {index !== data.length - 0 && (
              <div className="absolute left-5 top-10 h-14 bottom-0  w-0.5 ml-[22px] bg-gray-300"></div>
            )}
  {/* Icon */}
  <div className="bg-blue-500 rounded-full p-2 flex justify-center items-center">
                  {/* Find the correct icon */}
                  {
                    // Check if the icon is found and is a valid React component
                    (() => {
                      const screenIcon = screenIcons.find((screen) => screen.screens.includes(activity?.screen));
                      console.log(activity.screen);
                      
                      
                      if (screenIcon?.icon) {
                        // Render icon if found, passing necessary props
                        return React.createElement(screenIcon.icon, { color: "white", size: 22 });
                      } else {
                        // Fallback if no icon is found
                        return (
                          <div className="bg-white rounded-full p-2 flex justify-center items-center">
                            <CalenderClock color="black"/>  {/* Your fallback component */}
                          </div>
                        );
                      }
                      
                    })()
                  }
                </div>
            {/* Activity Details */}
            <div>
              <p className="text-gray-600 text-xs font-normal">
                {new Date(activity.timestamp).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                <span className="text-xs font-normal ml-4">
                  {new Date(activity.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                </span>
              </p>

              <p className="text-gray-800 font-semibold text-xs">{activity.activity}</p>
              <div className="flex items-center space-x-3 mt-2">
                {/* User Image */}
                {activity?.userId?.userImage && activity?.userId?.userImage.length > 500 ? (
                  <img className="w-8 h-8 rounded-full" src={activity?.userId?.userImage} alt="User Image" />
                ) : (
                  <div className="w-8 h-8 bg-black rounded-full flex justify-center items-center">
                    <UserIcon color="white" size={22} />
                  </div>
                )}
                {/* User Name */}
                <p className="text-gray-500 font-medium text-xs">{activity?.userId?.userName}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    /* No Data Screen */
    <div className="flex justify-center items-center h-96 flex-col">
      <img width={70} src={No_Data_found} alt="No Data Found" />
      <p className="font-bold text-red-700">No Achievements Found!</p>
    </div>
  )}


    </div>
    
    </>
  );
};

export default RecentActivityView;