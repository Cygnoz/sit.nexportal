import { Bar, BarChart, Cell, Tooltip, XAxis, YAxis } from 'recharts';
import indLogo from '../../../assets/image/IndiaLogo.png';
import SaudhLogo from "../../../assets/image/SaudiLogo.png";
import UAELogo from "../../../assets/image/UAELogo.webp";
type Props = {}

function TopRevenueByRegion({}: Props) {

    const data = [
        { name: 'India', pv: 74479, logo: indLogo, color: '#4caf50' }, // Green
        { name: 'Saudi', pv: 56335, logo: SaudhLogo, color: '#2196f3' }, // Blue
        { name: 'UAE', pv: 43887, logo: UAELogo, color: '#ff9800' }, // Orange
        { name: 'Iran', pv: 19027, logo: indLogo, color: '#f44336' }, // Red
        { name: 'Japan', pv: 8142, logo: UAELogo, color: '#9c27b0' }, // Purple
        { name: 'Brazil', pv: 4918, logo: SaudhLogo, color: '#3f51b5' }, // Blue
      ];

    const CustomLabel = ({ x, y, width, value }:any) => (
        <text x={x + width + 10} y={y + 13} fontSize={10} textAnchor="start" fill="#000">
          {value}
        </text>
      );
    
      const CustomizedAxisTick = ({ x, y, payload }: any) => {
        // Find the corresponding logo for the country
        const country = data.find((d) => d.name === payload.value);
        const logo = country ? country.logo : indLogo; // Default to `indLogo` if not found
        
        return (
          <g transform={`translate(${x},${y})`}>
            <image
              href={logo}  // Use the logo from the data array
              x={-70}
              y={-10}
              height="20px"
              width="20px"
            />
            <text
              y={2}
              fontSize={12}
              dy={3}
              textAnchor="end"
              fill="#666"
            >
              {payload.value}
            </text>
          </g>
        );
      };
  return (
    <>

              <div className="bg-white rounded-lg w-full ">
                <div className="p-4 space-y-2">
                  <h1 className="text-lg font-bold">Top Revenue Generated Region</h1>
                  <h2 className="text-md">Region 0234</h2>
                  <h2 className="text-md font-medium text-2xl">₹ 76,789,87</h2>
                </div>
                <div className="ms-5">
                  <BarChart
                    width={850}
                    height={400}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    layout="vertical"
                  >
                    <YAxis
                      type="category"
                      dataKey="name"
                      tick={<CustomizedAxisTick />}
                      tickLine={false}
                      axisLine={{ stroke: '#000' }} // Y axis line
                    />
                    <XAxis
                      type="number"
                      tick={{ fontSize: 10 }}
                      axisLine={{ stroke: 'transparent' }} // Remove X axis line
                      tickLine={false} // Remove ticks on the X axis
                    />
                    <Tooltip />
                    <Bar dataKey="pv" radius={[5, 5, 5, 5]} barSize={20} label={<CustomLabel />}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </div>
              </div>

    </>
  )
}

export default TopRevenueByRegion