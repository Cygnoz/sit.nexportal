import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import EscalatedTicket from "../../../assets/icons/EscalatedTicket";
import TicketCardIcon from "../../../assets/icons/TicketCardIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import HomeCard from "../../../components/ui/HomeCards";
import GraphHomeView from "./GraphHomeView";
import ViewHeader from "./ViewHeader";
import ViewHomwTable from "./ViewHomwTable";

type Props = {}

const SupportAgentView = ({}: Props) => {

        // Data for HomeCards
        const viewCardData = [
          { icon: <TicketCardIcon size={40}/>, number: "58", title: "Total Tickets",iconFrameColor:'#51BFDA',iconFrameBorderColor:'#C1E7F1CC' },
          { icon: <AreaManagerIcon />, number: "35", title: "Total Escalated Tickets",iconFrameColor:'#F9A51A',iconFrameBorderColor:'#FFF2DDCC' },
          { icon: <UserIcon />, number: "1 hr", title: "Average Resolution Time",iconFrameColor:'#30B777',iconFrameBorderColor:'#B3F0D3CC' },
          { icon: <EscalatedTicket />, number: "16", title: "Total Escalated Tickets",iconFrameColor:'#1A9CF9',iconFrameBorderColor:'#BBD8EDCC' },
        ];    
     
  return (
    <div>
      View Header
      <div>
        <ViewHeader/>
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
          <ViewHomwTable/>
        </div>

      {/* Graph & feedback */}
      <div>
      <GraphHomeView/>
      </div>
    </div>
  )
}

export default SupportAgentView