import { useEffect, useRef, useState } from "react";
//import CalenderDays from "../../../assets/icons/CalenderDays";
//import RegionIcon from "../../../assets/icons/RegionIcon";
import { useNavigate, useParams } from "react-router-dom";
import ChevronRight from "../../../assets/icons/ChevronRight";
import DeActivateIcon from "../../../assets/icons/DeActivateIcon";
import EditIcon from "../../../assets/icons/EditIcon";
import region from "../../../assets/image/Ellipse 14 (1).png";
import person1 from "../../../assets/image/Ellipse 14.png";
import person2 from "../../../assets/image/Ellipse 43.png";
import Modal from "../../../components/modal/Modal";
import useApi from "../../../Hooks/useApi";
import { endPoints } from "../../../services/apiEndpoints";
import AreaForm from "./AreaForm";
import LeadAndLisence from "./LeadAndLisence";
import ResendActivity from "./ResendActivity";
import TeamOverview from "./TeamOverview";
import toast from "react-hot-toast";
import ConfirmModal from "../../../components/modal/ConfirmModal";
import Trash from "../../../assets/icons/Trash";

type Props = {};

const AreaView = ({}: // status,
// salesManagers
//areaCode,region
Props) => {
  const {request:deleteArea}=useApi('delete',3003)
  const topRef = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        // Scroll to the top of the referenced element
        topRef.current?.scrollIntoView({ behavior: "smooth" });
      }, []);
  const { id } = useParams();
  const navigate=useNavigate()
  const {request:getArea}=useApi('get',3003)
  const [area,setArea]=useState<any>()
  const tabs = [
    "Team Overview",
    "Lead and License Data",
    "Recend Activity Feed",
  ];
  const [activeTab, setActiveTab] = useState<string>("Team Overview");

  const [isModalOpen, setIsModalOpen] = useState({
    editArea:false,
    deleteArea:false
  });

  // Function to toggle modal visibility
  const handleModalToggle = (editArea = false,deleteArea=false) => {
    setIsModalOpen((prevState: any) => ({
      ...prevState,
      editArea,
      deleteArea
    }));
    getAreas();
  };

  const getAreas=async()=>{
    try {
      const { response, error } = await getArea(`${endPoints.AREA}/${id}`);
      console.log("res", response);
      if (response && !error) {
        setArea(response.data)
      } else {
        console.log(error.response.data.message);
      }
    } catch (err) {
      console.error("Error fetching region data:", err);
    }
  }
 useEffect(()=>{
  getAreas()
 },[id])

 const handleDelete = async () => {
  try {
    const { response, error } = await deleteArea(`${endPoints.AREA}/${id}`);
    if (response) {
      toast.success(response.data.message);
      navigate("/areas");
    } else {
      toast.error(error?.response?.data?.message || "An error occurred");
      
    }
  } catch (err) {
    console.error("Delete error:", err);
    toast.error("Failed to delete the lead.");
  }
};
 

  return (
    <>
    <div ref={topRef}>
      <div className="flex items-center text-[16px] my-2 space-x-2">
        <p onClick={()=>navigate('/areas')}  className="font-bold cursor-pointer  text-[#820000] ">Area</p>
        <ChevronRight color="#4B5C79" size={18} />
        <p className="font-bold text-[#303F58] ">{area?.areaName}</p>
      </div>
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border border-gray-200">
        <div>
          {/* Left Section: Area Icon and Details */}

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 ">
              <div className=" bg-blue space-y-1 flex flex-col items-center justify-center rounded-full ">
                <img className="w-10 h-10" src={region} alt="" />
                <h2 className="font-bold">{area?.areaName}</h2>
              </div>
              <div className="border-r border-[#DADADA] h-10 me-4"></div>
            </div>
            <div className="text-center">
              <p className="text-xs text-[#8F99A9]">Area status</p>
              <h3
                className={`px-1  rounded-full ${
                  status === "Active"
                    ? "bg-[#6AAF681A] text-green-400"
                    : "bg-gray-100 text-[#6AAF68]"
                }`}
              >
                Active
              </h3>
            </div>
            <div className="border-r border-[#DADADA] h-10 me-4"></div>
            <div className="text-center">
              <p className="text-xs text-[#8F99A9]">Area Code</p>
              <p className="text-xs">{area?.areaCode}</p>
            </div>
            <div className="border-r border-[#DADADA] h-10 me-4 "></div>
            <div className="text-center">
              <p className="text-xs text-[#8F99A9]">Region</p>
              <p  onClick={()=>navigate(`/regions/${area?.region?._id}`)} className="text-xs underline cursor-pointer">{area?.region?.regionCode}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center gap-6 text-[10px] py-2">
          {/* Right Section: Managers and Actions */}
          <div className="flex items-center gap-2">
            {/* Sales Managers */}
            <div className="flex items-center justify-between -space-x-2">
              <p className="text-sm me-5">Area Sales Managers</p>
              <img src={person1} alt="" />
              <img src={person2} alt="" />
            </div>
          </div>
          <div onClick={()=>handleModalToggle(true,false)} className="flex flex-col items-center  space-y-1 cursor-pointer">
            <div className="w-8 h-8 mb-2 rounded-full">
            <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                   <div className="ms-2 mt-2">
                   <EditIcon size={18} color="#C4A25D" />
                   </div>
                    </div>
            </div>
            <p className="text-center ms-2">Edit</p>
          </div>
          <div className="flex flex-col  items-center space-y-1 cursor-pointer">
                  <div className="w-8 h-8 mb-2 rounded-full">
                  <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                   <div className="ms-2 mt-2">
                   <DeActivateIcon size={18} color="#D52B1E4D" />
                   </div>
                    </div>
                  </div>
                  <p className="text-center ms-2">
                    DeActivate
                  </p>
                </div>
                <div onClick={() => handleModalToggle(false,true)}  className="cursor-pointer">
                <div className="rounded-full bg-[#D52B1E4D] h-9 w-9 border border-white mb-2">
                  <div className="ms-2 mt-2 ">
                    <Trash size={18} color="#BC3126" />
                  </div>
                </div>
                <p className="text-center font-medium  ">
                    Delete
                  </p>
              </div>
        </div>
      </div>
      <div className="flex gap-8 text-base font-bold my-5 border-b border-gray-200">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer py-3 px-[16px] ${
              activeTab === tab
                ? "text-deepStateBlue border-b-2 border-deepStateBlue bg-white"
                : "text-gray-600 bg-transparent"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {activeTab === "Team Overview" && <TeamOverview id={id}/>}

      {activeTab === "Lead and License Data" && <LeadAndLisence id={id}/>}

      {activeTab === "Recend Activity Feed" && <ResendActivity />}
    </div>
     <Modal open={isModalOpen.editArea} onClose={()=>handleModalToggle()} className="w-[35%]">
     <AreaForm editId={id} onClose={()=>handleModalToggle()} />
   </Modal>
   <Modal
        open={isModalOpen.deleteArea}
        align="center"
        onClose={() => handleModalToggle()}
        className="w-[30%]"
      >
        <ConfirmModal
          action={handleDelete}
          prompt="Are you sure want to delete this area?"
          onClose={() => handleModalToggle()}
        />
      </Modal>
 </>
  );
};

export default AreaView;
