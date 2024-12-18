import { useState } from "react";
import Table from "../../../components/ui/Table";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { BarChart, Bar, LabelList } from 'recharts';
import profileImage from '../../../assets/image/AvatarImg.png'
interface BDAData {
  employeeId: string;
  bdaName: string;
  phoneNo: string;
  emailAdrees: string;
  dateOfJoining: string;

  totalLeads: string;
  leadsClosed: string;
}
type Props = {};

const RMViewBDAandGraph = ({}: Props) => {
  const handleEditDeleteView = (editId?: any, viewId?: any, deleteId?: any) => {
    if (viewId) {
      // navigate(`/leadView/${viewId}`)
      console.log(viewId);
    }
    console.log(editId);
    console.log(deleteId);
  };

  const [selectedMonth, setSelectedMonth] = useState("January"); // State for dropdown selection
  // Data for the table
  const data: BDAData[] = [
    {
      employeeId: "BDA111",
      bdaName: "Subii",
      phoneNo: "000999888",
      emailAdrees: "subi@gmail.com",
      dateOfJoining: "5/30/14",
      totalLeads: "90",
      leadsClosed: "78",
    },
    {
      employeeId: "BDA111",
      bdaName: "Subii",
      phoneNo: "000999888",
      emailAdrees: "subi@gmail.com",
      dateOfJoining: "5/30/14",
      totalLeads: "90",
      leadsClosed: "78",
    },
    {
      employeeId: "BDA222",
      bdaName: "Subii",
      phoneNo: "000999888",
      emailAdrees: "subi@gmail.com",
      dateOfJoining: "5/30/14",
      totalLeads: "90",
      leadsClosed: "18",
    },
    {
      employeeId: "BDA111",
      bdaName: "Subii",
      phoneNo: "000999888",
      emailAdrees: "subi@gmail.com",
      dateOfJoining: "5/30/14",
      totalLeads: "95",
      leadsClosed: "78",
    },
    {
      employeeId: "BDA222",
      bdaName: "Unni",
      phoneNo: "000999888",
      emailAdrees: "unnii@gmail.com",
      dateOfJoining: "5/30/14",
      totalLeads: "90",
      leadsClosed: "88",
    },
    {
      employeeId: "BDA111",
      bdaName: "Subii",
      phoneNo: "000999888",
      emailAdrees: "subi@gmail.com",
      dateOfJoining: "5/30/14",
      totalLeads: "950",
      leadsClosed: "78",
    },
    {
      employeeId: "BDA333",
      bdaName: "kuttu",
      phoneNo: "000999888",
      emailAdrees: "kuttu@gmail.com",
      dateOfJoining: "5/30/14",
      totalLeads: "590",
      leadsClosed: "78",
    },
    {
      employeeId: "BDA111",
      bdaName: "Subii",
      phoneNo: "000999888",
      emailAdrees: "subi@gmail.com",
      dateOfJoining: "5/30/14",
      totalLeads: "90",
      leadsClosed: "78",
    },
    {
      employeeId: "BDA111",
      bdaName: "Subii",
      phoneNo: "000999888",
      emailAdrees: "subi@gmail.com",
      dateOfJoining: "5/30/14",
      totalLeads: "90",
      leadsClosed: "58",
    },
    {
      employeeId: "BDA111",
      bdaName: "kuttu",
      phoneNo: "000999888",
      emailAdrees: "subi@gmail.com",
      dateOfJoining: "5/30/14",
      totalLeads: "90",
      leadsClosed: "78",
    },
    {
      employeeId: "BDA111",
      bdaName: "Subii",
      phoneNo: "000999888",
      emailAdrees: "subi@gmail.com",
      dateOfJoining: "5/30/14",
      totalLeads: "90",
      leadsClosed: "78",
    },
  ];



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

  const datass = {
    January: [
      { name: "Jan 05", Area1: 10, Area2: 20, Area3: 40, Area4: 70, Area5: 80 },
      { name: "Jan 10", Area1: 15, Area2: 25, Area3: 35, Area4: 60, Area5: 85 },
      { name: "Jan 15", Area1: 12, Area2: 22, Area3: 45, Area4: 40, Area5: 75 },
      { name: "Jan 20", Area1: 18, Area2: 28, Area3: 50, Area4: 55, Area5: 90 },
      { name: "Jan 25", Area1: 20, Area2: 35, Area3: 60, Area4: 65, Area5: 78 },
      { name: "Jan 30", Area1: 15, Area2: 25, Area3: 55, Area4: 58, Area5: 82 },
    ],
    February: [
      { name: "Feb 05", Area1: 20, Area2: 30, Area3: 60, Area4: 50, Area5: 40 },
      { name: "Feb 10", Area1: 25, Area2: 35, Area3: 55, Area4: 65, Area5: 70 },
      { name: "Feb 15", Area1: 22, Area2: 32, Area3: 75, Area4: 45, Area5: 60 },
      { name: "Feb 20", Area1: 28, Area2: 38, Area3: 70, Area4: 55, Area5: 50 },
      { name: "Feb 25", Area1: 30, Area2: 45, Area3: 80, Area4: 65, Area5: 60 },
      { name: "Feb 28", Area1: 25, Area2: 35, Area3: 75, Area4: 60, Area5: 70 },
    ],
    March: [
      { name: "Jan 05", Area1: 10, Area2: 20, Area3: 40, Area4: 70, Area5: 80 },
      { name: "Jan 10", Area1: 15, Area2: 25, Area3: 35, Area4: 60, Area5: 85 },
      { name: "Jan 15", Area1: 12, Area2: 22, Area3: 45, Area4: 40, Area5: 75 },
      { name: "Jan 20", Area1: 18, Area2: 28, Area3: 50, Area4: 55, Area5: 90 },
      { name: "Jan 25", Area1: 20, Area2: 35, Area3: 60, Area4: 65, Area5: 78 },
      { name: "Jan 30", Area1: 15, Area2: 25, Area3: 55, Area4: 58, Area5: 82 },
    ],
    April: [
      { name: "Feb 05", Area1: 20, Area2: 30, Area3: 60, Area4: 50, Area5: 40 },
      { name: "Feb 10", Area1: 25, Area2: 35, Area3: 55, Area4: 65, Area5: 70 },
      { name: "Feb 15", Area1: 22, Area2: 32, Area3: 75, Area4: 45, Area5: 60 },
      { name: "Feb 20", Area1: 28, Area2: 38, Area3: 70, Area4: 55, Area5: 50 },
      { name: "Feb 25", Area1: 30, Area2: 45, Area3: 80, Area4: 65, Area5: 60 },
      { name: "Feb 28", Area1: 25, Area2: 35, Area3: 75, Area4: 60, Area5: 70 },
    ],
    May: [
      { name: "Jan 05", Area1: 10, Area2: 20, Area3: 40, Area4: 70, Area5: 80 },
      { name: "Jan 10", Area1: 15, Area2: 25, Area3: 35, Area4: 60, Area5: 85 },
      { name: "Jan 15", Area1: 12, Area2: 22, Area3: 45, Area4: 40, Area5: 75 },
      { name: "Jan 20", Area1: 18, Area2: 28, Area3: 50, Area4: 55, Area5: 90 },
      { name: "Jan 25", Area1: 20, Area2: 35, Area3: 60, Area4: 65, Area5: 78 },
      { name: "Jan 30", Area1: 15, Area2: 25, Area3: 55, Area4: 58, Area5: 82 },
    ],
    June: [
      { name: "Feb 05", Area1: 20, Area2: 30, Area3: 60, Area4: 50, Area5: 40 },
      { name: "Feb 10", Area1: 25, Area2: 35, Area3: 55, Area4: 65, Area5: 70 },
      { name: "Feb 15", Area1: 22, Area2: 32, Area3: 75, Area4: 45, Area5: 60 },
      { name: "Feb 20", Area1: 28, Area2: 38, Area3: 70, Area4: 55, Area5: 50 },
      { name: "Feb 25", Area1: 30, Area2: 45, Area3: 80, Area4: 65, Area5: 60 },
      { name: "Feb 28", Area1: 25, Area2: 35, Area3: 75, Area4: 60, Area5: 70 },
    ],
    July: [
      { name: "Jan 05", Area1: 10, Area2: 20, Area3: 40, Area4: 70, Area5: 80 },
      { name: "Jan 10", Area1: 15, Area2: 25, Area3: 35, Area4: 60, Area5: 85 },
      { name: "Jan 15", Area1: 12, Area2: 22, Area3: 45, Area4: 40, Area5: 75 },
      { name: "Jan 20", Area1: 18, Area2: 28, Area3: 50, Area4: 55, Area5: 90 },
      { name: "Jan 25", Area1: 20, Area2: 35, Area3: 60, Area4: 65, Area5: 78 },
      { name: "Jan 30", Area1: 15, Area2: 25, Area3: 55, Area4: 58, Area5: 82 },
    ],
    August: [
      { name: "Feb 05", Area1: 20, Area2: 30, Area3: 60, Area4: 50, Area5: 40 },
      { name: "Feb 10", Area1: 25, Area2: 35, Area3: 55, Area4: 65, Area5: 70 },
      { name: "Feb 15", Area1: 22, Area2: 32, Area3: 75, Area4: 45, Area5: 60 },
      { name: "Feb 20", Area1: 28, Area2: 38, Area3: 70, Area4: 55, Area5: 50 },
      { name: "Feb 25", Area1: 30, Area2: 45, Area3: 80, Area4: 65, Area5: 60 },
      { name: "Feb 28", Area1: 25, Area2: 35, Area3: 75, Area4: 60, Area5: 70 },
    ],
    September: [
      { name: "Jan 05", Area1: 10, Area2: 20, Area3: 40, Area4: 70, Area5: 80 },
      { name: "Jan 10", Area1: 15, Area2: 25, Area3: 35, Area4: 60, Area5: 85 },
      { name: "Jan 15", Area1: 12, Area2: 22, Area3: 45, Area4: 40, Area5: 75 },
      { name: "Jan 20", Area1: 18, Area2: 28, Area3: 50, Area4: 55, Area5: 90 },
      { name: "Jan 25", Area1: 20, Area2: 35, Area3: 60, Area4: 65, Area5: 78 },
      { name: "Jan 30", Area1: 15, Area2: 25, Area3: 55, Area4: 58, Area5: 82 },
    ],
    October: [
      { name: "Feb 05", Area1: 20, Area2: 30, Area3: 60, Area4: 50, Area5: 40 },
      { name: "Feb 10", Area1: 25, Area2: 35, Area3: 55, Area4: 65, Area5: 70 },
      { name: "Feb 15", Area1: 22, Area2: 32, Area3: 75, Area4: 45, Area5: 60 },
      { name: "Feb 20", Area1: 28, Area2: 38, Area3: 70, Area4: 55, Area5: 50 },
      { name: "Feb 25", Area1: 30, Area2: 45, Area3: 80, Area4: 65, Area5: 60 },
      { name: "Feb 28", Area1: 25, Area2: 35, Area3: 75, Area4: 60, Area5: 70 },
    ],
    November: [
      { name: "Jan 05", Area1: 10, Area2: 20, Area3: 40, Area4: 70, Area5: 80 },
      { name: "Jan 10", Area1: 15, Area2: 25, Area3: 35, Area4: 60, Area5: 85 },
      { name: "Jan 15", Area1: 12, Area2: 22, Area3: 45, Area4: 40, Area5: 75 },
      { name: "Jan 20", Area1: 18, Area2: 28, Area3: 50, Area4: 55, Area5: 90 },
      { name: "Jan 25", Area1: 20, Area2: 35, Area3: 60, Area4: 65, Area5: 78 },
      { name: "Jan 30", Area1: 15, Area2: 25, Area3: 55, Area4: 58, Area5: 82 },
    ],
    December: [
      { name: "Feb 05", Area1: 20, Area2: 30, Area3: 60, Area4: 50, Area5: 40 },
      { name: "Feb 10", Area1: 25, Area2: 35, Area3: 55, Area4: 65, Area5: 70 },
      { name: "Feb 15", Area1: 22, Area2: 32, Area3: 75, Area4: 45, Area5: 60 },
      { name: "Feb 20", Area1: 28, Area2: 38, Area3: 70, Area4: 55, Area5: 50 },
      { name: "Feb 25", Area1: 30, Area2: 45, Area3: 80, Area4: 65, Area5: 60 },
      { name: "Feb 28", Area1: 25, Area2: 35, Area3: 75, Area4: 60, Area5: 70 },
    ],
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
  return (
    <div>
      {/* Table Section */}
      <div>
        <Table<BDAData>
          data={data}
          columns={columns}
          headerContents={{
            title: "BDA,S",
            search: {
              placeholder:
                "Search Invoice by client name, invoice number, or date",
            },
          }}
          actionList={[{ label: "view", function: handleEditDeleteView }]}
        />
      </div>

      {/* Graph Section*/}

      <div className="grid grid-cols-12 gap-3 mt-4">
        {/* Table Section */}
        <div className="col-span-7">
          <div className="py-3 bg-white p-2">
            <div className="py-1 ms-2 flex justify-between">
              <h2 className="font-bold">Lead Conversion Rate per Region</h2>
              <div className="">
                <label htmlFor="month-select"></label>
                <select
                  className="bg-[#FEFDFA] rounded-lg"
                  id="month-select"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  style={{ padding: "5px", border: "1px solid #ccc" }}
                >
                  {Object.keys(datass).map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-5">
              <LineChart
                width={800}
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
            </div>
          </div>
        </div>
        <div className="col-span-5">
        <div className='w-full h-fit p-4 bg-white rounded-lg'>
      <p className="text-[#303F58] text-lg font-bold p-3">Top performing Area Managers</p>
      <p className='text-[#4B5C79] text-xs font-normal p-3'>Based on lead Conversion Performance Metric</p>

      <div className="relative">
      <BarChart
  className="h-fit"
  barGap={54}
  barCategoryGap="40%"
  width={560}
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
<div className='flex ms-20 gap-[29px] -mt-2'>
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
