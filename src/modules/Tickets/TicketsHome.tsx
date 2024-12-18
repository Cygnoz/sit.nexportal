import { useState } from "react";
import Modal from "../../components/modal/Modal";
import Button from "../../components/ui/Button";
import Table from "../../components/ui/Table";
import CalenderDays from "../../assets/icons/CalenderDays";
import Package from "../../assets/icons/Package";
import SortBy from "../../components/ui/SortBy";
import CreateTickets from "./TicketsForm";
import { useNavigate } from "react-router-dom";


type Props = {}

function TicketsHome({}: Props) {
  const navigate=useNavigate()
  interface LeadData {
    status: string;
    subject: string;
    requestor: string;
    priority: string;
    requested: string;
   
    
  }

   // State to manage modal visibility
   const [isModalOpen, setIsModalOpen] = useState(false);
   // Function to toggle modal visibility
   const handleModalToggle = () => {
     setIsModalOpen((prev) => !prev);
   };



 
  const handleView=(id:any)=>{
    navigate(`/ticketsView/${id}`)
  }


  

 // Data for the table
const leadData: LeadData[] = [
  { subject: "Sample Subject", requestor: "Anjela John", priority: "Normal", requested: "danten@mail.ru", status: "New"},
  { subject: "Sample Subject", requestor: "Kristin Watson", priority: "High", requested: "warn@mail.ru",  status: "Contacted"},
  { subject: "Sample Subject", requestor: "Jacob Jones", priority: "Normal", requested: "irnabela@gmail.com",  status: "Closed"},
  { subject: "Sample Subject", requestor: "Wade Warren", priority: "Normal", requested: "tinest@mail.ru", status: "Closed"},
  { subject: "Sample Subject", requestor: "Jacob Jones", priority: "High", requested: "irnabela@gmail.com",  status: "Closed" },
  { subject: "Sample Subject", requestor: "Devon Lane", priority: "High", requested: "qmaho@mail.ru", status: "New" },
  { subject: "Sample Subject", requestor: "Kathryn Murphy", priority: "Normal", requested: "danten@mail.ru", status: "New" },
  { subject: "Sample Subject", requestor: "Mason Edwards", priority: "Normal", requested: "masonedwards@mail.com",  status: "Contacted" },
  { subject: "Sample Subject", requestor: "Lily Anderson", priority: "High", requested: "lily.anderson@mail.com",  status: "New" },
  { subject: "Sample Subject", requestor: "Oliver Hall", priority: "High", requested: "oliverhall@mail.com",  status: "New" },
  { subject: "Sample Subject", requestor: "Sophia Lee", priority: "Normal", requested: "sophia.lee@mail.com",  status: "Closed" },
  { subject: "Sample Subject", requestor: "Ethan Clark", priority: "High", requested: "ethan.clark@mail.com", status: "Contacted"},
  { subject: "Sample Subject", requestor: "Isabella Carter", priority: "Normal", requested: "isabella.carter@mail.com",  status: "New" },
  { subject: "Sample Subject", requestor: "Henry Thomas", priority: "High", requested: "henry.thomas@mail.com",  status: "Closed" },
  { subject: "Sample Subject", requestor: "Ava Jackson", priority: "Normal", requested: "ava.jackson@mail.com",  status: "Contacted"},
  { subject: "Sample Subject", requestor: "Lucas Wright", priority: "High", requested: "lucas.wright@mail.com",  status: "Closed"},
];

  // Define the columns with strict keys
  // Define the columns with strict keys for LeadData
const columns: { key: keyof LeadData; label: string }[] = [
    { key: "status", label: "Status" },
  { key: "subject", label: "Subject" },
  { key: "requestor", label: "Requestor" },
  { key: "priority", label: "Priority" },
  { key: "requested", label: "Requested" },
 
 
];

const sort= 
      {
        sortHead: "Sort",
        sortList: [
          { label: "Sort by Name", icon: <CalenderDays size={14} color="#4B5C79"/> },
          { label: "Sort by Age", icon: <Package size={14} color="#4B5C79"/> },
          { label: "Sort by Name", icon: <CalenderDays size={14} color="#4B5C79"/> },
          { label: "Sort by Age", icon: <Package size={14} color="#4B5C79"/> }
        ]
      }
    
  return (
    <>
    <div className="text-[#303F58] space-y-4">
      <div className="flex justify-between items-center">
      <h1 className="text-[#303F58] text-xl font-bold">Tickets</h1>
      <Button variant="primary"  size="sm" onClick={handleModalToggle}>
        <span className="text-xl font-bold">+</span>Create Tickets
      </Button>
      </div>
    

     <div className="grid grid-cols-12 gap-3">
        <div className="col-span-3">
            <div className="flex justify-between  mt-5 bg-[#E7EDF2] py-4 px-3">
            <p>Unresolved Tickets</p>
            <p>21</p>
            </div>
            <div className="flex justify-between py-4 px-3">
            <p>Unassigned Tickets</p>
            <p>28</p>
            </div> <div className="flex justify-between py-4 px-3">
            <p>All Unresolved Tickets</p>
            <p>22</p>
            </div>
            <div className="flex justify-between py-4 px-3">
            <p>Recently Updated Tickets</p>
            <p>11</p>
            </div> <div className="flex justify-between py-4 px-3">
            <p>Pending Tickets</p>
            <p>20</p>
            </div> <div className="flex justify-between  py-4 px-3">
            <p>Recently Solved Tickets</p>
            <p>218</p>
            </div>


        </div>
        <div className="col-span-9 w-[100%]">
             {/* Table Section */}
     <div >
       <div className="flex justify-between p-3">
       <h1 className="text-xl font-bold">Unsolved Tickets</h1>
       <SortBy sort={sort}/>
       </div>
      <Table<LeadData>
  data={leadData}
  columns={columns}
  headerContents={{
    title: "Ticket Details",
    search: { placeholder: "Search BDA By Name" },
   
  }}
  actionList={[
    { label: 'view', function: handleView },
  ]}
/>

</div>
      

        </div>
     </div>
      
    </div>
    {/* Modal controlled by state */}
    <Modal className="w-[35%]" open={isModalOpen} onClose={handleModalToggle}>
    <CreateTickets  onClose={handleModalToggle}/>
    </Modal>
    </>
  )
}

export default TicketsHome