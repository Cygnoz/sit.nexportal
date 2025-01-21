// import Licensers from "../../../components/ui/Licensers";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { VictoryLabel, VictoryPie, VictoryTheme } from 'victory';
import AwardIcon from "../../../assets/icons/AwardIcon";
import ChevronRight from "../../../assets/icons/ChevronRight";
import DeActivateIcon from "../../../assets/icons/DeActivateIcon";
import EditIcon from "../../../assets/icons/EditIcon";
import Trash from "../../../assets/icons/Trash";
import UserIcon from '../../../assets/icons/UserIcon';
import ViewRoundIcon from "../../../assets/icons/ViewRoundIcon";
import BackgroundView from '../../../assets/image/AMView.png';
import ConfirmModal from "../../../components/modal/ConfirmModal";
import Modal from "../../../components/modal/Modal";
import LicensersTable from '../../../components/ui/LicensersTable';
import useApi from '../../../Hooks/useApi';
import { endPoints } from '../../../services/apiEndpoints';
import AMForm from './AMForm';
import AMViewAward from './AMViewAward';
import AMViewCardandTable from "./AMViewCardandTable";
import AMViewForm from "./AMViewForm";
import UserRoundCheckIcon from "../../../assets/icons/UserRoundCheckIcon";


// import AMViewAward from './AMViewAward';
// import SearchBar from "../../../components/ui/SearchBar";
interface AMData {
  name: string;
  plan: string;
  status: string;
  startDate: string;
  endDate: string;
}


type Props = {
  staffId?: any
}

