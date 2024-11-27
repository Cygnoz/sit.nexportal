

import Modal from "../../../components/modal/Modal";
import Button from "../../../components/ui/Button";


//import UserIcon from "../../../assets/icons/UserIcon";

import Table from "../../../components/ui/Table";

import { useState } from "react";
import CreateUser from "./CreateUser";


// Define the type for data items
interface RegionManagerData {
   regionCode:string;
   regionName: string;
   createdDate: string;
   country: string;
   roll: string;
   
  }


const WCommisionHome = () => {
  // State to manage modal visibility
 const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  
  const handleEditDeleteView=(editId?:any,viewId?:any,deleteId?:any)=>{
    if(deleteId){
     console.log(deleteId);
     
    }
  }

  
  // Data for the table
  const data:  RegionManagerData[] = [
    {  regionCode: "R001", regionName: "North America", createdDate: "2023-01-15", country: "USA",  roll: "Regions across North America." },
    { regionCode: "R002", regionName: "Europe", createdDate: "2022-05-21", country: "Germany",  roll: "European market regions." },
    {  regionCode: "R003", regionName: "Asia Pacific", createdDate: "2023-03-02", country: "China",  roll: "Regions covering Asia-Pacific." },
    {  regionCode: "R004", regionName: "South America", createdDate: "2021-08-09", country: "Brazil",  roll: "South American markets." },
    {  regionCode: "R004", regionName: "South America", createdDate: "2021-08-09", country: "Brazil",  roll: "South American markets." },
    {  regionCode: "R005", regionName: "Middle East", createdDate: "2022-10-16", country: "UAE",  roll: "Middle East region with a focus on technology." },
    {   regionCode: "R006", regionName: "Africa", createdDate: "2020-12-01", country: "South Africa",  roll: "African market regions and operations." },
    {   regionCode: "R007", regionName: "Australia", createdDate: "2023-06-10", country: "Australia",  roll: "Regions within Australia." },
    {   regionCode: "R008", regionName: "India", createdDate: "2021-07-04", country: "India",  roll: "Indian subcontinent markets." },
    {   regionCode: "R009", regionName: "Canada", createdDate: "2023-02-17", country: "Canada",  roll: "Canadian market operations." },
    {   regionCode: "R010", regionName: "UK & Ireland", createdDate: "2022-11-25", country: "UK",  roll: "United Kingdom and Ireland regions." },
    {   regionCode: "R011", regionName: "South East Asia", createdDate: "2021-09-19", country: "Singapore",  roll: "Markets in South East Asia." },
    {   regionCode: "R012", regionName: "Latin America", createdDate: "2023-05-05", country: "Mexico",  roll: "Latin American region operations." },
   
  ];
    // Define the columns with strict keys
    const columns: { key: keyof  RegionManagerData; label: string }[] = [
       
      { key: "regionCode", label: "Name" },
      { key: "regionName", label: "Value(%)" },
      { key: "createdDate", label: "Thrushold amt" },
      { key: "country", label: "Creted Date" },

    ];

  return (
    <div>
         <div className="flex justify-between items-center">
      <h1>Worker Commission Profile</h1>
     
      <Button variant="primary" size="sm" onClick={handleModalToggle}>
        + Add Commission Profile
      </Button>

      {/* Modal controlled by state */}
      <Modal open={isModalOpen} onClose={handleModalToggle}>
      <CreateUser onClose={handleModalToggle} />
      </Modal>
    </div>

    {/* <div className="flex gap-3 py-2 justify-between mt-6">
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
      </div> */}

       {/* Table Section */}
       <div className=" py-2 mt-3">
        <Table< RegionManagerData> data={data} columns={columns} headerContents={{
          
          search:{placeholder:'Search BDA By Name'},
        
        }}
        actionList={[
            { label: 'delete', function:handleEditDeleteView },
           
          ]}  />


      </div>

      {/* Modal Section */}
     



    </div>
   
    
  );
};

export default WCommisionHome;
