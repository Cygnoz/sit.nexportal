import { useState, useEffect } from "react";
import Image from "../../assets/image/Rectangle.png";
import TargetTable from "./TargetTable";
import TargetForm from "./TargetForm";
import Modal from "../../components/modal/Modal";
import Button from "../../components/ui/Button";
import { useUser } from "../../context/UserContext";

interface TargetData {
  task: string;
  dueDate: string;
  bda: string;
}

type TabType = "Region" | "Area" | "BDA";

const TargetHome = () => {
  const {user}=useUser()
  user?.role

  const tabs: TabType[] = ["Region", "Area", "BDA"];

  const getVisibleTabs = (): TabType[] => {
    switch (user?.role) {
      case "Super Admin":
        return tabs;
      case "Region Manager":
        return tabs.filter((tab) => tab !== "Region");
      case "Area Manager":
        return tabs.filter((tab) => tab === "BDA");
      default:
        return [];
    }
  };

  const getDefaultTab = (): TabType => {
    switch (user?.role) {
      case "Super Admin":
        return "Region";
      case "Region Manager":
        return "Area";
      case "Area Manager":
        return "BDA";
      default:
        return "Region"; // Fallback in case user role is undefined
    }
  };

  const [activeTab, setActiveTab] = useState<TabType>(getDefaultTab());
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<TabType>("Region");

  useEffect(() => {
    setActiveTab(getDefaultTab());
  }, [user?.role]);

  const handleCreateTarget = () => {
    setModalType(activeTab);
    setIsCreateModalOpen(true);
  };

  const handleEdit = () => {
    setModalType(activeTab);
    setIsCreateModalOpen(true);
  };

  const handleDelete = () => {
    // Placeholder for delete logic
  };

  const regionData: TargetData[] = [
    { task: "Region001", dueDate: "John Doe", bda: "100" },
    { task: "Region002", dueDate: "Jane Smith", bda: "200" },
  ];

  const areaData: TargetData[] = [
    { task: "Area001", dueDate: "Michael Brown", bda: "150" },
    { task: "Area002", dueDate: "Emily Davis", bda: "250" },
  ];

  const bdaData: TargetData[] = [
    { task: "BDA001", dueDate: "Daniel Lee", bda: "300" },
    { task: "BDA002", dueDate: "Sophia Wilson", bda: "400" },
  ];

  const Regioncolumns: { key: keyof TargetData; label: string }[] = [
    { key: "dueDate", label: "Region" },
    { key: "bda", label: "Target" },
  ];

  const Areacolumns: { key: keyof TargetData; label: string }[] = [
    { key: "dueDate", label: "Area" },
    { key: "bda", label: "Target" },
  ];

  const BDAcolumns: { key: keyof TargetData; label: string }[] = [
    { key: "dueDate", label: "BDA" },
    { key: "bda", label: "Target" },
  ];

  const isButtonVisible = (() => {
    if (user?.role === "Super Admin" && activeTab === "Region") return true;
    if (user?.role === "Region Manager" && activeTab === "Area") return true;
    if (user?.role === "Area Manager" && activeTab === "BDA") return true;
    return false;
  })();
  return (
    <>
      <div>
        <div className="mb-4 p-2">
          <p className="text-[#303F58] text-lg font-bold">Target</p>
        </div>
        <div className="flex gap-24 bg-[#FEFBF8] rounded-xl px-4 py-2 text-base font-bold border-b border-gray-200">
        {getVisibleTabs().map((tab) => (
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
         
         {isButtonVisible && (
      <div className="flex justify-end ml-auto">
        <Button variant="primary" onClick={handleCreateTarget} className="w-36 h-10">
          <span className="font-medium text-xs">+</span> Create Target
        </Button>
      </div>
    )}
 
        </div>

        <div className="w-full p-4 h-fit bg-[#E3E6D5] my-4 rounded-2xl">
          <div className="flex justify-between">
            <div className="flex">
              <div>
                <img src={Image} className="w-14 h-15" alt="" />
              </div>
              <div className="gap-4 ms-1 mt-1">
                <p className="text-lg font-semibold text-[#4B5C79]">Total Target</p>
                <p className="text-xs font-normal text-[#4B5C79]">
                  Total License targets Should Achieve
                                </p>
              </div>
            </div>
            <div className="p-2 text-lg font-semibold">
              <p className="text-[#820000] text-2xl font-bold">20</p>
            </div>
          </div>
        </div>

        <div>
        <TargetTable
  data={
    activeTab === "Region"
      ? regionData
      : activeTab === "Area"
      ? areaData
      : bdaData
  }
  columns={
    activeTab === "Region"
      ? Regioncolumns
      : activeTab === "Area"
      ? Areacolumns
      : BDAcolumns
  }
  headerContents={{
    title: activeTab + "'s Target",
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
  actionList={
    (user?.role === "Super Admin" && activeTab === "Region") ||
    (user?.role === "Region Manager" && activeTab === "Area") ||
    (user?.role === "Area Manager" && activeTab === "BDA")
      ? [
          { label: "edit", function: handleEdit },
          { label: "delete", function: handleDelete },
        ]
      : []
  }
  noAction={
    !(
      (user?.role === "Super Admin" && activeTab === "Region") ||
      (user?.role === "Region Manager" && activeTab === "Area") ||
      (user?.role === "Area Manager" && activeTab === "BDA")
    )
  }
/>


        </div>
      </div>

      {/* Create Modal */}
      <Modal
        open={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        className="w-[35%]"
      >
        <TargetForm onClose={() => setIsCreateModalOpen(false)} type={modalType} />
      </Modal>

      {/* Edit Modal */}
     
    </>
  );
};

export default TargetHome;
