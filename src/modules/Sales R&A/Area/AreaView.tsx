import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import ChevronRight from "../../../assets/icons/ChevronRight";
import EditIcon from "../../../assets/icons/EditIcon";
import Trash from "../../../assets/icons/Trash";
import UserIcon from "../../../assets/icons/UserIcon";
import region from "../../../assets/image/Ellipse 14 (1).png";
import ConfirmModal from "../../../components/modal/ConfirmModal";
import Modal from "../../../components/modal/Modal";
import useApi from "../../../Hooks/useApi";
import { endPoints } from "../../../services/apiEndpoints";
import AreaForm from "./AreaForm";
import LeadAndLisence from "./LeadAndLisence";
import ResendActivity from "./RecentActivity";
import TeamOverview from "./TeamOverview";
import DeActivateIcon from "../../../assets/icons/DeActivateIcon";
import UserRoundCheckIcon from "../../../assets/icons/UserRoundCheckIcon";
import Button from "../../../components/ui/Button";
import TargetAddForm from "./TargetAddForm";
import { useUser } from "../../../context/UserContext";

type Props = {};

const AreaView = ({ }: // status,
  // salesManagers
  //areaCode,region
  Props) => {
    const {user}=useUser()
  user?.role

  const { request: deleteArea } = useApi('delete', 3003)
  const topRef = useRef<HTMLDivElement>(null);
  const { request: getActivities } = useApi("get", 3003);
  const [activityData, setActivityData] = useState<any[]>([]);
  const [activityloading, setActivityLoading] = useState<boolean>(true);

  useEffect(() => {
    // Scroll to the top of the referenced element
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  const { id } = useParams();
  const navigate = useNavigate()
  const { request: getArea } = useApi('get', 3003)
  const { request: deactivationArea } = useApi('put', 3003)
  const [area, setArea] = useState<any>()
  const tabs = [
    "Team Overview",
    "Lead and License Data",
    "Recend Activity Feed",
  ];
  const [activeTab, setActiveTab] = useState<string>("Team Overview");
  const [isModalOpen, setIsModalOpen] = useState({
    editArea: false,
    deleteArea: false,
    deactivateArea: false,
    AddTarget:false
  });

  // Function to toggle modal visibility
  const handleModalToggle = (editArea = false, deleteArea = false, deactivateArea = false,AddTarget= false) => {
    setIsModalOpen((prevState: any) => ({
      ...prevState,
      editArea,
      deleteArea,
      deactivateArea,
      AddTarget
    }));
    getAreas();
  getRecentActivities()
  };

  const getAreas = async () => {
    try {
      const { response, error } = await getArea(`${endPoints.AREA}/${id}`);
      if (response && !error) {
        setArea(response.data);
      } else {
        console.log(error.response.data.message);
      }
    } catch (err) {
      console.error("Error fetching region data:", err);
    }
  };

  useEffect(() => {
    getAreas();
  }, [id]);

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

  const getRecentActivities = async () => {
    try {
      const { response, error } = await getActivities(`${endPoints.RECENT_ACTIVITY}/${id}`);

      if (response && !error) {
        const modifiedData = response.data.map((item: any) => {
          const [day, month, year] = item.timestamp.split(" ")[0].split("/");
          const formattedDate: any = new Date(`${month}/${day}/${year}`);

          return {
            ...item,
            formattedDate: !isNaN(formattedDate)
              ? formattedDate.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              : "Invalid Date",
          };
        });

        setActivityData(modifiedData);
      } else {
        console.log(error.data.message);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setActivityLoading(false);
    }
  };

  useEffect(() => {
    getRecentActivities();
  }, []);
  const handleDeactivate = async () => {
    const body={
      status:area?.area?.status==='Active'?'Deactive':'Active'
    }
    try {
      const { response, error } = await deactivationArea(`${endPoints.DEACTIVATE_AREA}/${id}`,body);
      console.log(response);
      console.log(error, "error message");
      
      
      if (response) {
       toast.success(response.data.message);
       getAreas()
       navigate("/areas");
       
      } else {
        console.log(error?.response?.data?.message);
        
        toast.error(error?.response?.data?.message  || "An error occurred");     
        
        
      }
    } catch (err) {
      console.error("Deactivate error:", err);
      toast.error("Failed to Deactivate the lead.");
    }
  };


  

    return (
    <>
      <div ref={topRef}>
        <div className="flex items-center text-[16px] my-2 space-x-2">
          <p onClick={() => navigate('/areas')} className="font-bold cursor-pointer  text-[#820000] ">Area</p>
          <ChevronRight color="#4B5C79" size={18} />
          <p className="font-bold text-[#303F58] ">{area?.area?.areaName}</p>
        </div>
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border border-gray-200">
          <div>
            {/* Left Section: Area Icon and Details */}

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 ">
                <div className=" bg-blue space-y-1 flex flex-col items-center justify-center rounded-full ">
                  <img className="w-10 h-10" src={region} alt="" />
                  <h2 className="font-bold">{area?.area?.areaName}</h2>
                </div>
                <div className="border-r border-[#DADADA] h-10 me-4"></div>
              </div>
              <div className="text-center">
                <p className="text-xs text-[#8F99A9]">Area status</p>
                <h3
                  className={`p-2 rounded-full text-xs font-medium ${area?.area?.status === "Active"
                    ? "bg-[#6AAF681A] text-[#6AAF68]"
                    : "bg-[#6AAF681A] text-orange-500"
                    }`}
                >
                  {area?.area?.status}
                </h3>
              </div>
              <div className="border-r border-[#DADADA] h-10 me-4"></div>
              <div className="text-center">
                <p className="text-xs text-[#8F99A9]">Area Code</p>
                <p className="text-xs">{area?.area?.areaCode}</p>
              </div>
              <div className="border-r border-[#DADADA] h-10 me-4 "></div>
              <div className="text-center">
                <p className="text-xs text-[#8F99A9]">Region</p>
                <p onClick={() => navigate(`/regions/${area?.area?.region?._id}`)} className="text-xs underline cursor-pointer">{area?.area?.region?.regionCode}</p>
              </div>
              <div className="border-r border-[#DADADA] h-10 me-4 "></div>
              {user?.role === 'Super Admin' && (
              <div className="text-center">
                <p className="text-xs text-[#8F99A9]">Total Target</p>
                <p  className="text-xs  cursor-pointer">10</p>
              </div>
               )}
              {user?.role === 'Super Admin' && (
           
         
             <div className="ms-2"  onClick={() => handleModalToggle(false, false, false,true)}>
             <Button variant="tertiary" size="sm" className="text-[#565148] text-xs font-medium">
                        <span className="font-bold text-xl"><UserIcon  color="#565148"/></span> Assign Target
                      </Button>
             </div>
              )}
            </div>
          </div>

          <div className="flex justify-end items-center gap-8 text-[10px] py-2">
            {/* Right Section: Managers and Actions */}
            <div onClick={()=>navigate(`/area-manager/${area?.areaManagers[0]._id}`)}  className="flex items-center   ">
              {/* Sales Managers */}
                {area?.areaManagers[0]&&<> 
                <p className="text-sm me-5">Area Manager</p>
                <div  className="flex flex-col items-center  space-y-1 cursor-pointer">
              <div className="w-8 h-8 mb-2 rounded-full">
              {
                  area?.areaManagers[0]?.user?.userImage?
                  <img className="w-10  h-9 rounded-full" src={area?.areaManagers[0]?.user?.userImage} alt="" />:
                  <p className="w-9  h-9 border  border-[#E7E8EB] bg-black rounded-full flex justify-center items-center">
              <UserIcon color="white" />
            </p>
                }
              </div>
              <p className="text-center ms-2">{area?.areaManagers[0]?.user?.userName}</p>
            </div>
                </> }  
               
               

             
            </div>
            <div onClick={() => handleModalToggle(true, false, false,false)} className="flex flex-col items-center  space-y-1 cursor-pointer">
              <div className="w-8 h-8 mb-2 rounded-full">
                <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                  <div className="ms-2 mt-2">
                    <EditIcon size={18} color="#C4A25D" />
                  </div>
                </div>
              </div>
              <p className="text-center ms-2">Edit</p>
            </div>
            <div
              onClick={() => handleModalToggle(false, false, true,false)}
              className="flex flex-col items-center space-y-1 cursor-pointer"
            >
              <div className="w-8 h-8 mb-2 rounded-full">
              {area?.area?.status === "Active" ?
                <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                  <div className="ms-2 mt-2">
                      <DeActivateIcon size={18} color="#D52B1E4D" />
                  </div>
                </div>
                :
                <div className="rounded-full bg-[#B6FFD7] h-9 w-9 border border-white">
                <div className="ms-2 mt-2">
                    <UserRoundCheckIcon size={20} color="#D52B1E4D" />
                </div>
              </div>

                  }

              </div>
              <p className="text-center ms-2">
                {area?.area?.status === "Active" ? "Deactivate" : "Activate"}
              </p>
            </div>
            <div onClick={() => handleModalToggle(false, true, false,false)} className="cursor-pointer">
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
              className={`cursor-pointer py-3 px-[16px] ${activeTab === tab
                ? "text-deepStateBlue border-b-2 border-deepStateBlue bg-white"
                : "text-gray-600 bg-transparent"
                }`}
            >
              {tab}
            </div>
          ))}
        </div>

        {activeTab === "Team Overview" && <TeamOverview id={id} />}

        {activeTab === "Lead and License Data" && <LeadAndLisence id={id} />}

        {activeTab === "Recend Activity Feed" && <ResendActivity recentActData={activityData} loading={activityloading}/>}
      </div>
      <Modal open={isModalOpen.editArea} onClose={() => handleModalToggle()} className="w-[35%]">
        <AreaForm editId={id} onClose={() => handleModalToggle()} />
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

      <Modal
        open={isModalOpen.deactivateArea}
        align="center"
        onClose={() => handleModalToggle()}
        className="w-[30%]"
      >
        <ConfirmModal
          action={handleDeactivate}
          prompt={
            area?.area?.status === "Active"
              ? "Are you sure want to deactivate this area?"
              : "Are you sure want to activate this area?"
          }
          onClose={() => handleModalToggle()}
        />
      </Modal>
      <Modal open={isModalOpen.AddTarget} onClose={() => handleModalToggle()} className="w-[35%]">
        <TargetAddForm  onClose={() => handleModalToggle()} />
      </Modal>

    </>
  );
};

export default AreaView;
