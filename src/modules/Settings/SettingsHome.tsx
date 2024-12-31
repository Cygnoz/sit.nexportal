import { useMemo, useState } from "react";
import Button from "../../components/ui/Button";
import Chevronleft from "../../assets/icons/Chevronleft";
import BusinessCard from "./BusinessCard";
import SearchIcon from "../../assets/icons/SearchIcon";
import SearchBar from "../../components/ui/SearchBar";

const SettingsHome = () => {
    const [currentPage, setCurrentPage] = useState("Target");
    const sidebarList = ["Target", "User", "UserLog", "Business Card", "Worker Commission"];
    const [searchValue, setSearchValue] = useState<string>("");
    const handleSideBarTab = (index:any) => {
        setCurrentPage(sidebarList[index]);
    };
     // Filter data based on the search value
      const filteredSidebar: any = useMemo(() => {
        return sidebarList?.filter((row) =>
          Object.values(row).some((value) =>
            String(value).toLowerCase().includes(searchValue.toLowerCase())
          )
        );
      }, [sidebarList, searchValue]);

    return (
        <>
            <div className="grid grid-cols-12 text-[#303F58] -ms-5 -mt-4">
                {/* Sidebar */}
                <div className="col-span-2">
                    <div className="bg-white w-60 h-screen fixed  p-6 ">
                        <div className="mb-3">
                            <Button variant="secondary" size="sm">
                                <Chevronleft size={10} />
                                <p className="text-[#565148] text-sm font-medium">Back</p>
                            </Button>
                        </div>
                        <p className=" text-lg font-bold mb-3">Settings</p>
                        <div className="mb-2">
                        <SearchBar
        placeholder="Search"
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />
                        </div>
                       
                        {filteredSidebar.length>0?filteredSidebar.map((name:any, index:any) => (
                            <p
                                key={index}
                                onClick={() => handleSideBarTab(index)}
                                className={`${
                                    sidebarList[index] === currentPage
                                        ? "text-[#820000]"
                                        : "text-[#303F58]"
                                } text-sm font-semibold p-2 cursor-pointer`}
                            >
                                {name}
                            </p>
                        )):
                        <p className="text-red-500 text-sm font-bold text-center mt-6">No side bar found!</p>
                        }
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-span-10 p-3">
                    {currentPage === "Target" && <div>Target</div>}
                    {currentPage === "User" && <div>Users</div>}
                    {currentPage === "UserLog" && <div>User Log</div>}
                    {currentPage === "Business Card" && <BusinessCard />}
                    {currentPage === "Worker Commission" && <div>Worker Commission</div>}
                </div>
            </div>
        </>
    );
};

export default SettingsHome;
