
//import { useState } from "react";
import Modal from "../../../components/modal/Modal";
import Button from "../../../components/ui/Button";

//port HomeCard from "../../../components/ui/HomeCards";
import UserIcon from "../../../assets/icons/UserIcon";
// import AreaIcon from "../../../assets/icons/AreaIcon";
// import MutiUserIcon from "../../../assets/icons/MultiUserIcon";
import Table from "../../../components/ui/Table";
import RegionIcon from "../../../assets/icons/RegionIcon";
import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import CalenderDays from "../../../assets/icons/CalenderDays";
import { useState } from "react";
import UserForm from "./UserForm";


// Define the type for data items
interface RegionManagerData {
   
    regionCode: string;
    regionName: string;
    createdDate: string;
    country: string;
    roll: string;
  }



  // Data for HomeCards
//   const homeCardData = [
//     { icon: <UserIcon  />, number: "46", title: "Total Regional Manager" ,iconFrameColor:'#51BFDA',iconFrameBorderColor:'#C1E7F1CC' },
//     { icon: <AreaIcon  />, number: "147", title: "Total Area Managed" ,iconFrameColor:'#30B777',iconFrameBorderColor:'#B3F0D3CC'},
//     { icon: <UserIcon  />, number: "256", title: "Total Area Managed" ,iconFrameColor:'#1A9CF9',iconFrameBorderColor:'#BBD8EDCC' },
//     { icon: <MutiUserIcon  />, number: "498", title: "Total BDA's" ,iconFrameColor:'#D786DD',iconFrameBorderColor:'#FADDFCCC'},
//   ];



const UserHome = () => {
  // State to manage modal visibility
 const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  
  const handleEditDeleteView=(editId?:any,viewId?:any,deleteId?:any)=>{
    if(editId){
     console.log(editId);
     
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
      { key: "regionName", label: "Email Address" },
      { key: "country", label: "Phone No" },
      { key: "roll", label: "Roll" },

    ];

  return (
    <div>
         <div className="flex justify-between items-center">
      <h1>User</h1>
     
      <Button variant="primary" size="sm" onClick={handleModalToggle}>
        + Create User
      </Button>

      {/* Modal controlled by state */}
      <Modal className="w-[40%]" open={isModalOpen} onClose={handleModalToggle}>
      <UserForm onClose={handleModalToggle} />
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
          
          search:{placeholder:'Search User'},
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
           
          ]}  />


      </div>

      {/* Modal Section */}
     



    </div>
   
    
  );
};

export default UserHome;
