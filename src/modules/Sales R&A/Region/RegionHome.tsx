import { useEffect, useState } from "react";
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
import useApi from "../../../Hooks/useApi";
import { endPoints } from "../../../services/apiEndpoints";
import toast from "react-hot-toast";
import { RegionData } from "../../../Interfaces/Region";

// Define the type for data items


const RegionHome = () => {
  const [allRegions,setAllRegions]=useState<RegionData[]>([]);
  const {request:getAllRegion}=useApi('get',3003)
  const {request:deleteRegion}=useApi('delete',3003)
  const navigate=useNavigate()
  const [editId,setEditId]=useState('')
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
    getAllRegions()
  };

  const handleEditDeleteView=async(editId?:any,viewId?:any,deleteId?:any)=>{
    if(viewId){
      navigate(`/regionView/${viewId}`)
    }else if(editId){
      
    }else{
     
    }
  }
  const handleView=(id:any)=>{
    navigate(`/regionView/${id}`)
  }

  const handleDelete=async(id:any)=>{
    try{
      const {response,error}=await deleteRegion(`${endPoints.REGION}/${id}`)
    if(response && !error){
      toast.success(response.data.message)
      getAllRegions()
    }else{
      toast.error(error.response.data.message)
    }
    }catch(err){
      console.log();
    }
  }

 const  handleEdit=(id:any)=>{
  handleModalToggle()
  setEditId(id)
 }



  const getAllRegions=async()=>{
    try{
      const {response,error}=await getAllRegion(endPoints.GET_REGIONS)
      if(response && !error){
        const transformedRegions = response.data.regions?.map((region:any) => ({
          ...region,
          createdAt: new Date(region.createdAt).toISOString().split('T')[0], // Extracts the date part
        }));
        
        // Then set the transformed regions into state
        setAllRegions(transformedRegions);
      }else{
        toast.error(error.response.data.message)
      }
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getAllRegions()
  },[])
 
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
  

  // Define the columns with strict keys
  const columns: { key: keyof RegionData; label: string }[] = [
    { key: "regionCode", label: "Region Code" },
    { key: "regionName", label: "Region Name" },
    { key: "country", label: "Country" },
    { key: "description", label: "Discription" },
    { key: "createdAt", label: "Created Date" },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-[#303F58] text-xl font-bold">Region</h1>
        <Button variant="primary" size="sm" onClick={()=>{
          handleModalToggle()
          setEditId('')
        }}>
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
        <Table<RegionData> data={allRegions} columns={columns}  headerContents={{
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
          { label: 'edit', function:handleEdit },
          { label: 'delete', function: handleDelete },
          { label: 'view', function: handleView },
        ]}
         />
      </div>

      {/* Modal Section */}
      <Modal open={isModalOpen} onClose={handleModalToggle} className="w-[35%]">
        <RegionForm editId={editId} onClose={handleModalToggle} />
      </Modal>
    </div>
  );
};

export default RegionHome;