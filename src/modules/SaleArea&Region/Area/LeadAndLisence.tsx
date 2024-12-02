import LeadsCardIcon from "../../../assets/icons/LeadsCardIcon";
import LicenserCardIcon from "../../../assets/icons/LicenserCardIcon";
import HomeCard from "../../../components/ui/HomeCards";
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

    </div>
  )
}

export default LeadAndLisence