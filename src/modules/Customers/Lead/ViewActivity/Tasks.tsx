import Boxes from "../../../../assets/icons/Boxes"
import PackageCheck from "../../../../assets/icons/PackageCheck"
import Table from "../../../../components/ui/Table"

interface LeadViewData {
    task: string;
    dueDate: string;
    bda: string;
    button: string;
    source: string;
  }

type Props = {}

const Tasks = ({}: Props) => {
         // Data for the table
const leadData: LeadViewData[] = [
    { task: "BDA12345", dueDate: "Anjela John", bda: "(406) 555-0120", button: "mark as completed", source: "", },
    { task: "BDA12345", dueDate: "Kristin Watson", bda: "(480) 555-0103", button: "mark as completed", source: "", },
    { task: "BDA12345", dueDate: "Jacob Jones", bda: "(208) 555-0112", button: "mark as completed", source: "", },
    { task: "BDA12345", dueDate: "Wade Warren", bda: "(702) 555-0122", button: "mark as completed", source: "", },
    { task: "BDA12345", dueDate: "Jacob Jones", bda: "(208) 555-0112", button: "mark as completed", source: "", },
  ];
  
    // Define the columns with strict keys
  const columns: { key: keyof LeadViewData; label: string }[] = [
    { key: "task", label: "Task" },
    { key: "dueDate", label: "Due Date" },
    { key: "bda", label: "BDA" },
    { key: "button", label: "" },
    { key: "source", label: "" },
  ];

  return (
    <div>
             <div>
        <Table<LeadViewData>
            data={leadData}
            columns={columns}
            headerContents={{
            title: "Lead Details",
            search: { placeholder: "Search" },
            sort: [
                  {
                    sortHead: "Filter",
                    sortList: [
                      { label: "Sort by Date", icon: <PackageCheck size={14} color="#4B5C79"/> },
                      { label: "Sort by Status", icon: <Boxes size={14} color="#4B5C79"/> }
                    ]
                  }
                ]
            }}
            noAction
        />
    </div>
    </div>
  )
}

export default Tasks