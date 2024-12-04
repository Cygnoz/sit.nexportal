import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import LeadsCardIcon from "../../../assets/icons/LeadsCardIcon";
import LicenserCardIcon from "../../../assets/icons/LicenserCardIcon";
// import PhoneIcon from "../../../assets/icons/PhoneIcon";
import RupeeIcon from "../../../assets/icons/RupeeIcon";
// import Trophy from "../../../assets/icons/Trophy";
import UserIcon from "../../../assets/icons/UserIcon";
import HomeCard from "../../../components/ui/HomeCards";
import Table from "../../../components/ui/Table";


type Props = {}

interface AreaData {
    employeeId: string;
    bdaName: string;
    phoneNumber:string;
    emailAddress: string;
    dateOfJoining: string;
    totalLeads: string;
    leadsclosed:String;
  }

const TeamOverview = ({}: Props) => {



    
  const handleEditDeleteView=(editId?:any,viewId?:any,deleteId?:any)=>{
    if(viewId){
     // navigate(`/areaView/${viewId}`)
      console.log(viewId);
      
    }else if(editId){
      console.log(editId)
      // setId({...id,edit:editId})
    }
    console.log(deleteId);
    
  }

  // Data for HomeCards
  const homeCardData = [
    { 
      icon: <UserIcon size={24}/>, 
      number: "167", 
      title: "Total AM Manager", 
      iconFrameColor: "#1A9CF9", 
      iconFrameBorderColor: "#B3F0D3CC" 
    },
    { 
      icon: <AreaManagerIcon size={24}/>, 
      number: "86", 
      title: "Total  BDA'S", 
      iconFrameColor: "#D786DD", 
      iconFrameBorderColor: "#BBD8EDCC" 
    },
    { 
      icon: <LeadsCardIcon size={40} />, 
      number: "498", 
      title: "Total Lead's", 
      iconFrameColor: "#DD9F86", 
      iconFrameBorderColor: "#FADDFCCC" 
    },
    { 
      icon: <LicenserCardIcon />, 
      number: "2898", 
      title: "Active License Count", 
      iconFrameColor: "#8695DD", 
      iconFrameBorderColor: "#CAD1F1CC" 
    },
    { 
      icon: <RupeeIcon />, 
      number: "2898", 
      title: "Revenue Generated", 
      iconFrameColor: "#FDE3BB", 
      iconFrameBorderColor: "#FCB23E" 
    },

  ];
  
  // Data for the table
  const data: AreaData[] = [

    {employeeId : "AA-23344", bdaName: "Subi" ,phoneNumber: "14785258", emailAddress: "dudu@gmail.com", dateOfJoining:"2022-05-10", totalLeads:"30", leadsclosed:"44"},
    {employeeId : "AA-23344", bdaName: "Subi" ,phoneNumber: "14785258", emailAddress: "dudu@gmail.com", dateOfJoining:"2022-05-10", totalLeads:"30", leadsclosed:"44"},
    {employeeId : "AA-23344", bdaName: "Subi" ,phoneNumber: "14785258", emailAddress: "dudu@gmail.com", dateOfJoining:"2022-05-10", totalLeads:"30", leadsclosed:"44"},
    {employeeId : "AA-23344", bdaName: "Subi" ,phoneNumber: "14785258", emailAddress: "dudu@gmail.com", dateOfJoining:"2022-05-10", totalLeads:"30", leadsclosed:"44"},
    {employeeId : "AA-23344", bdaName: "Subi" ,phoneNumber: "14785258", emailAddress: "dudu@gmail.com", dateOfJoining:"2022-05-10", totalLeads:"30", leadsclosed:"44"},
    {employeeId : "AA-23344", bdaName: "Subi" ,phoneNumber: "14785258", emailAddress: "dudu@gmail.com", dateOfJoining:"2022-05-10", totalLeads:"30", leadsclosed:"44"},
    {employeeId : "AA-23344", bdaName: "Subi" ,phoneNumber: "14785258", emailAddress: "dudu@gmail.com", dateOfJoining:"2022-05-10", totalLeads:"30", leadsclosed:"44"},
    {employeeId : "AA-23344", bdaName: "Subi" ,phoneNumber: "14785258", emailAddress: "dudu@gmail.com", dateOfJoining:"2022-05-10", totalLeads:"30", leadsclosed:"44"},
    {employeeId : "AA-23344", bdaName: "Subi" ,phoneNumber: "14785258", emailAddress: "dudu@gmail.com", dateOfJoining:"2022-05-10", totalLeads:"30", leadsclosed:"44"},
    {employeeId : "AA-23344", bdaName: "Subi" ,phoneNumber: "14785258", emailAddress: "dudu@gmail.com", dateOfJoining:"2022-05-10", totalLeads:"30", leadsclosed:"44"},
    {employeeId : "AA-23344", bdaName: "Subi" ,phoneNumber: "14785258", emailAddress: "dudu@gmail.com", dateOfJoining:"2022-05-10", totalLeads:"30", leadsclosed:"44"},
    {employeeId : "AA-23344", bdaName: "Subi" ,phoneNumber: "14785258", emailAddress: "dudu@gmail.com", dateOfJoining:"2022-05-10", totalLeads:"30", leadsclosed:"44"},
    {employeeId : "AA-23344", bdaName: "Subi" ,phoneNumber: "14785258", emailAddress: "dudu@gmail.com", dateOfJoining:"2022-05-10", totalLeads:"30", leadsclosed:"44"},

];
  // Define the columns with strict keys
  const columns: { key: keyof AreaData; label: string }[] = [
    { key: "employeeId", label: "Employee ID" },
    { key: "bdaName", label: "BDA Name" },
    { key: "phoneNumber", label: "Phone Number" },
    { key: "emailAddress", label: "Email Address" },
    { key: "dateOfJoining", label: "Date Of Joining" },
    { key: "totalLeads", label: "Total leads" },
    { key: "leadsclosed", label: "Leads Closed" },
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
          title:"BDA,s",
          search:{placeholder:'Search BDA By Name'},
          // sort: [
          //       {
          //         sortHead: "Filter",
          //         sortList: [
          //           { label: "Sort by Name", icon: <UserIcon size={14} color="#4B5C79"/> },
          //           { label: "Sort by Age", icon: <RegionIcon size={14} color="#4B5C79"/> },
          //           { label: "Sort by Name", icon: <AreaManagerIcon size={14} color="#4B5C79"/> },
          //           { label: "Sort by Age", icon: <CalenderDays size={14} color="#4B5C79"/> }
          //         ]
          //       }
          // ]
        }}
        actionList={[
          
          { label: 'view', function: handleEditDeleteView },
        ]}
         />
      </div>
      {/* Graph Section*/}
      <div className="grid grid-cols-12 gap-3">
       
       <div className="col-span-8 py-32 ">
        <p>Sales Revenue By Team Member</p>

       </div>
       <div className="col-span-4 py-32">
        <p>Sales Revenue By Team Member</p>

       </div>


      </div>


    </div>
  )
}

export default TeamOverview