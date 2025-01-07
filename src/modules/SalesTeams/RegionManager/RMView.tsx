import { useEffect, useRef, useState } from "react";
import AreaIcon from "../../../assets/icons/AreaIcon";
import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import DeActivateIcon from "../../../assets/icons/DeActivateIcon";
import EditIcon from "../../../assets/icons/EditIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import ViewRoundIcon from "../../../assets/icons/ViewRoundIcon";
import Modal from "../../../components/modal/Modal";
import HomeCard from "../../../components/ui/HomeCards";
import Table from "../../../components/ui/Table";
import RMViewAriaManagers from "./RMViewAriaManagers";
import RMViewBDAandGraph from "./RMViewBDAandGraph";
import RMViewForm from "./RMViewForm";
import BackgroundImage from "../../../assets/image/6.png";
import ChevronRight from "../../../assets/icons/ChevronRight";
import { useNavigate, useParams } from "react-router-dom";
import AwardIcon from "../../../assets/icons/AwardIcon";
import useApi from "../../../Hooks/useApi";
import { endPoints } from "../../../services/apiEndpoints";
import RMForm from "./RMForm";
import RMViewAward from "./RMViewAward";
import Trash from "../../../assets/icons/Trash";
import toast from "react-hot-toast";
import ConfirmModal from "../../../components/modal/ConfirmModal";

interface AreaData {
  areaCode: string;
  areaName: string;
  region: string;
  areaManagers: string;
}

