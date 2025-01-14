import UserIcon from "../../../../assets/icons/UserIcon";
import AreaIcon from "../../../../assets/icons/AreaIcon";
import RegionIcon from "../../../../assets/icons/RegionIcon";
import AreaManagerIcon from "../../../../assets/icons/AreaMangerIcon";
import React from "react";
import CalenderClock from "../../../../assets/icons/CalenderClock";
import NoRecords from "../../../../components/ui/NoRecords";
 
type Props = {
  insideLicenserData:Array<any>;
  recentActivities: any;
}
 
const RecentActivityView= ({  recentActivities}: Props) => {
 
const screenIcons = [
  { screens: ['Area'], icon: AreaIcon },
  { screens: ['Region'], icon: RegionIcon },
  { screens: ['Area Manager', 'Region Manager', 'BDA', 'Support Agent', 'Supervisor'], icon: AreaManagerIcon },
  { screens: ['Lead','Trial','Licenser'], icon: UserIcon },
];

const formatTimestamp = (timestamp: string) => {
  if (!timestamp) return 'Invalid Date';
  const [datePart, timePart] = timestamp.split(' ');
  const [day, month, year] = datePart.split('/');
  const [hour, minute, second] = timePart.split(':');
  const formattedDate = `${day}-${month}-20${year}`;
  const formattedTime = new Date(`20${year}-${month}-${day}T${hour}:${minute}:${second}`).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).replace(':', '.');
  return `${formattedDate} ${formattedTime.replace(' ', '')}`;
};
 
  return (
    <div className="bg-white shadow-md rounded-lg  p-3">
        <h1 className="font-bold text-base mb-4">Recent Activities</h1>
      {recentActivities && recentActivities.length > 0 ? (
      <div className="h-[400px] overflow-y-auto -ms-5 mt-3 custom-scrollbar">
        <ul className="relative space-y-6">
          {recentActivities.map((activity:any, index:any) => (
            <li key={index} className="flex items-start  space-x-6 relative ">
              {index !== recentActivities?.length - 0 && (
                <div className="absolute left-5 top-12 bottom-0 h-16 w-0.5 ml-6 -mt-3 bg-gray-300"></div>
              )}
 
  <div className="bg-blue-500 rounded-full p-2 flex justify-center items-center">
                  {(() => {
                    const screenIcon = screenIcons.find((screen) => screen.screens.includes(activity?.screen));
                    return screenIcon?.icon ? React.createElement(screenIcon.icon, { color: "white", size: 22 }) : <CalenderClock color="black" />;
                  })()}
                </div>
 
              <div className="space-y-1">
              <p className="text-gray-600 text-xs font-normal">{formatTimestamp(activity.timestamp)}</p>
              <p className="text-gray-800 font-semibold text-xs">{activity.action}</p>
              <div className="flex items-center space-x-3 w-48">
                  <p className="text-gray-500 font-medium text-xs">{activity.details}</p>
                  </ div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      ) : (
        <NoRecords text="No Achievments Found" parentHeight="430px" imgSize={90} textSize="lg"/>
      )}
    </div>
  );
};
 
export default RecentActivityView;
