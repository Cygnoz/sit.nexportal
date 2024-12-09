// import Licensers from "../../../components/ui/Licensers";
import BackgroundView from '../../../assets/image/AMView.png'
import ChevronRight from "../../../assets/icons/ChevronRight";
import { useParams } from "react-router-dom";
import profileImage from '../../../assets/image/AvatarImg.png'
import EditIcon from "../../../assets/icons/EditIcon";
import ViewRoundIcon from "../../../assets/icons/ViewRoundIcon";
import DeActivateIcon from "../../../assets/icons/DeActivateIcon";
import AwardIcon from "../../../assets/icons/AwardIcon";
import { useState } from "react";
import AMViewForm from "./AMViewForm";
import Modal from "../../../components/modal/Modal";
import AMViewCardandTable from "./AMViewCardandTable";
import LicensersTable from '../../../components/ui/LicensersTable';
import AMViewAward from './AMViewAward';
// import SearchBar from "../../../components/ui/SearchBar";
interface AMData {
  name: string;
  emailAdrees: string;
  status: string;
  region:string;
  area: string;
}


type Props = {}

const AMView = ({ }: Props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const handleModalToggle = () => {
      setIsModalOpen((prev) => !prev);
  };
      const data: AMData[] = [
        { name: "Devid Billie", emailAdrees: "nathan.roberts@example.com", status: "Active", region: "Region 1", area: "Area 2" },
        { name: "Sudeep Kumar", emailAdrees: "nathan.roberts@example.com", status: "Expired", region: "Region 1", area: "Area 2"},
        { name: "Kathryn Murphy", emailAdrees: "nathan.roberts@example.com", status: "Upcoming Renewal", region: "Region 1", area: "Area 2" },
        { name: "Darrell Steward", emailAdrees: "nathan.roberts@example.com", status: "Expired", region: "Region 1", area: "Area 2" },
        { name: "Ronald Richards", emailAdrees: "nathan.roberts@example.com", status: "Upcoming Renewal", region: "Region 1", area: "Area 2" },
        { name: "Jane Cooper", emailAdrees: "nathan.roberts@example.com", status: "Active", region: "Region 1", area: "Area 2" },
        { name: "Sudeep Kumar", emailAdrees: "nathan.roberts@example.com", status: "Expired", region: "Region 1", area: "Area 2" },
        { name: "Kathryn Murphy", emailAdrees: "nathan.roberts@example.com", status: "Upcoming Renewal", region: "Region 1", area: "Area 2" },
        { name: "Darrell Steward", emailAdrees: "nathan.roberts@example.com", status: "Active", region: "Region 1", area: "Area 2" },
        { name: "Ronald Richards", emailAdrees: "nathan.roberts@example.com", status: "Expired", region: "Region 1", area: "Area 2" },
        { name: "Jane Cooper", emailAdrees: "nathan.roberts@example.com", status: "Active", region: "Region 1", area: "Area 2" },
      ];
        // Define the columns with strict keys

        const columns: { key: any; label: string }[] = [
          { key: "name", label: "Name" },
          { key: "emailAdrees", label: "Email Address" },
          { key: "status", label: "Phone No" },
          { key: "region", label: "Region" },
          { key: "area", label: "Area" },
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

  const { id } = useParams()
  return (
    <div >
      <div className="flex items-center text-[16px] my-2 space-x-2">
        <p className="font-bold text-[#820000] ">AM</p>
        <ChevronRight color="#4B5C79" size={18} />
        <p className="font-bold text-[#303F58] ">AM {id}</p>
      </div>
      <div className="rounded-xl p-6 flex items-center bg-cover" style={{ backgroundImage: `url(${BackgroundView})` }}>
        <div className="items-center space-x-6">
          {/* Profile Picture */}
          <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h1 className="ms-7 text-[#FFFEFB] text-2xl font-normal">David Billie</h1>
          <div className="flex mt-1 gap-3">
            <div className="border-r ms-3">
              <p className="my-1 mx-3 text-[#D4D4D4] text-xs font-medium">Contact Number</p>
              <p className="my-1 mx-3 text-[#FFFFFF] text-sm font-medium">+91 9834546756</p>
            </div>
            <div className="border-r">
              <p className="my-1 mx-3 text-[#D4D4D4] text-xs font-medium">Email</p>
              <p className="my-1 mx-3 text-[#FFFFFF] text-sm font-medium">dean@example.com</p>
            </div>
            <div className="">
              <p className="my-1 mx-3 text-[#D4D4D4] text-xs font-medium">Area</p>
              <p className="my-1 mx-3 text-[#FFFFFF] text-sm font-medium underline">AE6-NE001</p>
            </div>
            <div className="mx-8 -mt-5 ms-28">
              <p className="text-[#D4D4D4] text-xs font-medium">Role</p>
              <p className="text-[#FFFFFF] text-sm font-medium">Area Manager</p>
            </div>
            <div className="me-8 -mt-5">
              <p className="text-[#D4D4D4] text-xs font-medium">Employee ID</p>
              <p className="text-[#FFFFFF] text-sm font-medium">EMC-NE001</p>
            </div>
            <div className="-mt-5">
              <p className="text-[#D4D4D4] text-xs font-medium">Joining Date</p>
              <p className="text-[#FFFFFF] text-sm font-medium">13 June 2023</p>
            </div>
            <div className="flex -mt-9 ms-10 gap-3">
            <div className="flex flex-col items-center space-y-1">
              <div className="w-8 h-8 mb-2 rounded-full">
                <EditIcon size={36} color="#C4A25D24" />
              </div>
              <p className="text-center ms-3 text-[#D4D4D4] text-xs font-medium" >Edit Profile</p>
             </div>

            <div className="flex flex-col  items-center space-y-1">
              <div onClick={handleModalToggle} className="w-8 h-8 mb-2 rounded-full">
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
      {/* Card & table */}
          <AMViewCardandTable/>
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
        <LicensersTable<AMData> data={data} columns={columns} headerContents={{
          title:'Licensers handled by BDA',
          search:{placeholder:'Search License by Name or Holder Name'},
          
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
       <Modal open={isModalOpen} onClose={handleModalToggle}>
                <AMViewForm onClose={handleModalToggle} />
            </Modal>
             {/* Modal Section */}
      <Modal open={isModalOpen} onClose={handleModalToggle}>
        <AMViewAward onClose={handleModalToggle} />
      </Modal>
    </div>
  )
}

export default AMView