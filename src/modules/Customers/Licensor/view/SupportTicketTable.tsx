import { useNavigate } from 'react-router-dom';
import Table from '../../../../components/ui/Table';

type Props = {
  supportTickets:any
}
// Define the type for Ticket Data
interface TicketData {
    ticketNumber: string;
    assignedAgent: string;
    priority: string;
    status: string;
    lastUpdated: string;
  }
  

function SupportTicketTable({supportTickets}: Props) {
    const navigate=useNavigate()
   
  
  // Columns for the tickets table
const ticketColumns: { key: any; label: string }[] = [
    { key: "ticketId", label: "Ticket Number" },
    { key: "supportAgent", label: "Assigned Support Agent" },
    { key: "priority", label: "Priority" },
    { key: "status", label: "Status" },
    { key: "openingDate", label: "Last Updated" },
  ];

  const SupportData = supportTickets.map((support: any) => ({
    ...support,
    ticketId: support.ticketId || "N/A",
    supportAgent: support.supportAgent, // or any unique identifier
    status: support.status || "N/A", // Adjust according to your data structure
    priority: support.priority || "N/A",
    openingDate: support.openingDate
    ? new Date(support.openingDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : "N/A",
    
  }));

  const handleView=(id:any)=>{
    navigate(`/trialView/${id}`)
  }
  

  return (
   <>
   <div>
    <Table<TicketData> data={SupportData} columns={ticketColumns} headerContents={{
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