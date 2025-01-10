import { Bar, BarChart, CartesianGrid, Cell, Tooltip, XAxis, YAxis } from "recharts";
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

  
  
  const colors = ['#FF9800', '#2196F3', '#4CAF50', '#9C27B0', '#F44336', '#FFC107', '#673AB7', '#3F51B5', '#00BCD4', '#8BC34A'];
 

  return (
   <div className="p-3 bg-white w-full space-y-2 rounded-lg">
   <p className="text-[#303F58] text-lg font-bold p-3">
      Top performing BDA's
    </p>
    <p className="text-[#4B5C79] text-xs font-normal p-3">
      Based on lead Conversion Performance Metric
    </p>
     
     <div className="mt-2 custom-scrollbar" style={{ overflowX: 'auto' }}>
       {/* Wrapper for dynamic width */}
       <div style={{ width: '100%' }}>
         <BarChart
           width={chartData?.length > 0 ? Math.max(chartData?.length * 55, 530) : 500}
           height={280}
           data={chartData}
         >
           <CartesianGrid strokeDasharray="3 3" vertical={false} />
           <XAxis dataKey="name" axisLine={false} tickLine={false} />
           <YAxis axisLine={false} tickLine={false} domain={[0, 100]} />
           <Tooltip />
           <Bar barSize={30} dataKey="CR" radius={10}>
             {chartData?.map((entry: any, index: any) => (
               <Cell key={`cell-${entry.name}`} fill={colors[index % colors.length]} />
             ))}
           </Bar>
         </BarChart>
       </div>
     </div>
   </div>
  );
}

export default TopPerformingBDA;
