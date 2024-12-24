import LeadsCardIcon from "../../../../assets/icons/LeadsCardIcon";
import UserIcon from "../../../../assets/icons/UserIcon";
// import Button from "../../../components/ui/Button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../../../Hooks/useApi";
import AwardIcon from "../../../../assets/icons/AwardIcon";
import ChevronRight from "../../../../assets/icons/ChevronRight";
import DeActivateIcon from "../../../../assets/icons/DeActivateIcon";
import EditIcon from "../../../../assets/icons/EditIcon";
import ViewRoundIcon from "../../../../assets/icons/ViewRoundIcon";
import backGroundView from '../../../../assets/image/BDAView.png';
import Modal from "../../../../components/modal/Modal";
import LicensersTable from "../../../../components/ui/LicensersTable";
import Table from "../../../../components/ui/Table";
import ViewCard from "../../../../components/ui/ViewCard";
import { endPoints } from "../../../../services/apiEndpoints";
import BDAForm from "../BDAForm";
import GraphTable from "../GraphTable";
import BDAViewAward from "./BDAViewAward";
import BDAViewForm from "./BDAViewForm";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Tooltip,
  XAxis, YAxis
} from 'recharts';

interface BDAViewData {
  leadId:string;
  leadName: string;
  phoneNo: string;
  email: string;
  origin:string;
  assignedDate:string;
  status: string;
}

interface Licencer {
  name: string;
  plan: string;
  status: string;
  startDate: string;
  endDate: string;
  action: string;
}


type Props = {}