const RMView = () => {
  const topRef = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        // Scroll to the top of the referenced element
        topRef.current?.scrollIntoView({ behavior: "smooth" });
      }, []);
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState({
    editRM: false,
    viewRM: false,
    awardRM: false,
    confirm:false,
  });
  const handleModalToggle = (
    editRM = false,
    viewRM = false,
    awardRM = false,
    confirm=false,
  ) => {
    setIsModalOpen((prevState: any) => ({
      ...prevState,
      editRM: editRM,
      viewRM: viewRM,
      awardRM: awardRM,
      confirm: confirm,
    }));
    getARM();
  };

  const { request: getaRM } = useApi("get", 3002);
  const {request:deleteaRM}=useApi("delete",3002)
  const { id } = useParams();
  const [getData, setGetData] = useState<{
    rmData: any;
  }>({ rmData: [] });

  const getARM = async () => {
    try {
      const { response, error } = await getaRM(`${endPoints.GET_ALL_RM}/${id}`);
      if (response && !error) {
        setGetData((prevData) => ({
          ...prevData,
          rmData: response.data,
        }));
      } else {
        console.error(error.response.data.message);
      }
    } catch (err) {
      console.error("Error fetching AM data:", err);
    }
  };
  useEffect(() => {
    getARM();
  }, [id]);
  console.log(getData);

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const { response, error } = await deleteaRM(`${endPoints.GET_ALL_RM}/${id}`);
      if (response) {
        toast.success(response.data.message);
        navigate("/region-manager");
      } else {
        toast.error(error?.response?.data?.message || "An error occurred");
      }
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("Failed to delete the Region Manager.");
    }
  };
  


  // Data for HomeCards
  const homeCardData = [
    {
      icon: <AreaIcon size={24} />,
      number: "167",
      title: "Total Area",
      iconFrameColor: "#30B777",
      iconFrameBorderColor: "#B3F0D3CC",
    },
    {
      icon: <UserIcon size={24} />,
      number: "86",
      title: "Total Area Manager",
      iconFrameColor: "#1A9CF9",
      iconFrameBorderColor: "#BBD8EDCC",
    },
    {
      icon: <AreaManagerIcon size={24} />,
      number: "498",
      title: "Total BDA's",
      iconFrameColor: "#D786DD",
      iconFrameBorderColor: "#FADDFCCC",
    },
  ];

  // Data for the table
  const data: AreaData[] = [
    {
      areaCode: "AR-NE001",
      areaName: "Area 1",
      region: "Region 1",
      areaManagers: "Lorem ipsum dolor sise cillum d",
    },
    {
      areaCode: "AR-NE001",
      areaName: "Area 2",
      region: "Region 2",
      areaManagers: "Lorem ipsum dolor sise cillum d",
    },
    {
      areaCode: "AR-NE001",
      areaName: "Area 3",
      region: "Region 3",
      areaManagers: "Lorem ipsum dolor sise cillum d",
    },
    {
      areaCode: "AR-NE001",
      areaName: "Area 4",
      region: "Region 4",
      areaManagers: "Lorem ipsum dolor sise cillum d",
    },
    {
      areaCode: "AR-NE001",
      areaName: "Area 5",
      region: "Region 5",
      areaManagers: "Lorem ipsum dolor sise cillum d",
    },
    {
      areaCode: "AR-NE001",
      areaName: "Area 6",
      region: "Region 6",
      areaManagers: "Lorem ipsum dolor sise cillum d",
    },
    {
      areaCode: "AR-NE001",
      areaName: "Area 7",
      region: "Region 7",
      areaManagers: "Lorem ipsum dolor sise cillum d",
    },
    {
      areaCode: "AR-NE001",
      areaName: "Area 8",
      region: "Region 8",
      areaManagers: "ILorem ipsum dolor sise cillum d",
    },
    {
      areaCode: "AR-NE001",
      areaName: "Area 9",
      region: "Region 9",
      areaManagers: "Lorem ipsum dolor sise cillum d",
    },
    {
      areaCode: "AR-NE001",
      areaName: "Area 10",
      region: "Region 10",
      areaManagers: "Lorem ipsum dolor sise cillum d",
    },
    {
      areaCode: "AR-NE001",
      areaName: "Area 11",
      region: "Region 11",
      areaManagers: "Lorem ipsum dolor sise cillum d",
    },
  ];
  // Define the columns with strict keys
  const columns: { key: keyof AreaData; label: string }[] = [
    { key: "areaCode", label: "Area Code" },
    { key: "areaName", label: "Area Name" },
    { key: "region", label: "Region" },
    { key: "areaManagers", label: "Area Managers" },
  ];

  // const { id } = useParams();

  return (
    <>
      <div ref={topRef}>
        <div className="flex items-center text-[16px] my-2 space-x-2">
          <p
            onClick={() => navigate("/region-manager")}
            className="font-bold cursor-pointer text-[#820000] "
          >
            RM
          </p>
          <ChevronRight color="#4B5C79" size={18} />
          <p className="font-bold text-[#303F58] ">
            {getData.rmData?.user?.userName
              ? getData.rmData?.user?.userName
              : "N/A"}
          </p>
        </div>

        <div className="flex items-center justify-between rounded-xl ">
          <div
            className="grid grid-cols-12 gap-3 bg-cover rounded-xl p-2 w-full"
            style={{
              backgroundImage: `url(${BackgroundImage})`, // Use the imported image
            }}
          >
            <div className="col-span-6">
              <div>
                {/* Left Section: Area Icon and Details */}

                <div className="flex items-center gap-4 text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-25 h-25 bg-blue ms-2 py-2 items-center justify-center rounded-full ">
                      {getData.rmData?.user?.userImage ? (
                        <img
                          className="w-16 h-16 rounded-full"
                          src={getData.rmData?.user?.userImage}
                          alt=""
                        />
                      ) : (
                        <p className="w-16 h-16    bg-black rounded-full flex justify-center items-center">
                          <UserIcon color="white" size={34} />
                        </p>
                      )}
                      <h2 className="font-normal text-center text-2xl py-2">
                        {getData.rmData?.user?.userName
                          ? getData.rmData?.user?.userName
                          : "N/A"}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex ms-4 gap-2 py-2 text-white">
                  <div className="">
                    <p className="text-xs font-medium text-[#8F99A9] py-2">
                      Contact Number
                    </p>
                    <h3 className="text-sm font-medium">
                      {getData.rmData?.user?.phoneNo
                        ? getData.rmData?.user?.phoneNo
                        : "N/A"}
                    </h3>
                  </div>
                  <div className="border-r border-[#DADADA] h-10 me-4"></div>
                  <div className="">
                    <p className="text-xs font-medium text-[#8F99A9] py-2">
                      Email
                    </p>
                    <p className="text-sm font-medium">
                      {getData.rmData?.user?.email
                        ? getData.rmData?.user?.email
                        : "N/A"}
                    </p>
                  </div>
                  <div className="border-r border-[#DADADA] h-10 me-4 "></div>
                  <div className="cursor-pointer">
                    <p className="text-xs font-medium text-[#8F99A9] py-2">
                      Region
                    </p>
                    <p
                      onClick={() =>
                        navigate(`/regions/${getData.rmData?.region?._id}`)
                      }
                      className=" text-[#FFFFFF] text-sm font-medium underline"
                    >
                      {getData.rmData?.region?.regionCode
                        ? getData.rmData?.region?.regionCode
                        : "N/A"}
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-6  m-2">
              <div>
                <div className="flex   gap-4 -ms-14  text-[10px] py-2  text-white">
                  {/* Right Section: Managers and Actions */}

                  <div className="flex -me-2  mt-2">
                    {/* Sales Managers */}
                    <div className=" text-end w-48">
                      <p className="text-xs text-[#D4D4D4] py-2">Role</p>
                      <h3 className="text-xs">Regional Manager</h3>
                    </div>

                    <div className="text-center w-24">
                      <p className="text-xs text-[#D4D4D4] py-2">Employee ID</p>
                      <p className="text-xs">
                        {getData.rmData?.user?.employeeId
                          ? getData.rmData?.user?.employeeId
                          : "N/A"}
                      </p>
                    </div>

                    <div className="text-center w-24">
                      <p className="text-xs text-[#D4D4D4] py-2">
                        Joining Date
                      </p>
                      <p className="text-xs ">
                        {getData.rmData?.dateOfJoining
                          ? new Date(
                              getData.rmData.dateOfJoining
                            ).toLocaleDateString()
                          : "N/A"}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col w-fit items-center space-y-1">
                    <div
                      onClick={() => handleModalToggle(true, false, false, false)}
                      className="w-8 h-8 mb-2 rounded-full cursor-pointer"
                    >
                      <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                        <div className="ms-2 mt-2">
                          <EditIcon size={18} color="#F0D5A0" />
                        </div>
                      </div>
                    </div>
                    <p className="text-center ms-3">Edit Profile</p>
                  </div>

                  <div className="flex flex-col  items-center space-y-1">
                    <div
                      onClick={() => handleModalToggle(false, true, false, false)}
                      className="w-8 h-8 mb-2 rounded-full cursor-pointer"
                    >
                      <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                        <div className="ms-2 mt-2">
                          <ViewRoundIcon size={18} color="#B6D6FF" />
                        </div>
                      </div>
                    </div>
                    <p className="text-center ms-3">View Details</p>
                  </div>

                  <div className="flex flex-col   items-center space-y-1">
                    <div
                      onClick={() => handleModalToggle(false, false, true, false)}
                      className="w-8 h-8 mb-2 rounded-full cursor-pointer"
                    >
                      <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                        <div className="ms-2 mt-2">
                          <AwardIcon size={18} color="#B6FFD7" />
                        </div>
                      </div>
                    </div>
                    <p className="text-center ms-3">Awards</p>
                  </div>

                  <div className="flex flex-col -ms-2 items-center space-y-1">
                    <div className="w-8 h-8 mb-2 rounded-full cursor-pointer">
                      <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                        <div className="ms-2 mt-2">
                          <DeActivateIcon size={18} color="#D52B1E4D" />
                        </div>
                      </div>
                    </div>
                    <p className="text-center ms-3">DeActivate</p>
                  </div>

                  <div onClick={()=>handleModalToggle(false,false,false,true)} className="flex flex-col -ms-2 items-center space-y-1">
                    <div className="w-8 h-8 mb-2 rounded-full cursor-pointer">
                    <div className="rounded-full bg-[#D52B1E26] h-9 w-9 border border-white mb-2">
                  <div className="ms-2 mt-2 ">
                    <Trash size={18} color="#BC3126" />
                  </div>
                </div>
                    </div>
                    <p className="text-center ms-3">Delete</p>
                  </div>
                </div>
                {/* HomeCards Section */}

                <div className="flex gap-3 py-2 justify-between mt-4">
                  {homeCardData.map((card, index) => (
                    <HomeCard
                      iconFrameColor={card.iconFrameColor}
                      iconFrameBorderColor={card.iconFrameBorderColor}
                      key={index}
                      icon={card.icon}
                      bgColor="transparent"
                      titleColor="#D4D4D4"
                      numberColor="#FFFFFF"
                      number={card.number}
                      title={card.title}
                      border='white'
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3">
          {/* Table Section */}
          <div className="col-span-7 py-6 ">
            <div>
              <Table<AreaData>
                data={data}
                columns={columns}
                headerContents={{
                  title: "Total Area Managed",
                }}
                noAction
                noPagination
                maxHeight="345px"
              />
            </div>
          </div>
          <div className="col-span-5 py-6">
            <RMViewAriaManagers />
          </div>
        </div>

        <div>
          <RMViewBDAandGraph />
        </div>
      </div>
      {/* Modal controlled by state */}
      <Modal open={isModalOpen.viewRM} onClose={() => handleModalToggle()}>
        <RMViewForm onClose={() => handleModalToggle()} />
      </Modal>
      <Modal open={isModalOpen.editRM} onClose={() => handleModalToggle()}>
        <RMForm editId={id} onClose={() => handleModalToggle()} />
      </Modal>
      <Modal
        open={isModalOpen.awardRM}
        onClose={() => handleModalToggle()}
        align="right"
        className="w-[25%] me-16"
      >
        <RMViewAward getData={getData} onClose={() => handleModalToggle()} />
      </Modal>
      <Modal
        open={isModalOpen.confirm}
        align="center"
        onClose={() => handleModalToggle()}
        className="w-[30%]"
      >
        <ConfirmModal
          action={handleDelete}
          prompt="Are you sure want to delete this Region manager?"
          onClose={() => handleModalToggle()}
        />
      </Modal>       

    </>
  );
};

export default RMView;
