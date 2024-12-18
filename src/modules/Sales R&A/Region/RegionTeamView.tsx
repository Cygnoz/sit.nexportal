import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import AreaIcon from "../../../assets/icons/AreaIcon";
import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import CalenderDays from "../../../assets/icons/CalenderDays";
import EditIcon from "../../../assets/icons/EditIcon";
import RegionIcon from "../../../assets/icons/RegionIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import person from "../../../assets/image/Ellipse 14 (3).png";
import Button from "../../../components/ui/Button";
import HomeCard from "../../../components/ui/HomeCards";
import SearchBar from "../../../components/ui/SearchBar";
import Table from "../../../components/ui/Table";
// import SearchBar from "../../../components/ui/SearchBar";

interface AreaData {
  image: string;
  name: string;
  state: string;
  mail: string;
  phone: string;
}
interface TeamData {
  employeeID: string;
  bdaName: string;
  aasignedArea: string;
  phoneNumber: string;

  dateOfJoining: string;
}

type Props = {};
// Data for HomeCards
const homeCardData = [
  {
    icon: <AreaIcon size={24} />,
    number: "167",
    title: "Total Area",
    iconFrameColor: "#30B777",
    iconFrameBorderColor: "#B3F0D3CC",
  },
  {
    icon: <UserIcon />,
    number: "189",
    title: "Total Area Manager",
    iconFrameColor: "#1A9CF9",
    iconFrameBorderColor: "#BBD8EDCC",
  },

  {
    icon: <AreaManagerIcon />,
    number: "498",
    title: "Total BDA's",
    iconFrameColor: "#E07253",
    iconFrameBorderColor: "#F4D7CFCC",
  },

  {
    icon: <AreaManagerIcon />,
    number: "498",
    title: "Total BDA's",
    iconFrameColor: "#DA8FE0",
    iconFrameBorderColor: "#F4D7CFCC",
  },
];

const RegionTeamView = ({}: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const areaManager: AreaData[] = [
    {
      image: person,
      name: "David",
      state: "Kerala",
      mail: "Davide@gmail.com",
      phone: "1122334455",
    },
    {
      image: person,
      name: "David",
      state: "Kerala",
      mail: "Davide@gmail.com",
      phone: "1122334455",
    },
    {
      image: person,
      name: "David",
      state: "Kerala",
      mail: "Davide@gmail.com",
      phone: "1122334455",
    },
    {
      image: person,
      name: "David",
      state: "Kerala",
      mail: "Davide@gmail.com",
      phone: "1122334455",
    },
    {
      image: person,
      name: "David",
      state: "Kerala",
      mail: "Davide@gmail.com",
      phone: "1122334455",
    },
    {
      image: person,
      name: "David",
      state: "Kerala",
      mail: "Davide@gmail.com",
      phone: "1122334455",
    },
    {
      image: person,
      name: "David",
      state: "Kerala",
      mail: "Davide@gmail.com",
      phone: "1122334455",
    },
  ];

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
  const columns: { key: keyof TeamData; label: string }[] = [
    { key: "employeeID", label: "Employee ID" },
    { key: "bdaName", label: "BDA Name" },
    { key: "aasignedArea", label: "Assigned Area" },
    { key: "phoneNumber", label: "Phone Number" },
    { key: "dateOfJoining", label: "Date Of Joining" },
  ];

  const areaData = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 8,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 18,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const renderCustomizedLabel = (props:any) => {
    const { x, y, width, value } = props;
    const radius = 10;
  
    return (
      <g>
        <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
        <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
          {value.split(' ')[1]}
        </text>
      </g>
    );
  };

  return (
    <div className="w-[60%]">
      <div className="bg-white p-3 mt-5 rounded-lg">
        {/* HomeCards Section */}
        <div className="flex gap-3 py-1 justify-between">
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

      <div className="bg-white my-4 h-72 px-3 ">
        <div className="flex justify-between">
          <h1 className=" my-6 font-bold text-base">Area Managers</h1>
          <div className="w-[50%] mt-4">
            <SearchBar
              placeholder="Search Area Manager"
              searchValue={searchValue}
              onSearchChange={setSearchValue}
            />
          </div>
        </div>

        <div
          className="w-full px-4 overflow-x-auto custom-scrollbar"
          style={{
            display: "flex",
            overflowX: "auto",
            maxHeight: "100%",
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex gap-4">
            {areaManager.map((card, index) => (
              <div
                key={index}
                className="my-1 bg-[#F5F9FC] p-4 w-64 rounded-lg flex-shrink-0"
              >
                <div className="flex justify-between my-1">
                  <img className="w-10" src={card.image} alt="Area Manager" />
                  <EditIcon size={30} />
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="font-bold text-sm">{card.name}</h1>
                  <h1 className="font-medium my-1 text-xs text-center h-5 w-14 rounded-lg bg-[#30B777] text-white flex items-center justify-center">
                    {card.state}
                  </h1>
                </div>
                <p className="font-medium text-xs my-1">{card.mail}</p>
                <p className="font-medium text-xs my-2">{card.phone}</p>
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

      <div>
        {/* Table Section */}
        <div>
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
      </div>
      <div className="grid-cols-2 grid">
      <div>
      <div className="bg-white rounded-lg w-full ">
            <div className="p-4 space-y-2">
              <h1 className="text-lg font-bold">Revenue By Area</h1>
              <h2 className="text-md">Area 0234</h2>
              <h2 className="text-md font-medium text-2xl">₹ 76,789,87</h2>
            </div>
            <div className="ms-1">
        <BarChart
          width={500}
          height={300}
          data={areaData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" minPointSize={5}>
            <LabelList dataKey="name" content={renderCustomizedLabel} />
          </Bar>
          <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
        </BarChart>
          </div>
          </div>
      </div>
      <div></div>
      </div>
    </div>
  );
};

export default RegionTeamView;
