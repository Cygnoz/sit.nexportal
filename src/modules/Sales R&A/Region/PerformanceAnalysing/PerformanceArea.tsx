import RegionIcon from "../../../../assets/icons/RegionIcon"
import UserIcon from "../../../../assets/icons/UserIcon"
import Table from "../../../../components/ui/Table"

type Props = {}
// Interface for the data structure
interface ColumnData {
    areaManager: string;
    area: string;
    noOfLicensers: number;
    status: string;
  }
  

function PerformanceArea({}: Props) {
    // Define the columns with strict keys
const columns: { key:  keyof ColumnData; label: string }[] = [
    { key: "areaManager", label: "Area Manager" },
    { key: "area", label: "Area" },
    { key: "noOfLicensers", label: "No. of Licensers" },
    { key: "status", label: "Status" },
  ];

  // Sample data array matching the columns
const data: Array<ColumnData> = [
    {
      areaManager: "John Doe",
      area: "Downtown",
      noOfLicensers: 15,
      status: "Active",
    },
    {
      areaManager: "Jane Smith",
      area: "Uptown",
      noOfLicensers: 10,
      status: "Deactive",
    },
    {
      areaManager: "Bob Brown",
      area: "Midtown",
      noOfLicensers: 12,
      status: "Active",
    },
  ];
  
  return (
    <div>
          <Table<ColumnData> data={data} columns={columns} headerContents={{
          title:'Performance By Area',
          search:{placeholder:'Search Area...'},
          sort: [
                {
                  sortHead: "Filter",
                  sortList: [
                    {
                      label: "Sort by Name",
                      icon: <UserIcon size={14} color="#4B5C79" />,
                    },
                    {
                      label: "Sort by Region",
                      icon: <RegionIcon size={14} color="#4B5C79" />,
                    },
                  ],
                }
          ]
        }}
        noAction
          />
    </div>
  )
}

export default PerformanceArea