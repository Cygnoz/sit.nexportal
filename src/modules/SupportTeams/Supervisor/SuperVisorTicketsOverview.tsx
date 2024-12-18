import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import CalenderDays from "../../../assets/icons/CalenderDays";
import RegionIcon from "../../../assets/icons/RegionIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import SuperVisorCards from "../../../components/ui/SuperVisorCards";
import Table from "../../../components/ui/Table";
import person1 from "../../../assets/image/Ellipse 14.png";
import person2 from "../../../assets/image/Ellipse 43.png";



interface SupervisorData {
    ticketsNumber: string;
    supportAgent:string;
    status: string;
    issue: string;
    Priority:string;
   
  }
 // Data for HomeCards
 const SuperVisorCardData = [
    {
        
        number: "3454",
        title: "Total Tickets",
        subTitle: "Lorem ipsum dolor sit amet consectetur.",
        images: [
          <img src={person1} alt="person1" className="w-10 h-10 rounded-full" />,
          <img src={person2} alt="person2" className="w-10 h-10 rounded-full" />,
          <img src={person1} alt="person3" className="w-10 h-10 rounded-full" />,
          <img src={person2} alt="person4" className="w-10 h-10 rounded-full" />,
      ],
    },
    {
      
        number: "1678",
        title: "Open Tickets",
        subTitle: "In Percentage"
    },
    {
        
        number: "889",
        title: "Tickets Resolved",
        subTitle: "customer satisfaction rating for tickets resolved by the team"
    },

];

type Props = {}

const SuperVisorTicketsOverview = ({

}: Props) => {

    const handleEditDeleteView=(editId?:any,viewId?:any,deleteId?:any)=>{
        if(viewId){
         
          //navigate(`/supervisor/${viewId}`)
          console.log(viewId);
        }else if(editId){
          console.log(editId)
          // setId({...id,edit:editId})
        }else{
          console.log(deleteId)
          // setId({...id,delete:deleteId})
        }
      }

   

    // Data for the table
    const data: SupervisorData[] = [

        {ticketsNumber:"TN-MH22", supportAgent:"Dani",status:"Open", issue:"Billing issue",Priority:"High"},
        {ticketsNumber:"TN-MH23", supportAgent:"olmoo",status:"Open", issue:"Billing issue",Priority:"High"},
        {ticketsNumber:"TN-MH24", supportAgent:"Dani",status:"Open", issue:"Billing issue",Priority:"High"},
        {ticketsNumber:"TN-MH25", supportAgent:"suni",status:"Open", issue:"Billing issue",Priority:"High"},
        {ticketsNumber:"TN-MH26", supportAgent:"Dani",status:"Pending", issue:"Billing issue",Priority:"High"},
        {ticketsNumber:"TN-MH27", supportAgent:"ajeesh",status:"Open", issue:"Billing issue",Priority:"High"},
        {ticketsNumber:"TN-MH28", supportAgent:"Dani",status:"Pending", issue:"Billing issue",Priority:"High"},
        {ticketsNumber:"TN-MH29", supportAgent:"Dani",status:"Open", issue:"Billing issue",Priority:"High"},
        {ticketsNumber:"TN-MH30", supportAgent:"Dani",status:"Pending", issue:"Billing issue",Priority:"High"},
        {ticketsNumber:"TN-MH31", supportAgent:"Dani",status:"Open", issue:"Billing issue",Priority:"High"},
        {ticketsNumber:"TN-MH32", supportAgent:"Dani",status:"Open", issue:"Billing issue",Priority:"High"},
        {ticketsNumber:"TN-MH33", supportAgent:"Dani",status:"Open", issue:"Billing issue",Priority:"High"},
      

    ];
        // Define the columns with strict keys
        const columns: { key: keyof SupervisorData; label: string }[] = [
          { key: "ticketsNumber", label: "Tickets Number" },
          { key: "supportAgent", label: "Support Agent" },
          { key: "status", label: "Status" },
          { key: "issue", label: "Issue" },
          { key: "Priority", label: "Priority" },
      

        ];
      


  return (
    <div>
          <div className="grid grid-cols-12 gap-3">
          <div className="col-span-8">
           
      {/* Table Section */}
      <div>
        <Table<SupervisorData> data={data} columns={columns} headerContents={{
          title:'Supervisor Overview',
          search:{placeholder:'Search Supervisor'},
          sort: [
                {
                  sortHead: "Filter",
                  sortList: [
                    { label: "Sort by supervisorCode", icon: <UserIcon size={14} color="#4B5C79"/> },
                    { label: "Sort by Age", icon: <RegionIcon size={14} color="#4B5C79"/> },
                    { label: "Sort by supervisorCode", icon: <AreaManagerIcon size={14} color="#4B5C79"/> },
                    { label: "Sort by Age", icon: <CalenderDays size={14} color="#4B5C79"/> }
                  ]
                }
          ]
        }}
        actionList={[
          { label: 'edit', function:handleEditDeleteView },
          { label: 'delete', function: handleEditDeleteView },
          { label: 'view', function: handleEditDeleteView },
        ]}  />
      </div>
            </div>

            <div className="col-span-4">
                 {/* HomeCards Section */}

                 <div className=" grid gap-4">
                        {SuperVisorCardData.map((card, index) => (
                            <SuperVisorCards
                                key={index}
                                number={card.number}
                                title={card.title}
                                subTitle={card.subTitle}
                                images={card.images}
                            />
                        ))}
                    </div>
            </div>

          </div>

    </div>
  )
}

export default SuperVisorTicketsOverview