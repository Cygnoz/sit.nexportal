import { FC } from 'react';
import { 
  BarChart, Bar, Rectangle, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import SelectDropdown from '../../../components/ui/SelectDropdown';
import { months } from '../../../components/list/MonthYearList';

type Props = {};

const data = [
    { name: 'January', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'March', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'July', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'August', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'September', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'October', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'November', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'December', uv: 2390, pv: 3800, amt: 2500 },
];

const TargetComparison: FC<Props> = () => {
  return (
    <div className='bg-white rounded-lg w-full'>
      <div className="p-2 space-y-2 flex justify-between">
        <h1 className="text-lg font-bold">Target Comparison Chart</h1>
        <SelectDropdown
           // setSelectedValue={setSelectedRegion}
            //selectedValue={selectedRegion}
            placeholder="All Months"      
            filteredData={months}
            searchPlaceholder="Search Months"
            width="w-44"
          />
      </div>
      <div className="flex space-x-2 -mt-4 ms-2">
          <div className='flex'>
            <div className="w-4 h-4 rounded-full bg-[#E07253] flex items-center justify-center text-white text-lg font-semibold shadow-lg mt-1"></div>
            <h1 className='ms-2'>Achieved Target</h1>
          </div>
          <div className='flex'>
            <div className="w-4 h-4 rounded-full bg-[#54B86D] flex items-center justify-center text-white text-lg font-semibold shadow-lg mt-1"></div>
            <h1 className='ms-2'>Set Target</h1>
          </div>
        </div>

      <div className='mt-8'>
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              barSize={20} // Reduce bar width
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              {/* Custom Legend to remove uv/pv labels */}
              <Legend content={() => null} /> {/* Hides the Legend completely */}
              <Bar dataKey="pv" fill="#E07253" radius={6} activeBar={<Rectangle fill="#E07253" stroke="#E07253" />} />
              <Bar dataKey="uv" fill="#54B86D" radius={6} activeBar={<Rectangle fill="#54B86D" stroke="#54B86D" />} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TargetComparison;
