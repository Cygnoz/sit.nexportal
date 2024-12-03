import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import CalenderDays from "../../../assets/icons/CalenderDays";
import EditIcon from "../../../assets/icons/EditIcon";
import LeadsCardIcon from "../../../assets/icons/LeadsCardIcon";
import LicenserCardIcon from "../../../assets/icons/LicenserCardIcon";
import RegionIcon from "../../../assets/icons/RegionIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import Button from "../../../components/ui/Button";
import HomeCard from "../../../components/ui/HomeCards";
import Table from "../../../components/ui/Table";
import person from"../../../assets/image/Ellipse 14 (3).png"
 
   
    interface AreaData{
      image:string;
      name:string;
      state:string;
      mail:string;
      phone:string

    }
interface TeamData {
 employeeID: string;
  bdaName: string;
  aasignedArea: string;
  phoneNumber:string;

  dateOfJoining:string;
}

type Props = {}
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
  




const RegionTeamView = ({}: Props) => {

  const  areaManager: AreaData[]=[
    {image:person,name:"David",state:"Kerala",mail:"Davide@gmail.com",phone:"1122334455"},
    {image:person,name:"David",state:"Kerala",mail:"Davide@gmail.com",phone:"1122334455"},
    {image:person,name:"David",state:"Kerala",mail:"Davide@gmail.com",phone:"1122334455"},
    {image:person,name:"David",state:"Kerala",mail:"Davide@gmail.com",phone:"1122334455"},
    {image:person,name:"David",state:"Kerala",mail:"Davide@gmail.com",phone:"1122334455"},
    {image:person,name:"David",state:"Kerala",mail:"Davide@gmail.com",phone:"1122334455"},
    {image:person,name:"David",state:"Kerala",mail:"Davide@gmail.com",phone:"1122334455"}
  ]

   // Data for the table
   const data: TeamData[] = [

    { employeeID: "001", bdaName: "subi", aasignedArea: "Area-001", phoneNumber:"333999777", dateOfJoining:"21-07-2022" },
    { employeeID: "002", bdaName: "sanu", aasignedArea: "Area-002", phoneNumber:"333999777", dateOfJoining:"21-07-2022" },
    { employeeID: "003", bdaName: "kuttu", aasignedArea: "Area-003", phoneNumber:"111222777", dateOfJoining:"21-07-2022" },
    { employeeID: "004", bdaName: "krishnan", aasignedArea: "Area-004", phoneNumber:"778899665", dateOfJoining:"21-07-2022" },
    { employeeID: "005", bdaName: "ajith", aasignedArea: "Area-005", phoneNumber:"333999777", dateOfJoining:"21-07-2022" },
    { employeeID: "006", bdaName: "anu", aasignedArea: "Area-006", phoneNumber:"333999777", dateOfJoining:"21-07-2022" },
    { employeeID: "007", bdaName: "minnu", aasignedArea: "Area-007", phoneNumber:"333999777", dateOfJoining:"21-07-2022" },
    { employeeID: "008", bdaName: "subi", aasignedArea: "Area-001", phoneNumber:"333999777", dateOfJoining:"21-07-2022" },
    { employeeID: "009", bdaName: "subi", aasignedArea: "Area-001", phoneNumber:"333999777", dateOfJoining:"21-07-2022" },
    { employeeID: "010", bdaName: "subi", aasignedArea: "Area-001", phoneNumber:"333999777", dateOfJoining:"21-07-2022" },
    { employeeID: "011", bdaName: "subi", aasignedArea: "Area-001", phoneNumber:"333999777", dateOfJoining:"21-07-2022" },
    { employeeID: "012", bdaName: "subi", aasignedArea: "Area-001", phoneNumber:"333999777", dateOfJoining:"21-07-2022" },
  ];
// Define the columns with strict keys
const columns: { key: keyof TeamData; label: string }[] = [
    { key: "employeeID", label: "Employee ID" },
    { key: "bdaName", label: "BDA Name" },
    { key: "aasignedArea", label: "Assigned Area" },
    { key: "phoneNumber", label: "Phone Number" },
    { key: "dateOfJoining", label: "Date Of Joining" },

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

      <div className="bg-white my-6 h-64">
  <h1 className="mx-4 my-6 font-bold text-base">Area Managers</h1>
  <div
    className="w-full p-3 my-6 m-2 rounded-lg flex gap-4 overflow-x-auto"
    style={{
      display: "flex", // Ensures the cards are laid out in a row
      overflowX: "auto", // Enables horizontal scrolling
      maxHeight: "100%", // Keeps within the height limit
      scrollBehavior: "smooth",
      WebkitOverflowScrolling: "touch", // Enables smooth scrolling on iOS
    }}
  >
    {areaManager.map((card, index) => (
      <div
        key={index}
        className="my-1 bg-[#F5F9FC] p-2 w-64 rounded-lg flex-shrink-0" // Added `flex-shrink-0` to prevent cards from shrinking
      >
        <div className="flex justify-between my-1">
          <img className="w-10" src={card.image} alt="" />
          <EditIcon size={30} />
        </div>
        <div className="flex justify-between">
          <h1 className="font-bold text-sm my-1">{card.name}</h1>
          <h1 className="font-medium my-1 text-xs text-center h-5 w-14 rounded-lg bg-[#30B777]">
            {card.state}
          </h1>
        </div>
        <p className="font-medium text-xs my-1">{card.mail}</p>
        <p className="font-medium text-xs my-2">{card.phone}</p>
        <Button variant="tertiary" className="font-medium text-xs" size="sm">View Details</Button>
      </div>
    ))}
  </div>
</div>



      <div>
          {/* Table Section */}
          <div>
                        <Table<TeamData> data={data} columns={columns} headerContents={{
                            title: 'BDA,s',
                            search: { placeholder: 'Search BDA By NAme' },
                            sort: [
                                {
                                    sortHead: "Filter By Area",
                                    sortList: [
                                        { label: "Sort by supervisorCode", icon: <UserIcon size={14} color="#4B5C79" /> },
                                        { label: "Sort by Age", icon: <RegionIcon size={14} color="#4B5C79" /> },
                                        { label: "Sort by supervisorCode", icon: <AreaManagerIcon size={14} color="#4B5C79" /> },
                                        {
                                            label: "Sort by Age", icon: <CalenderDays
                                                size={14} color="#4B5C79" />
                                        }
                                    ]
                                }
                            ]
                            
                        }}noAction
                        />
                    </div>

      </div>
    </div>
  )
}

export default RegionTeamView