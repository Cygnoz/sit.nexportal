import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import profileImage from "../../../../../assets/image/AvatarImg.png";

type Props = {
  graphData: any;
};

function TopPerformingBDA({ graphData }: Props) {


  // Transform the graphData to fit the chart structure
  const chartData = graphData?.map((data: any) => ({
    name: data?.userName,
    CR: data?.conversionRate,
    avatar: data?.userImage || profileImage, // Use a default avatar if not provided
  }));
console.log("performingData",chartData);

  
  
  const colors = ['#FF9800', '#2196F3', '#4CAF50', '#9C27B0', '#F44336', '#FFC107', '#673AB7', '#3F51B5', '#00BCD4', '#8BC34A'];
 

  return (
   <div className="p-3 bg-white w-full space-y-2 rounded-lg">
   <p className="text-[#303F58] text-lg font-bold ">
      Top performing BDA's
    </p>
    <p className="text-[#4B5C79] text-xs font-normal ">
      Based on lead Conversion Performance Metric
    </p>
     
     <div className="mt-2 custom-scrollbar " style={{ overflowX: 'auto' }}>
       {/* Wrapper for dynamic width */}
       <div style={{ width: '100%' }} className="-ms-4 mt-3">
         <ResponsiveContainer width="100%" minHeight={320}>
         <BarChart
           data={chartData}
         >
           <CartesianGrid strokeDasharray="3 3" vertical={false} />
           <XAxis dataKey="name" axisLine={false} tickLine={false} />
           <YAxis axisLine={false}   tickFormatter={(value) => `${value}%`} tickLine={false} domain={[0, 100]} />
           <Tooltip />
           <Bar barSize={30} dataKey="CR" radius={10}>
             {chartData?.map((entry: any, index: any) => (
               <Cell key={`cell-${entry.name}`} fill={colors[index % colors.length]} />
             ))}
           </Bar>
         </BarChart>
         </ResponsiveContainer>
       </div>
     </div>
   </div>
  );
}

export default TopPerformingBDA;
