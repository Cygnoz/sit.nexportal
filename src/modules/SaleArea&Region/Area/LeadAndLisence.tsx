import LeadsCardIcon from "../../../assets/icons/LeadsCardIcon";
import LicenserCardIcon from "../../../assets/icons/LicenserCardIcon";
import HomeCard from "../../../components/ui/HomeCards";
import Licensers from "../../../components/ui/Licensers";
import Table from "../../../components/ui/Table";



interface AreaData {
    leadId: string;
    leadName: string;
    phoneNumber: string;
    emailAddress: string;
    source: string;
    assignedTo: string;
    status: string;
  }
type Props = {}

const LeadAndLisence = ({}: Props) => {

    const handleEditDeleteView=(editId?:any,viewId?:any,deleteId?:any)=>{
        if(viewId){
        //   navigate(`/areaView/${viewId}`)
          console.log(viewId);
          
        }else if(editId){
          console.log(editId)
          console.log(deleteId);
          
          // setId({...id,edit:editId})
        }
      }
    
      // Data for HomeCards
      const homeCardData = [
        { 
            icon: <LeadsCardIcon size={40} />, 
            number: "222", 
            title: "Lead Conversion Rate", 
            iconFrameColor: "#DD9F86", 
            iconFrameBorderColor: "#FADDFCCC" 
        },
        {    icon: <LicenserCardIcon />, 
            number: "333", 
            title: "Active licenses", 
            iconFrameColor: "#8695DD", 
            iconFrameBorderColor: "#CAD1F1CC" 
        },
        { 
          icon: <LicenserCardIcon />, 
          number: "111", 
          title: "Expired licenses", 
          iconFrameColor: "#D6476D", 
          iconFrameBorderColor: "#E5AEBCCC" 
        },
        { 
          icon: <LeadsCardIcon size={40}/>, 
          number: "444", 
          title: "License Revenue", 
          iconFrameColor: "#DD9F86", 
          iconFrameBorderColor: "#F6DCD2" 
        },
    
      ];
      
      // Data for the table
      const data: AreaData[] = [

        {leadId: "LDA1234", leadName: "Subii", phoneNumber: " 11111111", emailAddress: "subi@gmail.com", source: "Website", assignedTo: "Manii" , status:"New"},
        {leadId: "LDA1234", leadName: "Subii", phoneNumber: " 11111111", emailAddress: "subi@gmail.com", source: "Referal", assignedTo: "Sanu" , status:"Contacted"},
        {leadId: "LDA1234", leadName: "Subii", phoneNumber: " 11111111", emailAddress: "subi@gmail.com", source: "Website", assignedTo: "Manii" , status:"New"},
        {leadId: "LDA1234", leadName: "Subii", phoneNumber: " 11111111", emailAddress: "subi@gmail.com", source: "Referal", assignedTo: "Sanu" , status:"Contacted"},
         {leadId: "LDA1234", leadName: "Subii", phoneNumber: " 11111111", emailAddress: "subi@gmail.com", source: "Website", assignedTo: "Manii" , status:"New"},
        {leadId: "LDA1234", leadName: "Subii", phoneNumber: " 11111111", emailAddress: "subi@gmail.com", source: "Referal", assignedTo: "Sanu" , status:"Contacted"},
        {leadId: "LDA1234", leadName: "Subii", phoneNumber: " 11111111", emailAddress: "subi@gmail.com", source: "Website", assignedTo: "Manii" , status:"New"},
        {leadId: "LDA1234", leadName: "Subii", phoneNumber: " 11111111", emailAddress: "subi@gmail.com", source: "Referal", assignedTo: "Sanu" , status:"Contacted"},
        {leadId: "LDA1234", leadName: "Subii", phoneNumber: " 11111111", emailAddress: "subi@gmail.com", source: "Website", assignedTo: "Manii" , status:"New"},
        {leadId: "LDA1234", leadName: "Subii", phoneNumber: " 11111111", emailAddress: "subi@gmail.com", source: "Referal", assignedTo: "Sanu" , status:"Contacted"},
        {leadId: "LDA1234", leadName: "Subii", phoneNumber: " 11111111", emailAddress: "subi@gmail.com", source: "Website", assignedTo: "Manii" , status:"New"},
        {leadId: "LDA1234", leadName: "Subii", phoneNumber: " 11111111", emailAddress: "subi@gmail.com", source: "Referal", assignedTo: "Sanu" , status:"Contacted"},
        {leadId: "LDA1234", leadName: "Subii", phoneNumber: " 11111111", emailAddress: "subi@gmail.com", source: "Website", assignedTo: "Manii" , status:"New"},
        {leadId: "LDA1234", leadName: "Subii", phoneNumber: " 11111111", emailAddress: "subi@gmail.com", source: "Referal", assignedTo: "Sanu" , status:"Contacted"},
    ];
      // Define the columns with strict keys
      const columns: { key: keyof AreaData; label: string }[] = [
        { key: "leadId", label: "Lead ID" },
        { key: "leadName", label: "Lead Name" },
        { key: "phoneNumber", label: "Phone Number" },
        { key: "emailAddress", label: "Email address" },
        { key: "source", label: "Source" },
        { key: "assignedTo", label: "Assigned To" },
        { key: "status", label: "Status" },
      ];

      const LicencerData = [
        { plan: "1", name: "John Doe", startDate: "2024-01-01", endDate: "2024-12-31", status: "Active", buttonValue: "Renew" },
        { plan: "2", name: "Jane Smith", startDate: "2023-06-15", endDate: "2024-06-14", status: "Expired", buttonValue: "Renew" },
        { plan: "1", name: "Robert Brown", startDate: "2024-03-01", endDate: "2025-02-28", status: "Active", buttonValue: "Renew" },
        { plan: "3", name: "Emily Clark", startDate: "2023-11-20", endDate: "2024-11-19", status: "Pending Renewal", buttonValue: "Upgrade" },
        { plan: "2", name: "Jessica Davis", startDate: "2023-08-05", endDate: "2024-08-04", status: "Expired", buttonValue: "Renew" }
      ];
  return (
    <div>
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
        <Table<AreaData> data={data} columns={columns} headerContents={{
          title:"Lead Details",
          search:{placeholder:'Search BDA By Name'},
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
        ]}
         />
      </div>

       {/* Licensers handled by BDA */}
       <div className="my-3">
        <Licensers headerContents={{
          title: 'Licensers handled by BDA',
          search: { placeholder: 'Search License by Name or Holder Name' }
        }}
          cardContents={LicencerData}
        />
      </div>

    </div>
  )
}

export default LeadAndLisence