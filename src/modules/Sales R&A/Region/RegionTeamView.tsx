import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  YAxis
} from "recharts";
import AreaIcon from "../../../assets/icons/AreaIcon";
import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import CalenderDays from "../../../assets/icons/CalenderDays";
import EditIcon from "../../../assets/icons/EditIcon";
import RegionIcon from "../../../assets/icons/RegionIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import profileImage from "../../../assets/image/AvatarImg.png";
// import person from "../../../assets/image/Ellipse 14 (3).png";
import Button from "../../../components/ui/Button";
import HomeCard from "../../../components/ui/HomeCards";
import SearchBar from "../../../components/ui/SearchBar";
import Table from "../../../components/ui/Table";
import useApi from "../../../Hooks/useApi";
import { endPoints } from "../../../services/apiEndpoints";
import { useParams } from "react-router-dom";
import Modal from "../../../components/modal/Modal";
import AMForm from "../../SalesTeams/AreaManager/AMForm";
// import { RegionData } from "../../../Interfaces/Region";
// import SearchBar from "../../../components/ui/SearchBar";

// interface AreaData {
//   image: string;
//   name: string;
//   state: string;
//   mail: string;
//   phone: string;
// }
interface TeamData {
  employeeID: string;
  bdaName: string;
  aasignedArea: string;
  phoneNumber: string;
  dateOfJoining: string;
}

type Props = {};
// Data for HomeCards

