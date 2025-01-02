import { useEffect, useRef, useState } from "react";
import AreaIcon from "../../../assets/icons/AreaIcon";
import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import CalenderDays from "../../../assets/icons/CalenderDays";
import DeActivateIcon from "../../../assets/icons/DeActivateIcon";
import EditIcon from "../../../assets/icons/EditIcon";
import EmailIcon from "../../../assets/icons/EmailIcon";
import RegionIcon from "../../../assets/icons/RegionIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import ViewRoundIcon from "../../../assets/icons/ViewRoundIcon";
import Modal from "../../../components/modal/Modal";
import SuperVisorCards from "../../../components/ui/SuperVisorCards";
import Table from "../../../components/ui/Table";
import SuperVisorTicketsOverview from "./SuperVisorTicketsOverview";
import SuperVisorViewForm from "./SuperVisorViewForm";
// import SuperVisorCard from "../../../components/ui/SuperVisorCards"
import Background from "../../../assets/image/1.png";
import PhoneIcon from "../../../assets/icons/PhoneIcon";
import CalenderMultiple from "../../../assets/icons/CalenderMultiple";
import ChevronRight from "../../../assets/icons/ChevronRight";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../../Hooks/useApi";
import { endPoints } from "../../../services/apiEndpoints";
import AwardIcon from "../../../assets/icons/AwardIcon";
import SVViewAward from "./SVViewAward";
import SupervisorForm from "./SupervisorForm";
import RatingStar from "../../../components/ui/RatingStar";
import person1 from "../../../assets/image/Ellipse 14.png";
import person2 from "../../../assets/image/Ellipse 43.png";


interface SupervisorData {
  memberID: string;
  supervisorName: string;
  ticketsResolved: string;
  time: string | number;

  rating: string;
}

type Props = {};

