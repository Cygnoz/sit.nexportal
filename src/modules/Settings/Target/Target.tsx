import { useState } from "react";
import Button from "../../../components/ui/Button";
import Modal from "../../../components/modal/Modal";
import TargetForm from "./TargetForm";
import TargetTable from "./TargetTable";
import TargetEditForm from "./TargetEditForm";
// import Image from "../../../assets/image/Rectangle.png"
interface TargetData {
  task: string;
  dueDate: string;
  bda: string;
}

type Props = {};

const Target = ({}: Props) => {
  const tabs = ["RM", "AM"] as const;
  type TabType = (typeof tabs)[number];

  const [activeTab, setActiveTab] = useState<TabType>("RM");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<TabType>("RM");
  const [editModalType, setEditModalType] = useState<TabType>("RM");

  const handleCreateTarget = () => {
    setModalType(activeTab);
    setIsCreateModalOpen(true);
  };

  const handleEdit = () => {
    setEditModalType(activeTab);
    setIsEditModalOpen(true);
  };

  const handleDelete = () => {
    // Placeholder for delete logic
  };

  const datas: TargetData[] = [
    { task: "BDA12345", dueDate: "Anjela John", bda: "(406) 555-0120" },
    { task: "BDA12345", dueDate: "Kristin Watson", bda: "(480) 555-0103" },
    { task: "BDA12345", dueDate: "Jacob Jones", bda: "(208) 555-0112" },
    { task: "BDA12345", dueDate: "Wade Warren", bda: "(702) 555-0122" },
    { task: "BDA12345", dueDate: "Jacob Jones", bda: "(208) 555-0112" },
  ];

  const RMcolumns: { key: keyof TargetData; label: string }[] = [
    { key: "task", label: "RMName" },
    { key: "dueDate", label: "Region" },
    { key: "bda", label: "Target" },
  ];

  const AMcolumns: { key: keyof TargetData; label: string }[] = [
    { key: "task", label: "AMName" },
    { key: "dueDate", label: "Area" },
    { key: "bda", label: "Target" },
  ];

  return (
    <>
      <div>
        <div className="mb-4 p-2">
          <p className="text-[#303F58] text-lg font-bold">Target</p>
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
          <div className="flex justify-end ml-auto">
            <Button
              variant="primary"
              onClick={handleCreateTarget}
              className="w-36 h-10"
            >
              <span className="font-medium text-xs">+</span>Create Target
            </Button>
          </div>
        </div>
        {/* <div className="w-full p-4 h-fit bg-[#E3E6D5] my-4 rounded-2xl">
 <div className="flex justify-between">
<div className="flex">
<div>
    <img src={Image} className="w-14 h-15" alt="" />
  </div>
 <div className="gap-4 ms-1">
    <p className=" text-lg font-semibold text-[#4B5C79]">Total Target</p>
    <p className="text-xs font-normal text-[#4B5C79]">Total targets Achieved by AM And RM</p>
  </div>
</div>
  <div className="p-2 text-lg font-semibold">
    <p className="text-[#820000] text-2xl font-bold">20</p>
  </div>
 </div>
</div> */}

        <div>
          <TargetTable
            data={datas}
            columns={activeTab === "RM" ? RMcolumns : AMcolumns}
            headerContents={{
              title: activeTab === "RM" ? "Region Manager" : "Area Manager",
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
              { label: "edit", function: () => handleEdit() },
              { label: "delete", function: handleDelete },
            ]}
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
      <Modal
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        className="w-[35%]"
      >
        <TargetEditForm
          onClose={() => setIsEditModalOpen(false)}
          type={editModalType}
        />
      </Modal>
    </>
  );
};

export default Target;