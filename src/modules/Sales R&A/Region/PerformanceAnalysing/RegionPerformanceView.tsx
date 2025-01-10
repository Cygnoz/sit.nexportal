import { useState } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis, YAxis
} from 'recharts';
import LeadConvertionRateRegion from './Graphs/LeadConvertionRateRegion';

type Props = {}

const RegionPerformanceView = ({}: Props) => {
const [selectedMonth,setSelectedMonth]=useState()
 

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

  return (
    <div className='flex flex-col space-y-3 mt-2'>
    <LeadConvertionRateRegion/>
    <div className="bg-white w-full p-2">
               <div className="py-1 ms-2 flex justify-between">
                 <h2 className="font-bold">License Over Time By Area</h2>
                 <div className="">
                   <label htmlFor="month-select"></label>
                   <select
                     className="bg-[#FEFDFA] rounded-lg"
                     id="month-select"
                     value={selectedMonth}
                     onChange={(e:any) => setSelectedMonth(e.target.value)}
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
               </div>
             </div>
    </div>
  )
}

export default RegionPerformanceView