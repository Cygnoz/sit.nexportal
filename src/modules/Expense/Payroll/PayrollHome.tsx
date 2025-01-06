
import { useState } from "react";
import PayrollTable from "./PayrollTable";
import { useNavigate } from "react-router-dom";

interface TargetData {
  task: string;
  dueDate: string;
  bda: string;
  salary:string;
}

type Props = {};

const PayrollHome = ({}: Props) => {
  const tabs = ["All Employees","RM", "AM","BDA"] as const;
   const navigate = useNavigate();
  type TabType = (typeof tabs)[number];

  const [activeTab, setActiveTab] = useState<TabType>("All Employees");

  
 
  const handleView = () => {
    navigate(`/payroll-slip`);
  };

  const datas: TargetData[] = [
    { task: "BDA12345", dueDate: "Anjela John", bda: "(406) 555-0120" ,salary:"100000" },
    { task: "BDA12345", dueDate: "Kristin Watson", bda: "(480) 555-0103" ,salary:"100000"},
    { task: "BDA12345", dueDate: "Jacob Jones", bda: "(208) 555-0112",salary:"100000" },
    { task: "BDA12345", dueDate: "Wade Warren", bda: "(702) 555-0122" ,salary:"100000"},
    { task: "BDA12345", dueDate: "Jacob Jones", bda: "(208) 555-0112",salary:"100000" },
  ];

  const Allcolumns: { key: keyof TargetData; label: string }[] = [
    { key: "task", label: "Name" },
    { key: "dueDate", label: "Role" },
    { key: "bda", label: "Payslip Status" },
    { key: "salary", label: "Total Salary" },
  ];
  const RMcolumns: { key: keyof TargetData; label: string }[] = [
    { key: "task", label: "Name" },
    { key: "dueDate", label: "Role" },
    { key: "bda", label: "Payslip Status" },
    { key: "salary", label: "Total Salary" },
  ];
  const AMcolumns: { key: keyof TargetData; label: string }[] = [
    { key: "task", label: "Name" },
    { key: "dueDate", label: "Role" },
    { key: "bda", label: "Payslip Status" },
    { key: "salary", label: "Total Salary" },
  ];

  const BDAcolumns: { key: keyof TargetData; label: string }[] = [
    { key: "task", label: "Name" },
    { key: "dueDate", label: "Role" },
    { key: "bda", label: "Payslip Status" },
    { key: "salary", label: "Total Salary" },
  ];

  return (
    <>
      <div>
        <div className="mb-4 p-2">
          <p className="text-[#303F58] text-lg font-bold">Payroll</p>
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
          <PayrollTable
            data={datas}
            columns={
              activeTab === "All Employees" ? Allcolumns :
              activeTab === "RM" ? RMcolumns :
              activeTab === "AM" ? AMcolumns :
              activeTab === "BDA" ? BDAcolumns :
              []
            }
            
            headerContents={{
            
              search: { placeholder: "Search..." },
              sort: [
                {
                  sortHead: "Sort by Month and Year",
                  sortList: [
                    { label: "Month", icon: <span></span>, action: () => {} },
                    { label: "Year", icon: <span></span>, action: () => {} },
                  ],
                },
              ],
            }}
            actionList={[
              { label: "view", function: () => handleView() },
             
            ]}
          />
        </div>
      </div>



     
     
    </>
  );
};

export default PayrollHome;