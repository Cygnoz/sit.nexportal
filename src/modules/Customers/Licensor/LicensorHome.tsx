import { useState } from "react";
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
import AddLicenser from "./AddLicenser";



interface LicenserData {
    licenserId: string;
    licenserName: string;
    startDate: string;
    endDate:string;
    plan: string;
    status:string;
  }
  
const LicensorHome = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen((prev) => !prev);
      };
      const handleEditDeleteView=(editId?:any,viewId?:any,deleteId?:any)=>{
        if(viewId){
          // navigate(`/leadView/${viewId}`)
          console.log(viewId);
          
        }else if(editId){
          console.log(editId)
          // setId({...id,edit:editId})
        }
      }
    

      // Data for HomeCards
  const homeCardData = [
    { icon: <Boxes />, number: "526", title: "Total Licenser",iconFrameColor:'#51BFDA',iconFrameBorderColor:'#C1E7F1CC' },
    { icon: <CalenderDays />, number: "110", title: "Licenser Today",iconFrameColor:'#1A9CF9',iconFrameBorderColor:'#BBD8EDCC' },
    { icon: <Package />, number: "56", title: "Closed Licenser",iconFrameColor:'#D786DD',iconFrameBorderColor:'#FADDFCCC' },
    { icon: <PackageCheck />, number: "100", title: "Converted Licenser",iconFrameColor:'#FCB23E',iconFrameBorderColor:'#FDE3BBCC' },
    { icon: <PackageMinus />, number: "147", title: "Licenser Lost",iconFrameColor:'#30B777',iconFrameBorderColor:'#B3F0D3CC' },
  ];

    // Data for the table
    const data: LicenserData[] = [
        { licenserId: "Devid Billie",  licenserName: "nathan.roberts@example.com", startDate: "11/12/2012", endDate: "11/12/2013", plan: "Yearly",status:"Active" },
        { licenserId: "Sudeep Kumar",  licenserName: "nathan.roberts@example.com", startDate: "11/12/2012", endDate: "11/1/2014", plan: "Monthly",status:"Expired" },
        { licenserId: "Kathryn Murphy",  licenserName: "nathan.roberts@example.com", startDate: "11/12/2012", endDate: "11/3/2014", plan: "Quaterly",status:"Pending Renewal" },
        { licenserId: "Darrell Steward",  licenserName: "nathan.roberts@example.com", startDate: "11/12/2012", endDate: "11/12/2013", plan: "Yearly",status:"Expired" },
        { licenserId: "Ronald Richards",  licenserName: "nathan.roberts@example.com", startDate: "11/12/2012", endDate: "11/3/2014", plan:"Quaterly",status:"Active" },
        { licenserId: "Jane Cooper",  licenserName: "nathan.roberts@example.com", startDate: "11/12/2012", endDate: "11/1/2014", plan: "Monthly",status:"Pending Renewal" },
        { licenserId: "Sudeep Kumar",  licenserName: "nathan.roberts@example.com", startDate: "11/12/2012", endDate: "11/12/2013", plan: "Yearly",status:"Expired" },
        { licenserId: "Kathryn Murphy",  licenserName: "nathan.roberts@example.com", startDate: "11/12/2012", endDate: "11/1/2014", plan: "Monthly",status:"Active" },
        { licenserId: "Darrell Steward",  licenserName: "nathan.roberts@example.com", startDate: "11/12/2012", endDate: "11/12/2013", plan: "Yearly",status:"Expired" },
        { licenserId: "Ronald Richards",  licenserName: "nathan.roberts@example.com", startDate: "11/12/2012", endDate: "11/12/2013", plan: "Yearly",status:"Pending Renewal"},
        { licenserId: "Jane Cooper",  licenserName: "nathan.roberts@example.com", startDate: "11/12/2012", endDate: "11/1/2014", plan: "Monthly",status:"Active" },
      ];
        // Define the columns with strict keys
        const columns: { key: keyof LicenserData; label: string }[] = [
          { key: "licenserId", label: "Licenser Id" },
          { key: "licenserName", label: "Email Address" },
          { key: "startDate", label: "Start Date" },
          { key: "endDate", label: "End Date" },
          { key: "plan", label: "Plan" },
          { key: "status", label: "Status" },

        ];
      

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-[#303F58] text-base font-bold">Licenser</h1>
        <Button variant="primary" size="sm" onClick={handleModalToggle}>
          + Create Licenser
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
        <Table<LicenserData> data={data} columns={columns} headerContents={{
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
            { label: 'edit', function:handleEditDeleteView },
            { label: 'view', function: handleEditDeleteView },
          ]}  />
      </div>

      {/* Modal Section */}
      <Modal open={isModalOpen} onClose={handleModalToggle}>
        <AddLicenser onClose={handleModalToggle} />
      </Modal>
    </div>
  )
}

export default LicensorHome;