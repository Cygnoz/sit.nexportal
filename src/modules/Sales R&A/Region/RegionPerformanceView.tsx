import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Tooltip,
  XAxis, YAxis
} from 'recharts';

type Props = {}

const RegionPerformanceView = ({}: Props) => {

  const leadConversionData = [
    { name: 'Area 1', uv: 40, },
    { name: 'Area 2', uv: 20, },
    { name: 'Area 3', uv: 60, },
    { name: 'Area 4', uv: 50, },
    { name: 'Area 5', uv: 30, },
    { name: 'Area 6', uv: 80, },
    { name: 'Area 7', uv: 70, },
    { name: 'Area 8', uv: 90, },
    { name: 'Area 9', uv: 100, },
    { name: 'Area 10', uv: 55, },
  ];

  const colors = ['#FF9800', '#2196F3', '#4CAF50', '#9C27B0', '#F44336', '#FFC107', '#673AB7', '#3F51B5', '#00BCD4', '#8BC34A'];

  return (
    <div className="flex flex-col gap-2 mt-5">
      <div className="p-3 bg-white w-full space-y-2 rounded-lg">
                <h2 className='font-bold'>Lead Conversion Rate Per Area</h2>
                <h3 className='text-xs'>Area 9</h3>
                <h1 className='text-2xl font-medium'>80 Percentage</h1>
        
                <div className='-ms-7 mt-2'>
                <BarChart width={1170} height={280} data={leadConversionData}>
                <CartesianGrid   strokeDasharray="3 3" vertical={false}/>
            
            {/* Hide axis lines but keep labels visible */}
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            
            {/* Remove the legend for 'uv' */}
            <Tooltip />
            
            <Bar barSize={55} dataKey="uv" radius={10} >
              {
                leadConversionData.map((data, index) => (
                  <Cell key={`cell-${data.name}`} fill={colors[index]} />
                ))
              }
            </Bar>
          </BarChart>
                </div>
            
                </div>
      <div></div>
    </div>
  )
}

export default RegionPerformanceView