import React, { useState, useRef, useEffect } from "react";
import ChevronDown from "../../assets/icons/ChevronDown";
import SearchBar from "../ui/SearchBar";

interface SelectProps {
  required?: boolean;
  label?: string;
  options: { value: any; label: string }[];
  error?: string;
  placeholder?: string;
  readOnly?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  error,
  placeholder,
  required,
  readOnly,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<"top" | "bottom">("bottom");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const allOptions = placeholder
      ? [{ value: "", label: placeholder }, ...options]
      : options;

    setFilteredOptions(
      allOptions.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, options, placeholder]);

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
  }, []);

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (dropdownRect.bottom + 150 > viewportHeight) {
        setDropdownPosition("top");
      } else {
        setDropdownPosition("bottom");
      }
    }
  }, [isOpen]);

  const handleOptionSelect = (selectedValue: string) => {
    if (onChange) onChange(selectedValue);
    setIsOpen(false);
    setSelectedIndex(null);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className={`block text-sm font-medium ${label && "mb-2"}`}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div
        className={`relative ${
          readOnly ? "pointer-events-none opacity-50" : "cursor-pointer"
        }`}
        onClick={() => !readOnly && setIsOpen(!isOpen)}
      >
        <div
          className={`block w-full h-9 pt-2 text-[#818894] bg-white border 
                      text-sm px-2 pr-8 rounded-md leading-tight 
                      ${error ? "border-red-500" : "border-gray-300"}`}
        >
          {value
            ? options.find((option) => option.value === value)?.label || placeholder
            : placeholder || options[0]?.label}
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <ChevronDown color="gray" />
        </div>
      </div>
      {isOpen && (
        <div
          className={`absolute z-10 mt-1 w-full p-1 bg-white border border-gray-300 rounded-md shadow-lg ${
            dropdownPosition === "top" ? "bottom-full mb-1" : "top-full mt-1"
          }`}
          tabIndex={0}
        >
          <SearchBar searchValue={searchValue} onSearchChange={setSearchValue} />
          <div
            ref={listRef}
            className="max-h-52 overflow-y-auto custom-scrollbar"
          >
            {filteredOptions.map((option, index) => (
              <div
                key={option.value}
                onClick={() => handleOptionSelect(option.value)}
                className={`px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 ${
                  selectedIndex === index ? "bg-gray-200" : ""
                }`}
              >
                {option.label}
              </div>
            ))}
          </div>
          {filteredOptions.length === 0 && (
            <div className="px-4 py-2 font-bold text-red-500 text-center text-sm">
              No options found!
            </div>
          )}
        </div>
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Select;
