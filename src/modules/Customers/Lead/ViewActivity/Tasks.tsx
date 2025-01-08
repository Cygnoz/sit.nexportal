// import Boxes from "../../../../assets/icons/Boxes"
// import PackageCheck from "../../../../assets/icons/PackageCheck"
import TaskTable from "./TaskTable";

interface LeadViewData {
    task: string;
    dueDate: string;
    bda: string;
  }

type Props = {}

const Tasks = ({}: Props) => {
         // Data for the table
const leadData: LeadViewData[] = [
    { task: "Send Follow Up Email", dueDate: "5/12/2024", bda: "Anjela John", },
    { task: "Call the lead to discuss their requirements further.", dueDate: "9/8/2024", bda: "Anjela John", },
    { task: "Schedule Product Demo", dueDate: "19/4/2024", bda: "Anjela John",},
    { task: "Prepare Proposal", dueDate: "26/9/2024", bda: "Anjela John",},
    { task: "Send Follow Up Email", dueDate: "6/7/2024", bda: "Anjela John",  },
  ];
  
    // Define the columns with strict keys
  const columns: { key: keyof LeadViewData; label: string }[] = [
    { key: "task", label: "Task" },
    { key: "dueDate", label: "Due Date" },
    { key: "bda", label: "BDA" },
  ];

  return (
    <div>
         <div>
        <TaskTable<LeadViewData>
            data={leadData}
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