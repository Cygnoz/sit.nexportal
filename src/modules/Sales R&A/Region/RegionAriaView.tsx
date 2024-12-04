import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import LeadsCardIcon from "../../../assets/icons/LeadsCardIcon";
import LicenserCardIcon from "../../../assets/icons/LicenserCardIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import HomeCard from "../../../components/ui/HomeCards";
import Table from "../../../components/ui/Table";
import RRecentActivityView from "./RRecentActivityView";


interface AreaData {
    areaCode: string;
    areaName: string;
    areaManager: string;
    
  }

  
interface LicensersData {
  licenserID: string;
  licenserName: string;
  leadSource: string;
  totalRevenue: string | number;
  status: string;
}
type Props = {}

const RegionAriaView = ({}: Props) => {

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
            title: "Total Area's", 
            iconFrameColor: "#DD9F86", 
            iconFrameBorderColor: "#FADDFCCC" 
        },
        { icon: <UserIcon />, number: "189", title: "Total ASM",iconFrameColor:'#1A9CF9',iconFrameBorderColor:'#BBD8EDCC' },

        { icon: <AreaManagerIcon />, number: "498", title: "Total BDA's",iconFrameColor:'#E07253',iconFrameBorderColor:'#F4D7CFCC'  },

        { icon: <AreaManagerIcon />, number: "498", title: "New Leads This Month",iconFrameColor:'#DA8FE0',iconFrameBorderColor:'#F4D7CFCC'  },

        
          {    icon: <LicenserCardIcon />, 
            number: "333", 
            title: "Open Licenses", 
            iconFrameColor: "#8695DD", 
            iconFrameBorderColor: "#CAD1F1CC" 
        },
    
    
      ];

      
    //Data for licensers table
    const data1: LicensersData[]=[
      {licenserID:"LIC-123",licenserName:"Aravind",leadSource:"website",totalRevenue:"15,000",status:"Active"},
      {licenserID:"LIC-323",licenserName:"Aravind",leadSource:"SocialMedia",totalRevenue:"15,000",status:"Active"},
      {licenserID:"LIC-123",licenserName:"Jagadheesh",leadSource:"website",totalRevenue:"18,000",status:"Active"},
      {licenserID:"LIC-443",licenserName:"Aravind",leadSource:"Refferal",totalRevenue:"15,000",status:"Active"},
      {licenserID:"LIC-123",licenserName:"Aravind",leadSource:"website",totalRevenue:"15,000",status:"Active"},
      {licenserID:"LIC-123",licenserName:"Vishnu",leadSource:"website",totalRevenue:"12,000",status:"Active"},
      {licenserID:"LIC-343",licenserName:"Aravind",leadSource:"website",totalRevenue:"15,000",status:"Active"},
      {licenserID:"LIC-123",licenserName:"Shyam",leadSource:"website",totalRevenue:"15,000",status:"Active"},
      {licenserID:"LIC-443",licenserName:"Aravind",leadSource:"Refferal",totalRevenue:"13,000",status:"Active"},
      {licenserID:"LIC-123",licenserName:"Aravind",leadSource:"website",totalRevenue:"15,000",status:"Active"},
      {licenserID:"LIC-123",licenserName:"Aravind",leadSource:"website",totalRevenue:"19,000",status:"Active"},
      {licenserID:"LIC-123",licenserName:"Aravind",leadSource:"website",totalRevenue:"15,000",status:"Active"},

  ]
   // Define the columns with strict keys
   const columns1: { key: keyof LicensersData; label: string }[] = [
      { key: "licenserID", label: "Licenser ID" },
      { key: "licenserName", label: "Licenser Name" },
      { key: "leadSource", label: "Lead Source" },
      { key: "totalRevenue", label: "Total Revenue" },
      { key: "status", label: "Status" },

  ];

         // Data for the table
         const data: AreaData[] = [

          {areaCode:"LDA1234",areaName:"Area1",areaManager:"Sanujith"},
          {areaCode:"LDA2154",areaName:"Area2",areaManager:"Jithinraj"},
          {areaCode:"LDA1234",areaName:"Area4",areaManager:"Sanujith"},
          {areaCode:"LDA1634",areaName:"Area3",areaManager:"Sanujith"},
          {areaCode:"LDA1234",areaName:"Area1",areaManager:"Aravind"},
          {areaCode:"LDA1644",areaName:"Area1",areaManager:"Sanujith"},
          {areaCode:"LDA1234",areaName:"Area6",areaManager:"Sanujith"},
          {areaCode:"LDA1464",areaName:"Area1",areaManager:"Sajith"},
          {areaCode:"LDA1234",areaName:"Area1",areaManager:"Sanujith"},
          {areaCode:"LDA1234",areaName:"Area1",areaManager:"Sanujith"},

           ];
        // Define the columns with strict keys
        const columns: { key: keyof AreaData; label: string }[] = [
          { key: "areaCode", label: "AreaCode" },
          { key: "areaName", label: "Area Name" },
          { key: "areaManager", label: "AreaManager" },
          
        ];
      


  return (
    <div>
         <div className="bg-white p-2 rounded-lg">
        {/* HomeCards Section */}
       <div className="flex gap-3 py-1 justify-between">
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

       </div>

      <div className="grid grid-cols-12 mt-5">
      <div className="col-span-8">

     { /* Table Section */}
      <div>
        <Table<AreaData> data={data} columns={columns} headerContents={{
          title:"Areas",
          search:{placeholder:'Search Area By Name, Manager'},
       
        }}
        actionList={[
          
          { label: 'view', function: handleEditDeleteView },
        ]}
         />
      </div>
        
           
           </div>
      <div className="col-span-4 m-2">
        <RRecentActivityView/>
           
           </div>
      </div>

      <div className="grid grid-cols-12 mt-5">
      <div className="col-span-8 my-12">

     <h1>Revenue By Area</h1>
      </div>

      <div className="col-span-4 my-12">
        <p>Leads Generated by Area By Source</p>
           
           </div>
        
           
           </div>

           <div>

            
                    {/* Table Section */}
                    <div>
                        <Table<LicensersData> data={data1} columns={columns1} headerContents={{
                            title: 'Licensers by Area',
                            search: { placeholder: 'Search Area By Name,Manager' },
                           
                        }}
                        actionList={[
                          
                          { label: 'view', function: handleEditDeleteView },
                        ]}
                        />
                    </div>

            </div>    
      
      </div>


        
   
  )
}

export default RegionAriaView