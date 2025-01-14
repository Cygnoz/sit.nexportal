import React, { useEffect, useState } from "react";
import { endPoints } from "../../../../services/apiEndpoints";
import useApi from "../../../../Hooks/useApi";
import { useParams } from "react-router-dom";
import UserIcon from "../../../../assets/icons/UserIcon";
import AreaIcon from "../../../../assets/icons/AreaIcon";
import RegionIcon from "../../../../assets/icons/RegionIcon";
import CalenderClock from "../../../../assets/icons/CalenderClock";
import AreaManagerIcon from "../../../../assets/icons/AreaMangerIcon";
import NoRecords from "../../../../components/ui/NoRecords";

const SkeletonLoader = () => (
  <div className="animate-pulse">
    {[...Array(3)].map((_, index) => (
      <div key={index} className="my-3 rounded-lg bg-gray-200 p-4">
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

const RecentActivityView: React.FC = () => {
  const { request: getActivities } = useApi("get", 3003);
  const { id } = useParams();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getRecentActivities = async () => {
    try {
      const { response, error } = await getActivities(`${endPoints.ACTIVITIES}/${id}`);
      if (response && !error) {
        setData(response.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecentActivities();
  }, []);

  const screenIcons = [
    { screens: ['Area'], icon: AreaIcon },
    { screens: ['Region'], icon: RegionIcon },
    { screens: ['Area Manager', 'Region Manager', 'BDA', 'Support Agent', 'Supervisor'], icon: AreaManagerIcon },
    { screens: ['Lead', 'Trial', 'Licenser'], icon: UserIcon },
  ];

  const formatTimestamp = (timestamp:any) => {
    if (!timestamp) return 'Invalid Date';
    const [datePart, timePart] = timestamp.split(' ');
    const [day, month, year] = datePart.split('/');
    const [hour, minute, second] = timePart.split(':');
    const formattedDate = `${day}-${month}-20${year}`;
    const formattedTime = new Date(`20${year}-${month}-${day}T${hour}:${minute}:${second}`).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).replace(':', '.');
    return `${formattedDate} ${formattedTime.replace(' ', '')}`;
  };

  return (
    <div className="bg-white shadow-md rounded-lg h-full p-3">
      <h1 className="font-bold text-base">Recent Activities</h1>
      {loading ? (
        <SkeletonLoader />
      ) : data.length > 0 ? (
        <div className="h-96 overflow-y-auto -ms-5 mt-4 custom-scrollbar">
          <ul className="relative space-y-6">
            {data.map((activity, index) => (
              <li key={index} className="flex items-start space-x-6 relative">
                {index !== data.length - 0 && (
                  <div className="absolute left-5 top-10 h-14 bottom-0 w-0.5 ml-[22px] bg-gray-300"></div>
                )}
                <div className="bg-blue-500 rounded-full p-2 flex justify-center items-center">
                  {(() => {
                    const screenIcon = screenIcons.find((screen) => screen.screens.includes(activity?.screen));
                    return screenIcon?.icon ? React.createElement(screenIcon.icon, { color: "white", size: 22 }) : <CalenderClock color="black" />;
                  })()}
                </div>
                <div>
                  <p className="text-gray-600 text-xs font-normal">{formatTimestamp(activity?.timestamp)}</p>
                  <p className="text-gray-800 font-semibold text-xs">{activity.activity}</p>
                  <div className="flex items-center space-x-3 mt-2">
                    {activity?.userId?.userImage && activity?.userId?.userImage.length > 500 ? (
                      <img className="w-8 h-8 rounded-full" src={activity?.userId?.userImage} alt="User" />
                    ) : (
                      <div className="w-8 h-8 bg-black rounded-full flex justify-center items-center">
                        <UserIcon color="white" size={22} />
                      </div>
                    )}
                    <p className="text-gray-500 font-medium text-xs">{activity?.userId?.userName}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <NoRecords text="No Activities Found" parentHeight="430px" imgSize={90} textSize="lg" />
      )}
    </div>
  );
};

export default RecentActivityView;
