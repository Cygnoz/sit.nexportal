import UserIcon from "../../../../assets/icons/UserIcon";
import AreaIcon from "../../../../assets/icons/AreaIcon";
import RegionIcon from "../../../../assets/icons/RegionIcon";
import AreaManagerIcon from "../../../../assets/icons/AreaMangerIcon";
import React from "react";
import CalenderClock from "../../../../assets/icons/CalenderClock";
import No_Data_found from '../../../../assets/image/NO_DATA.png';
 
type Props = {
  insideLicenserData:Array<any>;
  recentActivities: any;
}
 
// Timeline Component
const RecentActivityView= ({  recentActivities}: Props) => {
 
 
 
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
    <div className="bg-white shadow-md rounded-lg  p-3">
        <h1 className="font-bold text-base mb-4">Recent Activities</h1>
      {/* Scrollable container */}
      {recentActivities && recentActivities.length > 0 ? (
      <div className="h-[400px] overflow-y-auto -ms-5 mt-3 custom-scrollbar">
        <ul className="relative space-y-6">
          {recentActivities.map((activity:any, index:any) => (
            <li key={index} className="flex items-start  space-x-6 relative ">
              {/* Vertical line */}
              {index !== recentActivities?.length - 0 && (
                <div className="absolute left-5 top-12 bottom-0 h-16 w-0.5 ml-6 -mt-3 bg-gray-300"></div>
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
              <div className="space-y-1">
              <p className="text-gray-600 text-xs font-normal">
                {new Date(activity.timestamp).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                <span className="text-xs font-normal ml-4">
                  {new Date(activity.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                </span>
              </p>
              <p className="text-gray-800 font-semibold text-xs">{activity.action}</p>
              <div className="flex items-center space-x-3 w-48">
                  {/* User Name */}
                  <p className="text-gray-500 font-medium text-xs">{activity.details}</p>
                  </ div>
             
               
               
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
  );
};
 
export default RecentActivityView;