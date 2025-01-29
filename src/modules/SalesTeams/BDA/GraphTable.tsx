import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Table from "../../../components/ui/Table";
import { useNavigate } from "react-router-dom";
import useApi from "../../../Hooks/useApi";
import SelectDropdown from "../../../components/ui/SelectDropdown";
import { endPoints } from "../../../services/apiEndpoints";
import { allMonths } from "../../../components/list/MonthList";
import No_Data_found from "../../../assets/image/NO_DATA.png";

interface TrailTableData {
  trailId: string;
  leadName: string;
  currentStatus: string;
  startDate: string;
  status: string;
}

type Props = {
  bdaData?: any;
};

const GraphTable = ({ bdaData }: Props) => {
  //console.log("hhh",bdaData);
  const { request: getConvertionBda } = useApi("get", 3002);

  const navigate = useNavigate();
  // const id=bdaData?bdaData:id

  const [chartData, setChartData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState<any>(allMonths[0]);
  const handleView = (id: any) => {
    navigate(`/trial/${id}`);
  };

  //console.log(selectedMonth);



  const getConvertion = async () => {
    try {
      const endPoint = `${endPoints.BDA}/${bdaData.bdaDetails.bda._id}/trial-conversions?date=${selectedMonth.key}`;
      const { response, error } = await getConvertionBda(endPoint);
      //console.log(endPoint);

      if (response && !error) {
        // Transform API data to chart data format
        const transformedData = response.data.trialConvertedOverTime.map((item: any) => ({
          name: formatDate(item.date), // Format the date to match "Jan 05"
          CR: item.conversionCount,   // Use the conversionCount value for the chart
        }));
        // console.log(response.data);

        setChartData(transformedData);
      } else {
        console.error("Error:", error?.data || "Unknown error occurred");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getConvertion();
  }, [selectedMonth, bdaData]);
  //console.log(allMonths);

  const formatDate = (date: any) => {
    // Convert "2024-08-05" to "Aug 05"
    const options: any = { month: "short", day: "2-digit" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  // Define the columns with strict keys
  const columns: { key: any; label: string }[] = [
    { key: "customerId", label: "Trail ID" },
    { key: "leadName", label: "Lead Name" },
    { key: "trialStatus", label: "Current Status" },
    // { key: "status", label: "Priority" },
    { key: "startDate", label: "Start Date" },
  ];

  // const datass = {
  //  CurrentMonth: [
  //     { name: "Jan 05", Area1: 10, Area2: 20, Area3: 40, Area4: 70, Area5: 80 },
  //     { name: "Jan 10", Area1: 15, Area2: 25, Area3: 35, Area4: 60, Area5: 85 },
  //     { name: "Jan 15", Area1: 12, Area2: 22, Area3: 45, Area4: 40, Area5: 75 },
  //     { name: "Jan 20", Area1: 18, Area2: 28, Area3: 50, Area4: 55, Area5: 90 },
  //     { name: "Jan 25", Area1: 20, Area2: 35, Area3: 60, Area4: 65, Area5: 78 },
  //     { name: "Jan 30", Area1: 15, Area2: 25, Area3: 55, Area4: 58, Area5: 82 },
  //   ],
  //   PreviousMonth: [
  //     { name: "Feb 05", Area1: 20, Area2: 30, Area3: 60, Area4: 50, Area5: 40 },
  //     { name: "Feb 10", Area1: 25, Area2: 35, Area3: 55, Area4: 65, Area5: 70 },
  //     { name: "Feb 15", Area1: 22, Area2: 32, Area3: 75, Area4: 45, Area5: 60 },
  //     { name: "Feb 20", Area1: 28, Area2: 38, Area3: 70, Area4: 55, Area5: 50 },
  //     { name: "Feb 25", Area1: 30, Area2: 45, Area3: 80, Area4: 65, Area5: 60 },
  //     { name: "Feb 28", Area1: 25, Area2: 35, Area3: 75, Area4: 60, Area5: 70 },
  //   ],
  //   Q1: [
  //     { name: "Jan 05", Area1: 10, Area2: 20, Area3: 40, Area4: 70, Area5: 80 },
  //     { name: "Jan 10", Area1: 15, Area2: 25, Area3: 35, Area4: 60, Area5: 85 },
  //     { name: "Jan 15", Area1: 12, Area2: 22, Area3: 45, Area4: 40, Area5: 75 },
  //     { name: "Jan 20", Area1: 18, Area2: 28, Area3: 50, Area4: 55, Area5: 90 },
  //     { name: "Jan 25", Area1: 20, Area2: 35, Area3: 60, Area4: 65, Area5: 78 },
  //     { name: "Jan 30", Area1: 15, Area2: 25, Area3: 55, Area4: 58, Area5: 82 },
  //   ],
  //   Q2: [
  //     { name: "Feb 05", Area1: 20, Area2: 30, Area3: 60, Area4: 50, Area5: 40 },
  //     { name: "Feb 10", Area1: 25, Area2: 35, Area3: 55, Area4: 65, Area5: 70 },
  //     { name: "Feb 15", Area1: 22, Area2: 32, Area3: 75, Area4: 45, Area5: 60 },
  //     { name: "Feb 20", Area1: 28, Area2: 38, Area3: 70, Area4: 55, Area5: 50 },
  //     { name: "Feb 25", Area1: 30, Area2: 45, Area3: 80, Area4: 65, Area5: 60 },
  //     { name: "Feb 28", Area1: 25, Area2: 35, Area3: 75, Area4: 60, Area5: 70 },
  //   ],
  //   Q3: [
  //     { name: "Jan 05", Area1: 10, Area2: 20, Area3: 40, Area4: 70, Area5: 80 },
  //     { name: "Jan 10", Area1: 15, Area2: 25, Area3: 35, Area4: 60, Area5: 85 },
  //     { name: "Jan 15", Area1: 12, Area2: 22, Area3: 45, Area4: 40, Area5: 75 },
  //     { name: "Jan 20", Area1: 18, Area2: 28, Area3: 50, Area4: 55, Area5: 90 },
  //     { name: "Jan 25", Area1: 20, Area2: 35, Area3: 60, Area4: 65, Area5: 78 },
  //     { name: "Jan 30", Area1: 15, Area2: 25, Area3: 55, Area4: 58, Area5: 82 },
  //   ],
  //   Q4: [
  //     { name: "Feb 05", Area1: 20, Area2: 30, Area3: 60, Area4: 50, Area5: 40 },
  //     { name: "Feb 10", Area1: 25, Area2: 35, Area3: 55, Area4: 65, Area5: 70 },
  //     { name: "Feb 15", Area1: 22, Area2: 32, Area3: 75, Area4: 45, Area5: 60 },
  //     { name: "Feb 20", Area1: 28, Area2: 38, Area3: 70, Area4: 55, Area5: 50 },
  //     { name: "Feb 25", Area1: 30, Area2: 45, Area3: 80, Area4: 65, Area5: 60 },
  //     { name: "Feb 28", Area1: 25, Area2: 35, Area3: 75, Area4: 60, Area5: 70 },
  //   ],

  // };

  // const datas = [
  //   {
  //     name: "Jan 05",
  //     CR:"10"
  //   },
  //   {
  //     name: "Jan 10",
  //     CR:"10"
  //   },
  //   {
  //     name: "Jan 15",
  //    CR:"10"
  //   },
  //   {
  //     name: "Jan 20",
  //    CR:"10"
  //   },
  //   {
  //     name: "Jan 25",
  //     CR:"10"
  //   },
  //   {
  //     name: "Jan 30",
  //     CR:"10"
  //   },
  // ];

  return (
    <div>
      <div className="grid grid-cols-12 gap-4 mb-2">
        <div className="col-span-5">
          <div className="py-3 bg-white p-2 rounded-lg">
            <div className="py-1 ms-2 flex justify-between">
              <h2 className="font-bold">Trial Converted By BDA Overtime</h2>
              <div className="flex gap-1">
                <label htmlFor="month-select"></label>

                <SelectDropdown
                  setSelectedValue={setSelectedMonth}
                  selectedValue={selectedMonth}
                  filteredData={allMonths}
                  //   searchPlaceholder="Search Month"
                  width="w-44"
                />
                <SelectDropdown
                  //setSelectedValue={setSelectedMonth}
                  //selectedValue={selectedMonth}
                 // filteredData={allYears}
                  //   searchPlaceholder="Search Month"
                  width="w-44"
                />
              </div>
            </div>
            <div className="mt-5">
  {chartData.length > 0 ? (
    <ResponsiveContainer width="100%" minHeight={330}>
      <LineChart
        width={510}
        height={330}
        data={chartData} // Use transformed data
        margin={{
          top: 5,
          right: 30,
          left: 2,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="CR" // Match the CR field in your data
          stroke="#e2b0ff"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  ) : (
    <div className="flex justify-center flex-col items-center">
      <img width={70} src={No_Data_found} alt="No Data Found" />
      <p className="font-bold text-red-700">No Records Found!</p>
    </div>
  )}
</div>

          </div>
        </div>
        <div className="col-span-7">
          <div className="">
            <Table<TrailTableData>
              data={bdaData?.TransformedTrial}
              columns={columns}
              headerContents={{
                title: "Current Trails handled by BDA",
                search: { placeholder: "Search Trial Name" },
              }}
              actionList={[{ label: "view", function: handleView }]}
              maxHeight="325px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphTable;
