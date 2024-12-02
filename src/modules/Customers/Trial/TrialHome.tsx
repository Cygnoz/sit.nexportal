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



interface LeadData {
    trialID: string;
    status: string;
    startDate: string;
    endDate: string;
    assignedBDA: string;
  }
  
const TrialHome = () => {

    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const handleModalToggle = () => {
    //     setIsModalOpen((prev) => !prev);
    //   };
      const handleEditDeleteView=(editId?:any,viewId?:any,deleteId?:any)=>{
        if(viewId){
          // navigate(`/leadView/${viewId}`)
          console.log(viewId);  
          console.log(editId);
          console.log(deleteId);
          
          
        }
      }
    

      // Data for HomeCards
  const homeCardData = [
    { icon: <CalenderDays />, number: "78", title: "Active Trials",iconFrameColor:'#1A9CF9',iconFrameBorderColor:'#BBD8EDCC' },
    { icon: <CalenderMultiple size={40} />, number: "56", title: "Expired Trials",iconFrameColor:'#D786DD',iconFrameBorderColor:'#FADDFCCC' },
    { icon: <CalenderClock size={40}/>, number: "50", title: "Upcoming Expiration",iconFrameColor:'#FCB23E',iconFrameBorderColor:'#FDE3BBCC' },
    { icon: <Boxes />, number: "526", title: "Converted Trails",iconFrameColor:'#51BFDA',iconFrameBorderColor:'#C1E7F1CC' },
    { icon: <PackageMinus />, number: "30", title: "Exit Trails",iconFrameColor:'#30B777',iconFrameBorderColor:'#B3F0D3CC' },
  ];

    // Data for the table
    const leadData: LeadData[] = [
        { trialID: "REG-12345", status:"Active", startDate: "22/11/2024", endDate: "31/12/2024", assignedBDA: "danten", },
        { trialID: "REG-12345", status:"Converted", startDate: "22/11/2024", endDate: "31/12/2024", assignedBDA: "warn", },
        { trialID: "REG-12345", status:"Expired", startDate: "22/11/2024", endDate: "31/12/2024", assignedBDA: "irnabela",  },
        { trialID: "REG-12345", status:"Expired", startDate: "22/11/2024", endDate: "31/12/2024", assignedBDA: "tinest",},
        { trialID: "REG-12345", status:"Active", startDate: "22/11/2024", endDate: "31/12/2024", assignedBDA: "irnabela",  },
        { trialID: "REG-12345", status:"Active", startDate: "22/11/2024", endDate: "31/12/2024", assignedBDA: "qmaho@mail.ru",  },
        { trialID: "REG-12345", status:"Converted", startDate: "22/11/2024", endDate: "31/12/2024", assignedBDA: "danten", },
        { trialID: "REG-12345", status:"Expired", startDate: "22/11/2024", endDate: "31/12/2024", assignedBDA: "masonedwards",  },
        { trialID: "REG-12345", status:"Active", startDate: "22/11/2024", endDate: "31/12/2024", assignedBDA: "lily.anderson ",  },
        { trialID: "REG-12345", status:"Converted", startDate: "22/11/2024", endDate: "31/12/2024", assignedBDA: "oliverhall ",},
        { trialID: "REG-12345", status:"Expired", startDate: "22/11/2024", endDate: "31/12/2024", assignedBDA: "sophia.lee ",  },
        { trialID: "REG-12345", status:"Expired", startDate: "22/11/2024", endDate: "31/12/2024", assignedBDA: "ethan.clark ",},
        { trialID: "REG-12345", status:"Active", startDate: "22/11/2024", endDate: "31/12/2024", assignedBDA: "isabella.carter ",},
        { trialID: "REG-12345", status:"Converted", startDate: "22/11/2024", endDate: "31/12/2024", assignedBDA: "henry.thomas ", },
        { trialID: "REG-12345", status:"Expired", startDate: "22/11/2024", endDate: "31/12/2024", assignedBDA: "ava.jackson ", },
        { trialID: "REG-12345", status:"Expired", startDate: "22/11/2024", endDate: "31/12/2024", assignedBDA: "lucas.wright ", },
      ];
      
        // Define the columns with strict keys
        // Define the columns with strict keys for LeadData
      const columns: { key: keyof LeadData; label: string }[] = [
        { key: "trialID", label: "Lead ID" },
        { key: "status", label: "Trial Status" },
        { key: "startDate", label: "Trial Start Date" },
        { key: "endDate", label: "Trial End Date" },
        { key: "assignedBDA", label: "Assigned BDA" },
      ];
            

  return (
    <div>
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
        <Table<LeadData> data={leadData} columns={columns} headerContents={{
          title:'Trial Details',
          search:{placeholder:'Search BDA by Name'},
        //   sort: [
        //         {
        //           sortHead: "Filter",
        //           sortList: [
        //             { label: "Sort by Name", icon: <UserIcon size={14} color="#4B5C79"/> },
        //             { label: "Sort by Age", icon: <RegionIcon size={14} color="#4B5C79"/> },
        //             { label: "Sort by Name", icon: <AreaManagerIcon size={14} color="#4B5C79"/> },
        //             { label: "Sort by Age", icon: <CalenderDays size={14} color="#4B5C79"/> }
        //           ]
        //         }
        //   ]
        }}
        actionList={[
            { label: 'view', function: handleEditDeleteView },
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