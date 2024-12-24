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
import SupportAgentForm from "./SupportAgentForm";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { endPoints } from "../../../services/apiEndpoints";
import { SAData } from "../../../Interfaces/SA";
import useApi from "../../../Hooks/useApi";
import { useRegularApi } from "../../../context/ApiContext";
import EmailIcon from "../../../assets/icons/EmailIcon";



  
const SupportAgentHome = () => {
  const {totalCounts}=useRegularApi()
  const { request: getAllSA } = useApi("get", 3003);
  const [allSA, setAllSA] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [editId, setEditId] = useState('');

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
    getSAs();
  };

  const handleView = (id: any) => {
    navigate(`/supportAgentView/${id}`);
  };

  const handleEdit = (id: any) => {
    setEditId(id);
    handleModalToggle()
  };

  // Data for HomeCards
  const homeCardData = [
    {
      icon: <UserIcon />,
      number: totalCounts?.totalSupportAgents,
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

  const getSAs = async () => {
    try {
      const { response, error } = await getAllSA(endPoints.SUPPORT_AGENT);
      console.log("res",response);
      console.log("err",error);
      if (response && !error) {
        console.log(response);
        
        const transformedSA =
          response.data?.supportAgent?.map((SA:any) => ({
            ...SA,
            dateOfJoining: SA.dateOfJoining
              ? new Date(SA.dateOfJoining).toLocaleDateString("en-GB")
              : "N/A",
              loginEmail: SA?.user?.email,
              userName: SA?.user?.userName,
              regionName: SA?.region?.regionName,
          })) || [];
        setAllSA(transformedSA);
        console.log(transformedSA);
        
      } else {
        console.log(error?.response?.data?.message || "Failed to fetch data.");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("An unexpected error occurred.");
    }
  };

  useEffect(() => {
    getSAs();
  }, []);

  const name = "Name";
  const email = "Email";
  const region = "Region";

  const handleFilter = ({ options }: { options: string }) => {
    if (options === "Name") {
      // Create a new sorted array to avoid mutating the original state
      const sortedSAs = [...allSA].sort((a, b) =>
        b?.userName?.localeCompare(a?.userName)
      );
      setAllSA(sortedSAs);
    } else if (options === "Region") {
      const sortedSAs = [...allSA].sort((a, b) =>
        b?.regionName?.localeCompare(a?.regionName)
      );
      setAllSA(sortedSAs);
    } else {
      const sortedSAs = [...allSA].sort((a, b) =>
        b?.loginEmail?.localeCompare(a?.loginEmail)
      );
      setAllSA(sortedSAs)
    }
  };

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-[#303F58] text-xl font-bold">Support Agent</h1>
        <Button variant="primary" size="sm" onClick={()=>{
          handleModalToggle()
          setEditId('')
        }}>
        <span className="font-bold text-xl">+</span> Create Support Agent
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
        <Table<SAData> data={allSA} columns={columns} headerContents={{
          title:'Support Agent Overview',
          search:{placeholder:'Search Support Agent...'},
          sort: [
                {
                  sortHead: "Filter",
                  sortList: [
                    {
                      label: "Sort by Name",
                      icon: <UserIcon size={14} color="#4B5C79" />,
                      action: () => handleFilter({ options: name }),
                    },
                    {
                      label: "Sort by Region",
                      icon: <RegionIcon size={14} color="#4B5C79" />,
                      action: () => handleFilter({ options: region }),
                    },
                    {
                      label: "Sort by Email",
                      icon: <EmailIcon size={14} color="#4B5C79" />,
                      action: () => handleFilter({ options: email }),
                    },
                  ],
                }
          ]
        }}
        actionList={[
          { label: 'edit', function:handleEdit },
          { label: 'view', function:handleView },
        ]}  />
      </div>

      {/* Modal Section */}
      <Modal open={isModalOpen} onClose={handleModalToggle}>
        <SupportAgentForm  editId={editId} onClose={handleModalToggle} />
      </Modal>
    </div>
  )
}

export default SupportAgentHome;