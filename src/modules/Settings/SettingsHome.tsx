import { FC, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Chevronleft from "../../assets/icons/Chevronleft";
import Button from "../../components/ui/Button";
import SearchBar from "../../components/ui/SearchBar";

// Define the Props interface
interface SettingsHomeProps {
  initialSidebarList?: { name: string; path: string }[]; // Allow optional initial sidebar list
  setHeaderSearchValue?:any
}

const SettingsHome: FC<SettingsHomeProps> = ({
  initialSidebarList = [
    { name: "Target", path: "/settings/target" },
    { name: "User", path: "/settings/users" },
    { name: "UserLog", path: "/settings/user-log" },
    { name: "Business Card", path: "/settings/business-card" },
    { name: "Worker Commission", path: "/settings/worker-commission" },
  ],
  setHeaderSearchValue
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredSidebar, setFilteredSidebar] = useState(initialSidebarList);
  const [currentPage, setCurrentPage] = useState(location.pathname);

  // Navigate back
  const handleBack = () => {
    navigate(-1);
  };

  // Update filtered sidebar based on search value
  useEffect(() => {
    setFilteredSidebar(
      initialSidebarList.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, initialSidebarList]);

  // Update route and highlight tab
  const handleSideBarTab = (path: string) => {
    setHeaderSearchValue("")
    setCurrentPage(path); // Update the current page
    navigate(path); // Navigate to the new path
  };

  // Effect to update currentPage when location changes
  useEffect(() => {
    setCurrentPage(location.pathname); // This will update the current page whenever the location changes
  }, [location]);

  return (
    <div className="grid grid-cols-12 pb-12 h-full text-[#303F58]">
      {/* Sidebar */}
      <div className="col-span-2 ">
        <div className="bg-white w-60 h-screen fixed p-6">
          <div className="mb-3">
            <Button variant="tertiary" size="sm" onClick={handleBack}>
              <Chevronleft size={10} />
              <p className="text-[#565148] text-sm font-medium">Back</p>
            </Button>
          </div>
          <p className="text-lg font-bold mb-3">Settings</p>
          <div className="mb-2">
            <SearchBar
              bg="#1C1C140A"
              placeholder="Search"
              searchValue={searchValue}
              onSearchChange={setSearchValue}
            />
          </div>

          {filteredSidebar.length > 0 ? (
            filteredSidebar.map((item) => (
              <p
                key={item.path}
                onClick={() => handleSideBarTab(item.path)}
                className={`${
                  currentPage === item.path
                    ? "text-[#820000]" // Active tab color
                    : "text-[#303F58]" // Default color
                } text-sm font-semibold p-2 cursor-pointer`}
              >
                {item.name}
              </p>
            ))
          ) : (
            <p className="text-red-500 text-sm font-bold text-center mt-6">
              No sidebar found!
            </p>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-10 p-5 h-full   overflow-y-auto static  hide-scrollbar">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsHome;
