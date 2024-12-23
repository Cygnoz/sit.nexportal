import { useNavigate, useParams } from "react-router-dom";

import CalenderRound from "../../../../assets/icons/CalenderRound";

import ChevronRight from "../../../../assets/icons/ChevronRight";
import EditIcon from "../../../../assets/icons/EditIcon";
import EmailIcon from "../../../../assets/icons/EmailIcon";
import EmailRoundIcon from "../../../../assets/icons/EmailRoundIcon";
import PhoneRingIcon from "../../../../assets/icons/PhoneRingIcon";
import ViewRoundIcon from "../../../../assets/icons/ViewRoundIcon";
import profileImage from "../../../../assets/image/AvatarImg.png";
import BackgroundImage from "../../../../assets/image/LeadView.jpg";
import BuildingIcon from "../../../../assets/icons/BuildingIcon";
import CalenderDays from "../../../../assets/icons/CalenderDays";
import Modal from "../../../../components/modal/Modal";
import TrialViewForm from "./TrialViewForm";
import { useEffect, useRef, useState } from "react";
// import ArrowRight from "../../../../assets/icons/ArrowRight"
import TrialEditForm from "./TrialEditForm";
import Button from "../../../../components/ui/Button";
import ExtentTrail from "./ExtentTrail";
import ConvertModal from "../../../../components/modal/ConvertionModal/CovertLicenser";
import ResumePauseTrail from "./ResumePauseTrail";
import rightArrow from "../../../../assets/image/right-arrow.png";
import CalenderModal from "./CalenderModal";
import DeActivateIcon from "../../../../assets/icons/DeActivateIcon";
import { Bar, BarChart, Cell, Tooltip, XAxis, YAxis } from "recharts";
import bgpicturee from "../../../../assets/image/resumeModalImg.png";
import CalenderPlus from "../../../../assets/icons/CalenderPlus";
import Pause from "../../../../assets/icons/Pause";
import ArrowBigDash from "../../../../assets/icons/ArrowBigDash";
import useApi from "../../../../Hooks/useApi";
import { endPoints } from "../../../../services/apiEndpoints";
import { useResponse } from "../../../../context/responseContext";
import CalenderClock from "../../../../assets/icons/CalenderClock";
import Timer from "../../../../assets/icons/Timer";
type Props = {};

