import { Bar, BarChart, Cell, Tooltip, XAxis, YAxis } from "recharts";
import { VictoryLabel, VictoryPie, VictoryTheme } from "victory";
import AreaIcon from "../../../../assets/icons/AreaIcon";
import AreaManagerIcon from "../../../../assets/icons/AreaMangerIcon";
import LicenserCardIcon from "../../../../assets/icons/LicenserCardIcon";
import UserIcon from "../../../../assets/icons/UserIcon";
import HomeCard from "../../../../components/ui/HomeCards";
import Table from "../../../../components/ui/Table";
import { regionAreaData, RegionView,regionLicenserData } from "../../../../Interfaces/RegionView";
import RRecentActivityView from "./RecentActivityView";
import { useNavigate } from "react-router-dom";



type Props = {
  regionData?: any;
  regionAreaData?: RegionView;
};

const RegionAriaView = ({  regionAreaData }: Props) => {

  const navigate = useNavigate();

  const areaHandleView = (id: any) => {
    navigate(`/areas/${id}`);
  };

  const licenserHandleView = (id: any) => {
    navigate(`/licenser/${id}`);
  };

  // Data for HomeCards
  const homeCardData = [
    {
      icon: <AreaIcon size={20} />,
      number: regionAreaData ? regionAreaData?.areas.length : 0,
      title: "Total Area's",
      iconFrameColor: "#DD9F86",
      iconFrameBorderColor: "#FADDFCCC",
    },
    {
      icon: <UserIcon />,
      number: regionAreaData ? regionAreaData?.totalAreaManagers : 0,
      title: "Total AM",
      iconFrameColor: "#1A9CF9",
      iconFrameBorderColor: "#BBD8EDCC",
    },

    {
      icon: <AreaManagerIcon />,
      number: regionAreaData ? regionAreaData?.totalBdas : 0,
      title: "Total BDA's",
      iconFrameColor: "#E07253",
      iconFrameBorderColor: "#F4D7CFCC",
    },

    {
      icon: <AreaManagerIcon />,
      number: regionAreaData ? regionAreaData?.totalLeadThisMonth : 0,
      title: "New Leads This Month",
      iconFrameColor: "#DA8FE0",
      iconFrameBorderColor: "#F4D7CFCC",
    },

    {
      icon: <LicenserCardIcon />,
      number: regionAreaData ? regionAreaData?.totalLicensors : 0,
      title: "Open Licenses",
      iconFrameColor: "#8695DD",
      iconFrameBorderColor: "#CAD1F1CC",
    },
  ];

  // //Data for licensers table
  // const data1: LicensersData[] = [
  //   {
  //     licenserID: "LIC-123",
  //     licenserName: "Aravind",
  //     leadSource: "website",
  //     totalRevenue: "15,000",
  //     status: "Active",
  //   },
  //   {
  //     licenserID: "LIC-323",
  //     licenserName: "Aravind",
  //     leadSource: "SocialMedia",
  //     totalRevenue: "15,000",
  //     status: "Active",
  //   },
  //   {
  //     licenserID: "LIC-123",
  //     licenserName: "Jagadheesh",
  //     leadSource: "website",
  //     totalRevenue: "18,000",
  //     status: "Active",
  //   },
  //   {
  //     licenserID: "LIC-443",
  //     licenserName: "Aravind",
  //     leadSource: "Refferal",
  //     totalRevenue: "15,000",
  //     status: "Active",
  //   },
  //   {
  //     licenserID: "LIC-123",
  //     licenserName: "Aravind",
  //     leadSource: "website",
  //     totalRevenue: "15,000",
  //     status: "Active",
  //   },
  //   {
  //     licenserID: "LIC-123",
  //     licenserName: "Vishnu",
  //     leadSource: "website",
  //     totalRevenue: "12,000",
  //     status: "Active",
  //   },
  //   {
  //     licenserID: "LIC-343",
  //     licenserName: "Aravind",
  //     leadSource: "website",
  //     totalRevenue: "15,000",
  //     status: "Active",
  //   },
  //   {
  //     licenserID: "LIC-123",
  //     licenserName: "Shyam",
  //     leadSource: "website",
  //     totalRevenue: "15,000",
  //     status: "Active",
  //   },
  //   {
  //     licenserID: "LIC-443",
  //     licenserName: "Aravind",
  //     leadSource: "Refferal",
  //     totalRevenue: "13,000",
  //     status: "Active",
  //   },
  //   {
  //     licenserID: "LIC-123",
  //     licenserName: "Aravind",
  //     leadSource: "website",
  //     totalRevenue: "15,000",
  //     status: "Active",
  //   },
  //   {
  //     licenserID: "LIC-123",
  //     licenserName: "Aravind",
  //     leadSource: "website",
  //     totalRevenue: "19,000",
  //     status: "Active",
  //   },
  //   {
  //     licenserID: "LIC-123",
  //     licenserName: "Aravind",
  //     leadSource: "website",
  //     totalRevenue: "15,000",
  //     status: "Active",
  //   },
  // ];
  // Define the columns with strict keys
  const columns1: { key: keyof regionLicenserData; label: string }[] = [
    { key: "customerId", label: "Licenser ID" },
    { key: "firstName", label: "Licenser Name" },
    { key: "leadSource", label: "Lead Source" },
    { key: "totalRevenue", label: "Total Revenue" },
    { key: "trialStatus", label: "Status" },
  ];

  // Define the columns with strict keys
  const columns: { key: keyof regionAreaData; label: string }[] = [
    { key: "areaCode", label: "AreaCode" },
    { key: "areaName", label: "Area Name" },
    { key: "userName", label: "AreaManager" },
  ];

  const AreaRevData = [
    { name: "Area 001", pv: 74479, color: "#4caf50" }, // Green
    { name: "Area 002", pv: 56335, color: "#2196f3" }, // Blue
    { name: "Area 003", pv: 43887, color: "#ff9800" }, // Orange
    { name: "Area 004", pv: 19027, color: "#f44336" }, // Red
    { name: "Area 005", pv: 8142, color: "#9c27b0" }, // Purple
    { name: "Area 006", pv: 4918, color: "#3f51b5" }, // Blue
  ];
  const CustomizedAxisTick = ({ x, y, payload }: any) => {
    // Find the corresponding logo for the country

    return (
      <g transform={`translate(${x},${y})`}>
        <text y={2} fontSize={14} dy={3} textAnchor="end" fill="#666">
          {payload.value}
        </text>
      </g>
    );
  };

  const CustomLabel = ({ x, y, width, value }: any) => (
    <text
      x={x + width + 10}
      y={y + 13}
      fontSize={10}
      textAnchor="start"
      fill="#000"
    >
      {value}
    </text>
  );

  const roles = [
    { name: "Social Media", count: 50, color: "#1B6C75" }, // Updated color
    { name: "WebSite", count: 30, color: "#30B777" }, // Updated color
    { name: "Refferal", count: 80, color: "#6ABAF3" }, // Updated color
    { name: "Events", count: 78, color: "#7CD5AB" }, // Updated color
  ];

  const pieData = roles.map((role) => ({
    x: role.name,
    y: role.count,
    color: role.color,
  }));

  return (
    <div>
      <div className="bg-white  p-3 mt-5 rounded-lg">
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

      <div className="grid grid-cols-12 gap-2 mt-5">
        <div className="col-span-8 ">
          {/* Table Section */}
          <div>
            <Table<regionAreaData>
              data={regionAreaData?.areas ?? []} // Convert undefined to null
              columns={columns}
              headerContents={{
                title: "Areas",
                search: { placeholder: "Search Area By Name, Manager" },
              }}
              actionList={[{ label: "view", function: areaHandleView }]}
              noPagination
              maxHeight="370px"
              skeltonCount={9}
            />
          </div>
        </div>
        <div className="col-span-4 ">
          <RRecentActivityView />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-2 mt-5">
        <div className="col-span-8">
        <div className="bg-white rounded-lg w-full">
            <div className="p-4 space-y-2">
              <h1 className="text-lg font-bold">Revenue By Area</h1>
              <h2 className="text-md">Area 0234</h2>
              <h2 className="text-md font-medium text-2xl">₹ 76,789,87</h2>
            </div>
            <div className="ms-1">
          <BarChart
                          width={670}
                          height={400}
                          data={AreaRevData}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          layout="vertical"
                        >
                          <YAxis
                            type="category"
                            dataKey="name"
                            tick={<CustomizedAxisTick />}
                            tickLine={false}
                            axisLine={{ stroke: '#000' }} // Y axis line
                          />
                          <XAxis
                            type="number"
                            tick={{ fontSize: 10 }}
                            axisLine={{ stroke: 'transparent' }} // Remove X axis line
                            tickLine={false} // Remove ticks on the X axis
                          />
                          <Tooltip />
                          <Bar dataKey="pv" radius={[5, 5, 5, 5]} barSize={20} label={<CustomLabel />}>
                            {AreaRevData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry?.color} />
                            ))}
                          </Bar>
                        </BarChart>
                        </div>
                        </div>
        </div>

        <div className="col-span-4 mb-4">
          <div className="bg-white h-[530px] rounded-lg w-full -p-3">
            <h1 className="text-[#303F58] text-lg font-bold p-3">
              Leads Generated by Area by Source
            </h1>
            <div className="-mt-3 relative ">
              <div className="absolute top-[27%] left-[39%] z-50 text-center">
                <p className="text-2xl font-bold">3456</p>
                <p className="text-md">Total Leads</p>
              </div>

              <div className="mt-4">
                <VictoryPie
                  innerRadius={50}
                  width={400}
                  padAngle={6}
                  data={pieData}
                  categories={{
                    y: roles.map((role) => role.name),
                  }}
                  theme={VictoryTheme.clean}
                  labels={({ datum }) =>
                    `${(
                      (datum.y /
                        roles.reduce((acc, role) => acc + role.count, 0)) *
                      100
                    ).toFixed(1)}%`
                  }
                  labelComponent={
                    <VictoryLabel
                      style={{ fill: "#303F58", fontSize: 15, marginLeft: -50 }}
                    />
                  }
                  style={{
                    data: {
                      fill: ({ datum }) => datum.color,
                    },
                  }}
                />

                <div className="space-y-4 mx-10 mt-2">
                  {roles.map((role) => (
                    <div
                      key={role.name}
                      className="flex items-center justify-between w-72 space-x-3"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full`}
                          style={{ backgroundColor: role.color }}
                        />
                        <span className="text-gray-800 font-medium text-xs">
                          {role.name}
                        </span>
                      </div>
                      <span className="ml-auto text-gray-600 text-xs">
                        {role.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div>
        <Table<regionLicenserData>
          data={regionAreaData?.licensers ?? []} // Convert undefined to null
          columns={columns1}
          headerContents={{
            title: "Licensers by Area",
            search: { placeholder: "Search Area By Name,Manager" },
          }}
          noPagination
          maxHeight="370px"
          actionList={[{ label: "view", function: licenserHandleView }]}
          skeltonCount={9}
        />
      </div>
    </div>
  );
};

export default RegionAriaView;
