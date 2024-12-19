import { useEffect, useState } from "react";
import Modal from "../../components/modal/Modal";
import Button from "../../components/ui/Button";
import Table from "../../components/ui/Table";
import CalenderDays from "../../assets/icons/CalenderDays";
import Package from "../../assets/icons/Package";
import SortBy from "../../components/ui/SortBy";
import CreateTickets from "./TicketsForm";
import { useNavigate } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import { TicketsData } from "../../Interfaces/Tickets";
import { endPoints } from "../../services/apiEndpoints";


type Props = {}

function TicketsHome({}: Props) {
  const {request:getAllTickets}=useApi('get',3004)
  const [allTickets, setAllTickets] = useState<TicketsData[]>([]);
  const navigate=useNavigate()
 

   // State to manage modal visibility
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [editId,setEditId] = useState('');


    const handleEdit=(id:any)=>{
      handleModalToggle()
      setEditId(id)
    }
   // Function to toggle modal visibility
   const handleModalToggle = () => {
     setIsModalOpen((prev) => !prev);
getTickets();
   };
 
  const handleView=(id:any)=>{
    navigate(`/ticketsView/${id}`)
  }

       const getTickets=async()=>{
            try{
              const {response,error}=await getAllTickets(endPoints.GET_TICKETS)
              console.log("res",response);
              
              if(response && !error){
                console.log(response.data.tickets);
               const transformTicket= response.data.tickets?.map((tickets:any) => ({
                  ...tickets,
                  name:`${tickets?.customerDetails?.firstName}${tickets?.customerDetails?.lastName?tickets?.customerDetails?.lastName:""}`
                })) || [];
               setAllTickets(transformTicket)
              }
            }catch(err){
              console.log(err);
            }
          }
          console.log(allTickets);
          
          useEffect(()=>{
            getTickets()
          },[])
        

  // Define the columns with strict keys
  // Define the columns with strict keys for LeadData
const columns: {  key: any; label: string }[] = [
   
  { key: "subject", label: "Subject" },
  { key: "name" , label: "Requestor" },
  { key: "priority", label: "Priority" },
  { key: "description", label: "Description" },
  { key: "status", label: "Status" },
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
      <Button variant="primary"  size="sm"  onClick={()=>{
        handleModalToggle()
        setEditId('')

      }}>
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
      <Table<TicketsData>
  data={allTickets}
  columns={columns}
  headerContents={{
    title: "Ticket Details",
    search: { placeholder: "Search BDA By Name" },
   
  }}
  actionList={[
    { label: 'view', function: handleView },
    { label: 'edit', function: handleEdit},
  ]}
/>

</div>
      

        </div>
     </div>
      
    </div>
    {/* Modal controlled by state */}
    <Modal className="w-[35%]" open={isModalOpen} onClose={handleModalToggle}>
    <CreateTickets editId={editId} onClose={handleModalToggle}/>
    </Modal>
    </>
  )
}

export default TicketsHome