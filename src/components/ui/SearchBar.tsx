import { ChangeEvent } from "react";
import SearchIcon from "../../assets/icons/SearchIcon";

type Props = {
  searchValue?: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
  setDropdownVisible?:any;
  bg?:string
};

const SearchBar = ({ searchValue, onSearchChange, placeholder = "Search",bg,setDropdownVisible }: Props) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
    setDropdownVisible?.setDropdownVisible(true)
  };

  return (
    <div className='relative w-full flex items-center'>
      <SearchIcon className="size-4 absolute left-3 text-gray-500" />
      <input
        className={`pl-9 ${bg&&`bg-[${bg}]`} text-sm w-full rounded-lg text-start text-gray-800 h-10 p-2 border focus:ring-1 border-[#E7E8EB]`}
        style={{
          outline: "none",
          boxShadow: "none",
        }}
        placeholder={placeholder}
        onChange={handleSearch}
        value={searchValue}
        onClick={()=>{ 
          setDropdownVisible?.setDropdownVisible((prev:any)=>!prev)
        }}
      />
    </div>
  );
};

export default SearchBar;
