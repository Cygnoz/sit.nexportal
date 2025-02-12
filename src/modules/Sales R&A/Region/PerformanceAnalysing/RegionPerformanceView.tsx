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
import useApi from '../../../../Hooks/useApi';
import { useEffect, useState } from 'react';
import { months, years } from '../../../../components/list/MonthYearList';
import { endPoints } from '../../../../services/apiEndpoints';
import SelectDropdown from '../../../../components/ui/SelectDropdown';
import NoRecords from '../../../../components/ui/NoRecords';

type Props = {
  regionId: any
}

const RegionPerformanceView = ({regionId}: Props) => {
  //const { id } = useParams()

  const { request: LeadsConverted } = useApi("get", 3003);
  const [chartData, setChartData] = useState<any[]>([]);
  const [areaNames, setAreaNames] = useState<any[]>([]); // Store area names separately
  
  const currentMonthValue = new Date().toLocaleString("default", { month: "long" });
  const currentMonth = months.find((m) => m.value === currentMonthValue) || months[0];
  const currentYear = years[years.length - 1];
  
  const [selectedMonth, setSelectedMonth] = useState<any>(currentMonth);
  const [selectedYear, setSelectedYear] = useState<any>(currentYear);
  const [selectedData, setSelectedData] = useState<string>(
    `${selectedYear.value}-${String(months.findIndex((m) => m.value === selectedMonth.value) + 1).padStart(2, '0')}`
  );
  useEffect(() => {
    // Convert month name to number (1-12) and ensure it's two digits
    const monthIndex = String(months.findIndex((m) => m.value === selectedMonth.value) + 1).padStart(2, "0");
    setSelectedData(`${selectedYear.value}-${monthIndex}`);
  }, [selectedMonth, selectedYear]);

 
  
  
  const getPerformers = async () => {
    try {
      // const monthIndex = String(months.findIndex((m) => m.value === selectedMonth.value) + 1).padStart(2, "0");
      // const formattedDate = `${selectedYear.value}-${monthIndex}`; // Ensure YYYY-MM format
      const endPoint = `${endPoints.CONVERSION_RATE}/${regionId}?date=${selectedData}`;
    //  console.log("Fetching data for:", formattedDate); // ✅ Debugging
      console.log("API Endpoint:", endPoint); // ✅ Debugging
  
      const { response, error } = await LeadsConverted(endPoint);
  
      if (response && response.data) {
        console.log("API Response:", response.data); // ✅ Debugging API response
  
        const trialConvertedOverTime = response.data.trialConvertedOverTime || {};
        const areaNames = Object.keys(trialConvertedOverTime);
        setAreaNames(areaNames);
  
        const allDates = new Set<string>();
        areaNames.forEach((area) => {
          trialConvertedOverTime[area]?.forEach((entry: any) => {
            allDates.add(entry.date);
          });
        });
  
        const sortedDates = Array.from(allDates).sort();
        const formattedData = sortedDates.map((date) => {
          const entry: any = { name: date };
  
          areaNames.forEach((area) => {
            const areaData = trialConvertedOverTime[area]?.find((d: any) => d.date === date);
            entry[area] = areaData ? areaData.conversionCount : 0;
          });
  
          return entry;
        });
  
        setChartData(formattedData.length > 0 ? formattedData : []);
      } else {
        console.error("Error:", error?.data || "Unknown error");
        setChartData([]);
        setAreaNames([]);
      }
    } catch (err) {
      console.error(err);
      setChartData([]);
      setAreaNames([]);
    }
  };
  
  
  
  
  useEffect(() => {
    if (selectedData) {
      getPerformers();
    }
  }, [selectedData]);

  // const CustomLegend = () => {
  //   return (
  //     <div
  //       className=""
  //       style={{ display: "flex", justifyContent:'space-between', paddingLeft:'60px' }}
  //     >
  //       <p className='flex items-center gap-1 text-[#e2b0ff]'>Area1 <div className='w-2 h-2 bg-[#e2b0ff] rounded-full'></div></p>
  //       <p className='flex items-center gap-1 text-[#8884d8]' >Area2 <div className='w-2 h-2 bg-[#8884d8] rounded-full'></div></p>
  //       <p className='flex items-center gap-1 text-[#82ca9d]' >Area3 <div className='w-2 h-2 bg-[#82ca9d] rounded-full'></div></p>
  //       <p className='flex items-center gap-1 text-[#d86a57]' >Area4 <div className='w-2 h-2 bg-[#d86a57] rounded-full'></div></p>
  //       <p className='flex items-center gap-1 text-[#6ab6ff]'>Area5 <div className='w-2 h-2 bg-[#6ab6ff] rounded-full'></div></p>
  //     </div>
  //   );
  // };



  // const datas = [
  //   {
  //     name: "Jan 05",
  //     Area1: 5673,
  //     Area2: 5993,
  //     Area3: 9466,
  //     Area4: 2677,
  //     Area5: 3778,
  //     amt: 9000,
  //   },
  //   {
  //     name: "Jan 10",
  //     Area1: 4563,
  //     Area2: 9467,
  //     Area3: 6628,
  //     Area4: 6738,
  //     Area5: 3368,
  //     amt: 9777,
  //   },
  //   {
  //     name: "Jan 15",
  //     Area1: 1298,
  //     Area2: 3773,
  //     Area3: 3783,
  //     Area4: 4800,
  //     Area5: 9367,
  //     amt: 8000,
  //   },
  //   {
  //     name: "Jan 20",
  //     Area1: 1890,
  //     Area2: 4098,
  //     Area3: 9753,
  //     Area4: 3667,
  //     Area5: 3372,
  //     amt: 6000,
  //   },
  //   {
  //     name: "Jan 25",
  //     Area1: 1890,
  //     Area2: 2800,
  //     Area3: 1890,
  //     Area4: 4400,
  //     Area5: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: "Jan 30",
  //     Area1: 1890,
  //     Area2: 1800,
  //     Area3: 1800,
  //     Area4: 4800,
  //     Area5: 4300,
  //     amt: 2500,
  //   },
  // ];

  return (
    <div className='flex flex-col space-y-3 mt-2'>
      <PerformanceArea/>
    <LeadConvertionRateRegion/>
    <div className="bg-white w-full p-2">
    <div className="flex justify-between">
      <h1 className="text-lg font-bold">License Over Time By Area</h1>
      <div className="flex gap-1">
        <SelectDropdown 
        setSelectedValue={setSelectedYear} 
        selectedValue={selectedYear}
         filteredData={years} 
         searchPlaceholder="Search Years" 
         width="w-44" 
         />
        <SelectDropdown 
        setSelectedValue={setSelectedMonth}
         selectedValue={selectedMonth} 
         filteredData={months} 
         searchPlaceholder="Search Months" 
         width="w-44" 
         />
      </div>
    </div>

    <div className="mt-5">
      {chartData.length > 0 ? (
        <ResponsiveContainer minWidth={1000} minHeight={400}>
        <LineChart width={1000} height={400} data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" vertical={false} />
  <XAxis dataKey="name" axisLine={false} tickLine={false} padding={{ left: 25, right: 20 }} />
  <YAxis axisLine={false} tickLine={false} />
  <Tooltip />
  <Legend />

  {areaNames.map((area, index) => (
    <Line
      key={area}
      type="monotone"
      dataKey={area} // Use actual area name instead of "Area1"
      stroke={["#e2b0ff", "#8884d8", "#82ca9d", "#d86a57", "#6ab6ff"][index % 5]}
      strokeWidth={3}
      dot={false}
    />
  ))}
</LineChart>


        </ResponsiveContainer>
      ) : (
        <NoRecords imgSize={70} textSize="md" parentHeight="380px" />
      )}
    </div>
  </div>
    </div>
  )
}

export default RegionPerformanceView