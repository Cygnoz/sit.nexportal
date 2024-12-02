

import Modal from "../../../components/modal/Modal";
import Button from "../../../components/ui/Button";


//import UserIcon from "../../../assets/icons/UserIcon";

import Table from "../../../components/ui/Table";

import { useState } from "react";
//import CreateUser from "../User/CreateUser";
import CreateWCommission from "./CreateWCommission";



// Define the type for data items
interface WCommissionData {
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
  const data:  WCommissionData [] = [
    {  regionCode: "R001", regionName: "North America", createdDate: "2023-01-15", country: "100.0",  roll: "Regions across North America." },
    { regionCode: "R002", regionName: "Europe", createdDate: "2022-05-21", country: "100.0",  roll: "European market regions." },
    {  regionCode: "R003", regionName: "Asia Pacific", createdDate: "2023-03-02", country: "100.0",  roll: "Regions covering Asia-Pacific." },
    {  regionCode: "R004", regionName: "South America", createdDate: "2021-08-09", country: "100.0",  roll: "South American markets." },
    {  regionCode: "R004", regionName: "South America", createdDate: "2021-08-09", country: "100.0",  roll: "South American markets." },
    {  regionCode: "R005", regionName: "Middle East", createdDate: "2022-10-16", country: "100.0",  roll: "Middle East region with a focus on technology." },
    {   regionCode: "R006", regionName: "Africa", createdDate: "2020-12-01", country: "100.0",  roll: "African market regions and operations." },
    {   regionCode: "R007", regionName: "Australia", createdDate: "2023-06-10", country: "100.0",  roll: "Regions within Australia." },
    {   regionCode: "R008", regionName: "India", createdDate: "2021-07-04", country: "100.0",  roll: "Indian subcontinent markets." },
    {   regionCode: "R009", regionName: "Canada", createdDate: "2023-02-17", country: "100.0",  roll: "Canadian market operations." },
    {   regionCode: "R010", regionName: "UK & Ireland", createdDate: "2022-11-25", country: "100.0",  roll: "United Kingdom and Ireland regions." },
    {   regionCode: "R011", regionName: "South East Asia", createdDate: "2021-09-19", country: "100.0",  roll: "Markets in South East Asia." },
    {   regionCode: "R012", regionName: "Latin America", createdDate: "2023-05-05", country: "100.0",  roll: "Latin American region operations." },
   
  ];
    // Define the columns with strict keys
    const columns: { key: keyof  WCommissionData ; label: string }[] = [
       
      { key: "regionName", label: "Name" },
      { key: "regionCode", label: "Value(%)" },
      { key: "country", label: "Thrushold amt" },
      { key: "createdDate", label: "Creted Date" },

    ];

  return (
    <div>
         <div className="flex justify-between items-center">
      <h1>Worker Commission Profile</h1>
     
      <Button variant="primary" size="sm" onClick={handleModalToggle}>
        + Add Commission Profile
      </Button>

      {/* Modal controlled by state */}
      <Modal open={isModalOpen} className="w-[40%]" onClose={handleModalToggle}>
      <CreateWCommission onClose={handleModalToggle} />
      </Modal>
    </div>

   

       {/* Table Section */}
       <div className=" py-2 mt-3">
        <Table< WCommissionData > data={data} columns={columns} headerContents={{
          
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
