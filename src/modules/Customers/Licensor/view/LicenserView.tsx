import { useParams } from "react-router-dom";
import CalenderClock from "../../../../assets/icons/CalenderClock";
import ChevronRight from "../../../../assets/icons/ChevronRight";
import DeActivateIcon from "../../../../assets/icons/DeActivateIcon";
import EditIcon from "../../../../assets/icons/EditIcon";
import RegionIcon from "../../../../assets/icons/RegionIcon";
import RupeeIcon from "../../../../assets/icons/RupeeIcon";
import TicketCheck from "../../../../assets/icons/TicketCheck";
import ViewRoundIcon from "../../../../assets/icons/ViewRoundIcon";
import profileImage from '../../../../assets/image/AvatarImg.png';
import licenserImg from '../../../../assets/image/LicenserView.jpeg';
import HomeCard from "../../../../components/ui/HomeCards";
import PaymentTable from "./PaymentTable";
import RecentActivityView from "./RecenetActivity";
import SupportTicketTable from "./SupportTicketTable";

type Props = {};

function LicenserView({}: Props) {
  const { id } = useParams();
  const homeCardData = [
    {
      icon: <RupeeIcon size={50} />,
      number: "₹75,9788",
      title: "Revenue",
      iconFrameColor: "#F9A51A",
      iconFrameBorderColor: "#FFF2DDCC",
    },
    {
      icon: <TicketCheck />,
      number: "100",
      title: "Open Tickets",
      iconFrameColor: "#30B777",
      iconFrameBorderColor: "#B3F0D3CC",
    },
    {
      icon: <RegionIcon size={24} />,
      number: "526",
      title: "Closed Tickets",
      iconFrameColor: "#51BFDA",
      iconFrameBorderColor: "#C1E7F1CC",
    },
    {
      icon: <RegionIcon size={24} />,
      number: "12Oct23",
      title: "Start Date",
      iconFrameColor: "#1A9CF9",
      iconFrameBorderColor: "#BBD8EDCC",
    },
    {
      icon: <RegionIcon size={24} />,
      number: "12Oct24",
      title: "End Date",
      iconFrameColor: "#D786DD",
      iconFrameBorderColor: "#FADDFCCC",
    },
  ];
  const licenser: { key: any; label: string }[] = [
    { key: "George Thomas", label: "Licenser Name" },
    { key: "9090909090", label: "Phone" },
    { key: "Gregory W", label: "ASM" },
    { key: "Gregory W", label: "RM" },
    { key: "John Doe", label: "BDA" },
    { key: "Region 1", label: "Region" },
    { key: "Area 1", label: "Area" },
    { key: "george@gmail.com", label: "Email" },
  ];
  return (
    <div className="text-[#4B5C79] space-y-2 mb-5">
      <div className="flex items-center text-[16px]  space-x-2 mb-4">
        <p className="font-bold text-[#820000]">Licenser</p>
        <ChevronRight color="#4B5C79" size={18} />
        <p className="font-bold text-[#303F58]">Licenser {id}</p>
      </div>
      {/* HomeCards Section */}
      <div className="flex gap-3  py-2 justify-between">
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

      <div className="flex gap-3 ">
        <div className="w-[24%]  space-y-3">
          <div className="w-full grid grid-cols-12 gap-3 bg-white p-3 h-[130px] rounded-lg border shadow-md  hover:shadow-lg transition-shadow duration-300">
             <div className="col-span-2 flex justify-center ">
             
             <div
        className="flex-shrink-0 flex justify-center items-center w-[40px] h-[40px] rounded-lg"
        style={{
          backgroundColor: '#DD3F3F',
          border: `3px solid #FADDFCCC`,
        }}
      >
        <CalenderClock size={24} />
      </div>
             </div>
             <div className="col-span-10 flex flex-col space-y-2">
              <div className="text-sm space-y-1">
               <p>License Expiry Alert</p> 
              <p>license for <u> Plan 2 </u>  will expire on</p>
              </div>
              <p className="text-[#E04F52] text-[16px] font-semibold">25 Nov 24</p>
             </div>
          </div>
          <RecentActivityView/>
        </div>
        <div className="w-[86%] space-y-3">
          <div className="h-[130px] relative flex flex-col  bg-white rounded-lg">
            <img src={profileImage} className="rounded-full absolute top-8 left-5 border-2 border-white bg-slate-500 w-[61px] h-[61px]"></img>
          <div className="h-[65px] bg-cover rounded-t-lg w-full flex justify-end" style={{backgroundImage:`url(${licenserImg})`}}>
            <div className="flex py-1 mt-3">


                            <div className="flex flex-col items-center space-y-2">
                                <div className="w-4 h-4 mb-2 rounded-full border-white">
                                    <EditIcon size={40} color="#C4A25D24" />
                                </div>
                                <p className="text-center font-medium  text-white text-[10px] ms-3" >Edit Profile</p>
                            </div>

                            <div className="flex flex-col  items-center space-y-1">
                                <div  className="w-8 h-8 mb-2 rounded-full">
                                    <ViewRoundIcon size={40} color="#D52B1E4D" />

                                </div>
                                <p className="text-center font-medium  text-white text-xs ms-3">View Details</p>
                            </div>



                            <div className="flex flex-col  items-center space-y-1">
                                <div className="w-8 h-8 mb-2 rounded-full">
                                    <DeActivateIcon size={40} color="#D52B1E4D" />
                                </div>
                                <p className="text-center font-medium  text-white text-xs ms-3">DeActivate</p>

                            </div>

           </div>
          </div>
          <div className="h-[65px] py-3 bg-white rounded-b-lg">
            <div className="ms-32 space-x-11 flex">
            {licenser.map((data) => (
              <div className="text-sm">
                <p className="text-[#8F99A9] ">{data.label}</p>
                <p className="text-[#303F58] font-medium ">{data.key}</p>
              </div>
              ))}
            </div>
          </div>
          </div>
          <SupportTicketTable />
          <PaymentTable/>
        </div>
      </div>
    </div>
  );
}

export default LicenserView;