const AMView = ({ staffId }: Props) => {
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the top of the referenced element
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isAwardOpen, setIsAwardOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState({
    editAM: false,
    viewAM: false,
    awardAM: false,
    confirm: false,
    deactiveAM: false,
  });
  const { request: getaAM } = useApi('get', 3002)
  const { id } = useParams()
  const iId = staffId ? staffId : id
  const { request: deleteaAM } = useApi('delete', 3002)
  const { request: deactivateAM } = useApi('put', 3002)
  const [getData, setGetData] = useState<{
    amData: any;
  }>
    ({ amData: [] })

  const getAAM = async () => {
    try {
      const { response, error } = await getaAM(`${endPoints.GET_ALL_AM}/${iId}`);
      if (response && !error) {
        console.log("res", response.data);

        setGetData((prevData) => ({
          ...prevData,
          amData: response.data
        }))
      }
      else {
        console.error(error.response.data.message)
      }
    }
    catch (err) {
      console.error("Error fetching AM data:", err);
    }
  }
  useEffect(() => {
    getAAM();
  }, [iId])
  console.log(getData);



  const handleDelete = async () => {
    try {
      const { response, error } = await deleteaAM(`${endPoints.GET_ALL_AM}/${iId}`);
      if (response) {
        toast.success(response.data.message);
        navigate("/area-manager");
      } else {
        toast.error(error?.response?.data?.message || "An error occurred");
      }
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("Failed to delete the Area Manager.");
    }
  };


  const navigate = useNavigate()

  const handleModalToggle = (editAM = false, viewAM = false, awardAM = false, confirm = false, deactiveAM = false,) => {
    setIsModalOpen((prevState: any) => ({
      ...prevState,
      editAM: editAM,
      viewAM: viewAM,
      awardAM: awardAM,
      confirm: confirm,
      deactiveAM: deactiveAM,
    }));
    getAAM()
  }

  const handleView = (id: any) => {
    if (id) {
      navigate(`/licenser/${id}`)
    }
    console.log(id);
  }



  const columns: { key: any; label: string }[] = [
    { key: "firstName", label: "Name" },
    { key: "licensorStatus", label: "Status" },
    { key: "startDate", label: "Start Date" },
    { key: "endDate", label: "End Date" },
  ];
  const { request: getInsideAM } = useApi('get', 3002);
  const [insideAmData, setInsideAmData] = useState();
  const [bdaDetails, setBdaDetails] = useState([]);
  const [licenserDetails, setLicenserDetails] = useState([]);

  const getInsideViewAM = async () => {
    try {
      const { response, error } = await getInsideAM(`${endPoints.AM}/${iId}/details`);
      if (response && !error) {
        setInsideAmData(response.data);
        // Extract bdaDetails and licenserDetails separately
        setBdaDetails(response.data.bdaDetails || []);
        const licenserData = response.data.licenserDetails || []
        const processData = licenserData.map((item: any) => ({
          ...item,
          firstName: item.firstName,
          licensorStatus: item.licensorStatus,
          startDate: item.startDate ? new Date(item.startDate).toLocaleDateString() : 'N/A',
          endDate: item.endDate ? new Date(item.endDate).toLocaleDateString() : 'N/A'

        }))
        setLicenserDetails(processData);
      } else {
        console.error(error.response.data.message);
      }
    } catch (err) {
      console.error("Error fetching AM data:", err);
    }
  };

  useEffect(() => {
    getInsideViewAM();
  }, []);

  console.log("Inside AM Data:", insideAmData);
  console.log("BDA Details:", bdaDetails);
  console.log("Licenser Details:", licenserDetails);

  const topPerformingBDA = bdaDetails.map((bda: any) => ({
    CR: parseFloat(bda?.bdaConversionRate),
    name: bda?.bdaName,
  }));
  
  const handleDeactivate = async () => {
    const body = {
      status: getData?.amData?.status === 'Active' ? 'Deactive' : 'Active'
    }
    try {
      const { response, error } = await deactivateAM(`${endPoints.DEACTIVATE_AM}/${iId}`, body)
      console.log(response, 'res');
      console.log(error, 'err message');
      if (response && !error) {
        console.log(response.data);
        toast.success(response.data.message)
        navigate('/area-manager')
      }
      else {
        console.log(error?.response?.data?.message);
        toast.error(error?.response?.data?.message)
      }
    }
    catch (err) {
      console.error("Deactivate error:", err);
      toast.error("Failed to Deactivate the lead.");
    }
  }


  const roles = [
    { name: 'New', count: 1239, color: '#30B777' }, // Updated color
    { name: 'In progress', count: 598, color: '#6ABAF3' }, // Updated color
    { name: 'Converted', count: 234, color: '#7CD5AB' }, // Updated color
    { name: 'Lost', count: 89, color: '#00B5B5' } // Updated color
  ];

  const pieData = roles.map((role) => ({
    x: role.name,
    y: role.count,
    color: role.color
  }));











  
  


  const CustomLegend = () => {
    return (
      <div
        className="justify-between mt-6"
        style={{ display: "flex", gap: "10px" }}
      >
        <span style={{ color: "#e2b0ff" }}>Area1</span>
        <span style={{ color: "#8884d8" }}>Area2</span>
        <span style={{ color: "#82ca9d" }}>Area3</span>
        <span style={{ color: "#d86a57" }}>Area4</span>
        <span style={{ color: "#6ab6ff" }}>Area5</span>
      </div>
    );
  };



  const datas = [
    {
      name: "Jan 05",
      Area1: 5673,

      amt: 9000,
    },
    {
      name: "Jan 10",
      Area1: 4563,

      amt: 9777,
    },
    {
      name: "Jan 15",
      Area1: 1298,

      amt: 8000,
    },
    {
      name: "Jan 20",
      Area1: 1890,

      amt: 6000,
    },
    {
      name: "Jan 25",
      Area1: 1890,

      amt: 2181,
    },
    {
      name: "Jan 30",
      Area1: 1890,

      amt: 2500,
    },
  ];

  const colors = ['#FF9800', '#2196F3', '#4CAF50', '#9C27B0', '#F44336', '#FFC107', '#673AB7', '#3F51B5', '#00BCD4', '#8BC34A'];



  return (
    <div ref={topRef}>
      <div className="flex items-center text-[16px] my-2 space-x-2">
        <p onClick={() => navigate('/area-manager')} className="font-bold cursor-pointer text-[#820000] ">AM</p>
        <ChevronRight color="#4B5C79" size={18} />
        <p className="font-bold text-[#303F58] ">{getData.amData?.user?.userName ? getData.amData?.user?.userName : 'N/A'}</p>
      </div>
      <div className="rounded-xl p-6 flex items-center bg-cover" style={{ backgroundImage: `url(${BackgroundView})` }}>
        <div className="items-center space-x-6">
          {/* Profile Picture */}
          <div className="bg-gray-300 rounded-full overflow-hidden">
            {
              getData.amData?.user?.userImage && getData.amData?.user?.userImage > 50 ?
                <img className="w-16 h-16 rounded-full" src={getData.amData?.user?.userImage} alt="" />
                :
                <p className="w-16 h-16    bg-black rounded-full flex justify-center items-center">
                  <UserIcon color="white" size={22} />
                </p>
            }
          </div>
        </div>
        <div className='justify-between  w-full'>
          <div>
            <h1 className="ms-7 text-[#FFFEFB] text-2xl font-normal">{getData.amData?.user?.userName ? getData.amData?.user?.userName : 'N/A'}</h1>
          </div>
          <div className="flex mt-1">
            <div className='flex'>
              <div className="border-r ms-3">
                <p className="my-1 mx-3 text-[#D4D4D4] text-xs font-medium">Contact Number</p>
                <p className="my-1 mx-3 text-[#FFFFFF] text-sm font-medium">{getData.amData?.user?.phoneNo ? getData.amData?.user?.phoneNo : 'N/A'}</p>
              </div>
              <div className="border-r">
                <p className="my-1 mx-3 text-[#D4D4D4] text-xs font-medium">Email</p>
                <p className="my-1 mx-3 text-[#FFFFFF] text-sm font-medium">{getData.amData?.user?.email ? getData.amData?.user?.email : 'N/A'}</p>
              </div>
              <div className="">
                <p className="my-1 mx-3 text-[#D4D4D4] text-xs font-medium">Area</p>
                <p onClick={() => navigate(`/areas/${getData.amData?.area?._id}`)} className="my-1 mx-3 text-[#FFFFFF] text-sm font-medium underline cursor-pointer">{getData.amData?.area?.areaCode ? getData.amData?.area?.areaCode : 'N/A'}</p>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className="-mt-5 ms-32 me-6">
                <p className="text-[#D4D4D4] text-xs font-medium">Role</p>
                <p className="text-[#FFFFFF] text-sm font-medium">Area Manager</p>
              </div>
              <div className="me-6 -mt-5">
                <p className="text-[#D4D4D4] text-xs font-medium">Employee ID</p>
                <p className="text-[#FFFFFF] text-sm font-medium">{getData.amData?.user?.employeeId ? getData.amData?.user?.employeeId : 'N/A'}</p>
              </div>
              <div className="-mt-5">
                <p className="text-[#D4D4D4] text-xs font-medium">Joining Date</p>
                <p className="text-[#FFFFFF] text-sm font-medium">{getData.amData?.dateOfJoining ? new Date(getData.amData?.dateOfJoining).toLocaleDateString() : 'N/A'}</p>
              </div>
            </div>
            <div className="flex ms-auto -mt-6 ">
              <div className="flex flex-col items-center space-y-1 ">
                <div onClick={() => handleModalToggle(true, false, false, false, false)} className="w-8 h-8 mb-2 rounded-full cursor-pointer">
                  <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                    <div className="ms-2 mt-2">
                      <EditIcon size={18} color="#C4A25D" />
                    </div>
                  </div>
                </div>
                <p className="text-center ms-3 text-[#D4D4D4] text-xs font-medium" >Edit Profile</p>
              </div>

              <div className="flex flex-col  items-center space-y-1">
                <div onClick={() => handleModalToggle(false, true, false, false, false)} className="w-8 h-8 mb-2 rounded-full cursor-pointer">
                  <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                    <div className="ms-2 mt-2">
                      <ViewRoundIcon size={18} color="#B6D6FF" />
                    </div>
                  </div>
                </div>
                <p className="text-center ms-3 text-[#D4D4D4] text-xs font-medium">View Details</p>
              </div>

              <div className="flex flex-col  items-center space-y-1">
                <div onClick={() => handleModalToggle(false, false, true, false, false)} className="w-8 h-8 mb-2 rounded-full cursor-pointer">
                  <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                    <div className="ms-2 mt-2">
                      <AwardIcon size={18} color="#B6FFD7" />
                    </div>
                  </div>
                </div>
                <p className="text-center ms-3 text-[#D4D4D4] text-xs font-medium">Awards</p>
              </div>

              <div onClick={() => handleModalToggle(false, false, false, false, true)} className="flex flex-col  items-center space-y-1">
                <div className="w-8 h-8 mb-2 rounded-full cursor-pointer">
                  {getData?.amData?.status === "Active" ?
                    <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                      <div className="ms-2 mt-2">
                        <DeActivateIcon size={18} color="#D52B1E4D" />
                      </div>
                    </div>
                    :
                    <div className="rounded-full bg-[#B6FFD7] h-9 w-9 border border-white">
                      <div className="ms-2 mt-2">
                        <UserRoundCheckIcon size={20} color="#D52B1E4D" />
                      </div>
                    </div>

                  }

                </div>
                <p className="text-center text-[#D4D4D4] font-medium  text-xs ms-2">
                  {getData?.amData?.status === "Active" ? "Deactivate" : "Activate"}
                </p>
              </div>


              <div className="flex flex-col  items-center space-y-1">
                <div onClick={() => handleModalToggle(false, false, false, true, false)} className="w-8 h-8 mb-2 rounded-full cursor-pointer">
                  <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                    <div className="ms-2 mt-2">
                      <Trash size={18} color="#BC3126" />
                    </div>
                  </div>
                </div>
                <p className="text-center ms-3 text-[#D4D4D4] text-xs font-medium">Delete</p>
              </div>


            </div>

          </div>

        </div>

      </div>
      {/* Card & table */}
      <AMViewCardandTable
        bdaDetails={bdaDetails}
        insideAmData={insideAmData}
      />
      {/* Charts */}
      <div className="grid grid-cols-12 mb-5 gap-4">
        <div className="col-span-4 h-full">
          <div className="bg-white rounded-lg w-full h-full  p-3">
            <h1 className="text-[#303F58] text-lg font-bold p-3">Lead status distribution</h1>
            <div className="-mt-3 relative">
              <div className='absolute top-[35%] left-[39%] z-20 text-center -mt-4'>
                <p className='text-xl font-semibold ms-4'>3456</p>
                <p className='text-xs ms-4'>Total Leads</p>
              </div>
              <VictoryPie
                innerRadius={48}
                padAngle={4}
                data={pieData}
                categories={{
                  y: roles.map(role => role.name),
                }}
                theme={VictoryTheme.clean}
                labels={({ datum }) => `${((datum.y / roles.reduce((acc, role) => acc + role.count, 0)) * 100).toFixed(1)}%`}
                labelComponent={<VictoryLabel style={{ fill: '#303F58', fontSize: 15, marginLeft: -50 }} />}
                style={{
                  data: {
                    fill: ({ datum }) => datum.color,
                  },
                }}

              />
              <div className='flex justify-center'>
                <div className="space-y-3">
                  {roles.map((role) => (
                    <div key={role.name} className="flex items-center gap-20 w-64 justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: role.color }} />
                        <span className="text-gray-800 font-medium text-xs">{role.name}</span>
                      </div>
                      <span className=" text-gray-600 text-xs">{role.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8">

               <div className="p-3 bg-white w-full space-y-2 rounded-lg">
                <p className="text-[#303F58] text-lg font-bold">
                   Top performing BDA's
                 </p>
                 <p className="text-[#4B5C79] text-xs font-normal">
                   Based on lead Conversion Performance Metric
                 </p>
                  
                  <div className="mt-2 custom-scrollbar " style={{ overflowX: 'auto' }}>
                    {/* Wrapper for dynamic width */}
                    <div style={{ width: '100%' }} className="-ms-4 mt-3">
                      <ResponsiveContainer width="100%" minHeight={380}>
                      <BarChart
                        data={topPerformingBDA}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false}   tickFormatter={(value) => `${value}%`} tickLine={false} domain={[0, 100]} />
                        <Tooltip />
                        <Bar barSize={30} dataKey="CR" radius={10}>
                          {topPerformingBDA?.map((entry: any, index: any) => (
                            <Cell key={`cell-${entry.name}`} fill={colors[index % colors.length]} />
                          ))}
                        </Bar>
                      </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
        </div>
      </div>

      <div>
        <LicensersTable<AMData>
          data={licenserDetails}
          columns={columns}
          headerContents={{
            title: 'Licensers',
            search: { placeholder: 'Search License by Name or Holder Name' },
          }}
          handleView={handleView}
        />
      </div>
      {/* Graph */}
      <div className="flex gap-3 py-2 mt-6">
        <div className="py-3 bg-white p-2 w-full">
          <div className="py-1 ms-2 flex justify-between">
            <h2 className="font-bold">Leads Converted by Area Manager Over Time</h2>

          </div>
          <div className="mt-5 w-full">
            <ResponsiveContainer width="100%" minHeight={400}>
              <LineChart
                width={1250}
                height={400}
                data={datas}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend content={<CustomLegend />} />
                <Line
                  type="monotone"
                  dataKey="Area1"
                  stroke="#e2b0ff"
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Area2"
                  stroke="#8884d8"
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Area3"
                  stroke="#82ca9d"
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Area4"
                  stroke="#d86a57"
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Area5"
                  stroke="#6ab6ff"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <Modal open={isModalOpen.editAM} onClose={() => handleModalToggle()} className="">
        <AMForm editId={iId} onClose={() => handleModalToggle()} />
      </Modal>
      <Modal open={isModalOpen.viewAM} onClose={() => handleModalToggle()} className="">
        <AMViewForm id={iId} onClose={() => handleModalToggle()} />
      </Modal>
      <Modal open={isModalOpen.awardAM} onClose={() => handleModalToggle()} align='right' className="w-[25%] me-12 mt-14">
        <AMViewAward getData={getData} onClose={() => handleModalToggle()} />
      </Modal>
      <Modal
        open={isModalOpen.confirm}
        align="center"
        onClose={() => handleModalToggle()}
        className="w-[30%]"
      >
        <ConfirmModal
          action={handleDelete}
          prompt="Are you sure want to delete this Area manager?"
          onClose={() => handleModalToggle()}
        />
      </Modal>

      <Modal
        open={isModalOpen.deactiveAM}
        align="center"
        onClose={() => handleModalToggle()}
        className="w-[30%]"
      >
        <ConfirmModal
          action={handleDeactivate}
          prompt={
            getData?.amData?.status === "Active"
              ? "Are you sure you want to deactivate this AM?"
              : "Are you sure you want to activate this AM?"
          }
          onClose={() => handleModalToggle()}
        />
      </Modal>



    </div>
  )
}

export default AMView;