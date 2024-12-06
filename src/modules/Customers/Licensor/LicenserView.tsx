import { useParams } from 'react-router-dom'
import ChevronRight from '../../../assets/icons/ChevronRight'
import RegionIcon from '../../../assets/icons/RegionIcon'
import RupeeIcon from '../../../assets/icons/RupeeIcon'
import HomeCard from '../../../components/ui/HomeCards'
import TicketCheck from '../../../assets/icons/TicketCheck'

type Props = {}

function LicenserView({}: Props) {
    const { id } = useParams()
    const homeCardData = [
        { 
          icon: <RupeeIcon size={50}/>, 
          number: "₹75,9788", 
          title: "Revenue", 
          iconFrameColor: "#F9A51A", 
          iconFrameBorderColor: "#FFF2DDCC" 
        },
        { 
          icon: <TicketCheck />, 
          number: "100", 
          title: "Open Tickets", 
          iconFrameColor: "#30B777", 
          iconFrameBorderColor: "#B3F0D3CC" 
        },
        { 
          icon: <RegionIcon size={24}/>, 
          number: "526", 
          title: "Closed Tickets", 
          iconFrameColor: "#51BFDA", 
          iconFrameBorderColor: "#C1E7F1CC" 
        },
        { 
          icon: <RegionIcon size={24}/>, 
          number: "12Oct23", 
          title: "Start Date", 
          iconFrameColor: "#1A9CF9", 
          iconFrameBorderColor: "#BBD8EDCC" 
        },
        { 
          icon: <RegionIcon size={24}/>, 
          number: "12Oct24", 
          title: "End Date", 
          iconFrameColor: "#D786DD", 
          iconFrameBorderColor: "#FADDFCCC" 
        },
      ];
  return (
    <div>
        <div className="flex items-center text-[16px] space-x-2 mb-4">
          <p className="font-bold text-[#820000]">Licenser</p>
          <ChevronRight color="#4B5C79" size={18} />
          <p className="font-bold text-[#303F58]">Licenser {id}</p>
        </div>
        {/* HomeCards Section */}
      <div className="flex gap-3 py-2 justify-between">
        {homeCardData.map((card, index) => (
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
    </div>
  )
}

export default LicenserView