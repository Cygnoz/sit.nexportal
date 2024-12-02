import { useState } from "react";
import Modal from "../../../components/modal/Modal";
import Button from "../../../components/ui/Button";
import HomeCard from "../../../components/ui/HomeCards";
import UserIcon from "../../../assets/icons/UserIcon";
import AreaManagerIcon from '../../../assets/icons/AreaMangerIcon';
import RegionIcon from '../../../assets/icons/RegionIcon';
import Table from "../../../components/ui/Table";
import CalenderDays from "../../../assets/icons/CalenderDays";
import AreaIcon from "../../../assets/icons/AreaIcon";
import LeadsCardIcon from "../../../assets/icons/LeadsCardIcon";
import AddArea from "./AreaForm";
import { useNavigate } from "react-router-dom";

// Define the type for data items
interface AreaData {
  areaCode: string;
  areaName: string;
  createdDate: string;
  region: string;
  description: string;
}

const AreaHome = () => {
  const navigate=useNavigate()
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };
  const handleEditDeleteView=(editId?:any,viewId?:any,deleteId?:any)=>{
    if(viewId){
      navigate(`/areaView/${viewId}`)
      console.log(viewId);
      
    }else if(editId){
      console.log(editId)
      // setId({...id,edit:editId})
    }
    console.log(deleteId);
    
  }

  // Data for HomeCards
  const homeCardData = [
    { 
      icon: <AreaIcon size={24}/>, 
      number: "167", 
      title: "Total Area", 
      iconFrameColor: "#30B777", 
      iconFrameBorderColor: "#B3F0D3CC" 
    },
    { 
      icon: <UserIcon size={24}/>, 
      number: "86", 
      title: "Total Area Manager", 
      iconFrameColor: "#1A9CF9", 
      iconFrameBorderColor: "#BBD8EDCC" 
    },
    { 
      icon: <AreaManagerIcon size={24} />, 
      number: "498", 
      title: "Total BDA's", 
      iconFrameColor: "#D786DD", 
      iconFrameBorderColor: "#FADDFCCC" 
    },
    { 
      icon: <LeadsCardIcon size={40}/>, 
      number: "2898", 
      title: "Total Leads", 
      iconFrameColor: "#DD9F86", 
      iconFrameBorderColor: "#F6DCD2" 
    },

  ];
  
  // Data for the table
  const data: AreaData[] = [
  { areaCode: "AR-NE001", areaName: "Area 1", createdDate: "2023-01-15", region: "Region 1", description: "Lorem ipsum dolor sise cillum d" },
  { areaCode: "AR-NE001", areaName: "Area 2", createdDate: "2022-05-21", region: "Region 2", description: "Lorem ipsum dolor sise cillum d" },
  { areaCode: "AR-NE001", areaName: "Area 3", createdDate: "2023-03-02", region: "Region 3", description: "Lorem ipsum dolor sise cillum d" },
  { areaCode: "AR-NE001", areaName: "Area 4", createdDate: "2021-08-09", region: "Region 4", description: "Lorem ipsum dolor sise cillum d" },
  { areaCode: "AR-NE001", areaName: "Area 5", createdDate: "2022-10-16", region: "Region 5", description: "Lorem ipsum dolor sise cillum d" },
  { areaCode: "AR-NE001", areaName: "Area 6", createdDate: "2020-12-01", region: "Region 6", description: "Lorem ipsum dolor sise cillum d" },
  { areaCode: "AR-NE001", areaName: "Area 7", createdDate: "2023-06-10", region: "Region 7", description: "Lorem ipsum dolor sise cillum d" },
  { areaCode: "AR-NE001", areaName: "Area 8", createdDate: "2021-07-04", region: "Region 8", description: "ILorem ipsum dolor sise cillum d" },
  { areaCode: "AR-NE001", areaName: "Area 9", createdDate: "2023-02-17", region: "Region 9", description: "Lorem ipsum dolor sise cillum d" },
  { areaCode: "AR-NE001", areaName: "Area 10", createdDate: "2022-11-25", region: "Region 10", description: "Lorem ipsum dolor sise cillum d" },
  { areaCode: "AR-NE001", areaName: "Area 11", createdDate: "2021-09-19", region: "Region 11", description: "Lorem ipsum dolor sise cillum d" },
  { areaCode: "AR-NE001", areaName: "Area 12", createdDate: "2023-05-05", region: "Region 12", description: "Lorem ipsum dolor sise cillum d" },
  { areaCode: "AR-NE001", areaName: "Area 13", createdDate: "2020-06-13", region: "Region 13", description: "Lorem ipsum dolor sise cillum d" },
  { areaCode: "AR-NE001", areaName: "Area 14", createdDate: "2021-04-22", region: "Region 14", description: "Lorem ipsum dolor sise cillum d" },
  { areaCode: "AR-NE001", areaName: "Area 15", createdDate: "2022-02-01", region: "Region 15", description: "Lorem ipsum dolor sise cillum d" },
  { areaCode: "AR-NE001", areaName: "Area 16", createdDate: "2022-09-10", region: "Region 16", description: "Lorem ipsum dolor sise cillum d" },
  { areaCode: "AR-NE001", areaName: "Area 17", createdDate: "2023-07-30", region: "Region 17", description: "Lorem ipsum dolor sise cillum d" },
  { areaCode: "AR-NE001", areaName: "Area 18", createdDate: "2021-12-11", region: "Region 18", description: "Lorem ipsum dolor sise cillum d" },
  { areaCode: "AR-NE001", areaName: "Area 19", createdDate: "2023-08-15", region: "Region 19", description: "Lorem ipsum dolor sise cillum d" },
  { areaCode: "AR-NE001", areaName: "Area 20", createdDate: "2022-04-05", region: "Region 20", description: "Lorem ipsum dolor sise cillum d" },
];
  // Define the columns with strict keys
  const columns: { key: keyof AreaData; label: string }[] = [
    { key: "areaCode", label: "Area Code" },
    { key: "areaName", label: "Area Name" },
    { key: "createdDate", label: "Created Date" },
    { key: "region", label: "Region" },
    { key: "description", label: "Discription" },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-[#303F58] text-xl font-bold">Area</h1>
        <Button variant="primary" size="sm" onClick={handleModalToggle}>
          <span className="font-bold text-xl">+</span> Create Area
        </Button>
      </div>

      {/* HomeCards Section */}
      <div className="flex gap-3 py-2 justify-between">
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
        <Table<AreaData> data={data} columns={columns} headerContents={{
          title:"Area's",
          search:{placeholder:'Search Area By Name, Region'},
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
          { label: 'edit', function:handleEditDeleteView },
          { label: 'view', function: handleEditDeleteView },
        ]}
         />
      </div>

      {/* Modal Section */}
      <Modal open={isModalOpen} onClose={handleModalToggle} className="w-[35%]">
        <AddArea onClose={handleModalToggle} />
      </Modal>
    </div>
  );
};

export default AreaHome;
