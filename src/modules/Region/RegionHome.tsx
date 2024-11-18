import { useState } from "react";
import Modal from "../../components/modal/Modal";
import Button from "../../components/ui/Button";
import NewRegionForm from "./NewRegionForm";

const RegionHome = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center">
      <h1>Region Home</h1>
      <Button variant="primary" size="sm" onClick={handleModalToggle}>
        + Create Region
      </Button>

      {/* Modal controlled by state */}
      <Modal open={isModalOpen} onClose={handleModalToggle}>
      <NewRegionForm onClose={handleModalToggle} />
      </Modal>
    </div>
  );
};

export default RegionHome;
