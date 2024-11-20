import { useState } from "react";
import PlusIcon from "../../../assets/icons/PlusIcon";
import Modal from "../../../components/modal/Modal";
import Button from "../../../components/ui/Button";
import AddSupportAgent from "./AddSupportAgent";


const SupportagentHome = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  console.log(isModalOpen,"modal")
  return (
    <div className="flex">
      <h1 className="font-bold text-base text-[#303F58]">Support Agent</h1>

      <div className="ml-auto">
        <Button variant="primary" size="sm" onClick={handleModalToggle}>
          <PlusIcon color="white" width={20} height={20} />{" "}
          <p className="text-base font-medium">Create Support Agent</p>
        </Button>
      </div>

      <Modal open={isModalOpen} onClose={handleModalToggle} className="w-[70%]">
      <AddSupportAgent onClose={handleModalToggle} />
      </Modal>
    </div>
  );
};

export default SupportagentHome;