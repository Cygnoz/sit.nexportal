import { useState } from "react";
import Bell from "../assets/icons/Bell";
import Settings from "../assets/icons/Settings";
import UserIcon from "../assets/icons/UserIcon";
import SearchBar from "../components/ui/SearchBar";

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div
    className="p-4 flex items-center gap-2 w-full border-b-slate-400 border-y-orange-200"
    style={{ borderBottom: "1.5px solid rgba(28, 28, 28, 0.1)" }}
  >
    <div className="w-[68%]">
      <SearchBar
        placeholder="Search licenses,clients,tickets or invoices"
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />
    </div>
    <div
      className="flex ms-14 justify-center items-center gap-2 cursor-pointer"
    >
      {/* <img src={viewAppsIcon} alt="View Apps Icon" /> */}
    </div>
    <div className="flex items-center gap-4 ml-auto">
      <div className="tooltip" data-tooltip="Settings">
        {/* <Notification /> */}
        <p className="w-[34px] h-[34px] border border-[#E7E8EB] bg-[#FFFFFF] rounded-full flex justify-center items-center">
          <Settings color="#768294"/> 
        </p>
      </div>
      <div className="tooltip" data-tooltip="notification">
        {/* <RefferEarn /> */}
        <p className="w-[34px] h-[34px] border border-[#E7E8EB] bg-[#FFFFFF] rounded-full flex justify-center items-center">
          <Bell /> 
        </p>
      </div>
      <p className="tooltip" data-tooltip="user">
        {/* <SettingsIcons /> */}
        <p className="w-[34px] h-[34px] border border-[#E7E8EB] bg-[#FFFFFF] rounded-full flex justify-center items-center">
          <UserIcon color="#768294"/> 
        </p>
      </p>
      <div className="tooltip" data-tooltip="Organization">
        {/* <Organization organizationData={organizationData} /> */}
      </div>
    </div>
  </div>
  );
};

export default Header;
