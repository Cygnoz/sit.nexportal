import { useState } from "react"
import Modal from "../../../components/modal/Modal"
import Button from "../../../components/ui/Button"
import PraiseForm from "./PraiseForm"
import bestWorker from '../../../assets/image/Best worker.png'
import comfetti from '../../../assets/image/confetti.png'

type Props = {}

const PraiseHome = ({}: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen((prev) => !prev);
      };

  return (
    <div>
            <div className="space-y-5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-[#303F58] text-xl font-bold">Praise</h1>
        <Button variant="primary" size="sm" onClick={handleModalToggle}>
        <span className="font-bold text-xl">+</span> Create Praise
        </Button>
      </div>
      <div className="full h-52 bg-[#DAE7E7] rounded-2xl">
        <div className="gird grid-cols-12 flex justify-between">
            <div className="col-span-3">
                <div className="w-80 ms-2 h-60">
                <img className="" src={bestWorker} alt="" />
                </div>
            </div>
            <div className="col-span-3">
                sdgdfg
            </div>
            <div className="col-span-3 w-[484px] mt-3">
                <p className="my-3 text-[#303F58] text-base font-semibold">Send Praise to Team</p>
                <p className="mb-4 text-[#303F58] text-sm font-normal">Celebrate the outstanding contributions of your team and colleagues, fostering a positive and collaborative work environment.</p>
                <div className="mt-4">
                    <Button className="rounded-lg" size="xl">Send Praise</Button>
                </div>
            </div>
            <div className="col-span-3">
                <div className="w-48 h-40">
                    <img className="justify-end" src={comfetti} alt="" />
                </div>
            </div>

        </div>
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