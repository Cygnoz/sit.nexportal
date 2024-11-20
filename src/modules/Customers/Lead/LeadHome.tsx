import { useState } from "react";
import Modal from "../../../components/modal/Modal"
import Button from "../../../components/ui/Button"
import NewLeadForm from "./NewLeadForm";

type Props = {}

function LeadHome({}: Props) {

   // State to manage modal visibility
   const [isModalOpen, setIsModalOpen] = useState(false);

   // Function to toggle modal visibility
   const handleModalToggle = () => {
     setIsModalOpen((prev) => !prev);
   };

  return (
    <div className="flex justify-between items-center">
      <h1>Lead Home</h1>
      <Button variant="primary" size="sm" onClick={handleModalToggle}>
        <span className="text-xl">+</span>Create Lead
      </Button>

      {/* Modal controlled by state */}
      <Modal open={isModalOpen} onClose={handleModalToggle}>
      <NewLeadForm onClose={handleModalToggle}/>
      </Modal>
    </div>
  )
}

export default LeadHome