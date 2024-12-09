import { useNavigate } from 'react-router-dom';
import Table from '../../../../components/ui/Table';

type Props = {}
// Define the type for Ticket Data
interface TicketData {
    ticketNumber: string;
    assignedAgent: string;
    priority: string;
    status: string;
    lastUpdated: string;
  }
  

function SupportTicketTable({}: Props) {
    const navigate=useNavigate()
    // Data for the tickets table
const ticketData: TicketData[] = [
    { ticketNumber: "TN-H001", assignedAgent: "Mckensy", priority: "High", status: "Resolved", lastUpdated: "Oct 12, 2024" },
    { ticketNumber: "TN-M002", assignedAgent: "Tech stream System", priority: "Low", status: "Resolved", lastUpdated: "Oct 12, 2024" },
    { ticketNumber: "TN-M003", assignedAgent: "NextGen Logic", priority: "Medium", status: "Resolved", lastUpdated: "Oct 12, 2024" },
    { ticketNumber: "TN-H004", assignedAgent: "ByteForge", priority: "High", status: "Resolved", lastUpdated: "Oct 12, 2024" },
    { ticketNumber: "TN-H005", assignedAgent: "Veritas Capital", priority: "Low", status: "Resolved", lastUpdated: "Oct 12, 2024" },
    { ticketNumber: "TN-H006", assignedAgent: "Inspire Financial", priority: "Low", status: "Resolved", lastUpdated: "Oct 12, 2024" },
  ];
  
  // Columns for the tickets table
const ticketColumns: { key: keyof TicketData; label: string }[] = [
    { key: "ticketNumber", label: "Ticket Number" },
    { key: "assignedAgent", label: "Assigned Support Agent" },
    { key: "priority", label: "Priority" },
    { key: "status", label: "Status" },
    { key: "lastUpdated", label: "Last Updated" },
  ];

  const handleView=(id:any)=>{
    navigate(`/trialView/${id}`)
  }
  

  return (
   <>
   <div>
    <Table<TicketData> data={ticketData} columns={ticketColumns} headerContents={{
      title:'Support Ticket',
      search:{placeholder:'Search'},
    }}
    actionList={[
        { label: 'view', function: handleView },
      ]}
     noPagination
     maxHeight='450px'
    />
  </div>
   </>
  )
}

export default SupportTicketTable