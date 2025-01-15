import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis, YAxis
} from 'recharts';
import LeadConvertionRateRegion from './Graphs/LeadConvertionRateRegion';
import PerformanceArea from './PerformanceArea';

type Props = {}

const RegionPerformanceView = ({}: Props) => {
 

  const CustomLegend = () => {
    return (
      <div
        className=""
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

  return (
    <div className='flex flex-col space-y-3 mt-2'>
      <PerformanceArea/>
    <LeadConvertionRateRegion/>
    <div className="bg-white w-full p-2">
               <div className="py-1 ms-2 flex justify-between">
                 <h2 className="font-bold">License Over Time By Area</h2>
                 {/* <SelectDropdown /> */}
               </div>
               <div className="mt-5">
                 <ResponsiveContainer minWidth={1000} minHeight={400}>
                 <LineChart
                   width={1000}
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
  )
}

export default RegionPerformanceView