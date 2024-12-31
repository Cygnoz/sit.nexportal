import { useState } from "react";
import Button from "../../../components/ui/Button";
import Modal from "../../../components/modal/Modal";
import TargetForm from "./TargetForm";



type Props = {}

const Target = ({}: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalToggle = () => {
        setIsModalOpen((prev) => !prev);
        
      };
      const tabs = ["RM", "AM",]
        const [activeTab, setActiveTab] = useState<string>("Layout");
  return (
    <>
    <div>
         <div className="mb-4 p-2 ">
                        <p className="text-[#303F58] text-lg font-bold">Business Card</p>
                    </div>
                    <div className="flex gap-24 bg-[#FEFBF8] rounded-xl px-4 py-2 text-base font-bold border-b border-gray-200">
                        {tabs.map((tab) => (
                            <div
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`cursor-pointer py-2 px-[16px] ${activeTab === tab
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
                                    onClick={handleModalToggle}
                                    className="w-36 h-10"
                                  >
                                    <span className="font-medium text-xs">+</span>Create Target
                                  </Button>
                    </div>
                    </div>
                    
                    
    </div>
     {/* Modal Section */}
     <Modal open={isModalOpen} onClose={handleModalToggle}   className="w-[35%]">
        <TargetForm onClose={handleModalToggle} />
      </Modal>
    </>
  )
}

export default Target