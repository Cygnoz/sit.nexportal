import { useParams } from "react-router-dom";

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
import { useState } from "react";
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

type Props = {};

const TrialView = ({}: Props) => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [extentModalOpen, setExtentModalOpen] = useState(false);
  const [conLicModalOpen, setConvLicModalOpen] = useState(false);
  const [pausModalOpen, setPausModalOpen] = useState(false);
  const [calenderModalOpen, setCalenderModalOpen] = useState(false);
  // const [pauseTrail,setPauseTrial]=useState(false)
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

  return (
    <div className="mb-2">
      <div className="flex items-center text-[16px] space-x-2">
        <p className="font-bold text-[#820000] ">Trail</p>
        <ChevronRight color="#4B5C79" size={18} />
        <p className="font-bold text-[#303F58] "> {id}</p>
      </div>

      <div className="bg-[#F3E6E6] rounded-lg mt-2">
        <div className="p-2 flex justify-between">
          <div className="p-2">
            <h1 className="bg-[#B08E20] p-1 rounded-lg text-white text-xs font-semibold">
              Trail On Hold
            </h1>
          </div>
          <div className="justify-end">
            <button
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
          <Button className="ml-96">Resume Trail</Button>
          <div className="w-12 h-12 rounded-full overflow-hidden ml-64">
            <img
              src={profileImage} // Replace with the actual image URL
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 mt-5 gap-4">
        <div className="col-span-3 w-full ">
          <div
            className="h-fit w-full bg-cover rounded-xl p-6"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
          >
            <div className="flex justify-end">
              <div className="bg-[#54B86DE0] py-1 px-2 w-fit rounded-2xl ">
                <p className="text-[#FFFFFF] text-xs font-normal">
                  In progress
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img
                  src={profileImage} // Replace with the actual image URL
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mb-3 mt-3">
                <p className="text-[#FFFFFF] text-xs font-semibold mb-3">
                  Angela John
                </p>
                <p className="text-[#FFFFFF] text-xs font-normal">
                  Lead ID{" "}
                  <span className="text-xs font-bold ms-3">BDA12345</span>
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
                DeltaTech
              </span>
            </div>
            <div className="flex gap-4 my-4 ">
              <BuildingIcon color="#FFFFFF" size={16} />
              <span className="text-[#FFFFFF] text-xs font-normal">
                Organization Id
              </span>
              <div className="w-2 h-2 rounded-full mt-1 bg-white"></div>
              <span className="text-[#FFFFFF] text-xs font-normal">
                ORG-1897
              </span>
            </div>

            <div className="my-8">
              <div className="flex gap-4 my-4 ">
                <EmailIcon color="#FFFFFF" size={16} />
                <p className="text-[#FFFFFF] text-xs font-normal">
                  Angelinaj@gmail.com
                </p>
              </div>
              <div className="flex gap-4 mb-2">
                <PhoneRingIcon color="#FFFFFF" size={16} />
                <p className="text-[#FFFFFF] text-xs font-normal">
                  (480) 555-0103
                </p>
              </div>
            </div>

            <div className="flex gap-4 my-4 ">
              <CalenderDays color="#FFFFFF" size={16} />
              <span className="text-[#FFFFFF] text-xs font-normal">
                Start Date
              </span>
              <div className="w-2 h-2 rounded-full mt-1 bg-white"></div>
              <span className="text-[#FFFFFF] text-xs font-normal">
                04 Dec 2024
              </span>
            </div>
            <div className="flex gap-4 my-4 ">
              <CalenderDays color="#FFFFFF" size={16} />
              <span className="text-[#FFFFFF] text-xs font-normal">
                End Date
              </span>
              <div className="w-2 h-2 rounded-full mt-1 bg-white"></div>
              <span className="text-[#FFFFFF] text-xs font-normal">
                03 Jan 2024
              </span>
            </div>

            <div className="flex gap-4 my-4  p-2 w-48 rounded-xl mt-7 bg-[#34B8A4]">
              <EmailIcon color="#FFFFFF" size={16} />
              <span className="text-[#FFFFFF] text-xs font-normal">
                Duration
              </span>
              <div className="w-2 h-2 rounded-full mt-1 bg-white"></div>
              <span className="text-[#FFFFFF] text-xs font-normal">
                30 Days
              </span>
            </div>

            <div className="my-4 mt-7">
              <div className="flex gap-4  my-3">
                <p className="text-[#FFFFFF] text-xs font-normal">Region</p>
                <p className="text-[#FFFFFF] text-xs font-bold">Kerala</p>
              </div>
              <div className="flex gap-4 mb-4 ">
                <p className="text-[#FFFFFF] text-xs font-normal">Area</p>
                <p className="text-[#FFFFFF] text-xs font-bold ms-3">Kochi</p>
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
                  <CalenderDays size={16} color="#4B5C79" />
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
                  <CalenderDays size={16} color="#4B5C79" />
                  <p className="text-#585953 font-medium text-xs">
                    Pause Trial
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
        <TrialViewForm onClose={handleModalToggle} />
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
        <ConvertModal onClose={covertModalToggle} type="trial" />
      </Modal>

      {/* Modal controlled by state */}
      <Modal
        open={pausModalOpen}
        align="center"
        onClose={pauseModalToggle}
        className="w-[35%]"
      >
        <ResumePauseTrail onClose={pauseModalToggle} />
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
