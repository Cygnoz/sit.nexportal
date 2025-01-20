// import Boxes from "../../../../assets/icons/Boxes"
// import PackageCheck from "../../../../assets/icons/PackageCheck"
import { useEffect, useState } from "react";
import useApi from "../../../../Hooks/useApi";
import TaskTable from "./TaskTable";
import { useParams } from "react-router-dom";
import { endPoints } from "../../../../services/apiEndpoints";
import { LeadEmailData } from "../../../../Interfaces/LeadEmail";
import Modal from "../../../../components/modal/Modal";
import TasksForm from "../ViewModals/TasksForm";

type Props = {
  leadData:any
}

const Tasks = ({leadData}: Props) => {
  const [editId, setEditId] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  const handleModalToggle = (editId?: any) => {
    setIsModalOpen((prev) => !prev);
   
    setEditId(editId)

  };

  const {request : getLeadTask}=useApi('get',3001)
  const [taskData, setTaskData]=useState<any[]>([])

  const {id}=useParams()

  const getTask = async () => {
    try {
        const { response, error } = await getLeadTask(`${endPoints.GET_ALL_LEAD_ACTIVITIES}/${id}`);
       // console.log(response);
       // console.log(error);

        if (response && !error) {
           // console.log(response.data.activities);

            // Filter activities where activityType is 'Task' and transform them
            const transformedTask = response.data?.activities
                ?.filter((task: any) => task.activityType === 'Task') // Only include tasks
                ?.map((task: any) => ({
                    ...task,
                    taskTitle: task?.taskTitle,
                    taskDescription: task?.taskDescription,
                    dueDate: task?.dueDate ? new Date(task.dueDate).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }) : "N/A",

                    taskType: task?.taskType,
                    time: task?.time,
                    bda:leadData?.bdaDetails?.bdaName
                    ? leadData?.bdaDetails?.bdaName
                    : "N/A"
                })) || [];

            // Update the state with the filtered and transformed tasks
            setTaskData(transformedTask);
        } else {
            console.log(error.response.data.message);
        }
    } catch (err) {
        console.log(err, "error message");
    }
};

      useEffect(()=>{
          getTask()
      },[])
     // console.log(taskData);
  
    // Define the columns with strict keys
  const columns: { key: any; label: string }[] = [
    { key: "taskTitle", label: "Task" },
    { key: "dueDate", label: "Due Date" },
    { key: "bda", label: "BDA" },
   
  ];

  return (
    <div>
         <div>
        <TaskTable<LeadEmailData>
            data={taskData}
            columns={columns}
            headerContents={{
            title: "Tasks",
            search: { placeholder: "Search" },
            button:{
              buttonHead:"Add Task"
            },
            
            }}
            actionList={[
              { label: 'edit', function: handleModalToggle },
             
            ]}
            getTask={getTask}
        />
    </div>
    <Modal className="w-[45%]" open={isModalOpen} onClose={handleModalToggle}>
        <TasksForm editId={editId} onClose={handleModalToggle} />
      </Modal>
    </div>
  )
}

export default Tasks