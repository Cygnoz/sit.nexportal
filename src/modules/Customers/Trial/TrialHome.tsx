// import { useState } from "react";
// import Button from "../../../components/ui/Button";
// import Modal from "../../../components/modal/Modal";
import HomeCard from "../../../components/ui/HomeCards";
import Table from "../../../components/ui/Table";
// import UserIcon from "../../../assets/icons/UserIcon";
// import RegionIcon from "../../../assets/icons/RegionIcon";
// import CalenderDays from "../../../assets/icons/CalenderDays";
import CalenderDays from "../../../assets/icons/CalenderDays";
import Boxes from "../../../assets/icons/Boxes";
import PackageMinus from "../../../assets/icons/PackageMinus";
import CalenderClock from "../../../assets/icons/CalenderClock";
import CalenderMultiple from "../../../assets/icons/CalenderMultiple";
import { useNavigate } from "react-router-dom";
import useApi from "../../../Hooks/useApi";
import { endPoints } from "../../../services/apiEndpoints";
import { useEffect, useState } from "react";
import { LeadData } from "../../../Interfaces/Lead";




  
const TrialHome = () => {

  const {request:getAllTrial}=useApi('get',3001)
  const [allTrials,setAllTrials]=useState<LeadData[]>([])
   const navigate=useNavigate()
     console.log("sdsz",allTrials);
     
      const handleView=(id:any)=>{
        navigate(`/trialView/${id}`)
      }
    

      // Data for HomeCards
  const homeCardData = [
    { icon: <CalenderDays />, number: "78", title: "Active Trials",iconFrameColor:'#1A9CF9',iconFrameBorderColor:'#BBD8EDCC' },
    { icon: <CalenderMultiple size={40} />, number: "56", title: "Expired Trials",iconFrameColor:'#D786DD',iconFrameBorderColor:'#FADDFCCC' },
    { icon: <CalenderClock size={24}/>, number: "50", title: "Upcoming Expiration",iconFrameColor:'#FCB23E',iconFrameBorderColor:'#FDE3BBCC' },
    { icon: <Boxes />, number: "526", title: "Converted Trails",iconFrameColor:'#51BFDA',iconFrameBorderColor:'#C1E7F1CC' },
    { icon: <PackageMinus />, number: "30", title: "Exit Trails",iconFrameColor:'#30B777',iconFrameBorderColor:'#B3F0D3CC' },
  ];

   
      
        // Define the columns with strict keys
        // Define the columns with strict keys for LeadData
      const columns: { key:  any; label: any }[] = [
        { key: "customerId", label: "Lead ID" },
        { key: "trialStatus", label: "Trial Status" },
        { key: "firstName", label: "Customer Name" },
        { key: "startDate", label: "Trial Start Date" },
        { key: "endDate", label: "Trial End Date" },
        { key: "bdaDetails.bdaName", label: "Assigned BDA" },
      ];
            
  const getTrials=async()=>{
    try{
      const {response,error}=await getAllTrial(endPoints.TRIAL)
      if(response && !error){
     
        const transformLicense= response.data.trials?.map((trial:any) => ({
          ...trial,
          startDate: trial.startDate
          ? new Date(trial.startDate).toLocaleDateString("en-GB")
          : "N/A",
          endDate: trial.endDate
          ? new Date(trial.endDate).toLocaleDateString("en-GB")
          : "N/A", 
        })) || [];
       setAllTrials(transformLicense)
      }else{
        console.log(error.response.data.message);
      }
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getTrials()
  },[])
  console.log(allTrials);
  
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-[#303F58] text-xl font-bold">Trial</h1>
        {/* <Button variant="primary" size="sm" onClick={handleModalToggle}>
          + Create Trial
        </Button> */}
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
        <Table<LeadData> data={allTrials} columns={columns} headerContents={{
          title:'Trial Details',
          search:{placeholder:'Search Trials...'}
        }}
        actionList={[
            { label: 'view', function: handleView },
          ]} />
      </div>

      {/* Modal Section */}
      {/* <Modal open={isModalOpen} onClose={handleModalToggle}>
        <NewBDAForm onClose={handleModalToggle} />
      </Modal> */}
    </div>
  )
}

export default TrialHome;