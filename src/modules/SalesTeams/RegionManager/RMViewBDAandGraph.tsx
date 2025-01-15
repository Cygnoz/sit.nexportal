import { useNavigate } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import profileImage from '../../../assets/image/AvatarImg.png';
import Table from "../../../components/ui/Table";
interface BDAData {
  employeeId: string;
  bdaName: string;
  phoneNo: string;
  emailAdrees: string;
  dateOfJoining: string;

  totalLeads: string;
  leadsClosed: string;
}
type Props = {
  totalBdas:Array<any>;
};



const RMViewBDAandGraph = ({totalBdas}: Props) => {
  const navigate=useNavigate()
  console.log("total bda",totalBdas);
  
  const handleView = (id:any) => {
    if (id) {
      navigate(`/bda/${id}`)
      
    }

  };

  



  const CustomLegend = () => {
    return (
      <div
        className="justify-between mt-6"
        style={{ display: "flex", gap: "10px" }}
      >
        <span style={{ color: "#e2b0ff" }}>Area1</span>
        <span style={{ color: "#8884d8" }}>Area2</span>
        <span style={{ color: "#82ca9d" }}>Area3</span>
        <span style={{ color: "#d86a57" }}>Area4</span>
        <span style={{ color: "#6ab6ff" }}>Area5</span>
      </div>
    );
  };

  

  

  const datas = [
    {
      name: "Jan 05",
      Area1: 5673,
      Area2: 5993,
      Area3: 9466,
      Area4: 2677,
      Area5: 3778,
      amt: 9000,
    },
    {
      name: "Jan 10",
      Area1: 4563,
      Area2: 9467,
      Area3: 6628,
      Area4: 6738,
      Area5: 3368,
      amt: 9777,
    },
    {
      name: "Jan 15",
      Area1: 1298,
      Area2: 3773,
      Area3: 3783,
      Area4: 4800,
      Area5: 9367,
      amt: 8000,
    },
    {
      name: "Jan 20",
      Area1: 1890,
      Area2: 4098,
      Area3: 9753,
      Area4: 3667,
      Area5: 3372,
      amt: 6000,
    },
    {
      name: "Jan 25",
      Area1: 1890,
      Area2: 2800,
      Area3: 1890,
      Area4: 4400,
      Area5: 4800,
      amt: 2181,
    },
    {
      name: "Jan 30",
      Area1: 1890,
      Area2: 1800,
      Area3: 1800,
      Area4: 4800,
      Area5: 4300,
      amt: 2500,
    },
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

  const bdaData = totalBdas.map((bda: any) => ({
    ...bda,
    employeeId: bda.employeeId, // or any unique identifier
    bdaName: bda.userName || "N/A", // Adjust according to your data structure
    phoneNo: bda.phoneNo || "N/A",
    emailAdrees: bda.email || "N/A",
    dateOfJoining: bda.dateOfJoining
    ? new Date(bda.dateOfJoining).toLocaleDateString("en-GB")
    : "N/A",
    totalLeads: bda.totalLeads || 0,
    leadsClosed: bda.leadsClosed || 0,
  }));


  
  // Chart Data
  const ChartData = [
    { name: "Page A", uv: 3900, avatar: profileImage },
    { name: "Page B", uv: 3000, avatar: profileImage },
    { name: "Page C", uv: 2000, avatar: profileImage },
    { name: "Page D", uv: 2780, avatar: profileImage },
    { name: "Page E", uv: 1890, avatar: profileImage },
    { name: "Page F", uv: 2390, avatar: profileImage },
    { name: "Page G", uv: 3490, avatar: profileImage },
    { name: "Page H", uv: 4000, avatar: profileImage },
    { name: "Page G", uv: 3490, avatar: profileImage },
    { name: "Page H", uv: 4000, avatar: profileImage },
  ];
  
  // Normalize the data
  const maxValue = Math.max(...ChartData.map((entry) => entry?.uv));
  const normalizedData = ChartData.map((entry) => ({
    ...entry,
    uv: (entry?.uv / maxValue) * 100,
  }));
  
  // Custom Bubble Component
  const CustomBubble = (props:any) => {
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
  const CustomBarWithCurve = (props:any) => {
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
  console.log("BDA",bdaData);
  
  return (
    <div>
      {/* Table Section */}
      <div>
        <Table<BDAData>
          data={bdaData}
          columns={columns}
          headerContents={{
            title: "BDA,S",
            search: {
              placeholder:
                "Search Invoice by client name, invoice number, or date",
            },
          }}
          actionList={[{ label:"view", function: handleView }]}
        />
      </div>

      {/* Graph Section*/}

      <div className="grid grid-cols-12 gap-3 my-4">
        <div className="col-span-7">
          <div className="py-3 bg-white p-2">
            <div className="py-1 ms-2 flex justify-between">
              <h2 className="font-bold">Lead Conversion Rate per Region</h2>
             
            </div>
            <div className="mt-5">
                <ResponsiveContainer width="100%" minHeight={345}>
              <LineChart
                width={720}
                height={400}
                data={datas}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend content={<CustomLegend />} />
                <Line
                  type="monotone"
                  dataKey="Area1"
                  stroke="#e2b0ff"
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Area2"
                  stroke="#8884d8"
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Area3"
                  stroke="#82ca9d"
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Area4"
                  stroke="#d86a57"
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Area5"
                  stroke="#6ab6ff"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="col-span-5">
        <div className='w-full h-fit p-4 bg-white rounded-lg'>
      <p className="text-[#303F58] text-lg font-bold p-2">Top performing Area Managers</p>
      <p className='text-[#4B5C79] text-xs font-normal p-2'>Based on lead Conversion Performance Metric</p>

      <div className="relative">
      <ResponsiveContainer width="100%" minHeight={300}>
      <BarChart
  className="h-fit"
  barGap={44}
  barCategoryGap="40%"
  width={500}
  height={350}
  data={normalizedData}
>
  {/* Cartesian Grid */}
  <CartesianGrid horizontal={true} vertical={false} strokeDasharray="3 3" stroke="#e0e0e0" />

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
  <LabelList dataKey="uv" content={(props) => <CustomBubble {...props} />} />

</Bar>

</BarChart>
</ResponsiveContainer>
<div className='flex ms-20 gap-[23px] -mt-2'>
{ChartData.map((chart)=>(
  <img className='w-5 h-5 rounded-full' src={chart.avatar} alt="" />
)) 
}
 </div>
 

      </div>
    </div>

        </div>
      </div>
    </div>
  );
};

export default RMViewBDAandGraph;
