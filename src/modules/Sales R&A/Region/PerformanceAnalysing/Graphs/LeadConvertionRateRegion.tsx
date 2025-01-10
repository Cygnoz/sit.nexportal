import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, Cell, Tooltip, XAxis, YAxis } from "recharts";
import useApi from "../../../../../Hooks/useApi";
import { useRegularApi } from "../../../../../context/ApiContext";
import { endPoints } from "../../../../../services/apiEndpoints";

type Props = {};

function LeadConversionRate({}: Props) {
  const colors = ['#FF9800', '#2196F3', '#4CAF50', '#9C27B0', '#F44336', '#FFC107', '#673AB7', '#3F51B5', '#00BCD4', '#8BC34A'];
  const { request: getConvertionRate } = useApi("get", 3003);
  const { allRegions } = useRegularApi();
  const {id}=useParams()
  
  

  const [getRegion, setGetRegion] = useState<any>()

  const [chartData, setChartData] = useState<any>(); // State to store the chart data

  const getConvertion = async () => {
    try {
      const endPoint =  `${endPoints.CONVERSION_RATE}/${id}` 
      const { response, error } = await getConvertionRate(endPoint);
      console.log("res",response);
      
      if (response && !error) {
        // Transform the response data to match chart format
        const {areas,regionConversionRate}=response.data
        const transformedArea = areas.map((area: any) => ({
          name: area.areaName,
          CR: parseFloat(area.conversionRate) || 0, // Ensure the conversionRate is a number
        }));
        const filteredData={transformedArea,regionConversionRate}
      
      setChartData(filteredData)
      } else {
        // console.error(error.data);
      }
    } catch (err) {
      console.error(err);
    }
  };


  

  const handleFetchRegions = () => {
    if (allRegions && allRegions.length > 0) {   
      const filteredRegions = allRegions.find((region: any) => (region._id===id));
      setGetRegion(filteredRegions)
    } else {
      console.warn("No regions found or data not yet loaded.");
    }
  };

  useEffect(() => {
    getConvertion();
    handleFetchRegions();
  }, [allRegions]);

  

  return (
    <>
      <div className="p-3 bg-white w-full space-y-2 rounded-lg">
  <h2 className="font-bold">Lead Conversion Rate per Region</h2>
  <h3 className="text-sm">{getRegion?.country}</h3>
  <h1 className="text-2xl font-medium">
    {chartData?.regionConversionRate || "0"}
  </h1>

  <div className="mt-2 custom-scrollbar" style={{ overflowX: 'auto' }}>
    {/* Wrapper for dynamic width */}
    <div style={{ width: '100%' }} className="-ms-8">
      <BarChart
        width={chartData?.transformedArea?.length > 0 ? Math.max(chartData?.transformedArea?.length * 55, 1150) : 1150}
        height={280}
        data={chartData?.transformedArea}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} domain={[0, 100]} />
        <Tooltip />
        <Bar barSize={55} dataKey="CR" radius={10}>
          {chartData?.transformedArea?.map((entry: any, index: any) => (
            <Cell key={`cell-${entry.name}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  </div>
</div>

    </>
  );
}

export default LeadConversionRate;
