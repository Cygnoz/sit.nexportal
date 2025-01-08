import AreaIcon from "../../assets/icons/AreaIcon";
import FileCheck from "../../assets/icons/FileCheck";
import RegionIcon from '../../assets/icons/RegionIcon';
import RowsIcon from "../../assets/icons/RowsIcon";
import TreePain from "../../assets/icons/TreePain";
import Wallet from "../../assets/icons/Wallet";
import indLogo from '../../assets/image/IndiaLogo.png';
import SaudhLogo from "../../assets/image/SaudiLogo.png";
import UAELogo from "../../assets/image/UAELogo.webp";
import HomeCard from "../../components/ui/HomeCards";
import RatingStar from '../../components/ui/RatingStar';
import TicketsBar from '../../components/ui/TicketsBar';
import { useRegularApi } from "../../context/ApiContext";
import LeadConversionRate from "./Graphs/LeadConversionRate";
import TopBreakDownByRegion from './Graphs/TopBreakDownByRegion';
import TopRevenueByRegion from './Graphs/TopRevenueByRegion';

const DashboardPage = () => {
  const {totalCounts}=useRegularApi()
  const homeCardData = [
    {
      icon: <RegionIcon size={24} />,
      number: totalCounts?.totalUsers,
      title: "Total Users",
      iconFrameColor: "#F9A51A",
      iconFrameBorderColor: "#FFF2DDCC",
    },
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
       <TopRevenueByRegion/>
       </div>
        <div className="col-span-4">
       <TopBreakDownByRegion/>
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
          <LeadConversionRate/>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
