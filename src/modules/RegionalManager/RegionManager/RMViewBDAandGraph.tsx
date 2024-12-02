import Table from "../../../components/ui/Table";


interface BDAData {
    employeeId:string;
    bdaName: string;
    phoneNo: string;
    emailAdrees: string;
    dateOfJoining:string;
   
    totalLeads:string;
    leadsClosed: string;
    
  }
type Props = {}

const RMViewBDAandGraph = ({

   

}: Props) => {

    const handleEditDeleteView=(editId?:any,viewId?:any,deleteId?:any)=>{
        if(viewId){
          // navigate(`/leadView/${viewId}`)
          console.log(viewId);
          
        }
    }

     // Data for the table
     const data: BDAData[] = [
        { employeeId:"BDA111", bdaName:"Subii",phoneNo:"000999888", emailAdrees:"subi@gmail.com", dateOfJoining:"5/30/14",totalLeads:"90",leadsClosed:"78"},
        { employeeId:"BDA111", bdaName:"Subii",phoneNo:"000999888", emailAdrees:"subi@gmail.com", dateOfJoining:"5/30/14",totalLeads:"90",leadsClosed:"78"},
        { employeeId:"BDA222", bdaName:"Subii",phoneNo:"000999888", emailAdrees:"subi@gmail.com", dateOfJoining:"5/30/14",totalLeads:"90",leadsClosed:"18"},
        { employeeId:"BDA111", bdaName:"Subii",phoneNo:"000999888", emailAdrees:"subi@gmail.com", dateOfJoining:"5/30/14",totalLeads:"95",leadsClosed:"78"},
        { employeeId:"BDA222", bdaName:"Unni",phoneNo:"000999888", emailAdrees:"unnii@gmail.com", dateOfJoining:"5/30/14",totalLeads:"90",leadsClosed:"88"},
        { employeeId:"BDA111", bdaName:"Subii",phoneNo:"000999888", emailAdrees:"subi@gmail.com", dateOfJoining:"5/30/14",totalLeads:"950",leadsClosed:"78"},
        { employeeId:"BDA333", bdaName:"kuttu",phoneNo:"000999888", emailAdrees:"kuttu@gmail.com", dateOfJoining:"5/30/14",totalLeads:"590",leadsClosed:"78"},
        { employeeId:"BDA111", bdaName:"Subii",phoneNo:"000999888", emailAdrees:"subi@gmail.com", dateOfJoining:"5/30/14",totalLeads:"90",leadsClosed:"78"},
        { employeeId:"BDA111", bdaName:"Subii",phoneNo:"000999888", emailAdrees:"subi@gmail.com", dateOfJoining:"5/30/14",totalLeads:"90",leadsClosed:"58"},
        { employeeId:"BDA111", bdaName:"kuttu",phoneNo:"000999888", emailAdrees:"subi@gmail.com", dateOfJoining:"5/30/14",totalLeads:"90",leadsClosed:"78"},
        { employeeId:"BDA111", bdaName:"Subii",phoneNo:"000999888", emailAdrees:"subi@gmail.com", dateOfJoining:"5/30/14",totalLeads:"90",leadsClosed:"78"}




 ];
        // Define the columns with strict keys
        const columns: { key: keyof BDAData; label: string }[] = [
          { key: "employeeId", label: "Employee ID" },
          { key: "bdaName", label: "BDA Name" },
          { key: "phoneNo", label: "Phone Number" },
          { key: "emailAdrees", label: "Email Address" },
          { key: "dateOfJoining", label: "Date of Joining" },
          { key: "totalLeads", label: "Total Leads" },   
          { key: "leadsClosed", label: "Leads Closed" },  
        ];
  return (
    <div>
            {/* Table Section */}
      <div>
        <Table<BDAData> data={data} columns={columns} headerContents={{
          title:'BDA,S',
          search:{placeholder:'Search Invoice by client name, invoice number, or date'},
         
        }}
        actionList={[
          
          { label: 'view', function: handleEditDeleteView },
        ]}  />
      </div>


      {/* Graph Section*/}

      
      <div className="grid grid-cols-12 gap-3">
       {/* Table Section */}
       <div className="col-span-8 py-32 ">
       <div>
       <p>Sales Revenue By Team Member</p>
      </div>

       </div>
       <div className="col-span-4 py-32">
        <p>Sales Revenue By Team Member</p>

       </div>


      </div>

    </div>
  )
}

export default RMViewBDAandGraph