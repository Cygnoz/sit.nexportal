

import Modal from "../../../components/modal/Modal";
import Button from "../../../components/ui/Button";


//import UserIcon from "../../../assets/icons/UserIcon";

import Table from "../../../components/ui/Table";

import { useEffect, useState } from "react";
//import CreateUser from "../User/CreateUser";
import CreateWCommission from "./WCommissionForm";
import useApi from "../../../Hooks/useApi";
import { WCData } from "../../../Interfaces/WC";
import { endPoints } from "../../../services/apiEndpoints";





const WCommisionHome = () => {
  const {request:getALLWC}=useApi('get',3003)
  const [allWC,setAllWC]=useState<WCData[]>([]);
 
  // State to manage modal visibility
 const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
    getWC();
  };

  
  

  const handleEditDelete=(id:any)=>{
    console.log(id);
    
  }

  const getWC= async()=>{
   try{
      const {response,error}=await getALLWC(endPoints.GET_ALL_WC)
      if(response&&!error){

        const transformedRegions = response.data.commissions?.map((commission:any) => ({
          ...commission,
          createdAt: new Date(commission.createdAt).toISOString().split('T')[0], // Extracts the date part
        }));
        
        // Then set the transformed regions into state
        setAllWC(transformedRegions);
 
        // // const wc= response.data
        // console.log(response.data);

        // setAllWC(response.data)
      }
      else{
        console.log(error);
       
      }
   }
    catch(err){
      console.log(err);
     
    }
  }
  useEffect(()=>{
    getWC()
  },[])
 

  
     // Define the columns with strict keys
    const columns: { key: keyof  WCData ; label: string }[] = [
       
      { key: "profileName", label: "ProfileName" },
      { key: "commissionPercentage", label: "Percentage" },
      { key: "thresholdAmount", label: "Thrushold Amt" },
      { key: "createdAt", label: "Created Date" },

    ];

  return (
    <div>
         <div className="flex justify-between items-center">
      <h1 className="text-[#303F58] text-xl font-bold">Worker Commission Profile</h1>
     
      <Button variant="primary" size="sm" onClick={handleModalToggle}>
      <span className="text-xl font-bold">+</span> Add Commission Profile
      </Button>

      {/* Modal controlled by state */}
      <Modal open={isModalOpen} className="w-[40%]" onClose={handleModalToggle}>
      <CreateWCommission onClose={handleModalToggle} />
      </Modal>
    </div>

   

       {/* Table Section */}
       <div className=" py-2 mt-3">
        <Table< WCData > data={allWC} columns={columns} headerContents={{
          
          search:{placeholder:'Search BDA By Name'},
        
        }}
        actionList={[
            { label: 'delete', function:handleEditDelete },
            { label: 'edit', function:handleEditDelete },
           
          ]}  />


      </div>

      {/* Modal Section */}
     



    </div>
   
    
  );
};

export default WCommisionHome;
