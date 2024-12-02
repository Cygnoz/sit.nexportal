import LeadsCardIcon from "../../../assets/icons/LeadsCardIcon"
//import HomeCard from "../../../components/ui/HomeCards"


type Props = {}

const ResendActivity = ({}: Props) => {


  
  return (
    <div>
      <div className="bg-white p-5">
      <h1 className="font-bold text-sm">Recent Activity Feed</h1>
      
      <div className="my-3 rounded-lg">
      <div className="flex py-2 gap-4 bg-[#F6F6F6] ">
        <div className="bg-black rounded-full">
        <LeadsCardIcon size={34}/>
         </div>
     
      <p  className="font-bold text-sm mt-2">New Lead Added in Area</p>
      
      <p  className="font-semibold text-sm mt-2" >November 15, 2024, 10:30 AM</p>
     
      </div>
      <hr/>
      <div className=" p-3 bg-[#F6F6F6]">
        <p className="text-xs">  A new lead, "ACME Corp," was added to the pipeline by Area Manager
        Sudeep Kumar</p>
      </div>
      </div>

     <div  className="my-3">
     <div className="flex py-2 gap-4 bg-[#F6F6F6]">
     <div className="bg-black rounded-full">
        <LeadsCardIcon size={34}/>
         </div>
      <p  className="font-bold text-sm mt-2">New Lead Added in Area</p>
      <p  className="font-semibold text-sm mt-2" >November 15, 2024, 10:30 AM</p>
      </div>
      <hr/>
      <div className="  p-3 bg-[#F6F6F6]">
        <p className="text-xs"> A new lead, "ACME Corp," was added to the pipeline by Area Manager
        Sudeep Kumar</p>
      </div>
     </div>

     <div>
     <div className="flex py-2 gap-4 bg-[#F6F6F6]">
     <div className="bg-black rounded-full">
        <LeadsCardIcon size={34}/>
         </div>
      <p className="font-bold text-sm mt-2">New Lead Added in Area</p>
      <p className="font-semibold text-sm mt-2" >November 15, 2024, 10:30 AM</p>
      </div>
      <hr/>
      <div className=" p-3 bg-[#F6F6F6]">
        <p className="text-xs"> A new lead, "ACME Corp," was added to the pipeline by Area Manager
        Sudeep Kumar</p>
      </div>
     </div>

      </div>
      </div>
    
  )
}

export default ResendActivity