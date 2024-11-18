import { useState } from "react";
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
        placeholder="Search"
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />
    </div>
    <div
      className="flex ms-14 justify-center items-center gap-2 cursor-pointer"
    >
      {/* <img src={viewAppsIcon} alt="View Apps Icon" /> */}
    </div>
    <div className="flex items-center gap-2 ml-auto">
      <div className="tooltip" data-tooltip="Notifications">
        {/* <Notification /> */}asda
      </div>
      <div className="tooltip" data-tooltip="Refer & Earn">
        {/* <RefferEarn /> */}asda
      </div>
      <p className="tooltip" data-tooltip="Settings">
        {/* <SettingsIcons /> */}settings
      </p>
      <div className="tooltip" data-tooltip="Organization">
        {/* <Organization organizationData={organizationData} /> */}
      </div>
    </div>
  </div>
  );
};

export default Header;
