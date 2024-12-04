import { useParams } from "react-router-dom"
import ChevronRight from "../../../assets/icons/ChevronRight"
import CalenderDays from "../../../assets/icons/CalenderDays";
import Package from "../../../assets/icons/Package";
import PackageCheck from "../../../assets/icons/PackageCheck";
import Boxes from "../../../assets/icons/Boxes";
import HomeCard from "../../../components/ui/HomeCards";

type Props = {}

function LeadView({}: Props) {
    const {id}=useParams()
    const homeCardData = [
      { icon: <CalenderDays />, number: "110", title: "Leads Today",iconFrameColor:'#1A9CF9',iconFrameBorderColor:'#BBD8EDCC' },
      { icon: <Package />, number: "56", title: "Closed Leads",iconFrameColor:'#D786DD',iconFrameBorderColor:'#FADDFCCC' },
      { icon: <PackageCheck />, number: "100", title: "Converted Leads",iconFrameColor:'#FCB23E',iconFrameBorderColor:'#FDE3BBCC' },
      { icon: <Boxes />, number: "526", title: "Total Leads",iconFrameColor:'#51BFDA',iconFrameBorderColor:'#C1E7F1CC' },
    ];
  
  return (
    <div >
      <div className="flex items-center text-[16px] space-x-2">
       <p className="font-bold text-[#820000] ">Region</p>
        <ChevronRight color="#4B5C79" size={18}/>
        <p className="font-bold text-[#303F58] ">Region {id}</p>
      </div>
      <div className="grid grid-cols-12 mt-5">
        <div className="col-span-3 pe-2">
            <div className="h-80 w-full bg-[#FFFFFF] rounded-lg p-6">
                <div className="space-y-2 flex flex-col justify-center items-center">
                   <div className="h-12 w-12 rounded-full bg-red-400"></div>
                   <p className="font-bold text-[#303F58] ">Region {id}</p>
                   <div className="grid grid-cols-2">
                    <div className="border-r"></div>
                    <div></div>
                   </div>
                </div>
            </div>
        </div>
        <div className="col-span-9">
                  {/* HomeCards Section */}
      <div className="flex gap-3 justify-between">
        {homeCardData?.map((card, index) => (
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
      </div>
    </div>
  )
}

export default LeadView