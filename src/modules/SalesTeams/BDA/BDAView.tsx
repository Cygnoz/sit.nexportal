import LeadsCardIcon from "../../../assets/icons/LeadsCardIcon";
import UserIcon from "../../../assets/icons/UserIcon";
// import Button from "../../../components/ui/Button";
import Licensers from "../../../components/ui/Licensers";
import Table from "../../../components/ui/Table";
import ViewCard from "../../../components/ui/ViewCard"
import GraphTable from "./GraphTable";
import backGroundView from '../../../assets/image/BDAView.png'
import ChevronRight from "../../../assets/icons/ChevronRight";
import { useParams } from "react-router-dom";
import profileImage from '../../../assets/image/AvatarImg.png'
import DeActivateIcon from "../../../assets/icons/DeActivateIcon";
import AwardIcon from "../../../assets/icons/AwardIcon";
import ViewRoundIcon from "../../../assets/icons/ViewRoundIcon";
import EditIcon from "../../../assets/icons/EditIcon";
import LicensersTable from "../../../components/ui/LicensersTable";
import { BDAData } from "../../../Interfaces/BDA";

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
  const viewCardData = [
    { icon: <LeadsCardIcon />, number: "32", title: "Total Leads Assigned", iconFrameColor: '#DD9F86', iconFrameBorderColor: '#F6DCD2' },
    { icon: <UserIcon />, number: "17", title: "Total Licenses Sold", iconFrameColor: '#1A9CF9', iconFrameBorderColor: '#BBD8EDCC' },
    { icon: <LeadsCardIcon />, number: "₹89,567", title: "Total Revenue Generated", iconFrameColor: '#9C75D3', iconFrameBorderColor: '#DAC9F1' },
    { icon: <LeadsCardIcon />, number: "6", title: "Pending Tasks", iconFrameColor: '#9C75D3', iconFrameBorderColor: '#DAC9F1' },

    // { icon: <AreaManagerIcon />, number: "498", title: "Total BDA's", iconFrameColor: '#D786DD', iconFrameBorderColor: '#FADDFCCC' },
  ];

  const handleEditDeleteView = (editId?: any, viewId?: any, deleteId?: any) => {
    if (viewId) {
      // navigate(`/amView/${viewId}`)
      console.log(viewId);

    }
    console.log(editId);
    console.log(deleteId);
    
  }
  // Data for the table
  const data: BDAViewData[] = [
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

  const {id}=useParams()
  return (
    <div>
       <div className="flex items-center text-[16px] my-2 space-x-2">
       <p className="font-bold text-[#820000] ">BDa</p>
        <ChevronRight color="#4B5C79" size={18}/>
        <p className="font-bold text-[#303F58] ">BDA {id}</p>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
        <div className="mt-4">
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
        </div>
        <div className="col-span-4 rounded-xl bg-cover"  style={{backgroundImage:`url(${backGroundView})`}}>
          <div className="w-full h-96 p-4 rounded-xl">
            <div className="flex">
            <div className="w-20 h-20 rounded-full overflow-hidden">
          <img
            src={profileImage} // Replace with the actual image URL
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
          <p className="text-[#FFFEFB] text-2xl font-normal p-4">Darrell Steward</p>
            </div>
            <div className="flex -mt-4 ms-20 mb-6">
            <div className="border-r">
          <p className="mx-4 text-[#D4D4D4] text-xs font-medium">Contact Number</p>
          <p className="mx-4 text-[#FFFFFF] text-sm font-medium">+91 9834546756</p>
        </div>
        <div>
          <p className="text-[#D4D4D4] text-xs font-medium mx-4">Email</p>
          <p className="text-[#FFFFFF] text-sm font-medium mx-4">dean@example.com</p>
        </div>
            </div>
            <div className="flex ms-20">
            <div className="border-r">
          <p className="mx-4 text-[#D4D4D4] text-xs font-medium">Region</p>
          <p className="mx-4 underline text-[#FFFFFF] text-sm font-normal">RE6-NE001</p>
        </div>
        <div>
          <p className="mx-4 text-[#D4D4D4] text-xs font-medium">Area</p>
          <p className="mx-4 underline text-[#FFFFFF] text-sm font-normal">AE6-NE001</p>
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
                <p className="text-[#FFFFFF] text-sm font-medium">BMC-NE001</p>
              </div>
              <div>
                <p className="mb-1 text-[#D4D4D4] text-xs font-medium">Joining Date</p>
                <p className="text-[#FFFFFF] text-sm font-medium">13 June 2023</p>
              </div>
            </div>
            <div className="flex gap-1">
            <div className="flex flex-col items-center space-y-1">
              <div className="w-8 h-8 mb-2 rounded-full">
                <EditIcon size={36} color="#C4A25D24" />
              </div>
              <p className="text-center ms-3 text-[#D4D4D4] text-xs font-medium" >Edit Profile</p>
             </div>

            <div className="flex flex-col  items-center space-y-1">
              <div className="w-8 h-8 mb-2 rounded-full">
                <ViewRoundIcon  size={36} color="#D52B1E4D" />  
              </div>
              <p className="text-center ms-3 text-[#D4D4D4] text-xs font-medium">View Details</p>
            </div>

            <div className="flex flex-col  items-center space-y-1">
              <div className="w-8 h-8 mb-2 rounded-full">
                <AwardIcon size={36} color="#D52B1E4D" />
              </div>
              <p className="text-center ms-3 text-[#D4D4D4] text-xs font-medium">Awards</p>
            </div>

            <div className="flex flex-col  items-center space-y-1">
              <div className="w-8 h-8 mb-2 rounded-full">
                <DeActivateIcon size={36} color="#D52B1E4D" />
              </div>
              <p className="text-center ms-3 text-[#D4D4D4] text-xs font-medium">DeActivate</p>
            </div>

        </div>
          </div>
        </div>
      </div>
        
     {/* Table Section */}
      <div className="ms-4 mt-4">
        <Table<BDAViewData> data={data} columns={columns} headerContents={{
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
  )
}

export default BDAView