const TrialView = ({}: Props) => {
  // State to manage modal visibility
  const { request: getCustomerData } = useApi("get", 3001);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [extentModalOpen, setExtentModalOpen] = useState(false);
  const [conLicModalOpen, setConvLicModalOpen] = useState(false);
  const [pausModalOpen, setPausModalOpen] = useState(false);
  const [calenderModalOpen, setCalenderModalOpen] = useState(false);
  const [trialStatus, setTrialStatus] = useState(false);
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const { request: getTrial } = useApi("get", 3001);
  const [trial, setTrial] = useState<any>([]);
  const handleScrollToTop = () => {
    if (mainContainerRef.current) {
      mainContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const { setCustomerData, customerData } = useResponse();

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  const edtiModalToggle = () => {
    setEditModalOpen((prev) => !prev);
  };

  const extentModalToggle = () => {
    setExtentModalOpen((prev) => !prev);
  };

  const covertModalToggle = () => {
    setConvLicModalOpen((prev) => !prev);
  };

  const pauseModalToggle = () => {
    setPausModalOpen((prev) => !prev);
  };

  const calenderModalToggle = () => {
    setCalenderModalOpen((prev) => !prev);
  };

  const { id } = useParams();
  function calculateDuration(startDate:any, endDate:any) {
    // Parse the date strings into Date objects
    const start:any = new Date(startDate);
    const end:any = new Date(endDate);
  
    // Validate dates
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return "Invalid date format. Please use YYYY-MM-DD.";
    }
  
    // Ensure the end date is after or equal to the start date
    if (end < start) {
      return "End date must be after or the same as the start date.";
    }
  
    // Calculate the duration in days
    const durationInMilliseconds = end - start;
    const durationInDays = durationInMilliseconds / (1000 * 60 * 60 * 24);
  
    setCustomerData((prev:any)=>({...prev,duration:durationInDays}))
  }

  const getOneTrial = async () => {
    try {
      const { response, error } = await getTrial(
        `${endPoints.GET_TRIAL}/${customerData?.organizationId}`
      );
      if (response && !error) {
        const Trial = response.data; // Return the fetched data
        console.log("Fetched Trail data:", Trial);
        setTrial(Trial);
      } else {
        // Handle the error case if needed (for example, log the error)
        console.error("Error fetching Lead data:", error);
      }
    } catch (err) {
      console.error("Error fetching Lead data:", err);
    }
  };

  const getCustomer = async () => {
    try {
      const { response, error } = await getCustomerData(
        `${endPoints.LEAD}/${id}`
      );
      if (response && !error) {
        const Lead = response.data; // Return the fetched data
        console.log("Fetched Customer data:", Lead);
        setCustomerData(response.data);
        calculateDuration(response.data.startDate,response.data.endDate)
      } else {
        // Handle the error case if needed (for example, log the error)
        console.error("Error fetching Lead data:", error);
      }
    } catch (err) {
      console.error("Error fetching Lead data:", err);
    }
  };
  

  useEffect(() => {
    getCustomer();
  }, [id]);

  useEffect(()=>{
    getOneTrial();
  },[customerData])



  const AreaRevData = [
    { name: "Area 001", pv: 74479, color: "#4caf50" }, // Green
    { name: "Area 002", pv: 56335, color: "#2196f3" }, // Blue
    { name: "Area 003", pv: 43887, color: "#ff9800" }, // Orange
    { name: "Area 004", pv: 19027, color: "#f44336" }, // Red
    { name: "Area 005", pv: 8142, color: "#9c27b0" }, // Purple
    { name: "Area 006", pv: 4918, color: "#3f51b5" }, // Blue
  ];

  const CustomizedAxisTick = ({ x, y, payload }: any) => {
    // Find the corresponding logo for the country

    return (
      <g transform={`translate(${x},${y})`}>
        <text y={2} fontSize={14} dy={3} textAnchor="end" fill="#666">
          {payload.value}
        </text>
      </g>
    );
  };

  const CustomLabel = ({ x, y, width, value }: any) => (
    <text
      x={x + width + 10}
      y={y + 13}
      fontSize={10}
      textAnchor="start"
      fill="#000"
    >
      {value}
    </text>
  );

  const navigate = useNavigate();


  const getStatusClass = (status: string | undefined) => {
    switch (status) {
      case "New":
        return "bg-blue-500 text-white py-1 px-2 w-fit rounded-full";
      case "Contacted":
        return "bg-cyan-800 text-white py-1 px-2 rounded-full";
      case "In Progress":
        return "bg-yellow-100 text-black py-1 px-2 rounded-full";
      case "Proposal":
        return "bg-violet-300 text-black py-1 px-2 rounded-full";
      case "Lost":
        return "bg-red-500 text-white py-1 px-2 rounded-full";
      case "Won":
        return "bg-green-500 text-white  py-1 px-2 w-fit rounded-full";
  default:
        return "";
    }
  };

  return (
    <div
      ref={mainContainerRef}
      style={{
        height: "100vh",
        overflowY: "scroll",
        position: "relative",
      }}
      className="mb-2 hide-scrollbar"
    >
      <div className="flex items-center text-[16px] space-x-2">
        <p
          onClick={() => navigate("/trial")}
          className="font-bold cursor-pointer text-[#820000] "
        >
          Trail
        </p>
        <ChevronRight color="#4B5C79" size={18} />
        <p className="font-bold text-[#303F58] ">{trial?.primaryContactName}</p>
      </div>

      {trialStatus && (
        <div className="bg-[#F3E6E6] relative rounded-lg mt-2 ">
          <img
            className="h-24 w-48 top-4  right-7  absolute"
            src={bgpicturee}
            alt=""
          />
          <div className="p-3 flex justify-between">
            <div className="p-2">
              <h1 className="bg-[#B08E20] p-1 rounded-lg text-white text-xs font-semibold">
                Trail On Hold
              </h1>
            </div>
            <div className="justify-end">
              <button
                onClick={pauseModalToggle}
                type="button"
                className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900 me-auto"
              >
                &times;
              </button>
            </div>
          </div>
          <div className="flex p-2">
            <h1 className="mt-2 ml-2">
              This trial is currently paused. No activities are allowed until
              resumed
            </h1>
            <Button onClick={pauseModalToggle} className="ml-96 h-10 -mt-2">
              Resume Trail
            </Button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-12 mt-5 gap-4">
        <div className="col-span-3 w-full ">
          <div
            className="h-fit w-full bg-cover rounded-xl p-6"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
          >
            <div className="flex justify-end">
            <div className={`${getStatusClass(customerData?.trialStatus)}  flex items-center gap-2  w-fit ms-auto `}>
        <div className={`w-2 h-2 -mt-[2px] ${customerData?.trialStatus=='In Progress' ||customerData?.trialStatus=='Proposal'?'bg-black':'bg-white'} rounded-full`}></div>
         <p className="text-sm">{customerData?.trialStatus}</p>
        </div>
            </div>
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img
                  src={customerData?.image?customerData?.image:profileImage} // Replace with the actual image URL
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mb-3 mt-3">
                <p className="text-[#FFFFFF] text-xs font-semibold mb-3">
                  {trial?.primaryContactName}
                </p>
                <p className="text-[#FFFFFF] text-xs font-normal">
              
                  <span className="text-xs font-bold ">{customerData?.customerId}</span>
                </p>
              </div>
            </div>

            <div className="flex gap-4 my-4 ">
              <BuildingIcon color="#FFFFFF" size={16} />
              <span className="text-[#FFFFFF] text-xs font-normal">
                Organization
              </span>
              <div className="w-2 h-2 rounded-full mt-1 bg-white"></div>
              <span className="text-[#FFFFFF] text-xs font-normal">
                {trial?.organizationName}
              </span>
            </div>
            <div className="flex gap-4 my-4 ">
              <BuildingIcon color="#FFFFFF" size={16} />
              <span className="text-[#FFFFFF] text-xs font-normal">
                Organization Id
              </span>
              <div className="w-2 h-2 rounded-full mt-1 bg-white"></div>
              <span className="text-[#FFFFFF] text-xs font-normal">
                {trial?.organizationId}
              </span>
            </div>

            <div className="my-8">
              <div className="flex gap-4 my-4 ">
                <EmailIcon color="#FFFFFF" size={16} />
                <p className="text-[#FFFFFF] text-xs font-normal">
                 {trial?.primaryContactEmail}
                </p>
              </div>
              <div className="flex gap-4 mb-2">
                <PhoneRingIcon color="#FFFFFF" size={16} />
                <p className="text-[#FFFFFF] text-xs font-normal">
                  {trial?.primaryContactNum}
                </p>
              </div>
            </div>

            <div className="flex gap-4 my-4 ">
              <CalenderClock color="#FFFFFF" size={16} />
              <span className="text-[#FFFFFF] text-xs font-normal">
                Start Date
              </span>
              <div className="w-2 h-2 rounded-full mt-1 bg-white"></div>
              <span className="text-[#FFFFFF] text-xs font-normal">
                { new Date(customerData?.startDate).toLocaleDateString("en-GB")}
              </span>
            </div>
            <div className="flex gap-4 my-4 ">
              <CalenderClock color="#FFFFFF" size={16} />
              <span className="text-[#FFFFFF] text-xs font-normal">
                End Date
              </span>
              <div className="w-2 h-2 rounded-full mt-1 bg-white"></div>
              <span className="text-[#FFFFFF] text-xs font-normal">
              { new Date(customerData?.endDate).toLocaleDateString("en-GB")}
              </span>
            </div>

            <div className="flex gap-4 my-4  p-2 w-48 rounded-xl mt-7 bg-[#34B8A4]">
              <Timer color="#FFFFFF" size={16} />
              <span className="text-[#FFFFFF] text-xs font-normal">
                Duration
              </span>
              <div className="w-2 h-2 rounded-full mt-1 bg-white"></div>
              <span className="text-[#FFFFFF] text-xs font-normal">
                {customerData?.duration} Days
              </span>
            </div>

            <div className="my-4 mt-7">
              <div className="flex gap-4  my-3">
                <p className="text-[#FFFFFF] text-xs font-normal">Region</p>
                <p className="text-[#FFFFFF] text-xs font-bold">{customerData?.regionDetails?.regionName}</p>
              </div>
              <div className="flex gap-4 mb-4 ">
                <p className="text-[#FFFFFF] text-xs font-normal">Area</p>
                <p className="text-[#FFFFFF] text-xs font-bold ms-3">{customerData?.areaDetails?.areaName}</p>
              </div>
            </div>

            <div className="flex w-full justify-around  h-20 px-6 py-4 gap-5 rounded-xl bg-[#FFFFFF33]">
              <div>
                <div className="rounded-full cursor-pointer bg-[#C4A25D4D] h-9 w-9 border border-white">
                  <div className="ms-2 mt-2">
                    <EmailRoundIcon size={18} color="#F0D5A0" />
                  </div>
                </div>

                <p className="text-[#FFF9F9] text-[10px] font-medium ms-1 mt-1">
                  Email
                </p>
              </div>
              <div onClick={edtiModalToggle}>
                <div className="rounded-full cursor-pointer bg-[#C4A25D4D] h-9 w-9 border border-white">
                  <div className="ms-2 mt-2">
                    <EditIcon size={18} color="#F0D5A0" />
                  </div>
                </div>
                <p className="text-[#FFF9F9] text-[10px] font-medium mt-1 ms-2">
                  Edit
                </p>
              </div>
              <div onClick={handleModalToggle}>
                <div className="rounded-full cursor-pointer bg-[#C4A25D4D] h-9 w-9 border border-white">
                  <div className="ms-2 mt-2">
                    <ViewRoundIcon size={18} color="#B6D6FF" />
                  </div>
                </div>
                <p className="text-[#FFF9F9] text-[10px] font-medium ms-1 mt-1">
                  View
                </p>
              </div>
              <div>
                <div className="rounded-full cursor-pointer  bg-[#C4A25D4D] h-9 w-9 border border-white">
                  <div className="ms-2 mt-2">
                    <DeActivateIcon size={18} color="#D52B1E4D" />
                  </div>
                </div>
                <p className="text-[#FFF9F9] text-[10px] font-medium mt-1">
                  Delete
                </p>
              </div>
            </div>
            <div
              onClick={calenderModalToggle}
              className="flex gap-2 rounded-xl w-full justify-center cursor-pointer  bg-[#FFFFFF33]  py-3 px-2 h-14 my-4"
            >
              <div className="px-2 ">
                <CalenderRound size={32} />
              </div>
              <p className="mt-2 text-[#FFFFFF] text-xs font-medium">
                View Calender
              </p>
            </div>

            <div className=" gap-2 w-full cursor-pointer  flex justify-between my-2">
              <div onClick={extentModalToggle}>
                <Button
                  className="w-36 h-10 flex justify-center"
                  variant="tertiary"
                >
                  <CalenderPlus size={16} color="#4B5C79" />
                  <p className="text-#565148 font-medium text-xs">
                    Extent Trial
                  </p>
                </Button>
              </div>
              <div onClick={pauseModalToggle}>
                <Button
                  className="w-36 h-10 flex justify-center"
                  variant="secondary"
                >
                  {trialStatus ? (
                    <ArrowBigDash size={16} />
                  ) : (
                    <Pause size={16} />
                  )}
                  <p className="text-#585953 font-medium text-xs">
                    {trialStatus ? "Resume" : "Pause"} Trial
                  </p>
                </Button>
              </div>
            </div>

            <div
              className="rounded-lg w-full mt-4  bg-[#820000] h-12 py-3 px-3 mb-4 cursor-pointer"
              onClick={covertModalToggle}
            >
              <p className="text-center text-[#FEFDF9] text-base font-medium">
                Converted to Licenser
              </p>
            </div>
            <hr />
            <div className="p-4">
              <p className="text-[#FFFFFF] text-xs font-normal mb-2">
                Assigned BDA
              </p>
              <div className="flex gap-2">
                <div className="rounded-full w-7 h-7 overflow-hidden">
                  <img src={profileImage} alt="" />
                </div>
                <p className="text-[#FFFFFF] text-xs font-bold py-2 px-1">
                  Ronald J
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5 w-full h-fit rounded-lg p-5 gap-5 bg-[#FFFFFF]">
          <h1 className="text-sm font-bold">Recent Activities</h1>
          <div className="bg-[#F5F9FC] p-5 rounded-lg my-4">
            <div className="ml-24 my-1 text-sm font-bold">
              <p>Email Sent</p>
            </div>
            <div className="flex gap-6">
              <div className="mt-2 w-11 h-11 bg-[#EBEFF4] rounded-full">
                <img
                  className="w-6 h-6 ms-3 mt-[25%]"
                  src={rightArrow}
                  alt=""
                />
              </div>
              <div className="w-3 h-3 mt-3 ml-6 bg-[#C8C8C8] rounded-full shadow-md"></div>

              <div className="flex gap-2 mt-2 -ml-2">
                <EditIcon size={20} />
                <div className="w-32 h-8 p-2 bg-[#FFFFFF] flex -mt-2 rounded-2xl">
                  <div className="rounded-full w-5 h-5 overflow-hidden">
                    <img src={profileImage} alt="" />
                  </div>
                  <p className="text-[#4B5C79] text-xs font-medium ml-1">
                    Kristin Watson
                  </p>
                </div>
              </div>
              <div className="w-3 h-3 mt-3 -ml-4 bg-[#C8C8C8] rounded-full shadow-md"></div>
              <div className="mt-2 -ml-2">
                <p className="text-[#4B5C79] text-xs font-medium">
                  19 minutes ago
                </p>
              </div>
            </div>
            <div className="ms-24 -mt-1">
              <p className="text-[#4B5C79] text-xs font-medium">
                Details{" "}
                <span className="text-[#4B5C79] text-sm font-bold">
                  Lead of the Trail
                </span>
              </p>
            </div>
          </div>

          <div className="bg-[#F5F9FC] p-5 rounded-lg my-4">
            <div className="ml-24 my-1 text-sm font-bold">
              <p>Email Sent</p>
            </div>
            <div className="flex gap-6">
              <div className="mt-2 w-11 h-11 bg-[#EBEFF4] rounded-full">
                <img
                  className="w-6 h-6 ms-3 mt-[25%]"
                  src={rightArrow}
                  alt=""
                />
              </div>
              <div className="w-3 h-3 mt-3 ml-6 bg-[#C8C8C8] rounded-full shadow-md"></div>

              <div className="flex gap-2 mt-2 -ml-2">
                <EditIcon size={20} />
                <div className="w-32 h-8 p-2 bg-[#FFFFFF] flex -mt-2 rounded-2xl">
                  <div className="rounded-full w-5 h-5 overflow-hidden">
                    <img src={profileImage} alt="" />
                  </div>
                  <p className="text-[#4B5C79] text-xs font-medium ml-1">
                    Kristin Watson
                  </p>
                </div>
              </div>
              <div className="w-3 h-3 mt-3 -ml-4 bg-[#C8C8C8] rounded-full shadow-md"></div>
              <div className="mt-2 -ml-2">
                <p className="text-[#4B5C79] text-xs font-medium">
                  19 minutes ago
                </p>
              </div>
            </div>
            <div className="ms-24 -mt-1">
              <p className="text-[#4B5C79] text-xs font-medium">
                Details{" "}
                <span className="text-[#4B5C79] text-sm font-bold">
                  Lead of the Trail
                </span>
              </p>
            </div>
          </div>
          <div className="bg-[#F5F9FC] p-5 rounded-lg my-4">
            <div className="ml-24 my-1 text-sm font-bold">
              <p>Email Sent</p>
            </div>
            <div className="flex gap-6">
              <div className="mt-2 w-11 h-11 bg-[#EBEFF4] rounded-full">
                <img
                  className="w-6 h-6 ms-3 mt-[25%]"
                  src={rightArrow}
                  alt=""
                />
              </div>
              <div className="w-3 h-3 mt-3 ml-6 bg-[#C8C8C8] rounded-full shadow-md"></div>

              <div className="flex gap-2 mt-2 -ml-2">
                <EditIcon size={20} />
                <div className="w-32 h-8 p-2 bg-[#FFFFFF] flex -mt-2 rounded-2xl">
                  <div className="rounded-full w-5 h-5 overflow-hidden">
                    <img src={profileImage} alt="" />
                  </div>
                  <p className="text-[#4B5C79] text-xs font-medium ml-1">
                    Kristin Watson
                  </p>
                </div>
              </div>
              <div className="w-3 h-3 mt-3 -ml-4 bg-[#C8C8C8] rounded-full shadow-md"></div>
              <div className="mt-2 -ml-2">
                <p className="text-[#4B5C79] text-xs font-medium">
                  19 minutes ago
                </p>
              </div>
            </div>
            <div className="ms-24 -mt-1">
              <p className="text-[#4B5C79] text-xs font-medium">
                Details{" "}
                <span className="text-[#4B5C79] text-sm font-bold">
                  Lead of the Trail
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="bg-white rounded-lg w-full p-3">
            <h1 className="text-lg font-bold mb-2">Feature Usage Progress</h1>

            <div className="ms-1">
              <BarChart
                width={450}
                height={470}
                data={AreaRevData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                layout="vertical"
              >
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={<CustomizedAxisTick />}
                  tickLine={false}
                  axisLine={{ stroke: "#000" }} // Y axis line
                />
                <XAxis
                  type="number"
                  tick={{ fontSize: 10 }}
                  axisLine={{ stroke: "transparent" }} // Remove X axis line
                  tickLine={false} // Remove ticks on the X axis
                />
                <Tooltip />
                <Bar
                  dataKey="pv"
                  radius={[5, 5, 5, 5]}
                  barSize={20}
                  label={<CustomLabel />}
                >
                  {AreaRevData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry?.color} />
                  ))}
                </Bar>
              </BarChart>
            </div>
          </div>
        </div>
      </div>

      {/* Modal controlled by state */}
      <Modal
        open={isModalOpen}
        align="center"
        onClose={handleModalToggle}
        className="w-[40%]"
      >
        <TrialViewForm   onClose={handleModalToggle} />
      </Modal>

      {/* Modal controlled by state */}
      <Modal
        open={editModalOpen}
        align="center"
        onClose={edtiModalToggle}
        className="w-[35%]"
      >
        <TrialEditForm onClose={edtiModalToggle} />
      </Modal>

      {/* Modal controlled by state */}
      <Modal
        open={extentModalOpen}
        align="center"
        onClose={extentModalToggle}
        className="w-[35%]"
      >
        <ExtentTrail onClose={extentModalToggle} />
      </Modal>

      {/* Modal controlled by state */}
      <Modal
        open={conLicModalOpen}
        align="center"
        onClose={covertModalToggle}
        className="w-[30%]"
      >
        <ConvertModal orgData={trial}  onClose={covertModalToggle} type="trial" />
      </Modal>

      {/* Modal controlled by state */}
      <Modal
        open={pausModalOpen}
        align="center"
        onClose={pauseModalToggle}
        className="w-[35%]"
      >
        <ResumePauseTrail
          handleScrollTop={handleScrollToTop}
          trialStatus={trialStatus}
          setTrialStatus={setTrialStatus}
          onClose={pauseModalToggle}
        />
      </Modal>

      {/* Modal controlled by state */}
      <Modal
        open={calenderModalOpen}
        align="center"
        onClose={calenderModalToggle}
        className="w-[65%]"
      >
        <CalenderModal onClose={calenderModalToggle} />
      </Modal>
    </div>
  );
};

export default TrialView;
