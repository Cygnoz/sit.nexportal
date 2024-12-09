import { useEffect, useState } from "react";
import Modal from "../../../components/modal/Modal";
import Button from "../../../components/ui/Button";
import AddRegionManager from "./RMForm";
import HomeCard from "../../../components/ui/HomeCards";
import UserIcon from "../../../assets/icons/UserIcon";
import AreaIcon from "../../../assets/icons/AreaIcon";
import MutiUserIcon from "../../../assets/icons/MultiUserIcon";
import Table from "../../../components/ui/Table";
import RegionIcon from "../../../assets/icons/RegionIcon";
import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import CalenderDays from "../../../assets/icons/CalenderDays";
import { useNavigate } from "react-router-dom";
import useApi from "../../../Hooks/useApi";
import { RMData } from "../../../Interfaces/RM";
import { endPoints } from "../../../services/apiEndpoints";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";
// import { RMData } from "../../../Interfaces/RM";
// import { endPoints } from "../../../services/apiEndpoints";





  // Data for HomeCards
  const homeCardData = [
    { icon: <UserIcon  />, number: "46", title: "Total Regional Manager" ,iconFrameColor:'#51BFDA',iconFrameBorderColor:'#C1E7F1CC' },
    { icon: <AreaIcon  />, number: "147", title: "Total Area Managed" ,iconFrameColor:'#30B777',iconFrameBorderColor:'#B3F0D3CC'},
    { icon: <UserIcon  />, number: "256", title: "Total Area Managed" ,iconFrameColor:'#1A9CF9',iconFrameBorderColor:'#BBD8EDCC' },
    { icon: <MutiUserIcon  />, number: "498", title: "Total BDA's" ,iconFrameColor:'#D786DD',iconFrameBorderColor:'#FADDFCCC'},
  ];



const RMHome = () => {
   const {request:getRM}=useApi('get',3002)
   const [allRms, setAllRms] = useState<RMData[]>([]);
  const navigate = useNavigate()

  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId,setEditId] = useState('');

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
    getRMs();
  };

const handleEdit=(id:any)=>{
  handleModalToggle()
  setEditId(id)
}
  const handleView=(id:any)=>{
    navigate(`/region-managerView/${id}`)
  }

  // const getAllRM=async()=>{
  //   const url=endPoints.GET_ALL_RM
  //   try{
  //     const {response,error}=await getRM(url)
  //     console.log(response)
  //     console.log(error)
  //     if(response && !error){

  //       // toast.success(response.data.message)
  //       setAllRms(response.data.allRms)
  //     }else{
  //       console.log(error)
  //     }

  //   }catch(err){
  //     console.log(err)
  //   }
  // }

  // useEffect(()=>{
  //   getAllRM()
  // },[])



  const getRMs = async () => {
    try {
      const { response, error } = await getRM(endPoints.GET_ALL_RM);
  
      if (response && !error) {
          const transformedAreas = response.data.regionManager?.map((region: any) => ({
              ...region,
              dateOfJoining: region.dateOfJoining
                  ? new Date(region.dateOfJoining).toISOString().split('T')[0]
                  : "N/A",
          })) || [];
          setAllRms(transformedAreas);
      } else {
         console.log(error?.response?.data?.message || "Failed to fetch data.");
      }
  } catch (err) {
      console.error("Error:", err);
      toast.error("An unexpected error occurred.");
  }
  
};

useEffect(() => {
    getRMs();
}, []);
  
  console.log(allRms);
  
    // Define the columns with strict keys
    const columns: { key: any; label: string }[] = [
      { key: "user.userName", label: "Name" },
      { key: "email", label: "Email Address" },
      { key: "user.phoneNo", label: "Phone No" },
      { key: "region.regionName", label: "Region" },
      { key: "dateOfJoining", label: "Date Of Joining" },
    ];

    

  return (
    <div>
         <div className="flex justify-between items-center">
      <h1 className="text-[#303F58] text-xl font-bold">Regional Manager</h1>
     
      <Button variant="primary" size="sm" onClick={()=>{
        handleModalToggle()
        setEditId('')

      }}>


      <span className="font-bold text-xl">+</span> Create RM
      </Button>

      {/* Modal controlled by state */}
      <Modal open={isModalOpen} onClose={handleModalToggle}>
      <AddRegionManager editId={editId}  onClose={handleModalToggle} />
      </Modal>
    </div>

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
        <Table< RMData> data={allRms} columns={columns} headerContents={{
          
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
          { label: 'edit', function:handleEdit},
          { label: 'view', function: handleView },
        ]}
        />
      </div>

      {/* Modal Section */}
     



    </div>
   
    
  );
};

export default RMHome;
