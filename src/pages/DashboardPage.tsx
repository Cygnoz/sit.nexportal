import AreaIcon from "../assets/icons/AreaIcon";
import FileCheck from "../assets/icons/FileCheck";
import RowsIcon from "../assets/icons/RowsIcon";
import TreePain from "../assets/icons/TreePain";
import Wallet from "../assets/icons/Wallet";
import HomeCard from "../components/ui/HomeCards";
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
  VictoryPie
} from "victory";

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

  const data = [
    { country: "India", value: 74779, color: "#4caf50", flag: "🇮🇳" },
    { country: "Italy", value: 56635, color: "#2196f3", flag: "🇮🇹" },
    { country: "Saudi", value: 43887, color: "#ff9800", flag: "🇸🇦" },
    { country: "Australia", value: 19027, color: "#4caf50", flag: "🇦🇺" },
    { country: "Japan", value: 8142, color: "#9c27b0", flag: "🇯🇵" },
    { country: "Sri Lanka", value: 4918, color: "#f44336", flag: "🇱🇰" }
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
      <div className="grid grid-cols-12 gap-2 mt-3">
      <div className="col-span-8">
      <div className="bg-white  rounded-lg w-full ">
      <h1 className="text-[#303F58] text-lg font-bold p-3">Top Revenue Generated Region</h1>
     <div className="-mt-20 -ms-9">
     <VictoryChart
      domainPadding={{ x: 20 }}
      horizontal
      theme={VictoryTheme.material}
      width={500}
      height={280}
    >
      <VictoryBar
        data={data}
        x="country"
        y="value"
        labels={({ datum }) => `${datum.value.toLocaleString()}`}
        barWidth={8}
        style={{
          data: {
            fill: ({ datum }) => datum.color,
          },
          labels: {
            fontSize: 10,
            fill: "#000",
            padding: 10
          }
        }}
        labelComponent={<VictoryLabel dx={5} />}
      />
      <VictoryAxis
        dependentAxis
        style={{
          axis: { stroke: "transparent" }, // Remove the axis line
          tickLabels: {
            fontSize: 10,
            fill: "#000",
            padding: 5
          }
        }}
        tickFormat={(_, index) => `${data[index].flag} ${data[index].country}`}
      />
      <VictoryAxis
        style={{
          axis: { stroke: "transparent" }, // Remove the axis line
          ticks: { stroke: "transparent" }, // Remove the ticks
          tickLabels: { fill: "transparent" } // Remove tick labels
        }}
      />
    </VictoryChart>
     </div>
      </div>
      </div>
      <div className="col-span-4">
      <div className="bg-white h-[475px] rounded-lg w-full -p-3">
      <h1 className="text-[#303F58] text-lg font-bold p-3">Top Break Down By Region</h1>
      <div className="-mt-3">
      <VictoryPie
      innerRadius={50}
      padAngle={5}
      data={[
        { x: "Region Manager", y: 30 },
        { x: "Area Manager", y: 25 },
        { x: "BDA", y: 35 },
        { x: "Super Visor", y: 40 },
        { x: "Support Agent", y:10 },
      ]}
      categories={{
        x: [
          "Region Manager",
          "Area Manager",
          "BDA",
          "Super Visor",
          "Support Agent",
        ],
      }}
      theme={VictoryTheme.clean}
      style={{
        data: {
          fill: ({ datum }) => {
            switch (datum.x) {
              case "Region Manager": return "#1B6C75"; // Red
              case "Area Manager": return "#30B777"; // Blue
              case "BDA": return "#6ABAF3"; // Green
              case "Super Visor": return "#7CD5AB"; // Yellow
              default: return "#ccc"; // Default color
            }
          },
        },
      }}
    />
      </div>
</div>
      </div>
      <div className="col-span-2"></div>
      <div className="col-span-2"></div>
      <div className="col-span-8"></div>
      </div>
      

    </div>
  );
};

export default DashboardPage;
