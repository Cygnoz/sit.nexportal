import { useState } from "react";
import Button from "../../../components/ui/Button";
import Modal from "../../../components/modal/Modal";
import HomeCard from "../../../components/ui/HomeCards";
import Table from "../../../components/ui/Table";
import UserIcon from "../../../assets/icons/UserIcon";
import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import RegionIcon from "../../../assets/icons/RegionIcon";
import CalenderDays from "../../../assets/icons/CalenderDays";
import TicketCardIcon from "../../../assets/icons/TicketCardIcon";
import EscalatedTicket from "../../../assets/icons/EscalatedTicket";
import ResolvedTicket from "../../../assets/icons/ResolvedTicket";
import AddSupportAgent from "./AddSupportAgent";
import { useNavigate } from "react-router-dom";



interface SupervisorData {
    supportAgentId: string;
    name:string;
    emailAdrees: string;
    phoneNo: string;
    assignedSupervisor:string;
  }
  
const SupervisorHome = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen((prev) => !prev);
      };
      const navigate=useNavigate()
      const handleEditDeleteView=(editId?:any,viewId?:any,deleteId?:any)=>{
        if(viewId){
          navigate(`/supportAgentView/${viewId}`)
          console.log(viewId);
          
        }else if(editId){
          console.log(editId)
          // setId({...id,edit:editId})
        }else{
          console.log(deleteId)
          // setId({...id,delete:deleteId})
        }
      }
    

      // Data for HomeCards
  const homeCardData = [
    { icon: <UserIcon />, number: "167", title: "Total Support Agents",iconFrameColor:'#30B777',iconFrameBorderColor:'#B3F0D3CC' },
    { icon: <TicketCardIcon size={40}/>, number: "46", title: "Total Tickets",iconFrameColor:'#51BFDA',iconFrameBorderColor:'#C1E7F1CC' },
    { icon: <EscalatedTicket/>, number: "86", title: "Total Escalated Tickets",iconFrameColor:'#1A9CF9',iconFrameBorderColor:'#BBD8EDCC' },
    { icon: <ResolvedTicket />, number: "498", title: "Total Resolved Tickets",iconFrameColor:'#D786DD',iconFrameBorderColor:'#FADDFCCC' },
  ];

    // Data for the table
    const data: SupervisorData[] = [
        { supportAgentId: "Devid Billie",name:"George W", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedSupervisor: "Region 1", },
        { supportAgentId: "Sudeep Kumar",name:"Thimothee Charlet", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedSupervisor: "Region 1", },
        { supportAgentId: "Kathryn Murphy",name:"Dustin", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedSupervisor: "Region 1",  },
        { supportAgentId: "Darrell Steward",name:"Willy Don", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedSupervisor: "Region 1",},
        { supportAgentId: "Ronald Richards", name:"Frederikson G", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedSupervisor: "Region 1",},
        { supportAgentId: "Jane Cooper", name:"George W", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedSupervisor: "Region 1",},
        { supportAgentId: "Sudeep Kumar", name:"Thimothee Charlet", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedSupervisor: "Region 1", },
        { supportAgentId: "Kathryn Murphy", name:"Dustin", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedSupervisor: "Region 1",},
        { supportAgentId: "Darrell Steward", name:"Willy Don", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedSupervisor: "Region 1", },
        { supportAgentId: "Ronald Richards", name:"Frederikson G", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedSupervisor: "Region 1", },
        { supportAgentId: "Jane Cooper", name:"Von hue", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedSupervisor: "Region 1", },
      ];
        // Define the columns with strict keys
        const columns: { key: keyof SupervisorData; label: string }[] = [
          { key: "supportAgentId", label: "Support Agent Id" },
          { key: "name", label: "Name" },
          { key: "emailAdrees", label: "Email" },
          { key: "phoneNo", label: "Phone" },
          { key: "assignedSupervisor", label: "Assigned Supervisor" },

        ];
      

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-[#303F58] text-base font-bold">Support Agent</h1>
        <Button variant="primary" size="sm" onClick={handleModalToggle}>
          + Create Support Agent
        </Button>
      </div>

      {/* HomeCards Section */}
      <div className="flex gap-3 py-2 justify-between mt-6">
        {homeCardData.map((card, index) => (
          <HomeCard 
          iconFrameColor={card.iconFrameColor}
            iconFrameBorderColor={card.iconFrameBorderColor}
            key={index} 
            icon={card.icon} 
            number={card.number} 
            title={card.title} 
          />
        ))}
      </div>

      {/* Table Section */}
      <div>
        <Table<SupervisorData> data={data} columns={columns} headerContents={{
          title:'Supervisor Overview',
          search:{placeholder:'Search Support Agent'},
          sort: [
                {
                  sortHead: "Filter",
                  sortList: [
                    { label: "Sort by supervisorCode", icon: <UserIcon size={14} color="#4B5C79"/> },
                    { label: "Sort by Age", icon: <RegionIcon size={14} color="#4B5C79"/> },
                    { label: "Sort by supervisorCode", icon: <AreaManagerIcon size={14} color="#4B5C79"/> },
                    { label: "Sort by Age", icon: <CalenderDays size={14} color="#4B5C79"/> }
                  ]
                }
          ]
        }}
        actionList={[
          { label: 'edit', function:handleEditDeleteView },
          { label: 'delete', function: handleEditDeleteView },
          { label: 'view', function: handleEditDeleteView },
        ]}  />
      </div>

      {/* Modal Section */}
      <Modal open={isModalOpen} onClose={handleModalToggle}>
        <AddSupportAgent onClose={handleModalToggle} />
      </Modal>
    </div>
  )
}

export default SupervisorHome;