import { useState } from "react";
import Modal from "../../../components/modal/Modal";
import Button from "../../../components/ui/Button";
import NewRegionForm from "./NewRegionForm";
//import HomeCard from "../../../components/ui/HomeCards";
import UserIcon from "../../../assets/icons/UserIcon";
import AreaManagerIcon from '../../../assets/icons/AreaMangerIcon';
import RegionIcon from '../../../assets/icons/RegionIcon';
import Table from "../../../components/ui/Table";
import HomeCard from "../../../components/ui/HomeCards";

// Define the type for data items
interface RegionData {
  regionCode: string;
  regionName: string;
  createdDate: string;
  country: string;
  description: string;
  
}

const RegionHome = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  // Data for HomeCards
  const homeCardData = [
    { icon: <UserIcon color="red" />, number: "28", title: "Total Users" },
    { icon: <RegionIcon color="blue" />, number: "15", title: "Total Regions" },
    { icon: <AreaManagerIcon color="green" />, number: "5", title: "Area Managers" },
    { icon: <UserIcon color="yellow" />, number: "28", title: "Total Users" },
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
    { key: "createdDate", label: "Craete Date" },
   
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1>Region Home</h1>
        <Button variant="primary" size="sm" onClick={handleModalToggle}>
          + Create Region
        </Button>
      </div>

      {/* HomeCards Section */}
      <div className="flex gap-3 py-2 justify-between mt-6">
        {homeCardData.map((card, index) => (
          <HomeCard 
            key={index} 
            icon={card.icon} 
            number={card.number} 
            title={card.title}
            iconFrameColor=""
            iconFrameBorderColor="" 
          />
        ))}
      </div>

      {/* Table Section */}
      <div>
        <Table<RegionData> data={data} columns={columns} title="Region" />
      </div>

      {/* Modal Section */}
      <Modal open={isModalOpen} onClose={handleModalToggle}>
        <NewRegionForm onClose={handleModalToggle} />
      </Modal>
    </div>
  );
};

export default RegionHome;
