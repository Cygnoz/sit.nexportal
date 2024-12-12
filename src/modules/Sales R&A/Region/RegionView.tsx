import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import useApi from "../../../Hooks/useApi";
import ChevronDown from "../../../assets/icons/ChevronDown";
import ChevronRight from "../../../assets/icons/ChevronRight";
import ChevronUp from "../../../assets/icons/ChevronUp";
import DeActivateIcon from "../../../assets/icons/DeActivateIcon";
import EditIcon from "../../../assets/icons/EditIcon";
import EmailIcon from "../../../assets/icons/EmailIcon";
import PhoneIcon from "../../../assets/icons/PhoneIcon";
import PlusCircleIcon from "../../../assets/icons/PlusCircleIcon";
import region from "../../../assets/image/Ellipse 14 (3).png";
import IndiaLogo from "../../../assets/image/IndiaLogo.png";
import SaudhiLogo from "../../../assets/image/SaudiLogo.png";
import UAELogo from "../../../assets/image/UAELogo.webp";
import Modal from "../../../components/modal/Modal";
import { endPoints } from "../../../services/apiEndpoints";
import AreaForm from "../Area/AreaForm";
import RegionAriaView from "./RegionAriaView";
import RegionForm from "./RegionForm";
import RegionPerformanceView from "./RegionPerformanceView";
import RegionTeamView from "./RegionTeamView";
import UserIcon from "../../../assets/icons/UserIcon";
type Props = {};

