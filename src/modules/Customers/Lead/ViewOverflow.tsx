import { useEffect, useRef, useState } from "react";
import ChevronDown from "../../../assets/icons/ChevronDown";
import Button from "../../../components/ui/Button";
import useApi from "../../../Hooks/useApi";
import { endPoints } from "../../../services/apiEndpoints";
import toast from "react-hot-toast";

type Props = {
  leadData?: any;
  getOneLead: () => void;
};

const ViewOverflow = ({ leadData, getOneLead }: Props) => {
  const { request: editLead } = useApi("put", 3001);
  const [isOpen, setIsOpen] = useState(false);
  const statuses = ["New", "Contacted", "In progress", "Proposal", "Lost", "Won"];
  const [lead, setLead] = useState<any>();
  const dropdownRef = useRef(null);

  const getStatusClass = (status: string | undefined) => {
    const statusMap: { [key: string]: { bgColor: string; textColor: string } } = {
      New: { bgColor: "bg-blue-500", textColor: "text-white" },
      Contacted: { bgColor: "bg-cyan-800", textColor: "text-white" },
      "In progress": { bgColor: "bg-yellow-100", textColor: "text-black" },
      Proposal: { bgColor: "bg-violet-300", textColor: "text-black" },
      Lost: { bgColor: "bg-red-500", textColor: "text-white" },
      Won: { bgColor: "bg-green-500", textColor: "text-white" },
    };
    return statusMap[status!] || { bgColor: "bg-gray-200", textColor: "text-gray-700" };
  };

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const selectStatus = (status: string) => {
    setLead((prev: any) => ({ ...prev, leadStatus: status }));
  };

  const handleClickOutside = (event: any) => {
    const current:any=dropdownRef.current
    if (current && !current.contains(event.target)) {
      setIsOpen(false);
      setLead((prev: any) => ({ ...prev, leadStatus: leadData?.leadStatus }));
    }
  };

  const handleSave = async () => {
    try {
      const { response, error } = await editLead(`${endPoints.LEAD}/${leadData._id}`, lead);
      if (response && !error) {
        toast.success("Lead Status Updated Successfully");
        toggleDropdown();
        getOneLead();
      } else {
        console.error("Error:", error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setLead(leadData);
  }, [leadData]);

  const renderStep = (step: number, label: string, activeStatuses: string[]) => {
    const isActive = activeStatuses.includes(lead?.leadStatus);
    const { bgColor, textColor } = isActive ? getStatusClass(lead?.leadStatus) : getStatusClass("");

    return (
      <>
        <div className={`w-8 h-10 border-x ${bgColor} ${label==='New'&&'rounded-s-3xl'}`}>
          <p className={`text-center text-sm font-bold mt-[9px] ${textColor}`}>{step}</p>
        </div>
        <div className={`w-40 h-10 ${bgColor} ${label==='Won'?'rounded-e-3xl': label==='Lost' &&'rounded-e-3xl'}  border}`}>
          <p className={`text-center text-sm font-bold mt-2 ${textColor}`}>{label}</p>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="w-full h-40 rounded-lg bg-[#FFFFFF] mt-4">
        <div className="flex items-center p-5 gap-6">
          <p className="text-[#14181B] text-base font-medium">Lifecycle Stage</p>
          <div className="relative inline-block text-left">
            <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
              <p className="text-[#820000] text-sm font-medium">Lead Status</p>
              <ChevronDown size={16} color="#820000" />
            </div>

            {isOpen && (
              <div
                ref={dropdownRef}
                className="absolute -right-16 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2"
              >
                <div className="py-1">
                  {statuses.map((status) => (
                    <div
                      key={status}
                      className={`px-4 py-2 text-sm flex items-center justify-between font-medium cursor-pointer ${
                        lead?.leadStatus === status ? "bg-[#FEFBF8]" : ""
                      }`}
                      onClick={() => selectStatus(status)}
                    >
                      <p>{status}</p>
                      {lead?.leadStatus === status && <p>✔</p>}
                    </div>
                  ))}
                </div>
                <Button onClick={handleSave} size="md" className="h-5 w-20 flex justify-center text-sm ms-auto">
                  <p>Save</p>
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center items-center mt-2">
        <div className="flex h-10 items-center">
          {renderStep(1, "New", ["New", "Contacted", "In progress", "Proposal", "Won", "Lost"])}
          {renderStep(2, "Contacted", ["Contacted", "In progress", "Proposal", "Won", "Lost"])}
          {renderStep(3, "In Progress", ["In progress", "Proposal", "Won", "Lost"])}
          {renderStep(4, "Proposal", ["Proposal", "Won", "Lost"])}
          {renderStep(5,lead?.leadStatus=='Lost'?'Lost':'Won' ,[lead?.leadStatus=='Lost'?'Lost':'Won'])}
        </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOverflow;
