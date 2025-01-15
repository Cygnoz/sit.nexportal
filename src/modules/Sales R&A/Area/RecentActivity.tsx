import React from "react";
import AreaIcon from "../../../assets/icons/AreaIcon";
import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import CalenderClock from "../../../assets/icons/CalenderClock";
import RegionIcon from "../../../assets/icons/RegionIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import NoRecords from "../../../components/ui/NoRecords";

type Props = {
  loading?:any
  recentActData?:any
};

const RecentActivity = ({loading,recentActData}: Props) => {
  
 
 

  const screenIcons = [
    { screens: ["Area"], icon: AreaIcon },
    { screens: ["Region"], icon: RegionIcon },
    { screens: ["Area Manager", "Region Manager", "BDA", "Support Agent", "Supervisor"], icon: AreaManagerIcon },
    { screens: ["Lead", "Trial", "Licenser"], icon: UserIcon },
  ];

  const SkeletonLoader = () => (
    <div className="animate-pulse">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="my-3 rounded-lg bg-[#F6F6F6] p-4">
          <div className="flex gap-4">
            <div className="bg-gray-300 rounded-full w-10 h-10"></div>
            <div className="flex-1">
              <div className="bg-gray-300 h-4 rounded w-3/4 mb-2"></div>
              <div className="bg-gray-300 h-4 rounded w-1/2"></div>
            </div>
          </div>
          <div className="bg-gray-300 h-6 rounded w-1/4 mt-4"></div>
        </div>
      ))}
    </div>
  );
  

  return (
    <div>
      <div className="bg-white p-5 h-full mb-2 ">
        <h1 className="font-bold text-sm mb-2">Recent Activity Feed</h1>
        <div className={`${recentActData.length>3&&"custom-scrollbar overflow-y-scroll"} h-[450px] `}>
        {loading ? (
          <SkeletonLoader />
        ) : recentActData.length === 0  ? (
          <NoRecords text="No Activity Found" parentHeight="430px" imgSize={80} textSize="md" />
        ) : (
          recentActData.map((activity:any) => (
            <div className="my-3 rounded-lg" key={activity?.id}>
              <div className="flex py-2 gap-4 bg-[#F6F6F6] justify-between rounded-lg">
                <div className="flex items-center gap-2 p-2">
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
                <p className="font-semibold text-xs text-[#4B5C79] self-center m-3">{activity?.formattedDate}</p>
              </div>

              <hr />
              <div className="p-3 bg-[#F6F6F6] flex">
                <div className="flex items-center space-x-3 mt-2">
                  {activity?.userId?.userImage && activity?.userId?.userImage.length > 500 ? (
                    <img className="w-6 h-6 rounded-full" src={activity?.userId?.userImage} alt="User" />
                  ) : (
                    <div className="w-6 h-6 bg-black rounded-full flex justify-center items-center">
                      <UserIcon color="white" size={16} />
                    </div>
                  )}
                  <p className="text-[#4B5C79] font-medium text-xs">{activity?.userId?.userName || "N/A"}</p>
                </div>
              </div>
            </div>
          ))
        )}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