const RegionTeamView = ({}: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [teamData, setTeamData]=useState<any>({})
  const {request: getTeam} =useApi('get',3003)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId]=useState('')

  // const {totalCounts}=useRegularApi()


  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

    const { id } = useParams();


  const getAllTeam = async()=>{
    try{
      const {response, error}= await getTeam(`${endPoints.GET_REGIONS}/${id}/details`)
      if(response && !error){
        const transformedTeam = response.data?.bdas?.map((team:any)=>({
          ...team,
          dateOfJoining:team.user?.dateOfJoining
          ? new Date(team.user?.dateOfJoining).toLocaleDateString("en-GB")
              : "N/A",
          phoneNo:team?.user?.PhoneNo,
        }))
        console.log(transformedTeam);
        setTeamData(transformedTeam)
      }
      else{
        console.log(error.response.data.message);
        
      }
    }
    catch(err){
      console.log(err);
      
    }
  }
  useEffect(()=>{
    getAllTeam()
  },[])

  console.log(teamData);
  

  
  const homeCardData = [
    {
      icon: <AreaIcon size={24} />,
      number: teamData?.totalTeamMembers ?teamData?.totalTeamMembers:'0',
      title: "Total Team Members",
      iconFrameColor: "#30B777",
      iconFrameBorderColor: "#B3F0D3CC",
    },
    {
      icon: <UserIcon />,
      number: teamData?.activeTeamMembers ? teamData?.activeTeamMembers: '0',
      title: "Active Team Members",
      iconFrameColor: "#1A9CF9",
      iconFrameBorderColor: "#BBD8EDCC",
    },
  
    {
      icon: <AreaManagerIcon />,
      number: teamData?.leadsAssigned ? teamData?.leadsAssigned: '0',
      title: "Leads Assigned",
      iconFrameColor: "#E07253",
      iconFrameBorderColor: "#F4D7CFCC",
    },
  
    {
      icon: <AreaManagerIcon />,
      number: "498",
      title: "Revenue Generated",
      iconFrameColor: "#DA8FE0",
      iconFrameBorderColor: "#F4D7CFCC",
    },
  ];
  

  // const areaManager: AreaData[] = [
  //   {
  //     image: person,
  //     name: "David",
  //     state: 'kerala',
  //     mail: "Davide@gmail.com",
  //     phone: "1122334455",
  //   },
  //   {
  //     image: person,
  //     name: "David",
  //     state: "Kerala",
  //     mail: "Davide@gmail.com",
  //     phone: "1122334455",
  //   },
  //   {
  //     image: person,
  //     name: "David",
  //     state: "Kerala",
  //     mail: "Davide@gmail.com",
  //     phone: "1122334455",
  //   },
  //   {
  //     image: person,
  //     name: "David",
  //     state: "Kerala",
  //     mail: "Davide@gmail.com",
  //     phone: "1122334455",
  //   },
  //   {
  //     image: person,
  //     name: "David",
  //     state: "Kerala",
  //     mail: "Davide@gmail.com",
  //     phone: "1122334455",
  //   },
  //   {
  //     image: person,
  //     name: "David",
  //     state: "Kerala",
  //     mail: "Davide@gmail.com",
  //     phone: "1122334455",
  //   },
  //   {
  //     image: person,
  //     name: "David",
  //     state: "Kerala",
  //     mail: "Davide@gmail.com",
  //     phone: "1122334455",
  //   },
  // ];

  // Data for the table
  const data: TeamData[] = [
    {
      employeeID: "001",
      bdaName: "subi",
      aasignedArea: "Area-001",
      phoneNumber: "333999777",
      dateOfJoining: "21-07-2022",
    },
    {
      employeeID: "002",
      bdaName: "sanu",
      aasignedArea: "Area-002",
      phoneNumber: "333999777",
      dateOfJoining: "21-07-2022",
    },
    {
      employeeID: "003",
      bdaName: "kuttu",
      aasignedArea: "Area-003",
      phoneNumber: "111222777",
      dateOfJoining: "21-07-2022",
    },
    {
      employeeID: "004",
      bdaName: "krishnan",
      aasignedArea: "Area-004",
      phoneNumber: "778899665",
      dateOfJoining: "21-07-2022",
    },
    {
      employeeID: "005",
      bdaName: "ajith",
      aasignedArea: "Area-005",
      phoneNumber: "333999777",
      dateOfJoining: "21-07-2022",
    },
    {
      employeeID: "006",
      bdaName: "anu",
      aasignedArea: "Area-006",
      phoneNumber: "333999777",
      dateOfJoining: "21-07-2022",
    },
    {
      employeeID: "007",
      bdaName: "minnu",
      aasignedArea: "Area-007",
      phoneNumber: "333999777",
      dateOfJoining: "21-07-2022",
    },
    {
      employeeID: "008",
      bdaName: "subi",
      aasignedArea: "Area-001",
      phoneNumber: "333999777",
      dateOfJoining: "21-07-2022",
    },
    {
      employeeID: "009",
      bdaName: "subi",
      aasignedArea: "Area-001",
      phoneNumber: "333999777",
      dateOfJoining: "21-07-2022",
    },
    {
      employeeID: "010",
      bdaName: "subi",
      aasignedArea: "Area-001",
      phoneNumber: "333999777",
      dateOfJoining: "21-07-2022",
    },
    {
      employeeID: "011",
      bdaName: "subi",
      aasignedArea: "Area-001",
      phoneNumber: "333999777",
      dateOfJoining: "21-07-2022",
    },
    {
      employeeID: "012",
      bdaName: "subi",
      aasignedArea: "Area-001",
      phoneNumber: "333999777",
      dateOfJoining: "21-07-2022",
    },
  ];
  // Define the columns with strict keys
  const columns: { key:any; label: string }[] = [
    { key: "employeeId", label: "Employee ID" },
    { key: "bdaName", label: "BDA Name" },
    { key: "aasignedArea", label: "Assigned Area" },
    { key: "phoneNo", label: "Phone Number" },
    { key: "teamData.bdas?.dateOfJoining", label: "Date Of Joining" },
  ];


  // Chart Data
  const ChartData = [
    { name: "Page A", uv: 3900, avatar: profileImage },
    { name: "Page B", uv: 3000, avatar: profileImage },
    { name: "Page C", uv: 2000, avatar: profileImage },
    { name: "Page D", uv: 2780, avatar: profileImage },
    { name: "Page E", uv: 1890, avatar: profileImage },
    { name: "Page F", uv: 2390, avatar: profileImage },
    { name: "Page G", uv: 3490, avatar: profileImage },
    { name: "Page H", uv: 4000, avatar: profileImage }
  ];

  // Normalize the data
  const maxValue = Math.max(...ChartData.map((entry) => entry?.uv));
  const normalizedData = ChartData.map((entry) => ({
    ...entry,
    uv: (entry?.uv / maxValue) * 100,
  }));

  // Custom Bubble Component
  const CustomBubble = (props: any) => {
    const { x, y } = props;

    if (x == null || y == null) return null;
    return (
      <div
        style={{
          position: "absolute",
          left: `${x - 4}px`,
          top: `${y - 8}px`,
          width: "8px",
          height: "8px",
          backgroundColor: "#30B777",
          borderRadius: "50%",
        }}
      />
    );
  };

  // Custom Bar Shape with Curved Top
  const CustomBarWithCurve = (props: any) => {
    const { x, y, width, height, fill } = props;

    if (!x || !y || !width || !height) return null;

    const radius = width / 2;
    const gap = 2;

    return (
      <>
        <rect
          x={x}
          y={y + gap}
          width={width}
          height={height - radius - gap}
          fill={fill}
          rx={radius}
          ry={radius}
        />
        <circle
          cx={x + radius}
          cy={y - radius + gap}
          r={radius}
          fill="#30B777"
        />
      </>
    );
  };

  return (
    <div>
      
      <div className="bg-white p-3 mt-5 rounded-lg w-full">
        {/* HomeCards Section */}
        <div className="flex gap-4 py-1 justify-between">
          {homeCardData.map((card, index) => (
            <HomeCard
              iconFrameColor={card.iconFrameColor}
              iconFrameBorderColor={card.iconFrameBorderColor}
              key={index}
              icon={card.icon}
              bgColor="#F5F9FC"
              titleColor="#8392A9"
              number={card.number}
              title={card.title}
            />
          ))}
        </div>
      </div>

      <div className="bg-white my-4 h-72 px-3 w-full">
        <div className="flex justify-between">
          <h1 className=" my-6 font-bold text-base">Area Managers</h1>
          <div className="mt-4">
            <SearchBar
              placeholder="Search Area Manager"
              searchValue={searchValue}
              onSearchChange={setSearchValue}
            />
          </div>
        </div>

        <div
          className="px-4 overflow-x-auto custom-scrollbar"
          style={{
            display: "flex",
            overflowX: "auto",
            maxHeight: "100%",
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex gap-4">
            {teamData?.areaManagers?.map((card:any, index:any) => (
              <div
                key={index}
                className="my-1 bg-[#F5F9FC] p-4 w-64 rounded-lg flex-shrink-0"
              >
                <div className="flex justify-between my-1">
                  
                  <img className="w-10 h-10 rounded-full" src={card.user?.userImage} alt="" />
                  <div onClick={()=>setEditId(card?._id)} className="bg-[#FFFFFF] w-6 h-6 rounded-lg p-1 border border-[#E7E8EB]">
                  <EditIcon color="#C4A25D" size={14} />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="font-bold text-sm">{card.user?.userName}</h1>
                  <h1 className="font-medium my-1 text-xs text-center h-5 w-fit p-1 rounded-lg bg-[#30B777] text-white flex items-center justify-center">
                    {card.area?.areaName}
                  </h1>
                </div>
                <div className="flex gap-1 my-3">
                <p className="font-medium text-xs">{card.user?.email}</p>
                <div className="w-1 h-1 rounded-full bg-[#F9A51A] mt-1"></div>
                <p className="font-medium text-xs">{card.user?.phoneNo}</p>

                </div>
                <Button
                  variant="tertiary"
                  className="font-medium text-xs"
                  size="sm"
                >
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Table Section */}
        <div className="w-full">
          <Table<TeamData>
            data={data}
            columns={columns}
            headerContents={{
              title: "BDA,s",
              search: { placeholder: "Search BDA By NAme" },
              sort: [
                {
                  sortHead: "Filter By Area",
                  sortList: [
                    {
                      label: "Sort by supervisorCode",
                      icon: <UserIcon size={14} color="#4B5C79" />,
                    },
                    {
                      label: "Sort by Age",
                      icon: <RegionIcon size={14} color="#4B5C79" />,
                    },
                    {
                      label: "Sort by supervisorCode",
                      icon: <AreaManagerIcon size={14} color="#4B5C79" />,
                    },
                    {
                      label: "Sort by Age",
                      icon: <CalenderDays size={14} color="#4B5C79" />,
                    },
                  ],
                },
              ],
            }}
            noAction
            noPagination
            maxHeight="500px"
          />
        </div>
      <div className="grid-cols-2 grid my-3 w-fit gap-2">
        <div className="w-fit h-fit p-4 bg-white rounded-lg">
            <p className="text-[#303F58] text-lg font-bold p-3">
              Top performing Area Managers
            </p>
            <p className="text-[#4B5C79] text-xs font-normal p-3">
              Based on lead Conversion Performance Metric
            </p>

            <div className="relative">
              <BarChart
                className="h-fit"
                barGap={54}
                barCategoryGap="40%"
                width={500}
                height={300}
                data={normalizedData}
              >
                {/* Cartesian Grid */}
                <CartesianGrid
                  horizontal={true}
                  vertical={false}
                  strokeDasharray="3 3"
                  stroke="#e0e0e0"
                />

                {/* Y-Axis */}
                <YAxis
                  tickFormatter={(tick) => `${tick}%`}
                  domain={[0, 100]}
                  ticks={[0, 20, 40, 60, 80, 100]}
                  axisLine={false}
                  tickLine={false}
                />

                {/* Bar with custom curved shape */}
                <Bar
                  dataKey="uv"
                  fill="#B9E3CF"
                  barSize={8}
                  shape={<CustomBarWithCurve />}
                >
                  {/* Add bubbles at the top */}
                  <LabelList
                    dataKey="uv"
                    content={(props) => <CustomBubble {...props} />}
                  />
                </Bar>
              </BarChart>
              <div className="flex ms-20 gap-[34px] -mt-2">
                {ChartData.map((chart) => (
                  <img
                    className="w-5 h-5 rounded-full"
                    src={chart.avatar}
                    alt=""
                  />
                ))}
              </div>
            </div>
        </div>
        <div className="w-fit h-fit p-4 bg-white rounded-lg">
            <p className="text-[#303F58] text-lg font-bold p-3">
              Top performing BDA's
            </p>
            <p className="text-[#4B5C79] text-xs font-normal p-3">
              Based on lead Conversion Performance Metric
            </p>

            <div className="relative">
              <BarChart
                className="h-fit"
                barGap={54}
                barCategoryGap="40%"
                width={500}
                height={300}
                data={normalizedData}
              >
                {/* Cartesian Grid */}
                <CartesianGrid
                  horizontal={true}
                  vertical={false}
                  strokeDasharray="3 3"
                  stroke="#e0e0e0"
                />

                {/* Y-Axis */}
                <YAxis
                  tickFormatter={(tick) => `${tick}%`}
                  domain={[0, 100]}
                  ticks={[0, 20, 40, 60, 80, 100]}
                  axisLine={false}
                  tickLine={false}
                />

                {/* Bar with custom curved shape */}
                <Bar
                  dataKey="uv"
                  fill="#B9E3CF"
                  barSize={8}
                  shape={<CustomBarWithCurve />}
                >
                  {/* Add bubbles at the top */}
                  <LabelList
                    dataKey="uv"
                    content={(props) => <CustomBubble {...props} />}
                  />
                </Bar>
              </BarChart>
              <div className="flex gap-[34px] ms-20 -mt-2">
                {ChartData.map((chart) => (
                  <img
                    className="w-5 h-5 rounded-full"
                    src={chart.avatar}
                    alt=""
                  />
                ))}
              </div>
            </div>
          </div>
      </div>
      <Modal className="" open={isModalOpen} onClose={handleModalToggle}>
        <AMForm editId={editId} onClose={handleModalToggle} />
      </Modal>

    </div>
  );
};

export default RegionTeamView;