function RegionView({}: Props) {
  const { request: getRM } = useApi("get", 3002);
  const [dropDown, setDropDown] = useState([]);

  // Function to toggle dropdown state
  const handleDropdownToggle = (index: number) => {
    setDropDown((prev) => {
      const newState: any = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };
  const { id } = useParams();
  const { request: getRegion } = useApi("get", 3003);
  const [data, setData] = useState<{
    regionData: any;
    regionManager: any;
  }>({ regionData: [], regionManager: [] });

  const countyLogo = [
    { countryName: "India", countryLogo: IndiaLogo },
    { countryName: "Saudi Arabia", countryLogo: SaudhiLogo },
    { countryName: "United Arab Emirates", countryLogo: UAELogo },
  ];

  const tabs = ["Aria", "Team", "Performance Analytics"];
  const [activeTab, setActiveTab] = useState<string>("Aria");
  const getARegion = async () => {
    try {
      const { response, error } = await getRegion(`${endPoints.REGION}/${id}`);

      if (response && !error) {
        // setFormValues(response.data);
        setData((prevData) => ({
          ...prevData,
          regionData: response.data,
        }));
      } else {
        console.error(error.response.data.message);
      }
    } catch (err) {
      console.error("Error fetching region data:", err);
    }
  };

  console.log(id);

  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState({
    editRegion: false,
    addArea: false,
  });

  // Function to toggle modal visibility
  const handleModalToggle = (editRegion = false, addArea = false) => {
    setIsModalOpen((prevState: any) => ({
      ...prevState,
      editRegion: editRegion,
      addArea: addArea,
    }));
    getARegion();
  };

  const countryLogoObject = countyLogo.find(
    (item) => item.countryName === data.regionData.country
  );

  const src = countryLogoObject ? countryLogoObject.countryLogo : region;

  const getRMs = async () => {
    try {
      const { response, error } = await getRM(endPoints.GET_ALL_RM);
      console.log(response);

      if (response && !error) {
        const transformedRMss =
          response.data.regionManager?.map((region: any) => ({
            //   ...region,
            //   dateOfJoining: region.dateOfJoining
            //   ? new Date(region.dateOfJoining).toLocaleDateString("en-GB")
            //   : "N/A",
            // loginEmail:region.user.email
            userName: region.user.userName,
            email: region.user.email,
            phoneNo: region.user.phoneNo,
            userImage: region.user.userImage,
          })) || [];
        setData((prevData) => ({
          ...prevData,
          regionManager: transformedRMss,
        }));
      } else {
        console.log(error?.response?.data?.message || "Failed to fetch data.");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("An unexpected error occurred.");
    }
  };

  useEffect(() => {
    getRMs();
    getARegion();
  }, [id]);

  console.log(data.regionManager);

  return (
    <>
      <div className="h-full flex">
        {/* Sidebar */}
        <div className="w-1/6 fixed h-full pe-2">
          <div className="flex items-center text-[16px] space-x-2 mb-4">
            <p className="font-bold text-[#820000]">Region</p>
            <ChevronRight color="#4B5C79" size={18} />
            <p className="font-bold text-[#303F58]">
              {data.regionData?.regionName}
            </p>
          </div>
          <div className="h-auto w-full bg-[#FFFFFF] rounded-lg p-3">
            <div className="space-y-2 flex flex-col justify-center items-center">
              <div className="rounded-full">
                <img className="w-16 h-16 rounded-full" src={src} alt="" />
              </div>
              <p className="font-bold text-[#303F58]">
                {data.regionData?.regionName}
              </p>
              <div className="grid grid-cols-2">
                <div className="border-r pe-3">
                  <div className="w-fit flex justify-center items-center flex-col">
                    <p className="text-[#8F99A9] text-[10px]">Region Status</p>
                    <p className="bg-[#6AAF681A] text-[#6AAF68] text-[10px] py-1 px-2 rounded-xl w-fit mt-1">
                      Active
                    </p>
                  </div>
                </div>
                <div className="ps-3">
                  <div className="w-fit flex justify-center items-center flex-col">
                    <p className="text-[#8F99A9] text-[10px]">Country</p>
                    <p className="text-sm text-[#4B5C79]">
                      {data.regionData.country == "United Arab Emirates"
                        ? "UAE"
                        : data.regionData.country}
                    </p>
                  </div>
                </div>
              </div>
              <hr className="w-full" />
              <div className="flex justify-evenly items-center w-full text-[10px]">
                <div className="flex flex-col items-center space-y-1">
                  <div
                    onClick={() => handleModalToggle(true, false)}
                    className="cursor-pointer w-8 h-8 mb-2 rounded-full"
                  >
                    <EditIcon size={35} color="#C4A25D24" />
                  </div>
                  <p className="text-center font-medium text-xs">Edit</p>
                </div>

                <div className="flex flex-col  items-center space-y-1">
                  <div
                    onClick={() => handleModalToggle(false, true)}
                    className="cursor-pointer w-8 h-8 mb-2 rounded-full"
                  >
                    <PlusCircleIcon size={35} color="#D52B1E4D" />
                  </div>
                  <p className="text-center font-medium  text-xs ms-2">
                    Add Area
                  </p>
                </div>

                <div className="flex flex-col  items-center space-y-1">
                  <div className="w-8 h-8 mb-2 rounded-full">
                    <DeActivateIcon size={35} color="#D52B1E4D" />
                  </div>
                  <p className="text-center font-medium  text-xs ">
                    DeActivate
                  </p>
                </div>
              </div>
              <hr className="w-full" />
              {data.regionManager.length > 0 && (
                <div className="space-y-1 w-full text-xs mt-2">
                  <p className="font-bold text-[12px]">Regional Manager Info</p>
                  <p className="text-[#8F99A9]">Total RM</p>
                  <p>{data.regionManager.length}</p>
                  {data.regionManager.map((rm: any, index: number) => (
                    <div key={index} className="flex flex-col w-full">
                      <div className="flex justify-between items-center w-full mt-2">
                        <div className="flex items-center gap-1">
                          {rm.userImage ? (
                            <img
                              className="w-10 h-10 rounded-full"
                              src={rm.userImage}
                              alt=""
                            />
                          ) : (
                            <p className="w-10 h-10    bg-black rounded-full flex justify-center items-center">
                              <UserIcon color="white" size={22} />
                            </p>
                          )}
                          <div className="flex flex-col space-y-1">
                            <p className="text-[11px] text-[#8F99A9]">Name</p>
                            <p className="text-xs">{rm.userName}</p>
                          </div>
                        </div>

                        <div
                          className="cursor-pointer"
                          onClick={() => handleDropdownToggle(index)}
                        >
                          {dropDown[index] ? (
                            <ChevronUp size={18} color="#303F58" />
                          ) : (
                            <ChevronDown size={18} color="#303F58" />
                          )}
                        </div>
                      </div>

                      {dropDown[index] && (
                        <>
                          <div className="flex items-center gap-1 pt-2">
                            <div className="w-10 rounded-full flex justify-center items-center border h-10">
                              <EmailIcon size={18} />
                            </div>
                            <div className="flex flex-col space-y-1">
                              <p className="text-[11px] text-[#8F99A9]">
                                Email Address
                              </p>
                              <p className="text-xs">{rm.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 pt-2">
                            <div className="w-10 rounded-full flex justify-center items-center border h-10">
                              <PhoneIcon size={18} />
                            </div>
                            <div className="flex flex-col space-y-1">
                              <p className="text-[11px] text-[#8F99A9]">
                                Phone Number
                              </p>
                              <p className="text-xs">{rm.phoneNo}</p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-[80%] relative ml-auto overflow-y-auto hide-scrollbar mb-4 mt-10 overflow-x-hidden">
          <div className="flex gap-8 sticky top-0 z-30 bg-[#F6F6F6] text-base font-bold border-b w-full border-gray-200">
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

          <div className="absolute z-10">
            {activeTab === "Aria" && <RegionAriaView />}
            {activeTab === "Team" && <RegionTeamView />}
            {activeTab === "Performance Analytics" && <RegionPerformanceView />}
          </div>
        </div>
      </div>
      {/* Modal Section */}
      <Modal
        open={isModalOpen.editRegion}
        onClose={() => handleModalToggle()}
        className="w-[35%]"
      >
        <RegionForm
          editId={data.regionData._id}
          onClose={() => handleModalToggle()}
        />
      </Modal>
      <Modal
        open={isModalOpen.addArea}
        onClose={() => handleModalToggle()}
        className="w-[35%]"
      >
        <AreaForm onClose={() => handleModalToggle()} />
      </Modal>
    </>
  );
}

export default RegionView;
