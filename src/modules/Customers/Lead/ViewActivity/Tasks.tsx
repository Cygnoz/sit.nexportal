// import Boxes from "../../../../assets/icons/Boxes"
// import PackageCheck from "../../../../assets/icons/PackageCheck"
import { useEffect, useState } from "react";
import useApi from "../../../../Hooks/useApi";
import TaskTable from "./TaskTable";
import { useParams } from "react-router-dom";
import { endPoints } from "../../../../services/apiEndpoints";

interface LeadViewData {
    task: string;
    dueDate: string;
    bda: string;
  }

type Props = {}

const Tasks = ({}: Props) => {

  const {request : getLeadTask}=useApi('get',3001)
  const [taskData, setTaskData]=useState<any[]>([])

  const {id}=useParams()

      const getTask = async()=>{
          try{
              const {response, error}= await getLeadTask(`${endPoints.GET_ALL_LEAD_ACTIVITIES}/${id}`)
              console.log(response);
              console.log(error);
              if(response && !error){
                  console.log(response.data.activities);
                  const transformedTask = response.data?.activities?.map((task:any)=>({
                    ...task,
                    taskTitle:task?.taskTitle,
                    taskDescription:task?.taskDescription,
                    dueDate:task?.dueDate,
                    taskType:task?.taskType,
                    time:task?.time,
                  })) || []
                  setTaskData(transformedTask)               
              }           
              else{
                  console.log(error.response.data.message);               
              }
          }
          catch(err){
              console.log(err, "error message");
              
          }
      }
      useEffect(()=>{
          getTask()
      },[])
      console.log(taskData);
  
    // Define the columns with strict keys
  const columns: { key: any; label: string }[] = [
    { key: "taskTitle", label: "Task" },
    { key: "dueDate", label: "Due Date" },
    { key: "bda", label: "BDA" },
  ];

  return (
    <div>
         <div>
        <TaskTable<LeadViewData>
            data={taskData}
            columns={columns}
            headerContents={{
            title: "Tasks",
            search: { placeholder: "Search" },
            // sort: [
            //       {
            //         sortHead: "Filter",
            //         sortList: [
            //           { label: "Sort by Date", icon: <PackageCheck size={14} color="#4B5C79"/> },
            //           { label: "Sort by Status", icon: <Boxes size={14} color="#4B5C79"/> }
            //         ]
            //       }
            //     ],
            button:{
              buttonHead:"Add Task"
            }
            }}
            noAction
        />
    </div>
    </div>
  )
}

export default Tasks