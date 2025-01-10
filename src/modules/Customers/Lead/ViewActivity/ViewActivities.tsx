import { useState } from "react";
import ActivityTimeline from "./ActivityTimeline";
import Mails from "./Mails";
import Notes from "./Notes";
import Tasks from "./Tasks";
import Meetings from "./Meetings";


type Props = {
  leadData:any
}

const ViewActivities = ({leadData}: Props) => {
    const tabs=["Activity Timeline","Mails", "Notes","Task","Meetings"]
    const [activeTab, setActiveTab] = useState<string>("Activity Timeline");
     // Data for the table
  
    //  const {request : getLeadActivity}=useApi('get',3001)
    //  const [activityData, setActivityData]=useState<any[]>([])

    //    const {id}=useParams()
    //        const getActivity = async()=>{
    //            try{
    //                const {response, error}= await getLeadActivity(`${endPoints.GET_ALL_LEAD_ACTIVITIES}/${id}`)
    //                console.log(response);
    //                console.log(error);
    //                if(response && !error){
    //                    console.log(response.data.activities);
    //                    setActivityData(response.data.activities)               
    //                }           
    //                else{
    //                    console.log(error.response.data.message);               
    //                }
    //            }
    //            catch(err){
    //                console.log(err, "error message");
                   
    //            }
    //        }
    //        useEffect(()=>{
    //         getActivity()
    //        },[])
    //        console.log(activityData);
        
  return (
    <div>
      <div className="flex gap-14 text-base font-bold my-5 border-b border-gray-200">
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`cursor-pointer py-3 px-[16px] ${
            activeTab === tab
              ? "text-deepStateBlue"
              : "text-gray-400"
          }`}
        >
          {tab}
        </div>
      ))}
    </div>

    {activeTab==="Activity Timeline"&&(
        <div>
            <ActivityTimeline/>
        </div>
    )}

    {activeTab==="Mails"&&(
    <Mails leadData={leadData} />
    )}

    {activeTab==="Notes"&&(
    <Notes/>
    )}

    {activeTab==="Task"&&(
    <Tasks leadData={leadData} />
    )}

    {activeTab==="Meetings"&&(
    <Meetings/>
    )}


    </div>
  )
}

export default ViewActivities;