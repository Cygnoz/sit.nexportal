import { useEffect, useRef, useState } from "react";
import ListIcon from "../../assets/icons/ListIcon"

type Props = {
    sort:any
}

function SortBy({sort}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev)=>!prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative text-[#4B5C79]">
  <button
    onClick={toggleDropdown}
    className=" px-2 py-[6px] text-sm flex items-center justify-center"
    style={{
      border: "0.5px solid #565148",
      borderRadius: "8px",
      color: "#565148",
    }}
  >
    <span
      className="flex items-center px-2.5"
      style={{ gap: "8px", fontWeight: "500" }}
    >
      <ListIcon color="#565148" /> {sort.sortHead}
    </span>
  </button>
    
    {isDropdownOpen&& (
      <div
        ref={dropdownRef}
        className="absolute min-w-[150px] ] rounded-lg mt-2 left-1/2 transform -translate-x-1/2  bg-white shadow-xl z-10"
      >
        <ul className="pt-1 text-dropdownText">
          {sort?.sortList?.map((item:any, index:number) => (
            <div key={index}>
              <li
                onClick={
                  ()=>{
                    item?.action()
                    toggleDropdown()
                  }
                }
                className={`px-2 py-2 flex items-center gap-2 ${index==0&&"rounded-t-lg"} ${index==sort.sortList.length-1&&"rounded-b-lg"}  hover:bg-orange-100  text-[14px] font-medium cursor-pointer`}
              >
               <p>{item.icon}</p>
               <p> {item.label}</p>
              </li>
              <div >
               { index!=sort.sortList.length-1&&<hr className="border-dropdownBorder" />}
              </div>
            </div>
          ))}
        </ul>
      </div>
    )}
  </div>
  
  



  );
}

export default SortBy;
