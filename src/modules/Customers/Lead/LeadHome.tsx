import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Boxes from "../../../assets/icons/Boxes";
import CalenderDays from "../../../assets/icons/CalenderDays";
import Package from "../../../assets/icons/Package";
import PackageCheck from "../../../assets/icons/PackageCheck";
import PackageMinus from "../../../assets/icons/PackageMinus";
import ConvertModal from "../../../components/modal/ConvertionModal/CovertLicenser";
import Modal from "../../../components/modal/Modal";
import Button from "../../../components/ui/Button";
import HomeCard from "../../../components/ui/HomeCards";
import Table from "../../../components/ui/Table";
import useApi from "../../../Hooks/useApi";
import { LeadData } from "../../../Interfaces/Lead";
import { endPoints } from "../../../services/apiEndpoints";
import ImportLeadModal from "./ImportLeadModal";
import LeadForm from './LeadForm';
import { useRegularApi } from "../../../context/ApiContext";

type Props = {}

function LeadHome({}: Props) {
  const {totalCounts}=useRegularApi()
  const {request:getAllLeads}=useApi('get',3001)
  const [allLead, setAllLead] = useState<LeadData[]>([]);
  const [editId, setEditId] = useState('');
  const navigate=useNavigate()

   // State to manage modal visibility
   const [isModalOpen, setIsModalOpen] = useState({
    import: false,
    convert: false,
    leadForm: false,
  });
  
  // Function to toggle modal visibility
  const handleModalToggle = (isImport = false, convert = false, leadForm = false) => {
    setIsModalOpen((prev) => ({
      ...prev,
      import: isImport, // Updated key with new parameter name
      convert: convert,
      leadForm: leadForm,
    }));
    getLeads();
  };
   

  const handleView=(id:any)=>{
    navigate(`/leadView/${id}`)
  }

  const handleEdit = (id: any) => {
    setEditId(id);
    handleModalToggle(false,false,true)
  };


  const getLeads=async()=>{
    try{
      const {response,error}=await getAllLeads(endPoints.LEADS)
      console.log("res",response);
      console.log("err",error);
      
      if(response && !error){
        console.log(response.data.leads);
       const transformLead= response.data.leads?.map((lead:any) => ({
          ...lead,
          leadName:`${lead.firstName} ${lead.lastName?lead.lastName:''}`,
          leadImage:lead.image,
          leadId:lead?.customerId
        })) || [];
        setAllLead(transformLead)
      }
    }catch(err){
      console.log(err);
    }
  }
  console.log(allLead);
  
  useEffect(()=>{
    getLeads()
  },[])

   const homeCardData = [
    { icon: <Boxes />, number: totalCounts?.totalLead, title: "Total Leads",iconFrameColor:'#51BFDA',iconFrameBorderColor:'#C1E7F1CC' },
    { icon: <CalenderDays  />, number: "110", title: "Leads Today",iconFrameColor:'#1A9CF9',iconFrameBorderColor:'#BBD8EDCC' },
    { icon: <Package/>, number: "56", title: "Closed Leads",iconFrameColor:'#D786DD',iconFrameBorderColor:'#FADDFCCC' },
    { icon: <PackageCheck />, number: "100", title: "Converted Leads",iconFrameColor:'#FCB23E',iconFrameBorderColor:'#FDE3BBCC' },
    { icon: <PackageMinus  />, number: "147", title: "Leads Lost",iconFrameColor:'#30B777',iconFrameBorderColor:'#B3F0D3CC' },
  ];

 // Data for the table
// const leadData: any[] = [
//   { leadID: "BDA12345", leadName: "Anjela John", phoneNumber: "(406) 555-0120", emailAddress: "danten@mail.ru", source: "Website", status: "New"},
//   { leadID: "BDA12345", leadName: "Kristin Watson", phoneNumber: "(480) 555-0103", emailAddress: "warn@mail.ru", source: "Referral", status: "Contacted"},
//   { leadID: "BDA12345", leadName: "Jacob Jones", phoneNumber: "(208) 555-0112", emailAddress: "irnabela@gmail.com", source: "Website", status: "Closed"},
//   { leadID: "BDA12345", leadName: "Wade Warren", phoneNumber: "(702) 555-0122", emailAddress: "tinest@mail.ru", source: "Event", status: "Closed"},
//   { leadID: "BDA12345", leadName: "Jacob Jones", phoneNumber: "(208) 555-0112", emailAddress: "irnabela@gmail.com", source: "Website", status: "Closed" },
//   { leadID: "BDA12345", leadName: "Devon Lane", phoneNumber: "(308) 555-0121", emailAddress: "qmaho@mail.ru", source: "Website", status: "New" },
//   { leadID: "BDA12345", leadName: "Kathryn Murphy", phoneNumber: "(406) 555-0120", emailAddress: "danten@mail.ru", source: "Website", status: "New" },
//   { leadID: "BDA12346", leadName: "Mason Edwards", phoneNumber: "(512) 555-0133", emailAddress: "masonedwards@mail.com", source: "Referral", status: "Contacted" },
//   { leadID: "BDA12347", leadName: "Lily Anderson", phoneNumber: "(315) 555-0144", emailAddress: "lily.anderson@mail.com", source: "Website", status: "New" },
//   { leadID: "BDA12348", leadName: "Oliver Hall", phoneNumber: "(401) 555-0155", emailAddress: "oliverhall@mail.com", source: "Event", status: "New" },
//   { leadID: "BDA12349", leadName: "Sophia Lee", phoneNumber: "(216) 555-0166", emailAddress: "sophia.lee@mail.com", source: "Referral", status: "Closed" },
//   { leadID: "BDA12350", leadName: "Ethan Clark", phoneNumber: "(334) 555-0177", emailAddress: "ethan.clark@mail.com", source: "Website", status: "Contacted"},
//   { leadID: "BDA12351", leadName: "Isabella Carter", phoneNumber: "(518) 555-0188", emailAddress: "isabella.carter@mail.com", source: "Website", status: "New" },
//   { leadID: "BDA12352", leadName: "Henry Thomas", phoneNumber: "(609) 555-0199", emailAddress: "henry.thomas@mail.com", source: "Event", status: "Closed" },
//   { leadID: "BDA12353", leadName: "Ava Jackson", phoneNumber: "(202) 555-0200", emailAddress: "ava.jackson@mail.com", source: "Website", status: "Contacted"},
//   { leadID: "BDA12354", leadName: "Lucas Wright", phoneNumber: "(703) 555-0211", emailAddress: "lucas.wright@mail.com", source: "Referral", status: "Closed"},
// ];

  const handleConvert=(id:any)=>{
    handleModalToggle(false,true,false)
    console.log(id);
  }
  
  // Define the columns with strict keys
  // Define the columns with strict keys for LeadData
const columns: { key: any; label: any }[] = [
  { key: "leadId", label: "Lead ID" },
  { key: "leadName", label: "Lead Name" },
  { key: "phone", label: "Phone Number" },
  { key: "email", label: "Email Address" },
  { key: "convert", label: handleConvert },
  { key: "leadStatus", label: "Status" },
];

 

  return (
    <>
    <div className="text-[#303F58] space-y-4">
      <div className="flex justify-between items-center">
      <h1 className="text-[#303F58] text-xl font-bold">Lead</h1>
      <div className="flex gap-2">
      <Button  variant="tertiary" className="border border-[#565148]"  size="sm" onClick={()=>handleModalToggle(true,false,false)}>
        <p className=""><span className="text-xl font-bold ">+ </span>Import Lead</p>
      </Button>
      <Button variant="primary"  size="sm" onClick={()=>{
       handleModalToggle(false,false,true)
        setEditId('')
      }}>
        <span className="text-xl font-bold">+</span>Create Lead
      </Button>
      </div>
      </div>
      {/* HomeCards Section */}
      <div className="flex gap-3 py-2 justify-between">
        {homeCardData?.map((card, index) => (
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
      <Table<LeadData>
  data={allLead}
  columns={columns}
  headerContents={{
    title: "Lead Details",
    search: { placeholder: "Search Leads" },
    // sort: [
    //   {
    //     sortHead: "Sort",
    //     sortList: [
    //       { label: "Sort by Name", icon: <CalenderDays size={14} color="#4B5C79"/> },
    //       { label: "Sort by Age", icon: <Package size={14} color="#4B5C79"/> },
    //       { label: "Sort by Name", icon: <CalenderDays size={14} color="#4B5C79"/> },
    //       { label: "Sort by Age", icon: <Package size={14} color="#4B5C79"/> }
    //     ]
    //   },
    //   {
    //     sortHead: "Filter",
    //     sortList: [
    //       { label: "Sort by Date", icon: <PackageCheck size={14} color="#4B5C79"/> },
    //       { label: "Sort by Status", icon: <Boxes size={14} color="#4B5C79"/> }
    //     ]
    //   }
    // ]
  }}
  actionList={[
    { label: 'view', function: handleView },
    { label: "edit", function: handleEdit },
  ]}
  
/>
      </div>
    </div>
    {/* Modal controlled by state */}
    <Modal open={isModalOpen.leadForm} onClose={()=>handleModalToggle()}>
    <LeadForm editId={editId} onClose={()=>handleModalToggle()}/>
    </Modal>
    <Modal open={isModalOpen.import} className='w-[40%]' onClose={()=>handleModalToggle()}>
    <ImportLeadModal  onClose={()=>handleModalToggle()}/>
    </Modal>
    <Modal open={isModalOpen.convert} align="center" onClose={()=>handleModalToggle()} className="w-[30%]">
        <ConvertModal onClose={()=>handleModalToggle()} type="lead" />
      </Modal>
    </>
  )
}

export default LeadHome