const SuperVisorView = ({}: Props) => {
  const topRef = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        // Scroll to the top of the referenced element
        topRef.current?.scrollIntoView({ behavior: "smooth" });
      }, []);
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState({
    editSV: false,
    viewSV: false,
    awardSV: false,
  });
  const handleModalToggle = (
    editSV = false,
    viewSV = false,
    awardSV = false
  ) => {
    setIsModalOpen((prevState: any) => ({
      ...prevState,
      editSV: editSV,
      viewSV: viewSV,
      awardSV: awardSV,
    }));
    getASV();
  };

  const { request: getaSV } = useApi("get", 3003);
  const { id } = useParams();
  const [getData, setGetData] = useState<{
    svData: any;
  }>({ svData: [] });

  const getASV = async () => {
    try {
      const { response, error } = await getaSV(
        `${endPoints.SUPER_VISOR}/${id}`
      );
      if (response && !error) {
        setGetData((prevData) => ({
          ...prevData,
          svData: response.data,
        }));
      } else {
        console.error(error.response.data.message);
      }
    } catch (err) {
      console.error("Error fetching Super Visor data:", err);
    }
  };
  useEffect(() => {
    getASV();
  }, [id]);
  

  const navigate=useNavigate()

  // Data for HomeCards
  const SuperVisorCardData = [
    {
      icon: <AreaIcon size={24} />,
      number: "167",
      title: "Total Agent Supervised",
      subTitle: "look loo",
      images: [
        <img src={person1} alt="person1" className="w-10 h-10 rounded-full" />,
        <img src={person2} alt="person2" className="w-10 h-10 rounded-full" />,
        <img src={person1} alt="person3" className="w-10 h-10 rounded-full" />,
        <img src={person2} alt="person4" className="w-10 h-10 rounded-full" />,
    ],
    },
    {
      icon: <UserIcon size={24} />,
      number: "86%",
      title: " Tasks completed by the team",
      subTitle: "look loo",
    },
    {
      icon: <AreaManagerIcon size={24} />,
      number: "4.5/4",
      title: "Customer Feedback",
      subTitle: "look loo",
      rating:<RatingStar size={14} count={3}/>
    },
  ];

  // Data for the table
  const data: any[] = [
    {
      memberID: "001",
      supervisorName: "subi",
      ticketsResolved: "33",
      time: "3hrs",
      rating: <RatingStar size={14} count={3} />,
    },
    {
      memberID: "002",
      supervisorName: "subi",
      ticketsResolved: "33",
      time: "3hrs",
      rating: <RatingStar size={14} count={3} />,
    },
    {
      memberID: "003",
      supervisorName: "subi",
      ticketsResolved: "33",
      time: "3hrs",
      rating: <RatingStar size={14} count={4} />,
    },
    {
      memberID: "004",
      supervisorName: "subi",
      ticketsResolved: "33",
      time: "3hrs",
      rating: <RatingStar size={14} count={5} />,
    },
    {
      memberID: "005",
      supervisorName: "subi",
      ticketsResolved: "33",
      time: "3hrs",
      rating: <RatingStar size={14} count={2} />,
    },
    {
      memberID: "006",
      supervisorName: "subi",
      ticketsResolved: "33",
      time: "3hrs",
      rating: <RatingStar size={14} count={4} />,
    },
    {
      memberID: "007",
      supervisorName: "subi",
      ticketsResolved: "33",
      time: "3hrs",
      rating: <RatingStar size={14} count={1} />,
    },
    {
      memberID: "008",
      supervisorName: "subi",
      ticketsResolved: "33",
      time: "3hrs",
      rating: <RatingStar size={14} count={3} />,
    },
    {
      memberID: "009",
      supervisorName: "subi",
      ticketsResolved: "33",
      time: "3hrs",
      rating: <RatingStar size={14} count={4} />,
    },
    {
      memberID: "010",
      supervisorName: "subi",
      ticketsResolved: "33",
      time: "3hrs",
      rating: <RatingStar size={14} count={2} />,
    },
    {
      memberID: "011",
      supervisorName: "subi",
      ticketsResolved: "33",
      time: "3hrs",
      rating: <RatingStar size={14} count={4} />,
    },
    {
      memberID: "012",
      supervisorName: "subi",
      ticketsResolved: "33",
      time: "3hrs",
      rating: <RatingStar size={14} count={5} />,
    },
    {
      memberID: "013",
      supervisorName: "subi",
      ticketsResolved: "33",
      time: "3hrs",
      rating: <RatingStar size={14} count={4} />,
    },
    {
      memberID: "014",
      supervisorName: "subi",
      ticketsResolved: "33",
      time: "3hrs",
      rating: <RatingStar size={14} count={3} />,
    },
  ];
  // Define the columns with strict keys
  const columns: { key: keyof SupervisorData; label: string }[] = [
    { key: "memberID", label: "Member ID" },
    { key: "supervisorName", label: " Name" },
    { key: "ticketsResolved", label: "Tickets Resolved" },
    { key: "time", label: "Avg.Resolution Time" },
    { key: "rating", label: "Rating" },
  ];

  return (
    <>
      <div ref={topRef}>
        <div className="flex items-center text-[16px] my-2 space-x-2">
          <p onClick={()=>navigate('/supervisor')}  className="font-bold cursor-pointer  text-[#820000] ">SuperVisor</p>
          <ChevronRight color="#4B5C79" size={18} />
          <p className="font-bold text-[#303F58] ">
            {" "}
            {getData.svData?.user?.userName
              ? getData.svData?.user?.userName
              : "N/A"}
          </p>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-8 py-6 ">
            <div className="flex justify-between items-center">
              <h1 className="text-[#303F58] text-base font-bold">
                Assigned Team Overview
              </h1>
            </div>

            {/* HomeCards Section */}

            <div className="flex gap-3 py-2 justify-between mt-4">
              {SuperVisorCardData.map((card, index) => (
                <SuperVisorCards
                  key={index}
                  number={card.number}
                  title={card.title}
                  subTitle={card.subTitle}
                  images={card.images}
                  rating={card.rating}
                />
              ))}
            </div>

            {/* Table Section */}
            <div>
              <Table<SupervisorData>
                data={data}
                columns={columns}
                headerContents={{
                  title: "Support Team Members",
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
                noAction
                maxHeight="450px"
              />
            </div>
          </div>

          <div
            className="col-span-4 bg-slate-200 py-3 p-2 mx-2 my-6 mt-16 rounded-lg bg-cover bg-center"
            style={{
              backgroundImage: `url(${Background})`, // Use the imported image
            }}
          >
            <div className="rounded-full flex my-2 justify-between">
              <div className="flex">
              {getData.svData?.user?.userImage ? (
                <img
                  className="w-16 h-16 rounded-full"
                  src={getData.svData?.user?.userImage}
                  alt=""
                />
              ) : (
                <p className="w-16 h-16    bg-black rounded-full flex justify-center items-center">
                  <UserIcon color="white" size={35} />
                </p>
              )}
              <h2 className="font-medium text-sm  text-white mt-5 ms-3">
                {getData.svData?.user?.userName
                  ? getData.svData?.user?.userName
                  : "N/A"}
              </h2>

              </div>
              <p className="font-medium text-xs bg-[#D5DCB3] h-8 w-20 p-2 mt-4 rounded-2xl ml-40">
                SuperVisor
              </p>
            </div>
            <hr />

            <div className="p-3">
              <div className="flex py-3  text-white ">
                <EmailIcon color="#FFFFFF" size={20} />
                <h3 className="text-xm font-medium  mx-1  text-white">
                  {" "}
                  Email
                </h3>
              </div>
              <p className="text-sm font-normal  text-white  py-2">
                {getData.svData?.user?.email
                  ? getData.svData?.user?.email
                  : "N/A"}
              </p>

              <hr />
              <div className="flex py-3">
                <PhoneIcon size={20} />
                <h3 className="text-xm font-medium  mx-1  text-white">
                  Phone{" "}
                </h3>
              </div>
              <p className="text-sm font-normal  text-white py-2">
                {getData.svData?.user?.phoneNo
                  ? getData.svData?.user?.phoneNo
                  : "N/A"}
              </p>
              <hr />
              <div className="flex py-3">
                <RegionIcon size={20} />
                <h3 className="text-xm font-medium  mx-1  text-white">
                  {" "}
                  Region
                </h3>
              </div>
              <p className="text-sm font-normal  text-white py-2">
                {getData.svData?.region?.regionCode
                  ? getData.svData?.region?.regionCode
                  : "N/A"}
              </p>
              <hr />
              <div className="flex py-3 ">
                <UserIcon size={20} />
                <h3 className="text-xm font-medium  mx-1 text-white">
                  {" "}
                  Employee ID
                </h3>
              </div>
              <p className="text-sm font-normal  text-white py-2">
                {getData.svData?.user?.employeeId
                  ? getData.svData?.user?.employeeId
                  : "N/A"}
              </p>
              <hr />
              <div className="flex py-3">
                <CalenderMultiple size={20} />
                <h3 className="text-xm font-medium mx-1 text-[#ffffff]">
                  {" "}
                  Joining Date
                </h3>
              </div>
              <p className="text-sm font-normal  text-white  py-2">
                {getData.svData?.dateOfJoining
                  ? new Date(getData.svData.dateOfJoining).toLocaleDateString()
                  : "N/A"}
              </p>
              <hr />

              <div className="flex py-2 mt-24 space-x-6">
                <div className="flex flex-col items-center space-y-1">
                  <div
                    onClick={() => handleModalToggle(true, false, false)}
                    className="w-8 h-8 mb-2 rounded-full border-white cursor-pointer"
                  >
                    <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                      <div className="ms-2 mt-2">
                        <EditIcon size={18} color="#F0D5A0" />
                      </div>
                    </div>
                  </div>
                  <p className="text-center font-medium  text-white text-xs ms-3">
                    Edit Profile
                  </p>
                </div>

                <div className="flex flex-col  items-center space-y-1">
                  <div
                    onClick={() => handleModalToggle(false, true, false)}
                    className="w-8 h-8 mb-2 rounded-full cursor-pointer"
                  >
                    <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                      <div className="ms-2 mt-2">
                        <ViewRoundIcon size={18} color="#B6D6FF" />
                      </div>
                    </div>
                  </div>
                  <p className="text-center font-medium  text-white text-xs ms-3">
                    View Details
                  </p>
                </div>

                <div className="flex flex-col   items-center space-y-1">
                  <div
                    onClick={() => handleModalToggle(false, false, true)}
                    className="w-8 h-8 mb-2 rounded-full cursor-pointer"
                  >
                    <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                      <div className="ms-2 mt-2">
                        <AwardIcon size={18} color="#B6FFD7" />
                      </div>
                    </div>
                  </div>
                  <p className="text-center font-medium  text-white text-xs ms-3">
                    Awards
                  </p>
                </div>

                <div className="flex flex-col  items-center space-y-1">
                  <div className="w-8 h-8 mb-2 rounded-full cursor-pointer">
                    <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                      <div className="ms-2 mt-2">
                        <DeActivateIcon size={18} color="#D52B1E4D" />
                      </div>
                    </div>
                  </div>
                  <p className="text-center font-medium  text-white text-xs ms-3">
                    DeActivate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SuperVisorTicketsOverview />
      </div>

      {/* Modal controlled by state */}
      <Modal open={isModalOpen.viewSV} onClose={() => handleModalToggle()}>
        <SuperVisorViewForm onClose={() => handleModalToggle()} />
      </Modal>
      <Modal open={isModalOpen.editSV} onClose={() => handleModalToggle()}>
        <SupervisorForm editId={id} onClose={() => handleModalToggle()} />
      </Modal>
      <Modal
        open={isModalOpen.awardSV}
        onClose={() => handleModalToggle()}
        align="right"
        className="w-[25%] me-16"
      >
        <SVViewAward getData={getData} onClose={() => handleModalToggle()} />
      </Modal >
    </>
  );
};

export default SuperVisorView;
