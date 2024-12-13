// import Licensers from "../../../components/ui/Licensers";
import BackgroundView from '../../../assets/image/AMView.png'
import ChevronRight from "../../../assets/icons/ChevronRight";
import { useNavigate, useParams } from "react-router-dom";
import EditIcon from "../../../assets/icons/EditIcon";
import ViewRoundIcon from "../../../assets/icons/ViewRoundIcon";
import DeActivateIcon from "../../../assets/icons/DeActivateIcon";
import AwardIcon from "../../../assets/icons/AwardIcon";
import { useEffect, useState } from "react";
import AMViewForm from "./AMViewForm";
import Modal from "../../../components/modal/Modal";
import AMViewCardandTable from "./AMViewCardandTable";
import LicensersTable from '../../../components/ui/LicensersTable';
import AMViewAward from './AMViewAward';
import useApi from '../../../Hooks/useApi';
import { endPoints } from '../../../services/apiEndpoints';
import UserIcon from '../../../assets/icons/UserIcon';
import AMForm from './AMForm';
// import AMViewAward from './AMViewAward';
// import SearchBar from "../../../components/ui/SearchBar";
interface AMData {
  name: string;
  plan: string;
  status: string;
  startDate: string;
  endDate: string;
}


type Props = {}

const AMView = ({ }: Props) => {

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isAwardOpen, setIsAwardOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState({
    editAM:false,
    viewAM:false,
    awardAM:false
  });
  const {request: getaAM}=useApi('get',3002)
  const {id} =useParams()
  const [getData, setGetData] = useState<{
    amData:any;}>
    ({amData:[]})

    const getAAM = async()=>{
      try{
        const {response,error}= await getaAM(`${endPoints.GET_ALL_AM}/${id}`);
        if(response && !error){
          setGetData((prevData)=>({
            ...prevData,
            amData:response.data
          }))
        }
        else{
          console.error(error.response.data.message)
        }
      }
      catch(err){
        console.error("Error fetching AM data:", err);
      }
    }
    useEffect(()=>{
      getAAM();
    },[id])
    console.log(getData);
    
    const navigate=useNavigate()

    const handleModalToggle = (editAM=false, viewAM=false, awardAM=false) => {
      setIsModalOpen((prevState:any )=> ({
          ...prevState,
          editAM: editAM,
          viewAM: viewAM,
          awardAM: awardAM,
      }));
      getAAM()
  }

  // Function to toggle modal visibility
  // const handleModalToggle = () => {
  //   setIsModalOpen((prev) => !prev);
  // };
  // const AwardhandleToggle = () => {
  //   setIsAwardOpen((prev) => !prev);
  // };

  const data: AMData[] = [
    { name: "Devid Billie", plan: "Plan 1", status: "Active", startDate: "2/11/2024", endDate: "2/12/2024" },
    { name: "Sudeep Kumar", plan: "Plan 1", status: "Expired", startDate: "2/11/2024", endDate: "2/12/2024" },
    { name: "Kathryn Murphy", plan: "Plan 1", status: "Upcoming Renewal", startDate: "2/11/2024", endDate: "2/12/2024" },
    { name: "Darrell Steward", plan: "Plan 1", status: "Expired", startDate: "2/11/2024", endDate: "2/12/2024" },
    { name: "Ronald Richards", plan: "Plan 1", status: "Upcoming Renewal", startDate: "2/11/2024", endDate: " 2/12/2024" },
    { name: "Jane Cooper", plan: "Plan 1", status: "Active", startDate: "2/11/2024", endDate: "2/12/2024" },
    { name: "Sudeep Kumar", plan: "Plan 1", status: "Expired", startDate: "2/11/2024", endDate: "2/12/2024" },
  ];
  // Define the columns with strict keys

  const columns: { key: any; label: string }[] = [
    { key: "name", label: "Name" },
    { key: "plan", label: "Plan" },
    { key: "status", label: "Phone No" },
    { key: "startDate", label: "Start Date" },
    { key: "endDate", label: "End Date" },
  ];


  // const [searchValue, setSearchValue] = useState<string>("");
  // const renderHeader = () => (
  //   <div
  //     className={`flex  ${
  //       headerContents.search && !headerContents.title 
  //         ? "justify-start"
  //         : "justify-between"
  //     } items-center mb-4`}
  //   >
  //     {headerContents.title && (
  //       <h2 className="text-lg font-bold">{headerContents.title}</h2>
  //     )}
  //     {headerContents.search && (
  //       <div className={`w-[440px] ${headerContents.title && "ms-auto me-2"}`}>
  //         <SearchBar
  //           searchValue={searchValue}
  //           onSearchChange={setSearchValue}
  //           placeholder={headerContents.search.placeholder}
  //         />
  //       </div>
  //     )}

  //   </div>
  // );

  // const LicencerData = [
  //   { plan: "1", name: "John Doe", startDate: "2024-01-01", endDate: "2024-12-31", status: "Active", buttonValue: "Renew" },
  //   { plan: "2", name: "Jane Smith", startDate: "2023-06-15", endDate: "2024-06-14", status: "Expired", buttonValue: "Renew" },
  //   { plan: "1", name: "Robert Brown", startDate: "2024-03-01", endDate: "2025-02-28", status: "Active", buttonValue: "Renew" },
  //   { plan: "3", name: "Emily Clark", startDate: "2023-11-20", endDate: "2024-11-19", status: "Pending Renewal", buttonValue: "Upgrade" },
  //   { plan: "2", name: "Jessica Davis", startDate: "2023-08-05", endDate: "2024-08-04", status: "Expired", buttonValue: "Renew" }
  // ];

  return (
    <div >
      <div className="flex items-center text-[16px] my-2 space-x-2">
        <p className="font-bold text-[#820000] ">AM</p>
        <ChevronRight color="#4B5C79" size={18} />
        <p className="font-bold text-[#303F58] ">{getData.amData?.user?.userName?getData.amData?.user?.userName:'N/A'}</p>
      </div>
      <div className="rounded-xl p-6 flex items-center bg-cover" style={{ backgroundImage: `url(${BackgroundView})` }}>
        <div className="items-center space-x-6">
          {/* Profile Picture */}
          <div className="bg-gray-300 rounded-full overflow-hidden">
            {/* <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            /> */}
            {
              getData.amData?.user?.userImage?
              <img className="w-16 h-16 rounded-full" src={getData.amData?.user?.userImage} alt="" />
              :
              <p className="w-16 h-16    bg-black rounded-full flex justify-center items-center">
              <UserIcon color="white" size={22} />
              </p>
            }
          </div>
        </div>
        <div>
          <h1 className="ms-7 text-[#FFFEFB] text-2xl font-normal">{getData.amData?.user?.userName?getData.amData?.user?.userName:'N/A'}</h1>
          <div className="flex mt-1">
            <div className="border-r ms-3">
              <p className="my-1 mx-3 text-[#D4D4D4] text-xs font-medium">Contact Number</p>
              <p className="my-1 mx-3 text-[#FFFFFF] text-sm font-medium">{getData.amData?.user?.phoneNo?getData.amData?.user?.phoneNo:'N/A'}</p>
            </div>
            <div className="border-r">
              <p className="my-1 mx-3 text-[#D4D4D4] text-xs font-medium">Email</p>
              <p className="my-1 mx-3 text-[#FFFFFF] text-sm font-medium">{getData.amData?.user?.email ? getData.amData?.user?.email:'N/A'}</p>
            </div>
            <div className="">
              <p className="my-1 mx-3 text-[#D4D4D4] text-xs font-medium">Area</p>
              <p onClick={()=>navigate(`/areaView/${getData.amData?.area?._id}`)} className="my-1 mx-3 text-[#FFFFFF] text-sm font-medium underline cursor-pointer">{getData.amData?.area?.areaCode ?getData.amData?.area?.areaCode:'N/A'}</p>
            </div>
            <div className="mx-8 -mt-5 ms-10">
              <p className="text-[#D4D4D4] text-xs font-medium">Role</p>
              <p className="text-[#FFFFFF] text-sm font-medium">Area Manager</p>
            </div>
            <div className="me-8 -mt-5">
              <p className="text-[#D4D4D4] text-xs font-medium">Employee ID</p>
              <p className="text-[#FFFFFF] text-sm font-medium">{getData.amData?.user?.employeeId ? getData.amData?.user?.employeeId:'N/A'}</p>
            </div>
            <div className="-mt-5">
              <p className="text-[#D4D4D4] text-xs font-medium">Joining Date</p>
              <p className="text-[#FFFFFF] text-sm font-medium">{getData.amData?.dateOfJoining   ? new Date(getData.amData?.dateOfJoining).toLocaleDateString() : 'N/A'}</p>
            </div>
            <div className="flex -mt-9 ms-80 gap-3 justify-end">
              <div className="flex flex-col items-center space-y-1">
                <div onClick={()=>handleModalToggle(true,false,false)} className="w-8 h-8 mb-2 rounded-full cursor-pointer">
                  <EditIcon size={36} color="#C4A25D24" />
                </div>
                <p className="text-center ms-3 text-[#D4D4D4] text-xs font-medium" >Edit Profile</p>
              </div>

              <div className="flex flex-col  items-center space-y-1">
                <div onClick={()=>handleModalToggle(false,true,false)} className="w-8 h-8 mb-2 rounded-full cursor-pointer">
                  <ViewRoundIcon size={36} color="#D52B1E4D" />
                </div>
                <p className="text-center ms-3 text-[#D4D4D4] text-xs font-medium">View Details</p>
              </div>

              <div className="flex flex-col  items-center space-y-1">
                <div onClick={()=>handleModalToggle(false,false,true)} className="w-8 h-8 mb-2 rounded-full cursor-pointer">
                  <AwardIcon size={36} color="#D52B1E4D" />
                </div>
                <p className="text-center ms-3 text-[#D4D4D4] text-xs font-medium">Awards</p>
              </div>

              <div className="flex flex-col  items-center space-y-1">
                <div className="w-8 h-8 mb-2 rounded-full cursor-pointer">
                  <DeActivateIcon size={36} color="#D52B1E4D" />
                </div>
                <p className="text-center ms-3 text-[#D4D4D4] text-xs font-medium">DeActivate</p>
              </div>

            </div>

          </div>

        </div>

      </div>
      {/* Card & table */}
      <AMViewCardandTable />
      {/* Charts */}
      <div className="grid grid-cols-12 py-12">
        <div className="col-span-4">
          <p>Lead status distribution</p>
        </div>
        <div className="col-span-8">
          <p>Top performing BDA's</p>
        </div>
      </div>
      {/* Licensers handled by BDA */}
      {/* <div className="">
        <Licensers headerContents={{
          title: 'Licensers handled by BDA',
          search: { placeholder: 'Search License by Name or Holder Name' }
        }}
          cardContents={LicencerData}
        />
        
      </div> */}
      {/* <div className="w-full  bg-white rounded-lg p-4">
      {renderHeader()}
      </div> */}
      <div>
        <LicensersTable<AMData>
          data={data}
          columns={columns}
          headerContents={{
            title: 'Licensers handled by BDA',
            search: { placeholder: 'Search License by Name or Holder Name' },
          }}
          getButtonName={(row) => {
            if (row.status === "Expired" || row.status === "Upcoming Renewal") {
              return "Upgrade";
            }
            return "Renew";
          }}
        />
      </div>
      {/* Graph */}
      <div className="flex gap-3 py-2 mt-6">
        {/* {VieCardData.map((card,index)=>(
          <ViewCard
          iconFrameColor={card.iconFrameColor}
          iconFrameBorderColor={card.iconFrameBorderColor}
          key={index} 
          icon={card.icon} 
          number={card.number} 
          title={card.title} 
          />
        ))} */}
        <p>Leads Converted by Area Manager Over Time</p>
      </div>
      {/* Modal controlled by state */}
      {/* <Modal open={isModalOpen} onClose={handleModalToggle}>
        <AMViewForm onClose={handleModalToggle} />
      </Modal>

      <Modal align='right' className='w-[25%] me-16' open={isAwardOpen} onClose={AwardhandleToggle}>
        <AMViewAward onClose={AwardhandleToggle} />
      </Modal> */}
      <Modal open={isModalOpen.editAM} onClose={()=>handleModalToggle()} className="">
        <AMForm editId={id}  onClose={()=>handleModalToggle()} />
      </Modal>
      <Modal open={isModalOpen.viewAM} onClose={()=>handleModalToggle()} className="">
        <AMViewForm onClose={()=>handleModalToggle()} />
      </Modal>
      <Modal open={isModalOpen.awardAM} onClose={()=>handleModalToggle()} align='right' className="w-[25%] me-12 mt-14">
        <AMViewAward onClose={()=>handleModalToggle()} />
      </Modal>
    </div>
  )
}

export default AMView;