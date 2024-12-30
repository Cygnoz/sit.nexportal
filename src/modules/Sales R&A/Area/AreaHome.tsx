import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useApi from "../../../Hooks/useApi";
import { AreaData } from "../../../Interfaces/Area";
import AreaIcon from "../../../assets/icons/AreaIcon";
import AreaManagerIcon from '../../../assets/icons/AreaMangerIcon';
import LeadsCardIcon from "../../../assets/icons/LeadsCardIcon";
import Notebook from "../../../assets/icons/Notebook";
import RegionIcon from '../../../assets/icons/RegionIcon';
import UserIcon from "../../../assets/icons/UserIcon";
import Modal from "../../../components/modal/Modal";
import Button from "../../../components/ui/Button";
import HomeCard from "../../../components/ui/HomeCards";
import Table from "../../../components/ui/Table";
import { useRegularApi } from "../../../context/ApiContext";
import { endPoints } from "../../../services/apiEndpoints";
import AreaForm from "./AreaForm";



const AreaHome = () => {
  const {totalCounts}=useRegularApi()
  const navigate=useNavigate()
  const [allAreas,setAllAreas]=useState<AreaData[]>([]);
  // State to manage modal visibility
  const {request:getAllArea}=useApi('get',3003)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId,setEditId]=useState('')

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
    getAreas()
  };

  const handleView=(id:any)=>{
    navigate(`/areas/${id}`)
  }
  const handleEdit=(id:any)=>{
    handleModalToggle()
    setEditId(id)
  }

  const getAreas=async()=>{
    try{
      const {response,error}=await getAllArea(endPoints.GET_AREAS)
      if(response && !error){
        const transformedAreas = response.data.areas?.map((area:any) => ({
          ...area,
          createdAt: new Date(area.createdAt)
            .toLocaleDateString("en-GB"), // Extracts the date part
          region:area?.region?.regionName  
        }));
        
        // Then set the transformed regions into state
        setAllAreas(transformedAreas);
      }else{
        console.log(error.response.data.message)
      }
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getAreas()
  },[])

  console.log(allAreas);
  

  // Data for HomeCards
  const homeCardData = [
    { 
      icon: <AreaIcon size={24}/>, 
      number: totalCounts?.totalArea, 
      title: "Total Area", 
      iconFrameColor: "#30B777", 
      iconFrameBorderColor: "#B3F0D3CC" 
    },
    { 
      icon: <UserIcon size={24}/>, 
      number: totalCounts?.totalAreaManagers, 
      title: "Total Area Manager", 
      iconFrameColor: "#1A9CF9", 
      iconFrameBorderColor: "#BBD8EDCC" 
    },
    { 
      icon: <AreaManagerIcon size={24} />, 
      number: totalCounts?.totalBdas, 
      title: "Total BDA's", 
      iconFrameColor: "#D786DD", 
      iconFrameBorderColor: "#FADDFCCC" 
    },
    { 
      icon: <LeadsCardIcon size={40}/>, 
      number: totalCounts?.totalLead, 
      title: "Total Leads", 
      iconFrameColor: "#DD9F86", 
      iconFrameBorderColor: "#F6DCD2" 
    },

  ];
  


  // Define the columns with strict keys
  const columns: { key:any; label: string }[] = [
    { key: "areaCode", label: "Area Code" },
    { key: "areaName", label: "Area Name" },
    { key: "createdAt", label: "Created Date" },
    { key: "region", label: "Region" },
    { key: "description", label: "Discription" },
  ];
  
  const name = "Name";
  const region = "Region";
  const code = "Code";

  const handleFilter = ({ options }: { options: string }) => {
    if (options === 'Name') {
      // Create a new sorted array to avoid mutating the original state
      const sortedAreas = [...allAreas].sort((a, b) =>b.areaName.localeCompare(a.areaName));
      setAllAreas(sortedAreas);
    }else if(options==='Region'){
      const sortedAreas = [...allAreas].sort((a, b) => b.region.localeCompare(a.region));
      setAllAreas(sortedAreas);
    }else {
      const sortedAreas = [...allAreas].sort((a:any, b:any) => {
        // Extract the numeric part of the regionCode
        const numA = parseInt(a.areaCode.split('-')[1], 10);
        const numB = parseInt(b.areaCode.split('-')[1], 10);
        
        // Sort in descending order
        return numB - numA;
      });
      setAllAreas(sortedAreas);
    }
  };
  
  return (
    <>
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-[#303F58] text-xl font-bold">Area</h1>
        <Button variant="primary" size="sm" onClick={()=>{
          handleModalToggle()
          setEditId('')
        }}>
          <span className="font-bold text-xl">+</span> Create Area
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
        <Table<AreaData> data={allAreas} columns={columns} headerContents={{
          title:"Area's",
          search:{placeholder:'Search Area...'},
          sort: [
            {
              sortHead: "Filter",
              sortList: [
                {
                  label: "Sort by Name",
                  icon: <AreaIcon size={14} color="#4B5C79" />,
                  action: () => handleFilter({ options: name }),
                },
                {
                  label: "Sort by Region",
                  icon: <RegionIcon size={14} color="#4B5C79" />,
                  action: () => handleFilter({ options: region }),
                },
                {
                  label: "Sort by Code",
                  icon: <Notebook size={14} color="#4B5C79" />,
                  action: () => handleFilter({ options: code }),
                },
              ],
            },
          ],
        }}
        actionList={[
          { label: 'edit', function:handleEdit },
          { label: 'view', function: handleView },
        ]}
         />
      </div>
      </div>
      {/* Modal Section */}
      <Modal open={isModalOpen} onClose={handleModalToggle} className="w-[35%]">
        <AreaForm editId={editId} onClose={handleModalToggle} />
      </Modal>
    </>
  );
};

export default AreaHome;
