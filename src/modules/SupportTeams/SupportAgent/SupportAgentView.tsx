import { useEffect, useState } from "react";
import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import ChevronRight from "../../../assets/icons/ChevronRight";
import EscalatedTicket from "../../../assets/icons/EscalatedTicket";
import TicketCardIcon from "../../../assets/icons/TicketCardIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import HomeCard from "../../../components/ui/HomeCards";
import GraphHomeView from "./GraphHomeView";
import ViewHeader from "./ViewHeader";
import ViewHomwTable from "./ViewHomwTable";
import { endPoints } from "../../../services/apiEndpoints";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../../Hooks/useApi";

type Props = {};

const SupportAgentView = ({}: Props) => {
  // Data for HomeCards
  const viewCardData = [
    {
      icon: <TicketCardIcon size={40} />,
      number: "58",
      title: "Total Tickets",
      iconFrameColor: "#51BFDA",
      iconFrameBorderColor: "#C1E7F1CC",
    },
    {
      icon: <AreaManagerIcon />,
      number: "35",
      title: "Total Escalated Tickets",
      iconFrameColor: "#F9A51A",
      iconFrameBorderColor: "#FFF2DDCC",
    },
    {
      icon: <UserIcon />,
      number: "1 hr",
      title: "Average Resolution Time",
      iconFrameColor: "#30B777",
      iconFrameBorderColor: "#B3F0D3CC",
    },
    {
      icon: <EscalatedTicket />,
      number: "16",
      title: "Total Escalated Tickets",
      iconFrameColor: "#1A9CF9",
      iconFrameBorderColor: "#BBD8EDCC",
    },
  ];

  const { request: getaSA } = useApi("get", 3003);
  const { id } = useParams();
  const [getData, setGetData] = useState<{
    saData: any;
  }>({ saData: [] });

  const getASA = async () => {
    try {
      const { response, error } = await getaSA(
        `${endPoints.SUPPORT_AGENT}/${id}`
      );
      if (response && !error) {
        setGetData((prevData) => ({
          ...prevData,
          saData: response.data,
        }));
      } else {
        console.error(error.response.data.message);
      }
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };
  useEffect(() => {
    getASA();
  }, [id]);

  const navigate=useNavigate()

  return (
    <div>
      <div className="flex items-center text-[16px] my-2 space-x-2">
        <p onClick={()=>navigate('/support-agent')}  className="font-bold cursor-pointer text-[#820000] ">Support Agent</p>
        <ChevronRight color="#4B5C79" size={18} />
        <p className="font-bold text-[#303F58] ">
          {getData.saData?.user?.userName
            ? getData.saData?.user?.userName
            : "N/A"}
        </p>
      </div>
      <div>
        <ViewHeader />
      </div>

      {/* HomeCards Section */}
      <div className="flex gap-3 py-2 justify-between mt-6">
        {viewCardData.map((card, index) => (
          <HomeCard
            iconFrameColor={card.iconFrameColor}
            iconFrameBorderColor={card.iconFrameBorderColor}
            key={index}
            icon={card.icon}
            number={card.number}
            title={card.title}
          />
        ))}
      </div>
      <div>
        <ViewHomwTable getData={getData} />
      </div>

      {/* Graph & feedback */}
      <div>
        <GraphHomeView />
      </div>
    </div>
  );
};

export default SupportAgentView;
