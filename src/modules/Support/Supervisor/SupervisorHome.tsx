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
import AddSupervisor from "./AddSupervisor";



interface SupervisorData {
    supervisorCode: string;
    supervisorName:string;
    emailAdrees: string;
    phoneNo: string;
    assignedAgents:string;
    roles: string;
  }
  
const SupervisorHome = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen((prev) => !prev);
      };
      const handleEditDeleteView=(editId?:any,viewId?:any,deleteId?:any)=>{
        if(viewId){
          console.log(viewId);
          // navigate(`/leadView/${viewId}`)
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
    { icon: <AreaManagerIcon />, number: "8", title: "Total Supervisors",iconFrameColor:'#F9A51A',iconFrameBorderColor:'#FFF2DDCC' },
    { icon: <UserIcon />, number: "167", title: "Total Support Agents",iconFrameColor:'#30B777',iconFrameBorderColor:'#B3F0D3CC' },
    { icon: <TicketCardIcon size={40}/>, number: "46", title: "Total Tickets",iconFrameColor:'#51BFDA',iconFrameBorderColor:'#C1E7F1CC' },
    { icon: <EscalatedTicket/>, number: "86", title: "Total Escalated Tickets",iconFrameColor:'#1A9CF9',iconFrameBorderColor:'#BBD8EDCC' },
    { icon: <ResolvedTicket />, number: "498", title: "Total Resolved Tickets",iconFrameColor:'#D786DD',iconFrameBorderColor:'#FADDFCCC' },
  ];

    // Data for the table
    const data: SupervisorData[] = [
        { supervisorCode: "Devid Billie",supervisorName:"George W", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedAgents: "Region 1", roles: "Area 2", },
        { supervisorCode: "Sudeep Kumar",supervisorName:"Thimothee Charlet", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedAgents: "Region 1", roles: "Area 2", },
        { supervisorCode: "Kathryn Murphy",supervisorName:"Dustin", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedAgents: "Region 1", roles: "Area 2", },
        { supervisorCode: "Darrell Steward",supervisorName:"Willy Don", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedAgents: "Region 1", roles: "Area 2",},
        { supervisorCode: "Ronald Richards", supervisorName:"Frederikson G", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedAgents: "Region 1", roles: "Area 2",},
        { supervisorCode: "Jane Cooper", supervisorName:"George W", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedAgents: "Region 1", roles: "Area 2", },
        { supervisorCode: "Sudeep Kumar", supervisorName:"Thimothee Charlet", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedAgents: "Region 1", roles: "Area 2", },
        { supervisorCode: "Kathryn Murphy", supervisorName:"Dustin", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedAgents: "Region 1", roles: "Area 2", },
        { supervisorCode: "Darrell Steward", supervisorName:"Willy Don", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedAgents: "Region 1", roles: "Area 2", },
        { supervisorCode: "Ronald Richards", supervisorName:"Frederikson G", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedAgents: "Region 1", roles: "Area 2",},
        { supervisorCode: "Jane Cooper", supervisorName:"Von hue", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", assignedAgents: "Region 1", roles: "Area 2", },
      ];
        // Define the columns with strict keys
        const columns: { key: keyof SupervisorData; label: string }[] = [
          { key: "supervisorCode", label: "Supervisor Code" },
          { key: "supervisorName", label: "Supervisor Name" },
          { key: "emailAdrees", label: "Email" },
          { key: "phoneNo", label: "Phone" },
          { key: "assignedAgents", label: "Assigned agents" },
          { key: "roles", label: "Roles" },

        ];
      

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-[#303F58] text-base font-bold">Supervisor</h1>
        <Button variant="primary" size="sm" onClick={handleModalToggle}>
          + Create Supervisor
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
          search:{placeholder:'Search Supervisor'},
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
        <AddSupervisor onClose={handleModalToggle} />
      </Modal>
    </div>
  )
}

export default SupervisorHome;