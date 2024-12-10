import { useState } from "react"
import Modal from "../../../components/modal/Modal"
import Button from "../../../components/ui/Button"
import PraiseForm from "./PraiseForm"

type Props = {}

const PraiseHome = ({}: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen((prev) => !prev);
      };

  return (
    <div>
            <div className="space-y-3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-[#303F58] text-xl font-bold">Praise</h1>
        <Button variant="primary" size="sm" onClick={handleModalToggle}>
        <span className="font-bold text-xl">+</span> Create Praise
        </Button>
      </div>


      {/* Modal Section */}
      <Modal open={isModalOpen} onClose={handleModalToggle}>
        <PraiseForm onClose={handleModalToggle} />
      </Modal>
    </div>
    </div>
  )
}

export default PraiseHome