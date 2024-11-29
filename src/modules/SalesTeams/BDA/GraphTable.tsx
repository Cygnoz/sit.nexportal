import Table from "../../../components/ui/Table";

interface TrailTableData {
    trailId:string;
    leadName: string;
    currentStatus: string;
    startDate:string;
    status: string;
  }
  
type Props = {}

const GraphTable = ({}: Props) => {
    const handleEditDeleteView = (editId?: any, viewId?: any, deleteId?: any) => {
        if (viewId) {
          // navigate(`/amView/${viewId}`)
          console.log(viewId);
            console.log(editId);
            console.log(deleteId);
            
        }
      }
    
  // Data for the table
  const data: TrailTableData[] = [
    { trailId:"LD12345", leadName: "Devid Billie", currentStatus: "Initial Contact", startDate:"7/11/19", status: "High",  },
    { trailId:"LD12345", leadName: "Sudeep Kumar", currentStatus: "(406) 555-0120", startDate:"7/11/19", status: "Medium",  },
    { trailId:"LD12345", leadName: "Kathryn Murphy", currentStatus: "Initial Contact", startDate:"7/11/19", status: "Low",  },
    { trailId:"LD12345", leadName: "Darrell Steward", currentStatus: "Initial Contact", startDate:"7/11/19", status: "Low", },
  ];
  // Define the columns with strict keys
  const columns: { key: keyof TrailTableData; label: string }[] = [
    { key: "trailId", label: "Trail ID" },
    { key: "leadName", label: "Lead Name" },
    { key: "currentStatus", label: "Current Status" },
    { key: "status", label: "Priority" },
    { key: "startDate", label: "Start Date" },
  ];

  return (
    <div>
              <div className="grid grid-cols-12">
        <div className="col-span-5"></div>
        <div className="col-span-7">
        <div className="py-2 mt-4">
        <Table<TrailTableData> data={data} columns={columns} headerContents={{
          title: "Current Trails handled by BDA",
          search: { placeholder: 'Search BDA by Name' },
        }}
        actionList={[
          { label: 'view', function: handleEditDeleteView },
        ]} />
      </div>
        </div>
      </div>

    </div>
  )
}

export default GraphTable