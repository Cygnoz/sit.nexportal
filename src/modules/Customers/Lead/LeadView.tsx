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
import EmailIcon from "../../../assets/icons/EmailIcon";
import EditIcon from "../../../assets/icons/EditIcon";
import DeleteIcon from "../../../assets/icons/DeleteIcon";
import BackgroundImage from '../../../assets/Images/LeadView.jpg'
import PhoneRingIcon from "../../../assets/icons/PhoneRingIcon";
import DeltaTech from "../../../assets/icons/DeltaTech";
import ViewRoundIcon from "../../../assets/icons/ViewRoundIcon";
import EmailRoundIcon from "../../../assets/icons/EmailRoundIcon";
import profileImage from '../../../assets/Images/AvatarImg.png'
import CalenderRound from "../../../assets/icons/CalenderRound";

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
       <p className="font-bold text-[#820000] ">Region</p>
        <ChevronRight color="#4B5C79" size={18}/>
        <p className="font-bold text-[#303F58] ">Region {id}</p>
      </div>

      <div className="grid grid-cols-12 mt-5">
        <div className="col-span-3">
            <div className="h-fit w-fit bg-cover rounded-xl p-6" style={{backgroundImage:`url(${BackgroundImage})`}}>
              <div className="bg-[#54B86DE0] py-1 px-2 w-fit rounded-2xl ms-48">
                <p className="text-[#FFFFFF] text-xs font-normal">In progress</p>
              </div>
              <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden">
          <img
            src={profileImage} // Replace with the actual image URL
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mb-3 mt-3">
        <p className="text-[#FFFFFF] text-xs font-semibold mb-3">Angela John</p>
        <p className="text-[#FFFFFF] text-xs font-normal">Lead ID <span className="text-xs font-bold ms-3">BDA12345</span></p>
        </div>
              </div>

              <div className="flex gap-4 my-4 ms-4">
                <EmailIcon color="#FFFFFF" size={16}/>
                <p className="text-[#FFFFFF] text-xs font-normal">Angelinaj@gmail.com</p>
              </div>
              <div className="flex gap-4 mb-2 ms-4">
                <PhoneRingIcon color="#FFFFFF"  size={16}/>
                <p className="text-[#FFFFFF] text-xs font-normal">(480) 555-0103</p>
              </div>
              <div className="flex gap-4 mb-2 ms-4">
                <DeltaTech size={16}/>
                <p className="text-[#FFFFFF] text-xs font-normal">DeltaTech</p>
                </div>
                <div className="flex gap-4 ms-4 my-4">
                  <p className="text-[#FFFFFF] text-xs font-normal">Region</p>
                  <p className="text-[#FFFFFF] text-xs font-bold">Kerala</p>
                </div>
                <div className="flex gap-4 mb-4 ms-4">
                  <p className="text-[#FFFFFF] text-xs font-normal">Area</p>
                  <p className="text-[#FFFFFF] text-xs font-bold ms-3">Kochi</p>
                </div>

                <div className="flex w-60 h-20 px-6 py-4 gap-5 rounded-xl bg-[#FFFFFF33] mx-4">
                  
                 <div>
                 <EmailRoundIcon size={32}/>
                 <p className="text-[#FFF9F9] text-[10px] font-medium ms-1 mt-1">Email</p>
                 </div>
                 <div>
                 <EditIcon size={32}/>
                 <p className="text-[#FFF9F9] text-[10px] font-medium mt-1 ms-2">Edit</p>
                 </div>
                 <div>
                 <ViewRoundIcon size={32} color=""/>
                 <p className="text-[#FFF9F9] text-[10px] font-medium ms-1 mt-1">View</p>
                 </div>
                 <div>
                 <DeleteIcon size={32} />
                 <p className="text-[#FFF9F9] text-[10px] font-medium mt-1">Delete</p>
                 </div>

                </div>
                <div className="flex gap-2 rounded-xl bg-[#FFFFFF33] w-60 py-3 px-2 h-14 my-4 mx-4">
                  <div className="px-2 ms-6"><CalenderRound size={32}/></div>
                  <p className="mt-2 text-[#FFFFFF] text-xs font-medium">View Calender</p>
                </div>
                <div className="rounded-lg w-60 bg-[#820000] h-12 py-3 px-3 mb-4 mx-4">
                  <p className="text-center text-[#FEFDF9] text-base font-medium">Send Proposal</p>
                </div>
                <hr />
                <div className="p-4">
                  <p className="text-[#FFFFFF] text-xs font-normal mb-2">Assigned BDA</p>
                  <div className="flex gap-2">
                  <div className="rounded-full w-7 h-7 overflow-hidden">
                  <img src={profileImage} alt="" />
                  </div>
                  <p className="text-[#FFFFFF] text-xs font-bold py-2 px-1">Ronald J</p>
                  </div>
                </div>  
            </div>
              {/* Graph */}
              <div>Graph</div>
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
    {activeTab==="Activities"&&(
      <ViewActivity/>
    )}
    


        </div>
      </div>
    </div>
  )
}

export default LeadView