import { useParams } from "react-router-dom"
import ChevronRight from "../../../assets/icons/ChevronRight"
import HomeCard from "../../../components/ui/HomeCards";
import RegionIcon from "../../../assets/icons/RegionIcon";
import ComputerTick from "../../../assets/icons/ComputerTick";
import DivisionIcon from "../../../assets/icons/DivisionIcon";
import LeadScoreIcon from "../../../assets/icons/LeadScoreIcon";
import { useEffect, useRef, useState } from "react";
import Button from "../../../components/ui/Button";
import ChevronDown from "../../../assets/icons/ChevronDown";
import ViewOverflow from "./ViewOverflow";
import ViewSidebar from "./ViewSidebar";
import EmailIcon from "../../../assets/icons/EmailIcon";
import PencilLine from "../../../assets/icons/PencilLine";
import CalenderDays from "../../../assets/icons/CalenderDays";
import Video from "../../../assets/icons/Video";
import ClipboardPenLine from "../../../assets/icons/ClipboardPenLine";
import ViewActivities from "./ViewActivity/ViewActivities";
import { endPoints } from "../../../services/apiEndpoints";
import useApi from "../../../Hooks/useApi";
import { LeadData } from "../../../Interfaces/Lead";

type Props = {}

function LeadView({}: Props) {
    const {id}=useParams()
    const {request:getLead}=useApi('get',3001)
    const [leadData,setLeadData]=useState<LeadData>()
    const homeCardData = [
      { icon: <ComputerTick />, number: "Warm", title: "Leads Today",iconFrameColor:'#1A9CF9',iconFrameBorderColor:'#BBD8EDCC' },
      { icon: <RegionIcon />, number: "Website", title: "Closed Leads",iconFrameColor:'#D786DD',iconFrameBorderColor:'#FADDFCCC' },
      { icon: <DivisionIcon />, number: "85%", title: "Converted Leads",iconFrameColor:'#FCB23E',iconFrameBorderColor:'#FDE3BBCC' },
      { icon: <LeadScoreIcon />, number: "High", title: "Total Leads",iconFrameColor:'#51BFDA',iconFrameBorderColor:'#C1E7F1CC' },
    ];

    const tabs=["Overview","Activities"]
    const [activeTab, setActiveTab] = useState<string>("Overview");
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
  
    const dropdownOptions = [
      { label: "Email", icon: <EmailIcon size={14} color="#4B5C79"/> }, // Replace with your Email icon component
      { label: "Note", icon: <PencilLine size={14} color="#4B5C79" /> },
      { label: "Meeting", icon: <Video size={14} color="#4B5C79" /> },
      { label: "Task", icon: <CalenderDays size={14} color="#4B5C79" /> },
      { label: "Proposal", icon: <ClipboardPenLine size={14} color="#4B5C79" /> },
    ];
  
    // Handle click outside dropdown
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setDropdownOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
    })
      
    const getOneLead = async () => {
      try {
        const { response, error } = await getLead(`${endPoints.LEAD}/${id}`);
        if (response && !error) {
          const Lead = response.data; // Return the fetched data
          console.log("Fetched Lead data:", Lead);
          setLeadData(Lead)
        } else {
          // Handle the error case if needed (for example, log the error)
          console.error('Error fetching Lead data:', error);
        }
      } catch (err) {
        console.error('Error fetching Lead data:', err);
      }
    };
    
    
    
  
    useEffect(() => {
      getOneLead()
    }, [id]);

    console.log(leadData);
    
  
    
  return (
    <div >
      <div className="flex items-center text-[16px] space-x-2">
       <p className="font-bold text-[#820000] ">Lead</p>
        <ChevronRight color="#4B5C79" size={18}/>
        <p className="font-bold text-[#303F58] ">{leadData?.firstName}{leadData?.lastName&&leadData?.lastName}</p>
      </div>

      <div className="grid grid-cols-12 mt-5">
        <div className="col-span-3">
          <ViewSidebar getLead={getOneLead} leadData={leadData}/>
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

        <div className="relative" ref={dropdownRef}>
              <Button variant="primary" size="sm" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <span className="">+</span> New Activity
                <ChevronDown size={20} color="#FEFDF9" />
              </Button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-1 bg-white border rounded-lg shadow-lg w-40">
                  {dropdownOptions.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center px-4 py-2 text-sm cursor-pointer border-[#DFDFDF] border-b hover:bg-gray-100"
                      onClick={() => {
                        console.log(`${option.label} selected`);
                        setDropdownOpen(false); // Close dropdown after selection
                      }}
                    >
                      <span className="mr-2">{option.icon}</span>
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

    </div>
      {activeTab==="Overview"&&(
        <ViewOverflow/>
      )}

    {activeTab==="Activities"&&(
      <ViewActivities/>
    )}
    


        </div>
      </div>
    </div>
  )
}

export default LeadView