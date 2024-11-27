import { useState } from "react";
import Button from "../../../components/ui/Button";
import AddAreaManager from "./AddAreaManager"
import Modal from "../../../components/modal/Modal";
import HomeCard from "../../../components/ui/HomeCards";
import Table from "../../../components/ui/Table";
import LeadsCardIcon from "../../../assets/icons/LeadsCardIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import Licensor from "../../../assets/icons/Licensor";
import RegionIcon from "../../../assets/icons/RegionIcon";
import CalenderDays from "../../../assets/icons/CalenderDays";



interface AMData {
    name: string;
    emailAdrees: string;
    phoneNo: string;
    region:string;
    area: string;
    dateOfJoining:string;
  }
  
const AreaManagerHome = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen((prev) => !prev);
      };

      // Data for HomeCards
  const homeCardData = [
    { icon: <UserIcon />, number: "189", title: "Total Area Manager",iconFrameColor:'#1A9CF9',iconFrameBorderColor:'#BBD8EDCC' },
    { icon: <AreaManagerIcon />, number: "498", title: "Total BDA's",iconFrameColor:'#D786DD',iconFrameBorderColor:'#FADDFCCC' },
    { icon: <LeadsCardIcon />, number: "46", title: "Total Leads",iconFrameColor:'#9C75D3',iconFrameBorderColor:'#DAC9F1' },
    { icon: <Licensor />, number: "147", title: "Total Licensers",iconFrameColor:'#8695DD',iconFrameBorderColor:'#CAD1F1CC' },
  ];

    // Data for the table
    const data: AMData[] = [
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
        const columns: { key: keyof AMData; label: string }[] = [
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
        <h1>Area Manager</h1>
        <Button variant="primary" size="sm" onClick={handleModalToggle}>
          + Create AM
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
        <Table<AMData> data={data} columns={columns} headerContents={{
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
        actionList={['edit','view']}  />
      </div>

      {/* Modal Section */}
      <Modal open={isModalOpen} onClose={handleModalToggle}>
        <AddAreaManager onClose={handleModalToggle} />
      </Modal>
    </div>
  )
}

export default AreaManagerHome