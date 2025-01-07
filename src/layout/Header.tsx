import { useEffect, useRef, useState } from "react";
import Bell from "../assets/icons/Bell";
import Settings from "../assets/icons/Settings";
import UserIcon from "../assets/icons/UserIcon";
import SearchBar from "../components/ui/SearchBar";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { NavList } from "../components/list/NavLists";

interface HeaderProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  scrollToActiveTab: () => void;
}

const Header: React.FC<HeaderProps> = ({ searchValue, setSearchValue, scrollToActiveTab }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1); // Manage focused item index
  const { user } = useUser();
  const navigate = useNavigate();

  const searchBarRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const filteredNavList = NavList.filter(
    (route: any) =>
      route.key.trim().toLowerCase().includes(searchValue.toLowerCase()) ||
      route.label.trim().toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSelect = (route: any) => {
    setDropdownVisible(false);
    setSearchValue(route);
    navigate(`/${route}`);
    scrollToActiveTab(); // Ensure this function is working as expected
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!dropdownVisible) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setFocusedIndex((prevIndex) =>
          prevIndex < filteredNavList.length - 1 ? prevIndex + 1 : 0
        );
        break;
      case "ArrowUp":
        event.preventDefault();
        setFocusedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : filteredNavList.length - 1
        );
        break;
      case "Enter":
        if (focusedIndex >= 0) {
          handleSelect(filteredNavList[focusedIndex].key);
        }
        break;
      case "Escape":
        setDropdownVisible(false);
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="p-4 flex items-center gap-2 w-full border-b-slate-400 border-y-orange-200 header-container"
      onKeyDown={handleKeyDown}
    >
      <div className="relative w-[68%]" ref={searchBarRef}>
        <SearchBar
          placeholder="Search for modules areas, regions, region managers, area managers, supervisors, agents, leads, trials, or tickets, etc."
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          onClick={() => {
            setDropdownVisible((prev) => !prev);
          }}
        />
        {dropdownVisible && (
          <ul
            ref={dropdownRef}
            className="absolute z-10 w-full mt-1 bg-white border max-h-96 overflow-y-scroll custom-scrollbar border-gray-300 rounded shadow"
          >
            {filteredNavList.length === 0 ? (
              <li className="px-4 py-2 text-red-500 text-center font-bold">No module found!</li>
            ) : (
              filteredNavList.map((route: any, index: number) => (
                <li
                  key={route.key}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${
                    focusedIndex === index ? "bg-gray-200" : ""
                  }`}
                  onClick={() => handleSelect(route.key)}
                >
                  {route.label}
                </li>
              ))
            )}
          </ul>
        )}
      </div>

      <div className="flex ms-14 justify-center items-center gap-2 cursor-pointer" />
      <div className="flex items-center gap-4 ml-auto">
        <div className="tooltip" data-tooltip="Settings">
          <p className="w-[34px] h-[34px] border border-[#E7E8EB] bg-[#FFFFFF] rounded-full flex justify-center items-center">
            <Settings color="#768294" />
          </p>
        </div>
        <div className="tooltip" data-tooltip="Notification">
          <p className="w-[34px] h-[34px] border border-[#E7E8EB] bg-[#FFFFFF] rounded-full flex justify-center items-center">
            <Bell />
          </p>
        </div>
        <p className="tooltip" data-tooltip="User">
          {user?.userImage ? (
            <img
              className="w-[34px] h-[34px] border border-[#E7E8EB] bg-[#FFFFFF] rounded-full"
              src={user?.userImage}
              alt=""
            />
          ) : (
            <p className="w-[34px] h-[34px] border border-[#E7E8EB] bg-[#FFFFFF] rounded-full flex justify-center items-center">
              <UserIcon color="#768294" />
            </p>
          )}
        </p>
      </div>
    </div>
  );
};

export default Header;
