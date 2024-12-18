import { useEffect, useState } from "react";
import Button from "../../../components/ui/Button";
import Modal from "../../../components/modal/Modal";
import HomeCard from "../../../components/ui/HomeCards";
import Table from "../../../components/ui/Table";
import LeadsCardIcon from "../../../assets/icons/LeadsCardIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import Licensor from "../../../assets/icons/Licensor";
import RegionIcon from "../../../assets/icons/RegionIcon";
import CalenderDays from "../../../assets/icons/CalenderDays";
import TrialIcon from "../../../assets/icons/TrialIcon";
import BDAForm from "./BDAForm";
import { useNavigate } from "react-router-dom";
import useApi from "../../../Hooks/useApi";
import { endPoints } from "../../../services/apiEndpoints";
import toast from "react-hot-toast";
import { BDAData } from "../../../Interfaces/BDA";
import { useRegularApi } from "../../../context/ApiContext";

const BDAHome = () => {
  const {totalCounts}=useRegularApi()
  const { request: getAllBDA } = useApi("get", 3002);
  const [allBDA, setAllBDA] = useState<BDAData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState('');
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
    getBDAs();
  };
  const navigate = useNavigate();

  const handleView = (id: any) => {
    navigate(`/bdaView/${id}`);
  };

  const handleEdit = (id: any) => {
    setEditId(id);
    handleModalToggle()
  };

  // Data for HomeCards
  const homeCardData = [
    {
      icon: <AreaManagerIcon />,
      number: totalCounts?.totalBdas,
      title: "Total BDA'S",
      iconFrameColor: "#D786DD",
      iconFrameBorderColor: "#FADDFCCC",
    },
    {
      icon: <LeadsCardIcon />,
      number: totalCounts?.totalLead,
      title: "Total Leads (Handled by BDA'S)",
      iconFrameColor: "#9C75D3",
      iconFrameBorderColor: "#DAC9F1",
    },
    {
      icon: <TrialIcon width={26} height={26} />,
      number:totalCounts?.totalTrial,
      title: "Total Trails (Handled by BDA'S)",
      iconFrameColor: "#D786DD",
      iconFrameBorderColor: "#FADDFCCC",
    },
    {
      icon: <Licensor />,
      number: totalCounts?.totalLicensor,
      title: "Total Licensers(Handled by BDA'S)",
      iconFrameColor: "#8695DD",
      iconFrameBorderColor: "#CAD1F1CC",
    },
  ];

  // Define the columns with strict keys
  const columns: { key: any; label: string }[] = [
    { key: "user.userName", label: "Name" },
    { key: "loginEmail", label: "Email Address" },
    { key: "user.phoneNo", label: "Phone No" },
    { key: "region.regionName", label: "Region" },
    { key: "area.areaName", label: "Area" },
    { key: "dateOfJoining", label: "Date Of Joining" },
  ];

  const getBDAs = async () => {
    try {
      const { response, error } = await getAllBDA(endPoints.BDA);
      if (response && !error) {
        const transformedBDA =
          response.data.bda?.map((bda:any) => ({
            ...bda,
            dateOfJoining: bda.dateOfJoining
              ? new Date(bda.dateOfJoining).toLocaleDateString("en-GB")
              : "N/A",
            loginEmail:bda.user?.email
          })) || [];
        setAllBDA(transformedBDA);
        console.log(transformedBDA);
        
      } else {
        console.log(error?.response?.data?.message || "Failed to fetch data.");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("An unexpected error occurred.");
    }
  };

  useEffect(() => {
    getBDAs();
  }, []);
  
  
  return (
    <>
    <div>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-[#303F58] text-xl font-bold">BDA</h1>
        <Button variant="primary" size="sm" onClick={()=>{
          handleModalToggle()
          setEditId('')
        }}>
          <span className="font-bold text-xl">+</span> Create BDA
        </Button>
      </div>

      {/* HomeCards Section */}
      <div className="flex gap-3 py-2 justify-between mt-6">
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

      {/* Table Section */}
      <div>
        <Table<BDAData>
          data={allBDA}
          columns={columns}
          headerContents={{
            // title:'Region',
            search: {
              placeholder:
                "Search Invoice by client name, invoice number, or date",
            },
            sort: [
              {
                sortHead: "Filter",
                sortList: [
                  {
                    label: "Sort by Name",
                    icon: <UserIcon size={14} color="#4B5C79" />,
                  },
                  {
                    label: "Sort by Age",
                    icon: <RegionIcon size={14} color="#4B5C79" />,
                  },
                  {
                    label: "Sort by Name",
                    icon: <AreaManagerIcon size={14} color="#4B5C79" />,
                  },
                  {
                    label: "Sort by Age",
                    icon: <CalenderDays size={14} color="#4B5C79" />,
                  },
                ],
              },
            ],
          }}
          actionList={[
            { label: "view", function: handleView },
            { label: "edit", function: handleEdit },
          ]}
        />
      </div>

      {/* Modal Section */}
      
    </div>
    <Modal open={isModalOpen} onClose={handleModalToggle}>
    <BDAForm editId={editId} onClose={handleModalToggle} />
  </Modal>
  </>
  );
};

export default BDAHome;
