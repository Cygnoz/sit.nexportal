import { useState } from "react";
//import CalenderDays from "../../../assets/icons/CalenderDays";
//import RegionIcon from "../../../assets/icons/RegionIcon";
import TeamOverview from "./TeamOverview";
import person1 from "../../../assets/image/Ellipse 14.png"
import person2 from "../../../assets/image/Ellipse 43.png"
import LeadAndLisence from "./LeadAndLisence";
import EditIcon from "../../../assets/icons/EditIcon";
import DeleteIcon from "../../../assets/icons/DeleteIcon";
import region from "../../../assets/image/Ellipse 14 (1).png"
import ResendActivity from "./ResendActivity";
import ChevronRight from "../../../assets/icons/ChevronRight";
import { useParams } from "react-router-dom";




type Props = {
  
  
}

const AreaView = ({
  
  
  // status,
  // salesManagers
  //areaCode,region
}: Props) => {
  const {id}=useParams()


  const tabs = [
    "Team Overview",
    "Lead and License Data",
    "Recend Activity Feed",
    
];
const [activeTab, setActiveTab] = useState<string>("Team Overview");

 



  return (

    <div>
      <div className="flex items-center text-[16px] my-2 space-x-2">
       <p className="font-bold text-[#820000] ">Aria</p>
        <ChevronRight color="#4B5C79" size={18}/>
        <p className="font-bold text-[#303F58] ">Aria {id}</p>
      </div>
      <div  className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border border-gray-200">
       <div>
         {/* Left Section: Area Icon and Details */}
       
      <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <div className="w-20 h-20 bg-blue py-4 ms-10 items-center justify-center rounded-full ">
          <img className="w-10 h-10" src={region} alt="" />
          <h2 className="font-bold">Aria 1</h2>
          
        </div>
        <div className="border-r border-[#DADADA] h-10 me-4"></div>
      
      </div>
      <div className="text-center">
          <p className="text-xs text-[#8F99A9]">Area status</p>
          <h3 className={`px-1  rounded-full ${status === "Active" ? "bg-green-100 text-green-400" : "bg-gray-100 text-gray-400"}`}>Active</h3>
        </div>
        <div className="border-r border-[#DADADA] h-10 me-4"></div>
        <div className="text-center">
          <p className="text-xs text-[#8F99A9]">Area Code</p>
          <p className="text-xs">AR-NE001</p>
        </div>
        <div className="border-r border-[#DADADA] h-10 me-4 "></div>
        <div className="text-center">
          <p className="text-xs text-[#8F99A9]">Region</p>
          <p className="text-xs ">REG-NE001</p>
          
        </div>


        
      </div>
       </div>

     
    <div className="flex justify-end items-center gap-6 text-[10px] py-2">

         {/* Right Section: Managers and Actions */}
         <div className="flex items-center gap-2">
        {/* Sales Managers */}
        <div className="flex items-center justify-between -space-x-2">
          <p className="text-sm me-5">Area Sales Managers</p>
        <img src={person1} alt="" />
        <img src={person2} alt="" />

        </div>
    </div>
                    <div className="flex flex-col items-center  space-y-1">
                        <div className="w-8 h-8 mb-2 rounded-full">
                          <EditIcon size={40} color="#C4A25D24"/>
                        </div>
                        <p className="text-center ms-3" >Edit</p>
                    </div>
                  
                    <div className="flex flex-col  items-center space-y-1">
                        <div className="w-8 h-8 mb-2 rounded-full">
                         <DeleteIcon size={40} color="#D52B1E4D"/>
                        </div>
                        <p className="text-center ms-3">Delete</p>
                    </div>
                   </div>
    </div>

    <div className="flex gap-8 text-base font-bold my-5 border-b border-gray-200">
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`cursor-pointer py-3 px-[16px] ${
            activeTab === tab
              ? "text-deepStateBlue border-b-2 border-deepStateBlue"
              : "text-gray-600"
          }`}
        >
          {tab}
        </div>
      ))}
    </div>



{activeTab === "Team Overview" && (
  <TeamOverview/>
)}



{activeTab === "Lead and License Data" && (
  <LeadAndLisence/>
)}


{activeTab === "Recend Activity Feed" && (
  <ResendActivity/>
)}


           

     
    
   
    </div>
  )
}

export default AreaView