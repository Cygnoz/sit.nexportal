import { useEffect, useState } from "react";
import Button from "../../../components/ui/Button";
import Modal from "../../../components/modal/Modal";
import HomeCard from "../../../components/ui/HomeCards";
import Table from "../../../components/ui/Table";
import LeadsCardIcon from "../../../assets/icons/LeadsCardIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import Licensor from "../../../assets/icons/Licensor";
import RegionIcon from "../../../assets/icons/RegionIcon";
import CalenderDays from "../../../assets/icons/CalenderDays";
import { useNavigate } from "react-router-dom";
import useApi from "../../../Hooks/useApi";
import { AMData } from "../../../Interfaces/AM";
import { endPoints } from "../../../services/apiEndpoints";
import AMForm from "./AMForm";
import toast from "react-hot-toast";



  
const AMHome = () => {
  const {request:getAllAM}=useApi('get',3002)
  const [allAM,setAllAM]=useState<AMData[]>([]);
  const [editId, setEditId] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate()

  const handleModalToggle = () => {
        setIsModalOpen((prev) => !prev);
        getAM()
      };
      

      const handleView=(id:any)=>{
        navigate(`/amView/${id}`)
      }

      const handleEdit= (id:any)=>{
        setEditId(id)
        handleModalToggle()
      }

      const getAM = async () => {
        try {
          const { response, error } = await getAllAM(endPoints.GET_ALL_AM);
          console.log(response);
          
          if (response && !error) {
            const transformedAreas = response.data.areaManager?.map((am: any) => ({
              ...am,
              dateOfJoining: am.dateOfJoining
              ? new Date(am.dateOfJoining).toLocaleDateString("en-GB")
              : "N/A",
              loginEmail:am.user.email
          })) || [];
             console.log(transformedAreas);
             
            setAllAM(transformedAreas);

          } else {
            console.error(error?.response?.data?.message);
          }
        } catch (err) {
          console.error(err);
          toast.error("An unexpected error occurred.");
        }}
      useEffect(() => {
        getAM();
      }, []);
      
      // Data for HomeCards
  const homeCardData = [
    { icon: <UserIcon />, number: "189", title: "Total Area Manager",iconFrameColor:'#1A9CF9',iconFrameBorderColor:'#BBD8EDCC' },
    { icon: <AreaManagerIcon />, number: "498", title: "Total BDA's",iconFrameColor:'#D786DD',iconFrameBorderColor:'#FADDFCCC' },
    { icon: <LeadsCardIcon />, number: "46", title: "Total Leads",iconFrameColor:'#9C75D3',iconFrameBorderColor:'#DAC9F1' },
    { icon: <Licensor />, number: "147", title: "Total Licensers",iconFrameColor:'#8695DD',iconFrameBorderColor:'#CAD1F1CC' },
  ];

        // Define the columns with strict keys
        const columns: { key: any; label: string }[] = [
          { key: "user.userName", label: "Name" },
          { key: "loginEmail", label: "Email Address" },
          { key: "user.phoneNo", label: "Phone No" },
          { key: "region.regionName", label: "Region" },
          { key: "area.areaName", label: "Area" },
          { key: "dateOfJoining", label: "Date of Joining" },
        ];
      

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-[#303F58] text-xl font-bold">Area Manager</h1>
        <Button variant="primary" size="sm" onClick={()=>{
          handleModalToggle()
          setEditId('')
        }}>
        <span className="font-bold text-xl">+</span> Create AM
        </Button>
      </div>

      {/* HomeCards Section */}
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
        <Table<AMData> data={allAM} columns={columns} headerContents={{
          // title:'Region',
          search:{placeholder:'Search Invoice by client name, invoice number, or date'},
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
        // noButton
         />
        
      </div>

      {/* Modal Section */}
      <Modal open={isModalOpen} onClose={handleModalToggle}>
        <AMForm editId={editId} onClose={handleModalToggle} />
      </Modal>
    </div>
  )
}
      
export default AMHome