import { useEffect, useState, useRef } from "react";
import ChevronDown from "../../assets/icons/ChevronDown";
import SearchBar from "./SearchBar";

type Props = {
  setSelectedValue?: (value: any) => void;
  selectedValue?: any;
  filteredData?: any[];
  width?: string;
  placeholder?: string;
  searchPlaceholder?: string;
};

const SelectDropdown: React.FC<Props> = ({
  setSelectedValue,
  selectedValue,
  filteredData = [],
  width = "w-52",
  placeholder,
  searchPlaceholder = "Search...",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(filteredData);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Initialize the filtered items and set the initial selected value
  useEffect(() => {
    const items = placeholder
      ? [{ label: placeholder, value: "" }, ...filteredData]
      : filteredData;

    setFilteredItems(items);

    // Ensure initial selected value is set correctly
    if (!selectedValue && items.length > 0) {
      setSelectedValue?.(items[0]); // Default to first item or placeholder
    }
  }, [filteredData, placeholder, selectedValue, setSelectedValue]);

  // Update filtered items when the search value changes
  useEffect(() => {
    const items = placeholder
      ? [{ label: placeholder, value: "" }, ...filteredData]
      : filteredData;

    setFilteredItems(
      items.filter((item) =>
        item.label.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, filteredData, placeholder]);

  // Handle item selection
  const handleSelect = (item: any) => {
    setSelectedValue?.(item);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);


  console.log("select",selectedValue);
  

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`flex items-center px-4 py-2 border rounded-xl bg-[#FEFDFA] ${width}`}
        onClick={() => setIsOpen((prev: boolean) => !prev)}
      >
        {selectedValue?.label || placeholder || filteredData[0]?.label || "Select"}
        <div className="ms-auto">
          <ChevronDown size={20} color="#6B7280" />
        </div>
      </button>

      {isOpen && (
        <div
          className={`absolute mt-2 top-10 bg-white border rounded-md shadow-lg max-h-72 custom-scrollbar overflow-y-auto z-10 ${width}`}
        >
          {/* Search Bar */}
          <div className="p-2">
            <SearchBar
              placeholder={searchPlaceholder}
              searchValue={searchValue}
              onSearchChange={setSearchValue}
            />
          </div>

          {/* Dropdown Items */}
          <div className="max-h-52 overflow-y-auto custom-scrollbar">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div
                  key={item.value}
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                    selectedValue?.value === item.value
                      ? "bg-gray-100 font-bold"
                      : ""
                  }`}
                  onClick={() => handleSelect(item)}
                >
                  {item.label}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-red-500 font-bold text-center">
                No options found!
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;
