import { useParams } from "react-router-dom"
import ChevronRight from "../../../assets/icons/ChevronRight"
import HomeCard from "../../../components/ui/HomeCards";
import RegionIcon from "../../../assets/icons/RegionIcon";
import ComputerTick from "../../../assets/icons/ComputerTick";
import DivisionIcon from "../../../assets/icons/DivisionIcon";
import LeadScoreIcon from "../../../assets/icons/LeadScoreIcon";
import { useState } from "react";
import Button from "../../../components/ui/Button";
import ChevronDown from "../../../assets/icons/ChevronDown";
import ViewActivity from "./ViewActivity";
import ViewOverflow from "./ViewOverflow";
import ViewSidebar from "./ViewSidebar";

type Props = {}

function LeadView({}: Props) {
    const {id}=useParams()
    const homeCardData = [
      { icon: <ComputerTick />, number: "Warm", title: "Leads Today",iconFrameColor:'#1A9CF9',iconFrameBorderColor:'#BBD8EDCC' },
      { icon: <RegionIcon />, number: "Website", title: "Closed Leads",iconFrameColor:'#D786DD',iconFrameBorderColor:'#FADDFCCC' },
      { icon: <DivisionIcon />, number: "85%", title: "Converted Leads",iconFrameColor:'#FCB23E',iconFrameBorderColor:'#FDE3BBCC' },
      { icon: <LeadScoreIcon />, number: "High", title: "Total Leads",iconFrameColor:'#51BFDA',iconFrameBorderColor:'#C1E7F1CC' },
    ];

    const tabs=["Overview","Activities"]
    const [activeTab, setActiveTab] = useState<string>("Overview");

  
  return (
    <div >
      <div className="flex items-center text-[16px] space-x-2">
       <p className="font-bold text-[#820000] ">Lead</p>
        <ChevronRight color="#4B5C79" size={18}/>
        <p className="font-bold text-[#303F58] ">Lead {id}</p>
      </div>

      <div className="grid grid-cols-12 mt-5">
        <div className="col-span-3">
          <ViewSidebar/>
        </div>

        <div className="col-span-9 ms-4"> 
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
      <div className="flex justify-between mt-5">
        <div className="flex gap-8 text-base font-bold border-b border-gray-200">
        {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`cursor-pointer py-3 px-[16px] ${
            activeTab === tab
              ? "text-deepStateBlue border-b-2 border-deepStateBlue"
              : "text-gray-400"
          }`}
        >
          {tab}
        </div>
      ))}
        </div>

      <div className="">
      <Button variant="primary"  size="sm">
        <span className="">+</span>New Activity
        <ChevronDown size={20} color="#FEFDF9"/>
      </Button>
      </div>


    </div>
      {activeTab==="Overview"&&(
        <ViewOverflow/>
      )}

    {activeTab==="Activities"&&(
      <ViewActivity/>
    )}
    


        </div>
      </div>
    </div>
  )
}

export default LeadView