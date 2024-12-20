import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Tooltip,
  XAxis, YAxis
} from 'recharts';
import {
  VictoryLabel,
  VictoryPie,
  VictoryTheme
} from "victory";

import AreaIcon from "../assets/icons/AreaIcon";
import FileCheck from "../assets/icons/FileCheck";
import RowsIcon from "../assets/icons/RowsIcon";
import TreePain from "../assets/icons/TreePain";
import Wallet from "../assets/icons/Wallet";
import indLogo from '../assets/image/IndiaLogo.png';
import SaudhLogo from "../assets/image/SaudiLogo.png";
import UAELogo from "../assets/image/UAELogo.webp";
import HomeCard from "../components/ui/HomeCards";
import RatingStar from '../components/ui/RatingStar';
import TicketsBar from '../components/ui/TicketsBar';
import { useRegularApi } from "../context/ApiContext";

const DashboardPage = () => {
  const {totalCounts}=useRegularApi()
  const homeCardData = [
    { 
      icon: <RowsIcon size={24} />, 
      number: totalCounts?.totalRegion, 
      title: "Total Regions", 
      iconFrameColor: "#FCB23E", 
      iconFrameBorderColor: "#FDE3BBCC" 
    },
    { 
      icon: <AreaIcon size={24} />, 
      number:totalCounts?.totalArea, 
      title: "Total Area", 
      iconFrameColor: "#51BFDA", 
      iconFrameBorderColor: "#C1E7F1CC" 
    },
    { 
      icon: <Wallet size={24} />, 
      number: " ₹ 76,789,8", 
      title: "Sales Revenue", 
      iconFrameColor: "#F9911A", 
      iconFrameBorderColor: "#EDD2BBCC" 
    },
    { 
      icon: <FileCheck size={24} />, 
      number: "564", 
      title: "Active Licenses", 
      iconFrameColor: "#D786DD", 
      iconFrameBorderColor: "#FADDFCCC" 
    },
    { 
      icon: <TreePain size={24} />, 
      number: "10%", 
      title: "Sales Growth", 
      iconFrameColor: "#30B777", 
      iconFrameBorderColor: "#B3F0D3CC" 
    },
  ];

  const data = [
    { name: 'India', pv: 74479, logo: indLogo, color: '#4caf50' }, // Green
    { name: 'Saudi', pv: 56335, logo: SaudhLogo, color: '#2196f3' }, // Blue
    { name: 'UAE', pv: 43887, logo: UAELogo, color: '#ff9800' }, // Orange
    { name: 'Iran', pv: 19027, logo: indLogo, color: '#f44336' }, // Red
    { name: 'Japan', pv: 8142, logo: UAELogo, color: '#9c27b0' }, // Purple
    { name: 'Brazil', pv: 4918, logo: SaudhLogo, color: '#3f51b5' }, // Blue
  ];
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

  const roles = [
    { name: 'Regional Managers', count: 50, color: '#1B6C75' }, // Updated color
    { name: 'Area Managers', count: 30, color: '#30B777' }, // Updated color
    { name: 'BDA', count: 80, color: '#6ABAF3' }, // Updated color
    { name: 'Supervisors', count: 78, color: '#7CD5AB' }, // Updated color
    { name: 'Support Agent', count: 65, color: '#00B5B5' } // Updated color
  ];
  
  const pieData = roles.map((role) => ({
    x: role.name,
    y: role.count,
    color: role.color
  }));
  

  const countries = [
    {
      countryName: 'India',
      logo:indLogo,
      ratingCount: 4,
    },
    {
      countryName: 'Saudi',
      logo: SaudhLogo,
      ratingCount: 3,
    },
    {
      countryName: 'UAE',
      logo:UAELogo,
      ratingCount: 5,
    },
    {
      countryName: 'Iran',
      logo: SaudhLogo,
      ratingCount: 2,
    },
    {
      countryName: 'Japan',
      logo: indLogo,
      ratingCount: 5,
    },
    {
      countryName: 'Brazil',
      logo: UAELogo,
      ratingCount: 3,
    },
  ];

  const regions = [
    { countryName: 'India', ticketCount: 2544, logo: indLogo, color: '#FF9800' }, // Orange
    { countryName: 'Italy', ticketCount: 2100, logo: SaudhLogo, color: '#4CAF50' }, // Green
    { countryName: 'Saudi', ticketCount: 2012, logo: UAELogo, color: '#2196F3' }, // Blue
    { countryName: 'Australia', ticketCount: 1860, logo: indLogo, color: '#9C27B0' }, // Purple
    { countryName: 'Japan', ticketCount: 1540, logo: UAELogo, color: '#F44336' }, // Red
    { countryName: 'Sri Lanka', ticketCount: 901, logo: SaudhLogo, color: '#FFC107' }, // Yellow
  ];

  

  

  const maxTicketCount = Math.max(...regions.map((region) => region.ticketCount));
  

  return (
    <div className="text-[#303F58] mb-3">
      <h1 className="text-[#303F58] text-xl font-bold">Dashboard</h1>
      {/* HomeCards Section */}
      <div className="flex gap-3 py-2 justify-between mt-2">
        {homeCardData.map((card, index) => (
          <HomeCard
            iconFrameColor={card.iconFrameColor}
            iconFrameBorderColor={card.iconFrameBorderColor}
            key={index} 
            icon={card.icon} 
            number={card?.number} 
            title={card.title} 
          />
        ))}
      </div>
      <div className="grid grid-cols-12 gap-4 mt-3">
        <div className="col-span-8">
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
        </div>
        <div className="col-span-4">
       
          <div className="bg-white h-[530px] rounded-lg w-full -p-3">
            <h1 className="text-[#303F58] text-lg font-bold p-3">Top Break Down By Region</h1>
            <div className="-mt-3 relative">
            <div className='absolute top-[27%] left-[41%] z-50 text-center'>
                <p className='text-2xl font-bold'>1520</p>
                <p className='text-md'>Total Team</p>
              </div>
              <VictoryPie
      innerRadius={48}
      padAngle={4}
      data={pieData}
      categories={{
        y: roles.map(role => role.name),
      }}
      theme={VictoryTheme.clean}
      labels={({ datum }) => `${((datum.y / roles.reduce((acc, role) => acc + role.count, 0)) * 100).toFixed(1)}%`}
      labelComponent={<VictoryLabel style={{ fill: '#303F58', fontSize: 15 ,marginLeft:-50}}/>}
      style={{
        data: {
          fill: ({ datum }) => datum.color,
        },
      }}
      
    />
    <div className='flex justify-center'>
    <div className="space-y-4">
      {roles.map((role) => (
        <div key={role.name} className="flex items-center justify-between w-72 space-x-3">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: role.color }} />
            <span className="text-gray-800 font-medium text-xs">{role.name}</span>
          </div>
          <span className="ml-auto text-gray-600 text-xs">{role.count}</span>
        </div>
      ))}
    </div>
    </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className='p-4 bg-white w-full space-y-3 rounded-lg h-full'>
            <h2 className='font-bold'>Top Rated by Region by Customer Support</h2>
              {
                countries.map((country)=>(
                  <div className='grid grid-cols-2 py-1'>
                    <div className='flex items-center gap-2'>
                    <img className='w-5 h-5 rounded-full' src={country.logo} alt="" />
                    <p className='text-sm'>{country.countryName}</p>
                  </div>
                   <RatingStar count={country.ratingCount}/>
                  </div>
                ))
              }
          </div>
        </div>
        <div className="col-span-2 ">
        <div className='p-4 bg-white w-full space-y-3 rounded-lg h-full'>
      <h2 className='font-bold'>Top Ticket Resolved Regions</h2>
      {regions.map((region) => (
        <div key={region.countryName} className='grid grid-cols-2 py-1'>
          <div className='flex items-center gap-2'>
            <img className='w-5 h-5 rounded-full' src={region.logo} alt={region.countryName} />
            <p className='text-sm'>{region.countryName}</p>
          </div>
          <div className="flex items-center gap-2">
            <TicketsBar count={region.ticketCount} maxCount={maxTicketCount} color={region.color} />
          </div>
        </div>
      ))}
    </div>
        </div>
        <div className="col-span-8">
          <div className="p-3 bg-white w-full space-y-2 rounded-lg">
          <h2 className='font-bold'>Lead Conversion Rate per Region</h2>
          <h3 className='text-xs'>India</h3>
          <h1 className='text-2xl font-medium'>80 Percentage</h1>
  
          <div className='-ms-7 mt-2'>
          <BarChart width={950} height={280} data={leadConversionData}>
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
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
