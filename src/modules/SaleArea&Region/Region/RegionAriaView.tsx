import LeadsCardIcon from "../../../assets/icons/LeadsCardIcon";
import LicenserCardIcon from "../../../assets/icons/LicenserCardIcon";
import HomeCard from "../../../components/ui/HomeCards";
import Table from "../../../components/ui/Table";


interface AreaData {
    areaCode: string;
    areaName: string;
    areaManager: string;
    
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
        {    icon: <LicenserCardIcon />, 
            number: "333", 
            title: "Total ASM", 
            iconFrameColor: "#8695DD", 
            iconFrameBorderColor: "#CAD1F1CC" 
        },
        { 
          icon: <LicenserCardIcon />, 
          number: "111", 
          title: "Total BDA'S", 
          iconFrameColor: "#D6476D", 
          iconFrameBorderColor: "#E5AEBCCC" 
        },
        { 
          icon: <LeadsCardIcon size={40}/>, 
          number: "444", 
          title: "New Leads This Month", 
          iconFrameColor: "#DD9F86", 
          iconFrameBorderColor: "#F6DCD2" 
        },
        { 
          icon: <LeadsCardIcon size={40}/>, 
          number: "444", 
          title: "Open Lisenses", 
          iconFrameColor: "#DD9F86", 
          iconFrameBorderColor: "#F6DCD2" 
        },
    
    
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

      <div className="grid grid-cols-12 mt-5">
      <div className="col-span-8">

     { /* Table Section */}
      <div>
        <Table<AreaData> data={data} columns={columns} headerContents={{
          title:"Areas",
          search:{placeholder:'Search Area By Name, Manager'},
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
      <div className="col-span-4">
        <p>ssss</p>
           
           </div>
      </div>

        
    </div>
  )
}

export default RegionAriaView