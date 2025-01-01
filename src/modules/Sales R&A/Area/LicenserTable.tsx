import { useNavigate } from 'react-router-dom';
import LicensersTable from '../../../components/ui/LicensersTable';
interface LicenserData {
    name: string;
    plan: string;
    status: string;
    startDate: string;
    endDate: string;
  }
  
type Props = {
  licensor?:any
}

const LicenserTable = ({licensor}: Props) => {
  const navigate=useNavigate()
  const handleView=(id:any)=>{
    navigate(`/licenser/${id}`)
  }
      // Define the columns with strict keys
    
      const columns: { key: any; label: string }[] = [
        { key: "firstName", label: "Name" },
        { key: "licensorStatus", label: "Phone No" },
        { key: "startDate", label: "Start Date" },
        { key: "endDate", label: "End Date" },
      ];
    
  return (
    <div>
         <div>
        <LicensersTable<LicenserData>
          data={licensor}
          columns={columns}
          headerContents={{
            title: 'Licensers',
            search: { placeholder: 'Search License by Name or Holder Name' },
          }}
          handleView={handleView}
        />
      </div>
      </div>
  )
}

export default LicenserTable