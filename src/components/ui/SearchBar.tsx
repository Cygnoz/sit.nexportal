import { ChangeEvent } from "react";
import SearchIcon from "../../assets/icons/SearchIcon";

type Props = {
  searchValue?: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
};

const SearchBar = ({ searchValue, onSearchChange, placeholder = "search" }: Props) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="relative w-full flex items-center">
      <SearchIcon className={"size-4 absolute left-3 text-gray-500"} />
      <input
        className="pl-9 text-sm w-full rounded-lg text-start text-gray-800 h-10 p-2 border focus:ring-1  border-[#E7E8EB]"
        style={{
          // backgroundColor: "rgba(28, 28, 28, 0.04)",
          outline: "none",
          boxShadow: "none",
        }}
        placeholder={placeholder}
        onChange={handleSearch}
        value={searchValue}
      />
    </div>
  );
};

export default SearchBar;