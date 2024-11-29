import { useState } from "react";
import Button from "./Button";
import SearchBar from "./SearchBar";

type LicenserProps = {
    // data: T[];
    headerContents: {
        title?: string;
        search?: { placeholder: string };
      };
      cardContents:{
      plan: string;
      name:string;
      startDate:string;
      endDate:string;
      status:string;
      buttonValue:string;
      }[]
    }

const Licensers = ({headerContents,cardContents}: LicenserProps) => {
    const [searchValue, setSearchValue] = useState<string>("");
  
    // Filter data based on the search value
    // const filteredData = useMemo(() => {
    //   return data.filter((row) =>
    //     Object.values(row).some((value) =>
    //       String(value).toLowerCase().includes(searchValue.toLowerCase())
    //     )
    //   );
    // }, [data, searchValue]);

      // Function to determine row styles based on `status`
  const getStatusClass = (status: string | undefined) => {
    switch (status) {
      case "New":
        return "bg-red-500 text-white py-2 px-2 w-fit rounded-lg";
      case "Contacted":
        return "bg-green-400 text-white py-2 px-2 rounded-lg";
      case "Closed":
        return "bg-blue-300 text-white py-2 px-2 rounded-lg";
        case "Active":
        return "bg-red-500 text-white py-2 px-2 w-fit rounded-lg";
      case "Converted":
        return "bg-green-400 text-white py-2 px-2 rounded-lg";
      case "Expired":
        return "bg-blue-300 text-white py-2 px-2 rounded-lg";
        case "Pending Renewal":
        return "bg-green-400 text-white py-2 px-2 rounded-lg";
      default:
        return "";
        
    }
  };

  // Render table header
  const renderHeader = () => (
    <div className={`flex  ${headerContents.search&&!headerContents.title} items-center mb-4`}>
      {headerContents.title && (
        <h2 className="text-lg font-bold">{headerContents.title}</h2>
      )}
      {headerContents.search && (
        <div className={`w-[440px] ${headerContents.title && "ms-auto me-2"}`}>
          <SearchBar
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            placeholder={headerContents.search.placeholder}
          />
        </div>
      )}
    </div>
  );

  
  return (
    <div>
        <div className="w-full bg-white rounded-lg p-4">
      {renderHeader()}
      <div className="flex justify-between items-start p-4 rounded-lg">
      {/* Title and Number */}
      {cardContents.map((card)=>(
              <div className="p-4 border w-60 h-52 bg-[#F7FBFE] rounded-lg">
              <p className={`gap-2 w-[72%] text-center ${getStatusClass(card.status)}`}>{card.status}</p>
              <p className="text-sm font-normal text-[#8392A9] gap-2 my-1">{card.name}</p>
              <p className="text-sm font-bold text-[]#4B5C79 mb-1">Plan {card.plan}</p>
              <p className="text-sm font-medium text-[#72829D] mb-1">StartDate: {card.startDate}</p>
              <p className="text-sm font-medium text-[#72829D] mb-1">Enddate: {card.endDate}</p>
              <div className="mt-3">
              <Button className="border h-7 w-20 rounded-md py-2 px-3 gap-1" variant="tertiary">
                  {card.buttonValue}
              </Button>
            </div>
      
            </div>
      
      ))}
          </div>


    </div>
    </div>
    
  )
}

export default Licensers