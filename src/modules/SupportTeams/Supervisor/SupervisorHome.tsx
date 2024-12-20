import { useEffect, useState } from "react";
import Button from "../../../components/ui/Button";
import Modal from "../../../components/modal/Modal";
import HomeCard from "../../../components/ui/HomeCards";
import Table from "../../../components/ui/Table";
import UserIcon from "../../../assets/icons/UserIcon";
import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import RegionIcon from "../../../assets/icons/RegionIcon";
import CalenderDays from "../../../assets/icons/CalenderDays";
import TicketCardIcon from "../../../assets/icons/TicketCardIcon";
import EscalatedTicket from "../../../assets/icons/EscalatedTicket";
import ResolvedTicket from "../../../assets/icons/ResolvedTicket";
import AddSupervisor from "./SupervisorForm";
import { useNavigate } from "react-router-dom";
import { SVData } from "../../../Interfaces/SV";
import { endPoints } from "../../../services/apiEndpoints";
import toast from "react-hot-toast";
import useApi from "../../../Hooks/useApi";
import { useRegularApi } from "../../../context/ApiContext";


const SupervisorHome = () => {
  const {totalCounts}=useRegularApi()
  const { request: getAllSV } = useApi("get", 3003);
  const [allSV, setAllSV] = useState<SVData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [editId, setEditId] = useState('');

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
    getSVs();
  };

  const handleView = (id: any) => {
    navigate(`/supervisor/${id}`);
  };

  const handleEdit = (id: any) => {
    setEditId(id);
    handleModalToggle()
  };

  // Data for HomeCards
  const homeCardData = [
    {
      icon: <AreaManagerIcon />,
      number: totalCounts?.totalSupervisors,
      title: "Total Supervisors",
      iconFrameColor: "#F9A51A",
      iconFrameBorderColor: "#FFF2DDCC",
    },
    {
      icon: <UserIcon />,
      number:totalCounts?.totalSupportAgents,
      title: "Total Support Agents",
      iconFrameColor: "#30B777",
      iconFrameBorderColor: "#B3F0D3CC",
    },
    {
      icon: <TicketCardIcon size={40} />,
      number: "46",
      title: "Total Tickets",
      iconFrameColor: "#51BFDA",
      iconFrameBorderColor: "#C1E7F1CC",
    },
    {
      icon: <EscalatedTicket />,
      number: "86",
      title: "Total Escalated Tickets",
      iconFrameColor: "#1A9CF9",
      iconFrameBorderColor: "#BBD8EDCC",
    },
    {
      icon: <ResolvedTicket />,
      number: "498",
      title: "Total Resolved Tickets",
      iconFrameColor: "#D786DD",
      iconFrameBorderColor: "#FADDFCCC",
    },
  ];

  // Define the columns with strict keys
  const columns: { key: any; label: string }[] = [
    { key: "user.userName", label: "Name" },
    { key: "loginEmail", label: "Email Address" },
    { key: "user.phoneNo", label: "Phone No" },
    { key: "region.regionName", label: "Region" },
    { key: "dateOfJoining", label: "Date Of Joining" },
  ];

  const getSVs = async () => {
    try {
      const { response, error } = await getAllSV(endPoints.SUPER_VISOR);
      console.log(response);
      console.log(error);
      
      
      if (response && !error) {
        console.log(response);
        
        const transformedSV =
          response.data.supervisor?.map((SV:any) => ({
            ...SV,
            dateOfJoining: SV.dateOfJoining
              ? new Date(SV.dateOfJoining).toLocaleDateString("en-GB")
              : "N/A",
            loginEmail:SV.user?.email
          })) || [];
        setAllSV(transformedSV);
        console.log(transformedSV);
        
      } else {
        console.log(error?.response?.data?.message || "Failed to fetch data.");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("An unexpected error occurred.");
    }
  };

  useEffect(() => {
    getSVs();
  }, []);

  return (
    <>
    <div className="space-y-3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-[#303F58] text-xl font-bold">Supervisor</h1>
        <Button variant="primary" size="sm" onClick={()=>{
          handleModalToggle()
          setEditId('')
        }}>
          <span className="font-bold text-xl">+</span> Create Supervisor
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
        <Table<SVData>
          data={allSV}
          columns={columns}
          headerContents={{
            title: "Supervisor Overview",
            search: { placeholder: "Search Supervisor" },
            sort: [
              {
                sortHead: "Filter",
                sortList: [
                  {
                    label: "Sort by supervisorCode",
                    icon: <UserIcon size={14} color="#4B5C79" />,
                  },
                  {
                    label: "Sort by Age",
                    icon: <RegionIcon size={14} color="#4B5C79" />,
                  },
                  {
                    label: "Sort by supervisorCode",
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
            { label: "edit", function: handleEdit },
            { label: "view", function: handleView },
          ]}
        />
      </div>

    
    </div>
      {/* Modal Section */}
      <Modal open={isModalOpen} onClose={handleModalToggle}>
        <AddSupervisor editId={editId} onClose={handleModalToggle} />
      </Modal>
    </>
  );
};

export default SupervisorHome;
