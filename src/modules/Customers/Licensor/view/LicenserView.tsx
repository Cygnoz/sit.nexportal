import { useNavigate, useParams } from "react-router-dom";
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
import Modal from "../../../../components/modal/Modal";
import LicenserViewForm from "./LicenserViewForm";
import { useEffect, useState } from "react";
import LicenserForm from "../LicenserForm";
import useApi from "../../../../Hooks/useApi";
import { endPoints } from "../../../../services/apiEndpoints";
import Trash from "../../../../assets/icons/Trash";
 import ConfirmModal from "../../../../components/modal/ConfirmModal";
import toast from "react-hot-toast";

type Props = {

};

function LicenserView({ }: Props) {
  const { request: deleteLicenser } = useApi("delete", 3001);

  const {request: getaLicenser}=useApi('get',3001)
  const { id } = useParams();
  const [licenseData, setLicenseData] = useState<any>()

  const [isModalOpen, setIsModalOpen] = useState({
    editLicenser: false,
    viewLicenser: false,
    confirm: false,
    
  });
  const handleModalToggle = (

    editLicenser = false,
    viewLicenser= false,
    confirm = false,
    
    
  ) => {
    setIsModalOpen((prevState) => ({
      ...prevState,
      editLicenser,
      viewLicenser,
      confirm,
    }));
  
   // if (getLead) getLead(); // Safeguard
  };
   

     const getOneLicenser = async () => {
          try {
            const { response, error } = await getaLicenser(`${endPoints.LICENSER}/${id}`);
            if (response && !error) {
              const Licenser = response.data; // Return the fetched data
              console.log("Fetched Licenser data:", Licenser);
              const{licensers,...filteredLicencers}=Licenser
              setLicenseData(filteredLicencers);
            } else {
              // Handle the error case if needed (for example, log the error)
              console.error('Error fetching Lead data:', error);
            }
          } catch (err) {
            console.error('Error fetching Lead data:', err);
          }
        };
    
        useEffect(() => {
          getOneLicenser()
        }, [id]);

        console.log(licenseData);


        const handleDelete = async () => {
          try {
            const { response, error } = await deleteLicenser(`${endPoints.LEAD}/${id}`);
            if (response) {
              toast.success(response.data.message);
              navigate("/licenser");
            } else {
              toast.error(error?.response?.data?.message || "An error occurred");
            }
          } catch (err) {
            console.error("Delete error:", err);
            toast.error("Failed to delete the licenser.");
          }
        };
        

  // Function to toggle modal visibility

  
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
    { key: licenseData?.firstName, label: "Licenser Name" },
    { key: licenseData?.phone, label: "Phone" },
    { key: licenseData?.startDate, label: "Starting Date" },
    { key: licenseData?.endDate, label: "Ending Date" },
    { key: licenseData?.bdaDetails?.bdaName , label: "BDA" },
    { key: licenseData?.regionDetails?.regionName, label: "Region" },
    { key: licenseData?.areaDetails?.areaName, label: "Area" },
    { key: licenseData?.email, label: "Email" },
  ];
  const navigate=useNavigate()
  return (
    <>
    <div className="text-[#4B5C79] space-y-2 mb-5">
      <div className="flex items-center text-[16px]  space-x-2 mb-4">
        <p onClick={()=>navigate('/licenser')} className="font-bold cursor-pointer text-[#820000]">Licenser</p>
        <ChevronRight color="#4B5C79" size={18} />
        <p className="font-bold text-[#303F58]">{licenseData?.firstName}</p>
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
          <RecentActivityView />
        </div>
        <div className="w-[86%] space-y-3">
          <div className="h-[130px] relative flex flex-col  bg-white rounded-lg">
            <img src={profileImage} className="rounded-full absolute top-8 left-5 border-2 border-white bg-slate-500 w-[61px] h-[61px]"></img>
            <div className="h-[65px] bg-cover rounded-t-lg w-full flex justify-end" style={{ backgroundImage: `url(${licenserImg})` }}>
              <div className="flex py-1 me-3">


                <div className="flex flex-col items-center space-y-2">
                  <div onClick={() => handleModalToggle(true, false, false)} className="w-6 h-6 mb-2 rounded-full border-white" >
                    <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                   <div className="ms-2 mt-2">
                   <EditIcon size={18} color="#F0D5A0" />
                   </div>
                    </div>
                  </div>
                  <p className="text-center font-medium  text-white text-[10px] ms-3">Edit Profile</p>

                </div>

                <div className="flex flex-col  items-center space-y-2 ">
                  <div onClick={() => handleModalToggle(false, true,false)}
                    className="w-6 h-6 mb-2 rounded-full">
                      <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                   <div className="ms-2 mt-2">
                   <ViewRoundIcon size={18} color="#B6D6FF" />
                   </div>
                    </div>
                   

                  </div>
                  <p className="text-center font-medium  text-white text-[10px] ms-3">View Details</p>
                </div>



                <div className="flex flex-col  items-center space-y-2">
                  <div  className="w-6 h-6 mb-2 rounded-full">
                  <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                   <div className="ms-2 mt-2">
                   <DeActivateIcon size={18} color="#D52B1E4D" />
                   </div>
                    </div>
                    
                  </div>
                  <p className="text-center font-medium  text-white text-[10px] ms-3">DeActivate</p>

                </div>

                <div className="flex flex-col  items-center space-y-2">
                  <div onClick={() => handleModalToggle(false,false,true)} className="w-6 h-6 mb-2 rounded-full">
                  <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                  <div className="ms-2 mt-2">
                    <Trash size={18} color="red" />
                  </div>
                    </div>
                    
                  </div>
                  <p className="text-center font-medium  text-white text-[10px] ms-3">Delete</p>

                </div>


              </div>
            </div>
            <div className="h-[65px] py-3 bg-white rounded-b-lg">
              <div className="ms-32 space-x-10 flex">
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
          <PaymentTable />
        </div>
      </div>
     
    </div>
     {/* Modal controlled by state */}
     <Modal open={isModalOpen.viewLicenser} onClose={() => handleModalToggle()} className="w-[35%]">
     <LicenserViewForm onClose={() => handleModalToggle()} />
   </Modal>
   <Modal open={isModalOpen.editLicenser} onClose={() => handleModalToggle()} className="w-[60%]">
     <LicenserForm editId={id} onClose={() => handleModalToggle()} />
   </Modal>
   <Modal open={isModalOpen.confirm} align="center" onClose={() => handleModalToggle()} className="w-[30%]">
        <ConfirmModal prompt="Are you sure want to delete this licenser?"  action={handleDelete} onClose={() => handleModalToggle()} />
      </Modal>
    </>
  );
}

export default LicenserView;
