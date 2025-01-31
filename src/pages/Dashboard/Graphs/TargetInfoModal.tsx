import { useState } from "react";
import Table from "../../../components/ui/Table";

interface TargetData {
    task: string;
    dueDate: string;
    target: string;
    salary:string;
  }

type Props = {
  onClose: () => void;
}


const TargetInfoModal = ({onClose}: Props) => {
    const [activeTab, setActiveTab] = useState<TabType>("Region");
    
    const tabs = ["Region", "Area", "BDA"] as const;
    type TabType = (typeof tabs)[number];

   
    
      const datas: TargetData[] = [
        { task: "BDA12345", dueDate: "Anjela John",  target:"Pending Generation" ,salary:"100000"},
        { task: "BDA12345", dueDate: "Kristin Watson", target:"Pending Generation" ,salary:"100000"},
        { task: "BDA12345", dueDate: "Jacob Jones", target:"Draft Created",salary:"100000" },
        { task: "BDA12345", dueDate: "Wade Warren", target: "Awaiting Approval" ,salary:"100000"},
        { task: "BDA12345", dueDate: "Jacob Jones", target:"Paid",salary:"100000" },
      ];
    
    
      const Regioncolumns: { key: keyof TargetData; label: string }[] = [
        { key: "task", label: "Region" },
        { key: "dueDate", label: "Region Manager" },
        { key: "target", label: "Target" },
      ];
      const Areacolumns: { key: keyof TargetData; label: string }[] = [
        { key: "task", label: "Area" },
        { key: "dueDate", label: "Area Manager" },
        { key: "target", label: "Target" },
        
      ];
    
      const BDAcolumns: { key: keyof TargetData; label: string }[] = [
        { key: "dueDate", label: "BDA" },
        { key: "target", label: "Target" },
      ];
  return (
    <div>
         <div className="mb-4 p-2 flex justify-between">
                  <p className="text-[#303F58] text-lg font-bold">Target Info</p>
                  <button
            type="button"
            onClick={onClose}
            className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900"
          >
            &times;
          </button>
                </div>
                <div className="flex gap-24 bg-[#FEFBF8] rounded-xl px-4 py-2 text-base font-bold border-b border-gray-200">
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer py-2 px-[16px] ${
                activeTab === tab
                  ? "text-[#303F58] text-sm font-bold border-b-2 shadow-lg rounded-md border-[#97998E]"
                  : "text-gray-400"
              }`}
            >
              {tab}
            </div>
          ))}
        
        </div>
        <div>
          <Table
            data={datas}
            columns={
           
              activeTab === "Region" ? Regioncolumns :
              activeTab === "Area" ? Areacolumns :
              activeTab === "BDA" ? BDAcolumns :
              []
            }
            
            headerContents={{
              }}
            noAction
          />
        </div>
    </div>
  )
}

export default TargetInfoModal