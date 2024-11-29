import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon"
// import CalenderDays from "../../../assets/icons/CalenderDays";
import LeadsCardIcon from "../../../assets/icons/LeadsCardIcon";
import Licensor from "../../../assets/icons/Licensor";
// import RegionIcon from "../../../assets/icons/RegionIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import Licensers from "../../../components/ui/Licensers";
import Table from "../../../components/ui/Table";
import ViewCard from "../../../components/ui/ViewCard";

interface AMViewData {
  BDAname: string;
  leadAssigned: string;
  conversionRate: string;
  status: string;
  area: string;
}

type Props = {}

const AreaManagerView = ({ }: Props) => {

  const handleEditDeleteView = (editId?: any, viewId?: any, deleteId?: any) => {
    if (viewId) {
      // navigate(`/amView/${viewId}`)
      console.log(viewId);

    }
    console.log(editId);
    console.log(deleteId);
    
    
  }

  const viewCardData = [
    { icon: <UserIcon />, number: "189", title: "Total Area Managed", iconFrameColor: '#1A9CF9', iconFrameBorderColor: '#BBD8EDCC' },
    { icon: <AreaManagerIcon />, number: "498", title: "Total BDA's", iconFrameColor: '#D786DD', iconFrameBorderColor: '#FADDFCCC' },
  ];

  const SecondCard = [
    { icon: <LeadsCardIcon />, number: "46", title: "Total Leads", iconFrameColor: '#1A9CF9', iconFrameBorderColor: '#BBD8EDCC' },
    { icon: <Licensor />, number: "147", title: "Total Licensers", iconFrameColor: '#D786DD', iconFrameBorderColor: '#FADDFCCC' },
  ];
  const ThirdCard = [
    { icon: <LeadsCardIcon />, number: "147", title: "Lead Conversion rate", iconFrameColor: '#1A9CF9', iconFrameBorderColor: '#BBD8EDCC' },
    { icon: <Licensor />, number: "147", title: "Closed Licenses", iconFrameColor: '#D786DD', iconFrameBorderColor: '#FADDFCCC' },
  ];

  // Data for the table
  const data: AMViewData[] = [
    { BDAname: "Devid Billie", leadAssigned: "45", conversionRate: "32%", status: "New", area: "Area 2", },
    { BDAname: "Sudeep Kumar", leadAssigned: "45", conversionRate: "32%", status: "New", area: "Area 2", },
    { BDAname: "Kathryn Murphy", leadAssigned: "45", conversionRate: "32%", status: "New", area: "Area 2", },
    { BDAname: "Darrell Steward", leadAssigned: "45", conversionRate: "32%", status: "New", area: "Area 2", },
  ];
  // Define the columns with strict keys
  const columns: { key: keyof AMViewData; label: string }[] = [
    { key: "BDAname", label: "BDA Name" },
    { key: "leadAssigned", label: "Leads Assigned" },
    { key: "conversionRate", label: "Conversion Rate" },
    { key: "status", label: "Status" },
    { key: "area", label: "Area" },
  ];

  const LicencerData = [
    { plan: "1", name: "John Doe", startDate: "2024-01-01", endDate: "2024-12-31", status: "Active", buttonValue: "Renew" },
    { plan: "2", name: "Jane Smith", startDate: "2023-06-15", endDate: "2024-06-14", status: "Expired", buttonValue: "Renew" },
    { plan: "1", name: "Robert Brown", startDate: "2024-03-01", endDate: "2025-02-28", status: "Active", buttonValue: "Renew" },
    { plan: "3", name: "Emily Clark", startDate: "2023-11-20", endDate: "2024-11-19", status: "Pending Renewal", buttonValue: "Upgrade" },
    { plan: "2", name: "Jessica Davis", startDate: "2023-08-05", endDate: "2024-08-04", status: "Expired", buttonValue: "Renew" }
  ];

  return (
    <div>
      <div className="bg-[#000000] text-white rounded-lg shadow-lg p-6 flex items-center">
        <div className="items-center space-x-6">
          {/* Profile Picture */}
          <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h1 className="ms-7 text-[#FFFEFB] text-2xl font-normal">David Billie</h1>
          <div className="flex mt-1">
            <div className="border-r ms-3">
              <p className="my-1 mx-3">Contact Number</p>
              <p className="my-1 mx-3">+91 9834546756</p>
            </div>
            <div className="border-r">
              <p className="my-1 mx-3">Email</p>
              <p className="my-1 mx-3">dean@example.com</p>
            </div>
            <div className="">
              <p className="my-1 mx-3">Area</p>
              <p className="my-1 mx-3">AE6-NE001</p>
            </div>
            <div className="mx-8 -mt-5">
              <p>Role</p>
              <p>Area Manager</p>
            </div>
            <div className="me-8 -mt-5">
              <p>Employee ID</p>
              <p>EMC-NE001</p>
            </div>
            <div className="-mt-5">
              <p>Joining Date</p>
              <p>13 June 2023</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        {/* <div className="flex space-x-4">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full flex items-center space-x-2">
          <span>Edit Profile</span>
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2">
          <span>View Details</span>
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full flex items-center space-x-2">
          <span>Deactivate</span>
        </button>
      </div> */}
      </div>
      {/* Card & table */}
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          {/* Cards Section */}
          <div className="flex gap-3 py-2 justify-between mt-4">
            {viewCardData.map((card, index) => (
              <ViewCard
                iconFrameColor={card.iconFrameColor}
                iconFrameBorderColor={card.iconFrameBorderColor}
                key={index}
                icon={card.icon}
                number={card.number}
                title={card.title}
              />
            ))}
          </div>
          <div className="flex gap-3 py-2 justify-between mt-2">
            {SecondCard.map((card, index) => (
              <ViewCard
                iconFrameColor={card.iconFrameColor}
                iconFrameBorderColor={card.iconFrameBorderColor}
                key={index}
                icon={card.icon}
                number={card.number}
                title={card.title}
              />
            ))}
          </div>
          <div className="flex gap-4 py-2 justify-between mt-2 ">
            {ThirdCard.map((card, index) => (
              <ViewCard
                iconFrameColor={card.iconFrameColor}
                iconFrameBorderColor={card.iconFrameBorderColor}
                key={index}
                icon={card.icon}
                number={card.number}
                title={card.title}
              />
            ))}
          </div>

        </div>
        <div className="col-span-8">
          {/* Table Section */}
          <div className="ms-4 py-2 mt-4">
            <Table<AMViewData> data={data} columns={columns} headerContents={{
              title: "BDA's",
              search: { placeholder: 'Search BDA by Name' },
            }}
              actionList={[
                { label: 'view', function: handleEditDeleteView },
              ]} />
          </div>

        </div>
      </div>
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
      <div className="">
        <Licensers headerContents={{
          title: 'Licensers handled by BDA',
          search: { placeholder: 'Search License by Name or Holder Name' }
        }}
          cardContents={LicencerData}
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
    </div>
  )
}

export default AreaManagerView