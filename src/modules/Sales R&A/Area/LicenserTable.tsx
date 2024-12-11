import LicensersTable from '../../../components/ui/LicensersTable';
interface LicenserData {
    name: string;
    plan: string;
    status: string;
    startDate: string;
    endDate: string;
  }
  
type Props = {}

const LicenserTable = ({

}: Props) => {

    const data: LicenserData[] = [
        { name: "Devid Billie", plan: "Plan 1", status: "Active", startDate: "2/11/2024", endDate: "2/12/2024" },
        { name: "Sudeep Kumar", plan: "Plan 1", status: "Expired", startDate: "2/11/2024", endDate: "2/12/2024" },
        { name: "Kathryn Murphy", plan: "Plan 1", status: "Upcoming Renewal", startDate: "2/11/2024", endDate: "2/12/2024" },
        { name: "Darrell Steward", plan: "Plan 1", status: "Expired", startDate: "2/11/2024", endDate: "2/12/2024" },
        { name: "Ronald Richards", plan: "Plan 1", status: "Upcoming Renewal", startDate: "2/11/2024", endDate: " 2/12/2024" },
        { name: "Jane Cooper", plan: "Plan 1", status: "Active", startDate: "2/11/2024", endDate: "2/12/2024" },
        { name: "Sudeep Kumar", plan: "Plan 1", status: "Expired", startDate: "2/11/2024", endDate: "2/12/2024" },
      ];
      // Define the columns with strict keys
    
      const columns: { key: any; label: string }[] = [
        { key: "name", label: "Name" },
        { key: "plan", label: "Plan" },
        { key: "status", label: "Phone No" },
        { key: "startDate", label: "Start Date" },
        { key: "endDate", label: "End Date" },
      ];
    
  return (
    <div>
         <div>
        <LicensersTable<LicenserData>
          data={data}
          columns={columns}
          headerContents={{
            title: 'Licensers',
            search: { placeholder: 'Search License by Name or Holder Name' },
          }}
          getButtonName={(row) => {
            if (row.status === "Expired" || row.status === "Upcoming Renewal") {
              return "Upgrade";
            }
            return "Renew";
          }}
        />
      </div>
      </div>
  )
}

export default LicenserTable