const BDAView = ({}: Props) => {
  const navigate=useNavigate()
  const {id}=useParams()
  const {request:getBDA}=useApi('get',3002);
  const [data, setData] = useState<{
    bdaData:any;
    regionManager:any;
  }>({ bdaData:{},regionManager:[] });
  const viewCardData = [
    { icon: <LeadsCardIcon />, number: "32", title: "Total Leads Assigned", iconFrameColor: '#DD9F86', iconFrameBorderColor: '#F6DCD2' },
    { icon: <UserIcon />, number: "17", title: "Total Licenses Sold", iconFrameColor: '#1A9CF9', iconFrameBorderColor: '#BBD8EDCC' },
    { icon: <LeadsCardIcon />, number: "₹89,567", title: "Total Revenue Generated", iconFrameColor: '#9C75D3', iconFrameBorderColor: '#DAC9F1' },
    { icon: <LeadsCardIcon />, number: "6", title: "Pending Tasks", iconFrameColor: '#9C75D3', iconFrameBorderColor: '#DAC9F1' },

    // { icon: <AreaManagerIcon />, number: "498", title: "Total BDA's", iconFrameColor: '#D786DD', iconFrameBorderColor: '#FADDFCCC' },
  ];

  const [isModalOpen, setIsModalOpen] = useState({
    editBda: false,
    viewBda: false,
    awards:false
  });

  // Function to toggle modal visibility
  const handleModalToggle = (editBda = false, viewBda = false,awards=false) => {
    setIsModalOpen((prevState: any) => ({
      ...prevState,
      editBda: editBda,
      viewBda: viewBda,
      awards:awards
    }));
    getOneBDA();
  };

  const handleEditDeleteView = (editId?: any, viewId?: any, deleteId?: any) => {
    if (viewId) {
      // navigate(`/amView/${viewId}`)
      console.log(viewId);

    }
    console.log(editId);
    console.log(deleteId);
  }
  // Data for the table
  const bdaData: BDAViewData[] = [
    { leadId:"LD12345", leadName: "Devid Billie", phoneNo: "(406) 555-0120", email: "danten@mail.ru", origin:"Website", assignedDate:"7/11/19", status: "New",  },
    { leadId:"LD12345", leadName: "Sudeep Kumar", phoneNo: "(406) 555-0120", email: "danten@mail.ru", origin:"Referral", assignedDate:"7/11/19", status: "Contacted",  },
    { leadId:"LD12345", leadName: "Kathryn Murphy", phoneNo: "(406) 555-0120", email: "irnabela@gmail.com", origin:"Website", assignedDate:"7/11/19", status: "Closed",  },
    { leadId:"LD12345", leadName: "Darrell Steward", phoneNo: "(406) 555-0120", email: "irnabela@gmail.com", origin:"Event", assignedDate:"7/11/19", status: "New", },
  ];
  // Define the columns with strict keys
  const columns: { key: keyof BDAViewData; label: string }[] = [
    { key: "leadId", label: "Lead ID" },
    { key: "leadName", label: "Lead Name" },
    { key: "phoneNo", label: "Phone Number" },
    { key: "email", label: "Email Address" },
    { key: "origin", label: "Status" },
    { key: "assignedDate", label: "Assigned Date" },
    { key: "status", label: "Status" },
  ];
  

  const LicencerData:Licencer[] = [
    { name: "Albert Flores", plan: "Plan 1", status: "Active", startDate: "2023-01-01", endDate: "2024-01-01", action: "Renew" },
    { name: "Devon Lane", plan: "Plan 1", status: "Expired", startDate: "2023-01-01", endDate: "2024-01-01", action: "Upgrade" },
    { name: "Theresa Webb", plan: "Plan 3", status: "Upcoming Renewal", startDate: "2023-01-01", endDate: "2024-01-01", action: "Upgrade" },
    { name: "Devon Lane", plan: "Plan 1", status: "Expired", startDate: "2023-01-01", endDate: "2024-01-01", action: "Upgrade" },
    { name: "Theresa Webb", plan: "Plan 2", status: "Upcoming Renewal", startDate: "2023-01-01", endDate: "2024-01-01", action: "Upgrade" },
    { name: "Albert Flores", plan: "Plan 1", status: "Active", startDate: "2023-01-01", endDate: "2024-01-01", action: "Renew" }
  ];

  const licenserColumns: { key: keyof Licencer; label: string }[] = [
    { key: "name", label: "Name" },
    { key: "plan", label: "Plan" },
    { key: "status", label: "Status" },
    { key: "startDate", label: "Start Date" },
    { key: "endDate", label: "End Date" },
    { key: "action", label: "Action" }
  ];

  

  const getOneBDA = async () => {
    try {
      const { response, error } = await getBDA(`${endPoints.BDA}/${id}`);
      if (response && !error) {
        console.log(response.data);
        
        const BDA:any = response.data; // Return the fetched data
        console.log("Fetched BDA data:", BDA);
  
       setData((prev)=>({...prev,bdaData:BDA}))
      } else {
        // Handle the error case if needed (for example, log the error)
        console.error('Error fetching BDA data:', error);
      }
    } catch (err) {
      console.error('Error fetching BDA data:', err);
    }
  };
  
  
  useEffect(() => {
    getOneBDA()
  }, [id]);

  const leadConversionData = [
    { name: 'Area 1', uv: 35, },
    { name: 'Area 2', uv: 20, },
    { name: 'Area 3', uv: 10, },
    { name: 'Area 4', uv: 30, },
    { name: 'Area 5', uv: 30, },
  ];

  const colors = ['#FF9800', '#2196F3', '#4CAF50', '#9C27B0', '#F44336', '#FFC107', '#673AB7', '#3F51B5', '#00BCD4', '#8BC34A'];

  return (
    <>
    <div>
       <div className="flex items-center text-[16px] my-2 space-x-2">
       <p onClick={()=>navigate('/bda')} className="font-bold cursor-pointer text-[#820000] ">BDA</p>
        <ChevronRight color="#4B5C79" size={18}/>
        <p className="font-bold text-[#303F58] ">{data.bdaData?.user?.userName}</p>
      </div>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-2">
        <div className="">
            {viewCardData.map((card, index) => (
              <div className="mb-3">
              <ViewCard
                iconFrameColor={card.iconFrameColor}
                iconFrameBorderColor={card.iconFrameBorderColor}
                key={index}
                icon={card.icon}
                number={card.number}
                title={card.title}
              />
              </div>
            ))}
          </div>

        </div>
          <div className="col-span-6">
          <div className="p-3 bg-white w-full space-y-2 rounded-lg">
                       <h2 className='font-bold'>Lead By Status</h2>
                       <h2>Converted Leads</h2>
                       <h1 className='text-2xl font-medium'>567</h1>
               
                       <div className='-ms-7 mt-2'>
                       <BarChart width={700} height={360} data={leadConversionData}>
                       <CartesianGrid   strokeDasharray="3 3" vertical={false}/>
                   
                   {/* Hide axis lines but keep labels visible */}
                   <XAxis dataKey="name" axisLine={false} tickLine={false} />
                   <YAxis axisLine={false} tickLine={false} />
                   
                   {/* Remove the legend for 'uv' */}
                   <Tooltip />
                   
                   <Bar barSize={90} dataKey="uv" radius={10} >
                     {
                       leadConversionData.map((data, index) => (
                         <Cell key={`cell-${data.name}`} fill={colors[index]} />
                       ))
                     }
                   </Bar>
                 </BarChart>
                       </div>
                   
                       </div>
          </div>
        <div className="col-span-4 rounded-xl bg-cover"  style={{backgroundImage:`url(${backGroundView})`}}>
          <div className="w-full h-96 p-4 rounded-xl">
            <div className="flex">
            <div className="w-20 h-20 rounded-full overflow-hidden">
          {data.bdaData?.user?.userImage?<img
            src={data.bdaData?.user?.userImage} // Replace with the actual image URL
            alt="Profile"
            className="w-full h-full object-cover"
          />:
          <p className="w-full h-full    bg-black rounded-full flex justify-center items-center">
                <UserIcon color="white" size={40} />
          </p>}
        </div>
          <p className="text-[#FFFEFB] text-2xl font-normal p-4">{data.bdaData?.user?.userName}</p>
            </div>
            <div className="flex -mt-4 ms-20 mb-6">
            <div className="border-r">
          <p className="mx-4 text-[#D4D4D4] text-xs font-medium">Contact Number</p>
          <p className="mx-4 text-[#FFFFFF] text-sm font-medium">{data.bdaData?.user?.phoneNo}</p>
        </div>
        <div>
          <p className="text-[#D4D4D4] text-xs font-medium mx-4">Email</p>
          <p className="text-[#FFFFFF] text-sm font-medium mx-4">{data.bdaData?.user?.email}</p>
        </div>
            </div>
            <div className="flex ms-20">
            <div className="border-r">
          <p className="mx-4 text-[#D4D4D4] text-xs font-medium">Region</p>
          <p onClick={()=>navigate(`/regionView/${data.bdaData?.region?._id}`)} className="mx-4 underline cursor-pointer text-[#FFFFFF] text-sm font-normal">{data.bdaData?.region?.regionCode?data.bdaData?.region?.regionCode:'N/A'}</p>
        </div>
        <div>
          <p className="mx-4 text-[#D4D4D4] text-xs font-medium">Area</p>
          <p onClick={()=>navigate(`/areaView/${data.bdaData?.area?._id}`)} className="mx-4 underline cursor-pointer text-[#FFFFFF] text-sm font-normal">{data.bdaData?.area?.areaCode?data.bdaData?.area?.areaCode:'N/A'}</p>
        </div>
            </div>
            <div className="flex gap-8 ms-6 my-12">
              <div>
                <p className="mb-1 text-[#D4D4D4] text-xs font-medium">Role</p>
                {/* <p>Employee ID</p> */}
                <p className="text-[#FFFFFF] text-sm font-medium">BDA</p>
              </div>
              <div>
                <p className="mb-1 text-[#D4D4D4] text-xs font-medium">Employee ID</p>
                <p className="text-[#FFFFFF] text-sm font-medium">{data.bdaData?.user?.employeeId}</p>
              </div>
              <div>
                <p className="mb-1 text-[#D4D4D4] text-xs font-medium">Joining Date</p>
                <p className="text-[#FFFFFF] text-sm font-medium">{new Date(data.bdaData.dateOfJoining).toLocaleDateString("en-GB")}</p>
              </div>
            </div>
            <div className="flex gap-1">
            <div onClick={()=>handleModalToggle(true,false,false)} className="flex flex-col items-center cursor-pointer  space-y-1">
              <div className="w-8 h-8 mb-2  rounded-full">
              <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                   <div className="ms-2 mt-2">
                   <EditIcon size={18} color="#F0D5A0" />
                   </div>
                    </div>
              </div>
              <p className="text-center ms-3 text-[#D4D4D4] text-xs font-medium" >Edit Profile</p>
             </div>

            <div onClick={()=>handleModalToggle(false,true,false)} className="flex flex-col  items-center space-y-1">
              <div className="w-8 h-8 mb-2 rounded-full">
              <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                   <div className="ms-2 mt-2">
                   <ViewRoundIcon size={18} color="#B6D6FF" />
                   </div>
                    </div> 
              </div>
              <p className="text-center ms-3 text-[#D4D4D4] text-xs font-medium">View Details</p>
            </div>

            <div onClick={()=>handleModalToggle(false,false,true)} className="flex flex-col cursor-pointer items-center space-y-1">
              <div className="w-8 h-8 mb-2 rounded-full">
              <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                   <div className="ms-2 mt-2">
                   <AwardIcon size={18} color="#B6FFD7" />
                   </div>
                    </div>
              </div>
              <p className="text-center ms-3 text-[#D4D4D4] text-xs font-medium">Awards</p>
            </div>

            <div className="flex flex-col  items-center space-y-1">
              <div className="w-8 h-8 mb-2 rounded-full">
              <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                   <div className="ms-2 mt-2">
                   <DeActivateIcon size={18} color="#D52B1E4D" />
                   </div>
                    </div>
              </div>
              <p className="text-center ms-3 text-[#D4D4D4] text-xs font-medium">DeActivate</p>
            </div>

        </div>
          </div>
        </div>
      </div>
        
     {/* Table Section */}
      <div className=" mt-4">
        <Table<BDAViewData> data={bdaData} columns={columns} headerContents={{
          title: "Leads Details",
          search: { placeholder: 'Search BDA by Name' },
        }}
        actionList={[
          { label: 'view', function: handleEditDeleteView },
        ]} />
      </div>

      {/* Graph & Table */}
      <GraphTable/>

        {/* Licenser Card */}
        <div>
        <LicensersTable<Licencer> data={LicencerData} columns={licenserColumns} headerContents={{
          title:'Licensers handled by BDA',
          search:{placeholder:'Search License by Name or Holder Name'},
        }}
         />
      </div>


    </div>
    <Modal open={isModalOpen.editBda} onClose={()=>handleModalToggle()}>
    <BDAForm editId={id} onClose={()=>handleModalToggle()} />
  </Modal>

  <Modal align="right" className="w-[25%] me-16" open={isModalOpen.awards} onClose={()=>handleModalToggle()}>
        <BDAViewAward data={data} onClose={()=>handleModalToggle()} />
      </Modal>

      <Modal open={isModalOpen.viewBda} onClose={()=>handleModalToggle()}>
        <BDAViewForm bdaData={data.bdaData} onClose={()=>handleModalToggle()} />
      </Modal>

  </>
  )
}

export default BDAView