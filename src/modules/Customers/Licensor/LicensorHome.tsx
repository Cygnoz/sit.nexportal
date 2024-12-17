import { useEffect, useState } from "react";
import Button from "../../../components/ui/Button";
import Modal from "../../../components/modal/Modal";
import HomeCard from "../../../components/ui/HomeCards";
import Table from "../../../components/ui/Table";
import UserIcon from "../../../assets/icons/UserIcon";
import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import RegionIcon from "../../../assets/icons/RegionIcon";
import CalenderDays from "../../../assets/icons/CalenderDays";
import PackageMinus from "../../../assets/icons/PackageMinus";
import Boxes from "../../../assets/icons/Boxes";
import Package from "../../../assets/icons/Package";
import PackageCheck from "../../../assets/icons/PackageCheck";
import TrialIcon from "../../../assets/icons/TrialIcon";
import LeadIcon from "../../../assets/icons/LeadIcon";
import AddLicenser from "./LicenserForm";
import { useNavigate } from "react-router-dom";
import { endPoints } from "../../../services/apiEndpoints";
import useApi from "../../../Hooks/useApi";
import { LicenserData } from "../../../Interfaces/Licenser";


const LicensorHome = () => {
  const {request:getAllLicenser}=useApi('get',3001)
   const [allLicenser, setAllLicenser] = useState<LicenserData[]>([]);
   
    const navigate=useNavigate()

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editId,setEditId] = useState('');


    const handleEdit=(id:any)=>{
      handleModalToggle()
      setEditId(id)
    }

    const handleModalToggle = () => {
        setIsModalOpen((prev) => !prev);
    getLicensers();
      };
       const handleView=(id:any)=>{
        navigate(`/licenserView/${id}`)
      }
    
      const getLicensers=async()=>{
          try{
            const {response,error}=await getAllLicenser(endPoints.LICENSER)
            console.log("res",response);
            
            if(response && !error){
              console.log(response.data.licensers);
             const transformLicense= response.data.licensers?.map((license:any) => ({
                ...license,
                startDate: license.startDate
                ? new Date(license.startDate).toLocaleDateString("en-GB")
                : "N/A",
                endDate: license.endDate
                ? new Date(license.endDate).toLocaleDateString("en-GB")
                : "N/A",
               
              })) || [];
             setAllLicenser(transformLicense)
            }
          }catch(err){
            console.log(err);
          }
        }
        console.log(allLicenser);
        
        useEffect(()=>{
          getLicensers()
        },[])
      

      // Data for HomeCards
  const homeCardData = [
    { icon: <Boxes />, number: "526", title: "Total Licenser",iconFrameColor:'#51BFDA',iconFrameBorderColor:'#C1E7F1CC' },
    { icon: <CalenderDays />, number: "110", title: "Licenser Today",iconFrameColor:'#1A9CF9',iconFrameBorderColor:'#BBD8EDCC' },
    { icon: <Package />, number: "56", title: "Closed Licenser",iconFrameColor:'#D786DD',iconFrameBorderColor:'#FADDFCCC' },
    { icon: <PackageCheck />, number: "100", title: "Converted Licenser",iconFrameColor:'#FCB23E',iconFrameBorderColor:'#FDE3BBCC' },
    { icon: <PackageMinus />, number: "147", title: "Licenser Lost",iconFrameColor:'#30B777',iconFrameBorderColor:'#B3F0D3CC' },
  ];



        // Define the columns with strict keys
        const columns: { key: any; label: string }[] = [
          { key: "licenserId", label: "Licenser Id" },
          { key: "firstName", label: "Licenser Name" },
          { key: "startDate", label: "Start Date" },
          { key: "endDate", label: "End Date" },
          { key: "licensorStatus", label: "Status" },
         ];
      

  return (
    <>
    <div className="space-y-3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-[#303F58] text-xl font-bold">Licenser</h1>
        <Button variant="primary" size="sm" onClick={()=>{
        handleModalToggle()
        setEditId('')

      }}>
        <span className="text-xl font-bold">+</span> Create Licenser
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
        <Table<LicenserData> data={allLicenser} columns={columns} headerContents={{
          title:'Licenser Details',
          search:{placeholder:'Search BDA by Name'},
          sort: [
                {
                  sortHead: "Status",
                  sortList: [
                    { label: "All", icon: <UserIcon size={14} color="#4B5C79"/> },
                    { label: "Active", icon: <TrialIcon width={16} height={16} color="#4B5C79"/> },
                    { label: "Expired", icon: <AreaManagerIcon size={14} color="#4B5C79"/> },
                    { label: "Pending Renewal", icon: <CalenderDays size={14} color="#4B5C79"/> }
                  ]
                },
                {
                    sortHead: "License",
                    sortList: [
                      { label: "All", icon: <UserIcon size={14} color="#4B5C79"/> },
                      { label: "Pro", icon: <RegionIcon size={14} color="#4B5C79"/> },
                      { label: "Basic", icon: <LeadIcon width={18} color="#4B5C79"/> },
                      { label: "Enterprise", icon: <CalenderDays size={14} color="#4B5C79"/> }
                    ]
                  },
                  {
                    sortHead: "Plan",
                    sortList: [
                      { label: "All", icon: <UserIcon size={14} color="#4B5C79"/> },
                      { label: "Monthly", icon: <RegionIcon size={14} color="#4B5C79"/> },
                      { label: "Yearly", icon: <AreaManagerIcon size={14} color="#4B5C79"/> },
                    ]
                  }
          ]
        }}
        actionList={[
            { label: 'edit', function: handleEdit},
            { label: 'view', function: handleView },
          ]}  />
      </div>

   
    </div>
       {/* Modal Section */}
       <Modal open={isModalOpen} onClose={handleModalToggle} className="w-[70%]">
        <AddLicenser editId={editId} onClose={handleModalToggle} />
      </Modal>
    </>
  )
}

export default LicensorHome;