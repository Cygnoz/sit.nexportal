import { useState } from "react";
import AreaIcon from "../../../assets/icons/AreaIcon";
import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import DeActivateIcon from "../../../assets/icons/DeActivateIcon";
//import DeleteIcon from "../../assets/icons/DeleteIcon"
import EditIcon from "../../../assets/icons/EditIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import ViewRoundIcon from "../../../assets/icons/ViewRoundIcon";
import person from "../../../assets/image/Ellipse 14 (2).png";
import Modal from "../../../components/modal/Modal";
import HomeCard from "../../../components/ui/HomeCards";
//import HomeCard from "../../../components/ui/HomeCards"
import Table from "../../../components/ui/Table";
import RMViewAriaManagers from "./RMViewAriaManagers";
import RMViewBDAandGraph from "./RMViewBDAandGraph";
import RMViewForm from "./RMViewForm";
// import HomeCard from "../../components/ui/HomeCards"
import BackgroundImage from "../../../assets/image/6.png";
import ChevronRight from "../../../assets/icons/ChevronRight";
import { useParams } from "react-router-dom";

interface AreaData {
  areaCode: string;
  areaName: string;
  region: string;
  areaManagers: string;
}

const RMView = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
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

  const { id } = useParams();

  return (
    <div>
      <div className="flex items-center text-[16px] my-2 space-x-2">
        <p className="font-bold text-[#820000] ">RM</p>
        <ChevronRight color="#4B5C79" size={18} />
        <p className="font-bold text-[#303F58] "> {id}</p>
      </div>

      <div className="flex items-center justify-between  bg-white rounded-lg  border border-gray-200">
        <div
          className="grid grid-cols-12 gap-3 bg-cover"
          style={{
            backgroundImage: `url(${BackgroundImage})`, // Use the imported image
          }}
        >
          <div className="col-span-6 ">
            <div>
              {/* Left Section: Area Icon and Details */}

              <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-2">
                  <div className="w-25 h-25 bg-blue ms-2 py-2 items-center justify-center rounded-full ">
                    <img className="w-16 h-16" src={person} alt="" />
                    <h2 className="font-normal text-2xl py-2">Sudeep Kumar</h2>
                  </div>
                </div>
              </div>
              <div className="flex ms-4 gap-2 py-2 text-white">
                <div className="">
                  <p className="text-xs font-medium text-[#8F99A9] py-2">
                    Contact Number
                  </p>
                  <h3 className="text-sm font-medium">+91 9846984699</h3>
                </div>
                <div className="border-r border-[#DADADA] h-10 me-4"></div>
                <div className="">
                  <p className="text-xs font-medium text-[#8F99A9] py-2">
                    Email
                  </p>
                  <p className="text-sm font-medium">dean@example.com</p>
                </div>
                <div className="border-r border-[#DADADA] h-10 me-4 "></div>
                <div className="">
                  <p className="text-xs font-medium text-[#8F99A9] py-2">
                    Region
                  </p>
                  <p className="text-sm font-medium ">REG-NE001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-6 m-3">
            <div>
              <div className="flex gap-4  text-[10px] py-2  text-white">
                {/* Right Section: Managers and Actions */}
                <div className="flex ms-16 mt-2">
                  {/* Sales Managers */}
                  <div className=" text-end w-48">
                    <p className="text-xs text-[#D4D4D4] py-2">Role</p>
                    <h3 className="text-xs">Regional Manager</h3>
                  </div>

                  <div className="text-center w-24">
                    <p className="text-xs text-[#D4D4D4] py-2">Employee ID</p>
                    <p className="text-xs">EMC-NEOO1</p>
                  </div>

                  <div className="text-center w-24">
                    <p className="text-xs text-[#D4D4D4] py-2">Joining Date</p>
                    <p className="text-xs ">13 June 2023</p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-1">
                  <div className="w-8 h-8 mb-2 rounded-full">
                    <EditIcon size={40} color="#C4A25D24" />
                  </div>
                  <p className="text-center ms-3">Edit Profile</p>
                </div>

                <div className="flex flex-col  items-center space-y-1">
                  <div
                    onClick={handleModalToggle}
                    className="w-8 h-8 mb-2 rounded-full"
                  >
                    <ViewRoundIcon size={40} color="#D52B1E4D" />
                  </div>
                  <p className="text-center ms-3">View Details</p>
                </div>

                <div className="flex flex-col  items-center space-y-1">
                  <div className="w-8 h-8 mb-2 rounded-full">
                    <DeActivateIcon size={40} color="#D52B1E4D" />
                  </div>
                  <p className="text-center ms-3">DeActivate</p>
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

      {/* Modal controlled by state */}
      <Modal open={isModalOpen} onClose={handleModalToggle}>
        <RMViewForm onClose={handleModalToggle} />
      </Modal>
    </div>
  );
};

export default RMView;
