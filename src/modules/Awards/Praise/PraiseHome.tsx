import { useState } from "react"
import Modal from "../../../components/modal/Modal"
import Button from "../../../components/ui/Button"
import PraiseForm from "./PraiseForm"
import bestWorker from '../../../assets/image/Best worker.png'
import comfetti from '../../../assets/image/confetti.png'
import firstMedal from '../../../assets/image/firstWon.png'

type Props = {}

const PraiseHome = ({ }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-[#303F58] text-xl font-bold">Praise</h1>
        <Button variant="primary" size="sm" onClick={handleModalToggle}>
          <span className="font-bold text-xl">+</span> Create Praise
        </Button>
      </div>
      <div className="full h-52 bg-[#DAE7E7] rounded-2xl mt-6">
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

      <div>
        <div className="py-4">
        <p className="text-[#303F58] text-base font-bold">Praise History</p>
        </div>
        <div className="grid grid-cols-2 gap-10 px-3">
          <div className="bg-[#ECD9D9] rounded-lg flex justify-between">
            {/* <PraiseIcon/> */}
            <div className="bg-[#F3F3F3] rounded-2xl w-40 h-12 p-3 ms-4 mt-4 flex gap-2">
              <div className="bg-[#EDE7FB] rounded-full w-8 h-8 -mt-1">
              <img className="w-6 h-6 mt-1 ms-1 rotate-12" src={firstMedal} alt="" />
              </div>
              <div>
              <p className="text-center">Achiever</p>
              </div>
            </div>
            <div className="p-2">
              <p  className="text-[#000000] text-sm font-normal my-1">Congratulations</p>
              <p  className="text-[#000000] text-sm font-semibold mb-1">Dona Sebastain</p>
              <p className="text-[#000000] text-sm font-normal mb-1">Employee of the Month</p>
            </div>
          </div>

          <div className="bg-[#ECD9D9] rounded-lg flex justify-between">
            {/* <PraiseIcon/> */}
            <div className="bg-[#F3F3F3] rounded-2xl w-40 h-12 p-3 ms-4 mt-4 flex gap-2">
              <div className="bg-[#EDE7FB] rounded-full w-8 h-8 -mt-1">
              <img className="w-6 h-6 mt-1 ms-1 rotate-12" src={firstMedal} alt="" />
              </div>
              <div>
              <p className="text-center">Achiever</p>
              </div>
            </div>
            <div className="p-2">
              <p  className="text-[#000000] text-sm font-normal my-1">Congratulations</p>
              <p  className="text-[#000000] text-sm font-semibold mb-1">Dona Sebastain</p>
              <p className="text-[#000000] text-sm font-normal mb-1">Employee of the Month</p>
            </div>
          </div>

          <div className="bg-[#ECD9D9] rounded-lg flex justify-between">
            {/* <PraiseIcon/> */}
            <div className="bg-[#F3F3F3] rounded-2xl w-40 h-12 p-3 ms-4 mt-4 flex gap-2">
              <div className="bg-[#EDE7FB] rounded-full w-8 h-8 -mt-1">
              <img className="w-6 h-6 mt-1 ms-1 rotate-12" src={firstMedal} alt="" />
              </div>
              <div>
              <p className="text-center">Achiever</p>
              </div>
            </div>
            <div className="p-2">
              <p  className="text-[#000000] text-sm font-normal my-1">Congratulations</p>
              <p  className="text-[#000000] text-sm font-semibold mb-1">Dona Sebastain</p>
              <p className="text-[#000000] text-sm font-normal mb-1">Employee of the Month</p>
            </div>
          </div>

          <div className="bg-[#ECD9D9] rounded-lg flex justify-between">
            {/* <PraiseIcon/> */}
            <div className="bg-[#F3F3F3] rounded-2xl w-40 h-12 p-3 ms-4 mt-4 flex gap-2">
              <div className="bg-[#EDE7FB] rounded-full w-8 h-8 -mt-1">
              <img className="w-6 h-6 mt-1 ms-1 rotate-12" src={firstMedal} alt="" />
              </div>
              <div>
              <p className="text-center">Achiever</p>
              </div>
            </div>
            <div className="p-2">
              <p  className="text-[#000000] text-sm font-normal my-1">Congratulations</p>
              <p  className="text-[#000000] text-sm font-semibold mb-1">Dona Sebastain</p>
              <p className="text-[#000000] text-sm font-normal mb-1">Employee of the Month</p>
            </div>
          </div>

        </div>
      </div>



      {/* Modal Section */}
      <Modal open={isModalOpen} onClose={handleModalToggle}>
        <PraiseForm onClose={handleModalToggle} />
      </Modal>

    </div>
  )
}

export default PraiseHome