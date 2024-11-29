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
  const [editId,setEditId]=useState('')
  // State to manage modal visibility
 const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
    getAllUsers()
  };

  
  const handleEditDeleteView=(editId?:any,viewId?:any,deleteId?:any)=>{
    if(editId){
     setEditId(editId)
     handleModalToggle()
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
      <h1 className="text-2xl font-bold">User</h1>
     
      <Button variant="primary" size="sm" onClick={()=>{
        handleModalToggle()
        setEditId('')}
        }>
      <span className="text-xl font-bold">+</span> Create User
      </Button>

      {/* Modal controleed by state */}
      <Modal className="w-[40%]" open={isModalOpen} onClose={handleModalToggle}>
      <UserForm editId={editId} onClose={handleModalToggle} />
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

    </div>
   
    
  );
};

export default UserHome;
