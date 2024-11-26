import { useState } from "react";
import Modal from "../../../components/modal/Modal";
import Button from "../../../components/ui/Button";
import RegionForm from "./RegionForm";
import HomeCard from "../../../components/ui/HomeCards";
import UserIcon from "../../../assets/icons/UserIcon";
import AreaManagerIcon from '../../../assets/icons/AreaMangerIcon';
import RegionIcon from '../../../assets/icons/RegionIcon';
import Table from "../../../components/ui/Table";
import CalenderDays from "../../../assets/icons/CalenderDays";
import AreaIcon from "../../../assets/icons/AreaIcon";
import { useNavigate } from "react-router-dom";

// Define the type for data items
interface RegionData {
  regionCode: string;
  regionName: string;
  createdDate: string;
  country: string;
  description: string;
}

const RegionHome = () => {
  const navigate=useNavigate()
  const [id,setId]=useState({
    edit:'',
    delete:''
  })
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleEditDeleteView=(editId?:any,viewId?:any,deleteId?:any)=>{
    if(viewId){
      navigate(`/regionView/${viewId}`)
    }else if(editId){
      console.log(editId)
      setId({...id,edit:editId})
    }else{
      console.log(deleteId)
      setId({...id,delete:deleteId})
    }
  }

  // Data for HomeCards
  const homeCardData = [
    { 
      icon: <RegionIcon size={24}/>, 
      number: "8", 
      title: "Total Users", 
      iconFrameColor: "#F9A51A", 
      iconFrameBorderColor: "#FFF2DDCC" 
    },
    { 
      icon: <AreaIcon size={24}/>, 
      number: "167", 
      title: "Total Area", 
      iconFrameColor: "#30B777", 
      iconFrameBorderColor: "#B3F0D3CC" 
    },
    { 
      icon: <UserIcon size={24}/>, 
      number: "46", 
      title: "Total Region Manager", 
      iconFrameColor: "#51BFDA", 
      iconFrameBorderColor: "#C1E7F1CC" 
    },
    { 
      icon: <UserIcon size={24}/>, 
      number: "88", 
      title: "Total Area Manager", 
      iconFrameColor: "#1A9CF9", 
      iconFrameBorderColor: "#BBD8EDCC" 
    },
    { 
      icon: <AreaManagerIcon size={24} />, 
      number: "98", 
      title: "Total BDA's", 
      iconFrameColor: "#D786DD", 
      iconFrameBorderColor: "#FADDFCCC" 
    },
  ];
  
  // Data for the table
  const data: RegionData[] = [
  { regionCode: "R001", regionName: "North America", createdDate: "2023-01-15", country: "USA", description: "Regions across North America." },
  { regionCode: "R002", regionName: "Europe", createdDate: "2022-05-21", country: "Germany", description: "European market regions." },
  { regionCode: "R003", regionName: "Asia Pacific", createdDate: "2023-03-02", country: "China", description: "Regions covering Asia-Pacific." },
  { regionCode: "R004", regionName: "South America", createdDate: "2021-08-09", country: "Brazil", description: "South American markets." },
  { regionCode: "R005", regionName: "Middle East", createdDate: "2022-10-16", country: "UAE", description: "Middle East region with a focus on technology." },
  { regionCode: "R006", regionName: "Africa", createdDate: "2020-12-01", country: "South Africa", description: "African market regions and operations." },
  { regionCode: "R007", regionName: "Australia", createdDate: "2023-06-10", country: "Australia", description: "Regions within Australia." },
  { regionCode: "R008", regionName: "India", createdDate: "2021-07-04", country: "India", description: "Indian subcontinent markets." },
  { regionCode: "R009", regionName: "Canada", createdDate: "2023-02-17", country: "Canada", description: "Canadian market operations." },
  { regionCode: "R010", regionName: "UK & Ireland", createdDate: "2022-11-25", country: "UK", description: "United Kingdom and Ireland regions." },
  { regionCode: "R011", regionName: "South East Asia", createdDate: "2021-09-19", country: "Singapore", description: "Markets in South East Asia." },
  { regionCode: "R012", regionName: "Latin America", createdDate: "2023-05-05", country: "Mexico", description: "Latin American region operations." },
  { regionCode: "R013", regionName: "Russia", createdDate: "2020-06-13", country: "Russia", description: "Russian market regions." },
  { regionCode: "R014", regionName: "Nordics", createdDate: "2021-04-22", country: "Sweden", description: "Nordic region countries." },
  { regionCode: "R015", regionName: "Benelux", createdDate: "2022-02-01", country: "Belgium", description: "Belgium, Netherlands, and Luxembourg region." },
  { regionCode: "R016", regionName: "North Africa", createdDate: "2022-09-10", country: "Egypt", description: "Northern African market region." },
  { regionCode: "R017", regionName: "Caribbean", createdDate: "2023-07-30", country: "Jamaica", description: "Caribbean region with a focus on tourism." },
  { regionCode: "R018", regionName: "Japan", createdDate: "2021-12-11", country: "Japan", description: "Japanese market and regional offices." },
  { regionCode: "R019", regionName: "Eastern Europe", createdDate: "2023-08-15", country: "Poland", description: "Markets in Eastern Europe." },
  { regionCode: "R020", regionName: "Scandinavia", createdDate: "2022-04-05", country: "Denmark", description: "Denmark, Norway, and Finland regions." },
];
  // Define the columns with strict keys
  const columns: { key: keyof RegionData; label: string }[] = [
    { key: "regionCode", label: "Region Code" },
    { key: "regionName", label: "Region Name" },
    { key: "country", label: "Country" },
    { key: "description", label: "Discription" },
    { key: "createdDate", label: "Created Date" },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1>Region Home</h1>
        <Button variant="primary" size="sm" onClick={handleModalToggle}>
          <span className="font-bold text-xl">+</span> Create Region
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
        <Table<RegionData> data={data} columns={columns}  headerContents={{
          title:'Region',
          search:{placeholder:'Search Region By Name Country'},
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
          { label: 'delete', function: handleEditDeleteView },
          { label: 'view', function: handleEditDeleteView },
        ]}
         />
      </div>

      {/* Modal Section */}
      <Modal open={isModalOpen} onClose={handleModalToggle} className="w-[35%]">
        <RegionForm editId={id?.edit} onClose={handleModalToggle} />
      </Modal>
    </div>
  );
};

export default RegionHome;
