import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { endPoints } from "../../../services/apiEndpoints";
import useApi from "../../../Hooks/useApi";
import AreaIcon from "../../../assets/icons/AreaIcon";
import RegionIcon from "../../../assets/icons/RegionIcon";
import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import CalenderClock from "../../../assets/icons/CalenderClock";
import No_Data_found from '../../../assets/image/NO_DATA.png';

type Props = {};

const ResendActivity = ({}: Props) => {
  const { request: getActivities } = useApi("get", 3003);
  const { id } = useParams();
  const [data, setData] = useState<any[]>([]);

  const getRecentActivities = async () => {
    try {
      const { response, error } = await getActivities(`${endPoints.RECENT_ACTIVITY}/${id}`);
      if (response && !error) {
        setData(response.data);
      } else {
        console.log(error.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRecentActivities();
  }, []);

  console.log(data);
  

  const screenIcons = [
    { screens: ["Area"], icon: AreaIcon },
    { screens: ["Region"], icon: RegionIcon },
    { screens: ["Area Manager", "Region Manager", "BDA", "Support Agent", "Supervisor"], icon: AreaManagerIcon },
    { screens: ["Lead", "Trial", "Licenser"], icon: UserIcon },
  ];

  return (
    <div>
      <div className="bg-white p-5 h-96 overflow-y-auto overflow-x-hidden hide-scrollbar">
  <h1 className="font-bold text-sm">Recent Activity Feed</h1>

  {data.length === 0 ? (
    // No Data Found Message
    <div className="flex justify-center items-center h-full flex-col">
      <img width={70} src={No_Data_found} alt="No Data Found" />
      <p className="font-bold text-red-700">No Achievements Found!</p>
    </div>
  ) : (
    // Scrollable Activity List
    data.map((activity) => (
      <div className="my-3 rounded-lg" key={activity?.id}>
        <div className="flex py-2 gap-4 bg-[#F6F6F6] justify-between rounded-lg">
          <div className="flex items-center gap-2 p-2">
            {/* Icon */}
            <div className="bg-blue-500 rounded-full p-2 flex justify-center items-center">
              {(() => {
                const screenIcon = screenIcons.find((screen) => screen.screens.includes(activity?.screen));
                return screenIcon?.icon 
                  ? React.createElement(screenIcon.icon, { color: "white", size: 22 })
                  : <CalenderClock color="black" />;
              })()}
            </div>
              <h2 className="font-semibold text-xs text-[#303F58]">{activity?.activity}</h2>
          </div>
          <p className="font-semibold text-xs text-[#4B5C79] self-center m-3">
            {new Date(activity?.timestamp).toLocaleString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
        </div>

        <hr />
        <div className="p-3 bg-[#F6F6F6] flex">
          <div className="flex items-center space-x-3 mt-2">
            {/* User Image */}
            {activity?.userId?.userImage && activity?.userId?.userImage.length > 500 ? (
              <img className="w-6 h-6 rounded-full" src={activity?.userId?.userImage} alt="User Image" />
            ) : (
              <div className="w-6 h-6 bg-black rounded-full flex justify-center items-center">
                <UserIcon color="white" size={16} />
              </div>
            )}
            {/* User Name */}
            <p className="text-[#4B5C79] font-medium text-xs">{activity?.userId?.userName ? activity?.userId?.userName : 'N/A'}</p>
          </div>
        </div>
      </div>
    ))
  )}
</div>

    </div>
  );
};

export default ResendActivity;
