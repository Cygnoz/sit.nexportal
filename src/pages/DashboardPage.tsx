import AreaIcon from "../assets/icons/AreaIcon";
import AreaManagerIcon from "../assets/icons/AreaMangerIcon";
import FileCheck from "../assets/icons/FileCheck";
import RowsIcon from "../assets/icons/RowsIcon";
import TreePain from "../assets/icons/TreePain";
import UserIcon from "../assets/icons/UserIcon";
import Wallet from "../assets/icons/Wallet";
import HomeCard from "../components/ui/HomeCards";

const DashboardPage = () => {
  const homeCardData = [
    { 
      icon: <RowsIcon size={24}/>, 
      number: "875", 
      title: "Total Regions", 
      iconFrameColor: "#FCB23E", 
      iconFrameBorderColor: "#FDE3BBCC" 
    },
    { 
      icon: <AreaIcon size={24}/>, 
      number: "1235", 
      title: "Total Area", 
      iconFrameColor: "#51BFDA", 
      iconFrameBorderColor: "#C1E7F1CC" 
    },
    { 
      icon: <Wallet size={24}/>, 
      number: " ₹ 76,789,8", 
      title: "sales Revenue", 
      iconFrameColor: "#F9911A", 
      iconFrameBorderColor: "#EDD2BBCC" 
    },
    { 
      icon: <FileCheck size={24}/>, 
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
  return (
    <div >
      <h1 className="text-[#303F58] text-xl font-bold">Dashboard</h1>
      {/* HomeCards Section */}
      <div className="flex gap-3 py-2 justify-between mt-2">
        {homeCardData.map((card, index) => (
          <HomeCard
            iconFrameColor={card.iconFrameColor}
            iconFrameBorderColor={card.iconFrameBorderColor}
            key={index} 
            icon={card.icon} 
            number={card.number} 
            title={card.title} 
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
