import { useParams } from "react-router-dom"
import ChevronRight from "../../../assets/icons/ChevronRight"
import ChevronDown from "../../../assets/icons/ChevronDown"
import ChevronUp from "../../../assets/icons/ChevronUp"
import { useState } from "react"
import RegionAriaView from "./RegionAriaView"
import RegionTeamView from "./RegionTeamView"
import RegionPerformanceView from "./RegionPerformanceView"

type Props = {}

function RegionView({}: Props) {
    const [dropDown,setDropDown]=useState(false)
    const {id}=useParams()

    
  const tabs = [
    "Aria",
    "Team",
    "Performance Analytics",
    
];
const [activeTab, setActiveTab] = useState<string>("Aria");

 
  return (
    <div >
      <div className="flex items-center text-[16px] space-x-2">
       <p className="font-bold text-[#820000] ">Region</p>
        <ChevronRight color="#4B5C79" size={18}/>
        <p className="font-bold text-[#303F58] ">Region {id}</p>
      </div>
      <div className="grid grid-cols-12 mt-5">
        <div className="col-span-2 pe-2">
            <div className="h-auto w-full bg-[#FFFFFF] rounded-lg p-3">
                <div className="space-y-2 flex flex-col justify-center items-center">
                   <div className="h-12 w-12 rounded-full bg-red-400"></div>
                   <p className="font-bold text-[#303F58] ">Region {id}</p>
                   <div className="grid grid-cols-2">
                    <div className="border-r  pe-3">
                    <div className="w-fit flex justify-center items-center flex-col">
                     <p className="text-[#8F99A9] text-[10px]">Region Status</p>
                     <p className="bg-[#6AAF681A] text-[#6AAF68] text-[10px] py-1 px-2 rounded-xl  w-fit mt-1">Active</p>
                     </div>
                    </div>
                    <div className=" ps-3">
                     <div className="w-12 flex justify-center items-center flex-col ">
                     <p className="text-[#8F99A9] text-[10px]">Country</p>
                     <p className="text-sm text-[#4B5C79]">India</p>
                     </div>
                    </div>
                   </div>
                   <hr className="  w-full" />
                   <div className="flex justify-evenly items-center w-full text-[10px]">
                    <div className="flex flex-col items-center  space-y-1">
                        <div className="w-8 h-8 bg-slate-500 rounded-full"></div>
                        <p >Edit</p>
                    </div>
                    <div className="flex flex-col  items-center space-y-1">
                        <div className="w-8 h-8 bg-slate-500 rounded-full"></div>
                        <p>Add Area</p>
                    </div>
                    <div className="flex flex-col  items-center space-y-1">
                        <div className="w-8 h-8 bg-slate-500 rounded-full"></div>
                        <p>Delete</p>
                    </div>
                   </div>
                   <hr className="w-full"/>
                </div>
                <div className="space-y-1 text-xs mt-2">
                <p className="font-bold text-[12px]">Regional Manager Info</p>
                <p className="text-[#8F99A9]">Total RM</p>
                <p >02</p>
                {/* 1st dropdown */}
                <div className='flex justify-between items-center w-full '>
                    <div className="flex justify-between items-center gap-1">
                    <div className='w-10 rounded-full bg-slate-400 h-10'></div>
                    <div className="flex flex-col space-y-1">
                    <p className="text-[11px] text-[#8F99A9]">Name</p>
                    <p className="text-xs">Ashok Nair</p>
                    </div>
                    </div>
                  
                 { dropDown?<p className='cursor-pointer' onClick={()=>setDropDown((prev)=>!prev)}><ChevronDown size={18} color='#303F58'/></p>
                  :<p className='cursor-pointer' onClick={()=>setDropDown((prev)=>!prev)}> <ChevronUp size={18} color='#303F58'/></p>}
                  
                </div>
                {dropDown&&<>
                <div className="flex  items-center gap-1  pt-2">
                    <div className='w-10 rounded-full border h-10'></div>
                    <div className="flex flex-col space-y-1">
                    <p className="text-[11px] text-[#8F99A9]">Email Adress,</p>
                    <p className="text-xs">abid123@gmail.com</p>
                    </div>
                    </div>
                    <div className="flex  items-center gap-1  pt-2">
                    <div className='w-10 rounded-full border h-10'></div>
                    <div className="flex flex-col space-y-1">
                    <p className="text-[11px] text-[#8F99A9]">Phone Number</p>
                    <p className="text-xs">abid123@gmail.com</p>
                    </div>
                    </div>
                </>}
                    {/* 2nd  dropdown */}
                    <div className='flex justify-between items-center w-full '>
                    <div className="flex justify-between items-center gap-1">
                    <div className='w-10 rounded-full bg-slate-400 h-10'></div>
                    <div className="flex flex-col space-y-1">
                    <p className="text-[11px] text-[#8F99A9]">Name</p>
                    <p className="text-xs">Michle Hussy</p>
                    </div>
                    </div>
                    { dropDown?<p className='cursor-pointer' onClick={()=>setDropDown((prev)=>!prev)}><ChevronDown size={18} color='#303F58'/></p>
                  :<p className='cursor-pointer' onClick={()=>setDropDown((prev)=>!prev)}> <ChevronUp size={18} color='#303F58'/></p>}
                </div>
                <div className="flex  items-center gap-1  pt-2">
                    <div className='w-10 rounded-full border h-10'></div>
                    <div className="flex flex-col space-y-1">
                    <p className="text-[11px] text-[#8F99A9]">Email Adress,</p>
                    <p className="text-xs">bid123@gmail.com</p>
                    </div>
                    </div>
                    <div className="flex  items-center gap-1  pt-2">
                    <div className='w-10 rounded-full border h-10'></div>
                    <div className="flex flex-col space-y-1">
                    <p className="text-[11px] text-[#8F99A9]">Phone Number</p>
                    <p className="text-xs">90332435536</p>
                    </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="col-span-10">
           
           <div>
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
            
{activeTab === "Aria" && (
  <RegionAriaView/>
)}



{activeTab === "Team" && (
  <RegionTeamView/>
)}


{activeTab === "Performance Analytics" && (
  <RegionPerformanceView/>
)}
           </div>
        </div>
      </div>
    </div>
  )
}

export default RegionView