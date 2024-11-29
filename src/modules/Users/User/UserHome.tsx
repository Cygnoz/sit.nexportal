import Modal from "../../../components/modal/Modal";
import Button from "../../../components/ui/Button";
import UserIcon from "../../../assets/icons/UserIcon";
import Table from "../../../components/ui/Table";
import RegionIcon from "../../../assets/icons/RegionIcon";
import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import CalenderDays from "../../../assets/icons/CalenderDays";
import { useEffect, useState } from "react";
import UserForm from "./UserForm";
import useApi from "../../../Hooks/useApi";
import { endPoints } from "../../../services/apiEndpoints";


// Define the type for data items
interface UserHomeData {
    userName: string;
    email: string;
    phoneNo: string;
    userImage?: string;
    role: string;
  }





  



const UserHome = () => {
  const {request:getUsers}=useApi('get',3002)
  const [allUsers, setAllUsers] = useState<UserHomeData[]>([]);
  // State to manage modal visibility
 const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  
  const handleEditDeleteView=(editId?:any,viewId?:any,deleteId?:any)=>{
    if(editId){
     console.log(editId);
    }else if(viewId){
      console.log(viewId)
    }else{
      console.log(deleteId)
    }
  }

  const getAllUsers=async()=>{
    const url=endPoints.GET_USERS
    try{
      const {response,error}=await getUsers(url)
      console.log(response)
      console.log(error)
      if(response && !error){
        // toast.success(response.data.message)
        setAllUsers(response.data.AllUsers)
      }else{
        console.log(error)
      }

    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getAllUsers()
  },[])

  
  // // Data for the table
  // const data:  UserHomeData[] = [
  //   {  regionCode: "R001", regionName: "North America", createdDate: "2023-01-15", country: "USA",  role: "Regions across North America." },
  //   { regionCode: "R002", regionName: "Europe", createdDate: "2022-05-21", country: "Germany",  role: "European market regions." },
  //   {  regionCode: "R003", regionName: "Asia Pacific", createdDate: "2023-03-02", country: "China",  role: "Regions covering Asia-Pacific." },
  //   {  regionCode: "R004", regionName: "South America", createdDate: "2021-08-09", country: "Brazil",  role: "South American markets." },
  //   {  regionCode: "R004", regionName: "South America", createdDate: "2021-08-09", country: "Brazil",  role: "South American markets." },
  //   {  regionCode: "R005", regionName: "Middle East", createdDate: "2022-10-16", country: "UAE",  role: "Middle East region with a focus on technology." },
  //   {   regionCode: "R006", regionName: "Africa", createdDate: "2020-12-01", country: "South Africa",  role: "African market regions and operations." },
  //   {   regionCode: "R007", regionName: "Australia", createdDate: "2023-06-10", country: "Australia",  role: "Regions within Australia." },
  //   {   regionCode: "R008", regionName: "India", createdDate: "2021-07-04", country: "India",  role: "Indian subcontinent markets." },
  //   {   regionCode: "R009", regionName: "Canada", createdDate: "2023-02-17", country: "Canada",  role: "Canadian market operations." },
  //   {   regionCode: "R010", regionName: "UK & Ireland", createdDate: "2022-11-25", country: "UK",  role: "United Kingdom and Ireland regions." },
  //   {   regionCode: "R011", regionName: "South East Asia", createdDate: "2021-09-19", country: "Singapore",  role: "Markets in South East Asia." },
  //   {   regionCode: "R012", regionName: "Latin America", createdDate: "2023-05-05", country: "Mexico",  role: "Latin American region operations." },
   
  // ];
    // Define the columns with strict keys
    const columns: { key: keyof  UserHomeData; label: string }[] = [
      // { key: "userImage", label: "User Image" }, 
      { key: "userName", label: "Name" },
      { key: "email", label: "Email Address" },
      { key: "phoneNo", label: "Phone No" },
      { key: "role", label: "Role" },

    ];



  return (
    <div>
         <div className="flex justify-between items-center">
      <h1>User</h1>
     
      <Button variant="primary" size="sm" onClick={handleModalToggle}>
        + Create User
      </Button>

      {/* Modal controleed by state */}
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
        <Table data={allUsers} columns={columns} headerContents={{
          
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
