import { useState } from "react";
import Button from "../../../components/ui/Button";
import Modal from "../../../components/modal/Modal";
import HomeCard from "../../../components/ui/HomeCards";
import Table from "../../../components/ui/Table";
import LeadsCardIcon from "../../../assets/icons/LeadsCardIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import Licensor from "../../../assets/icons/Licensor";
import RegionIcon from "../../../assets/icons/RegionIcon";
import CalenderDays from "../../../assets/icons/CalenderDays";
import TrialIcon from "../../../assets/icons/TrialIcon";
import NewBDAForm from "./NewBDAForm";
import { useNavigate } from "react-router-dom";



interface BDAData {
    name: string;
    emailAdrees: string;
    phoneNo: string;
    region:string;
    area: string;
    dateOfJoining:string;
  }
  
const BDAHome = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen((prev) => !prev);
      };
      const navigate=useNavigate()
      const handleEditDeleteView=(editId?:any,viewId?:any,deleteId?:any)=>{
        if(viewId){
          navigate(`/bdaView/${viewId}`)
          console.log(viewId);
          console.log(editId);
          console.log(deleteId);
          
          
        }
      }
    

      // Data for HomeCards
  const homeCardData = [
    { icon: <AreaManagerIcon />, number: "101", title: "Total BDA'S",iconFrameColor:'#D786DD',iconFrameBorderColor:'#FADDFCCC' },
    { icon: <LeadsCardIcon />, number: "676", title: "Total Leads (Handled by BDA'S)",iconFrameColor:'#9C75D3',iconFrameBorderColor:'#DAC9F1' },
    { icon: <TrialIcon width={26} height={26}/>, number: "398", title: "Total Trails (Handled by BDA'S)",iconFrameColor:'#D786DD',iconFrameBorderColor:'#FADDFCCC' },
    { icon: <Licensor />, number: "200", title: "Total Licensers(Handled by BDA'S)",iconFrameColor:'#8695DD',iconFrameBorderColor:'#CAD1F1CC' },
  ];

    // Data for the table
    const data: BDAData[] = [
        { name: "Devid Billie", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", region: "Region 1", area: "Area 2",dateOfJoining:"5/30/14" },
        { name: "Sudeep Kumar", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", region: "Region 1", area: "Area 2",dateOfJoining:"5/30/14" },
        { name: "Kathryn Murphy", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", region: "Region 1", area: "Area 2",dateOfJoining:"5/30/14" },
        { name: "Darrell Steward", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", region: "Region 1", area: "Area 2",dateOfJoining:"5/30/14" },
        { name: "Ronald Richards", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", region: "Region 1", area: "Area 2",dateOfJoining:"5/30/14" },
        { name: "Jane Cooper", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", region: "Region 1", area: "Area 2",dateOfJoining:"5/30/14" },
        { name: "Sudeep Kumar", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", region: "Region 1", area: "Area 2",dateOfJoining:"5/30/14" },
        { name: "Kathryn Murphy", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", region: "Region 1", area: "Area 2",dateOfJoining:"5/30/14" },
        { name: "Darrell Steward", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", region: "Region 1", area: "Area 2",dateOfJoining:"5/30/14" },
        { name: "Ronald Richards", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", region: "Region 1", area: "Area 2",dateOfJoining:"5/30/14"},
        { name: "Jane Cooper", emailAdrees: "nathan.roberts@example.com", phoneNo: "+91 9878675667", region: "Region 1", area: "Area 2",dateOfJoining:"5/30/14" },
      ];
        // Define the columns with strict keys
        const columns: { key: keyof BDAData; label: string }[] = [
          { key: "name", label: "Name" },
          { key: "emailAdrees", label: "Email Address" },
          { key: "phoneNo", label: "Phone No" },
          { key: "region", label: "Region" },
          { key: "area", label: "Area" },
          { key: "dateOfJoining", label: "Date of Joining" },

        ];
      

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-[#303F58] text-base font-bold">BDA</h1>
        <Button variant="primary" size="sm" onClick={handleModalToggle}>
          + Create BDA
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
        <Table<BDAData> data={data} columns={columns} headerContents={{
          // title:'Region',
          search:{placeholder:'Search Invoice by client name, invoice number, or date'},
          sort: [
                {
                  sortHead: "Filter",
                  sortList: [
                    { label: "Sort by Name", icon: <UserIcon size={14} color="#4B5C79"/> },
                    { label: "Sort by Age", icon: <RegionIcon size={14} color="#4B5C79"/> },
                    { label: "Sort by Name", icon: <AreaManagerIcon size={14} color="#4B5C79"/> },
                    { label: "Sort by Age", icon: <CalenderDays size={14} color="#4B5C79"/> }
                  ]
                }
          ]
        }}
        actionList={[
          
          { label: 'view', function: handleEditDeleteView },
        ]}  />
      </div>

      {/* Modal Section */}
      <Modal open={isModalOpen} onClose={handleModalToggle}>
        <NewBDAForm onClose={handleModalToggle} />
      </Modal>
    </div>
  )
}

export default BDAHome