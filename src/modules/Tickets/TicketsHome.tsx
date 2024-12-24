import { useEffect, useState } from "react";
import Modal from "../../components/modal/Modal";
import Button from "../../components/ui/Button";
import Table from "../../components/ui/Table";
import CalenderDays from "../../assets/icons/CalenderDays";
import Package from "../../assets/icons/Package";
import SortBy from "../../components/ui/SortBy";
import CreateTickets from "./TicketsForm";
import { useNavigate } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import { TicketsData as BaseTicketsData } from "../../Interfaces/Tickets";
import { endPoints } from "../../services/apiEndpoints";
import UserIcon from "../../assets/icons/UserIcon";
import Notebook from "../../assets/icons/Notebook";
import Bell from "../../assets/icons/Bell";

type Props = {};

// Extend TicketsData to include the additional fields
interface TicketsData extends BaseTicketsData {
  name: string;
  timeAgo: string;
  openingDate: string;
}

function TicketsHome({ }: Props) {
  const { request: getAllTickets } = useApi("get", 3004);
  const [allTickets, setAllTickets] = useState<any[]>([]);
  const navigate = useNavigate();

  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState("");

  const handleEdit = (id: any) => {
    handleModalToggle();
    setEditId(id);
  };

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
    getTickets();
  };

  const handleView = (id: any) => {
    navigate(`/ticketsView/${id}`);
  };

  const getTickets = async () => {
    try {
      const { response, error } = await getAllTickets(endPoints.GET_TICKETS);
      console.log("res", response);

      if (response && !error) {
        const currentTime = new Date();
        const transformTicket = response.data.tickets?.map((tickets: any) => ({
          ...tickets,
          name: `${tickets?.customerDetails?.firstName}${tickets?.customerDetails?.lastName ? tickets?.customerDetails?.lastName : ""}`,
          openingDate: tickets.openingDate,
          timeAgo: calculateTimeAgo(new Date(tickets.openingDate), currentTime),
        })) || [];
        setAllTickets(transformTicket);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const calculateTimeAgo = (date: Date, currentTime: Date) => {
    const diffInSeconds = Math.floor((currentTime.getTime() - date.getTime()) / 1000);
    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} days ago`;
  };

  useEffect(() => {
    getTickets();

    // Set an interval to update the "time ago" values
    const interval = setInterval(() => {
      setAllTickets((prevTickets) =>
        prevTickets.map((ticket) => ({
          ...ticket,
          timeAgo: calculateTimeAgo(new Date(ticket.openingDate), new Date()),
        }))
      );
    }, 60000); // Update every 60 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Define the columns with strict keys
  const columns: { key: keyof TicketsData; label: string }[] = [
    { key: "status", label: "Status" },
    { key: "subject", label: "Subject" },
    { key: "name", label: "Requestor" },
    { key: "priority", label: "Priority" },
    { key: "description", label: "Description" },
    { key: "timeAgo", label: "Requested" },
  ];

  const requestor = "Requestor";
  const priority = "Priority";
  const status = "Status";

  const handleFilter = ({ options }: { options: string }) => {
    // Define custom order for Priority and Status
    const priorityOrder:any = { High: 1, Medium: 2, Low: 3 };
    const statusOrder:any = { Open: 1, "In progress": 2, Resolved: 3 };
  
    if (options === "Requestor") {
      // Sort alphabetically by requestor name
      const sortedTickets = [...allTickets].sort((a, b) =>
        b?.name?.localeCompare(a?.name)
      );
      setAllTickets(sortedTickets);
    } else if (options === "Priority") {
      // Sort based on custom Priority order
      const sortedTickets = [...allTickets].sort(
        (a, b) => priorityOrder[b?.priority] - priorityOrder[a?.priority]
      );
      setAllTickets(sortedTickets);
    } else if (options === "Status") {
      // Sort based on custom Status order
      const sortedTickets = [...allTickets].sort(
        (a, b) => statusOrder[b?.status] - statusOrder[a?.status]
      );
      setAllTickets(sortedTickets);
    }
  };
  

  const sort = {
    sortHead: "Sort",
    sortList: [
      {
        label: "Sort by Name",
        icon: <UserIcon size={14} color="#4B5C79" />,
        action: () => handleFilter({ options: requestor }),
      },
      {
        label: "Sort by Priority",
        icon: <Notebook size={14} color="#4B5C79" />,
        action: () => handleFilter({ options: priority }),
      },
      {
        label: "Sort by Status",
        icon: <Bell size={14} color="#4B5C79" />,
        action: () => handleFilter({ options: status }),
      },
    ],
  };

  return (
    <>
       <div className="text-[#303F58] space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-[#303F58] text-xl font-bold">Tickets</h1>
          <Button variant="primary" size="sm" onClick={() => {
            handleModalToggle()
            setEditId('')

          }}>
            <span className="text-xl font-bold">+</span>Create Tickets
          </Button>
        </div>


        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-3">
            <div className="flex justify-between  mt-5 bg-[#E7EDF2] py-4 px-3">
              <p>Unresolved Tickets</p>
              <p>21</p>
            </div>
            <div className="flex justify-between py-4 px-3">
              <p>Unassigned Tickets</p>
              <p>28</p>
            </div> <div className="flex justify-between py-4 px-3">
              <p>All Unresolved Tickets</p>
              <p>22</p>
            </div>
            <div className="flex justify-between py-4 px-3">
              <p>Recently Updated Tickets</p>
              <p>11</p>
            </div> <div className="flex justify-between py-4 px-3">
              <p>Pending Tickets</p>
              <p>20</p>
            </div> <div className="flex justify-between  py-4 px-3">
              <p>Recently Solved Tickets</p>
              <p>218</p>
            </div>


          </div>
          <div className="col-span-9 w-[100%]">
            {/* Table Section */}
            <div >
              <div className="flex justify-between p-3">
                <h1 className="text-xl font-bold">Unsolved Tickets</h1>
                <SortBy sort={sort} />
              </div>
              <Table<TicketsData>
                data={allTickets}
                columns={columns}
                headerContents={{
                  title: "Ticket Details",
                  search: { placeholder: "Search Tickets..." },

                }}
                actionList={[
                  { label: 'view', function: handleView },
                  { label: 'edit', function: handleEdit },
                ]}
              />

            </div>


          </div>
        </div>

      </div>
      {/* Modal controlled by state */}
      <Modal className="w-[35%]" open={isModalOpen} onClose={handleModalToggle}>
        <CreateTickets editId={editId} onClose={handleModalToggle} />
      </Modal>
    </>
  );
}

export default TicketsHome;
