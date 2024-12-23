import { useEffect, useState } from "react"
import Modal from "../../../components/modal/Modal"
import Button from "../../../components/ui/Button"
import PraiseForm from "./PraiseForm"
import bestWorker from '../../../assets/image/Best worker.png'
import comfetti from '../../../assets/image/confetti.png'
import firstMedal from '../../../assets/image/firstWon.png'
import cupRise from '../../../assets/image/hands holding gold trophy cup.png'
import PraiseIcon from "../../../assets/icons/PraiseIcon"
import { themes } from "../../../Interfaces/Praise"
import { achievements } from "../../../Interfaces/Praise"
import { endPoints } from "../../../services/apiEndpoints"
import useApi from "../../../Hooks/useApi"

type Props = {}

const PraiseHome = ({ }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { request: getAllPraise } = useApi('get', 3004)
  const [allPraise, setAllPraise] = useState<any[]>([])

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
    getPraises()
  };

  const getPraises = async () => {
    const url = endPoints.GET_ALL_PRAISE
    try {
      const { response, error } = await getAllPraise(url)
      console.log(response)
      console.log(error)
      // if(response && !error){
      //   // toast.success(response.data.message)
      //   setAllUsers(response.data.AllUsers.map((user:UserData)=>({
      //     ...user,
      //     type:(user.role=='Super Admin' ||user.role=='Sales Admin'||user.role=='Support Admin')?user.role:'User'
      //   })))
      if (response && !error) {
        // toast.success(response.data.message)
        console.log(response.data.praises);
        setAllPraise(response.data.praises.reverse())

      } else {
        console.log(error)
      }

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPraises()
  }, [])



  return (
    <>
      <div className="h-[950px] mb-5">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-[#303F58] text-xl font-bold">Praise</h1>
          <Button variant="primary" size="sm" onClick={handleModalToggle}>
            <span className="font-bold text-xl">+</span> Create Praise
          </Button>
        </div>
        <div className="full h-52 bg-[#DAE7E7] rounded-2xl mt-8">
          <div className="gird grid-cols-12 flex gap-6">
            <div className="col-span-3 ms-6">
              <div className="w-80 ms-2 h-60 mt-5">
                <img className="" src={bestWorker} alt="" />
              </div>
            </div>
            <div className="col-span-3 -ms-6">

              <div className="bg-[#F3F3F3] rounded-2xl w-48 h-8 p-3 -ms-4 mt-8 flex gap-2 -rotate-12">
                <div className="bg-gradient-to-r from-[#FFE3B8] to-[#D5DCB3] rounded-full w-6 h-6 -mt-2">
                  <img className="w-6 h-6 rotate-12" src={firstMedal} alt="" />
                </div>
                <div>
                  <p className="text-center text-[#495160] text-base font-normal -mt-2">Achievements</p>
                </div>
              </div>
              <div className="bg-[#F3F3F3] rounded-2xl w-fit h-8 p-3 ms-6 mt-4 flex gap-2 rotate-12">
                <div className="bg-gradient-to-r from-[#FFE3B8] to-[#D5DCB3] rounded-full w-6 h-6 -mt-2">
                  {/* <img className="w-6 h-6 rotate-12" src={firstMedal} alt="" /> */}
                  <div className="p-[2px] ms-[2px]">
                    <PraiseIcon size={18} />
                  </div>
                </div>
                <div>
                  <p className="text-center text-[#495160] text-base font-normal -mt-2">Congratulations</p>
                </div>
              </div>
              <div className="bg-[#F3F3F3] rounded-2xl w-60 h-8 p-3 ms-4 mt-[50px] flex gap-2 -rotate-12">
                <div className="rounded-full w-6 h-6 -mt-2">
                  <img className="w-6 h-6 rotate-12" src={cupRise} alt="" />
                </div>
                <div>
                  <p className="text-center text-[#495160] text-base font-normal -mt-2">Employee of the month</p>
                </div>
              </div>

            </div>

            <div className="col-span-3 w-[600px] mt-3 ms-1">
              <p className="my-3 text-[#303F58] text-base font-semibold">Send Praise to Team</p>
              <p className="mb-4 text-[#303F58] text-sm font-normal">Celebrate the outstanding contributions of your team and colleagues, <br /> fostering a positive and collaborative work environment.</p>
              <div className="mt-5">
                <Button onClick={handleModalToggle} className="rounded-lg w-48 h-10">
                  <p className="ms-9">Send Praise</p>
                </Button>
              </div>
            </div>
            <div className="col-span-3">
              <div className="w-44 h-40 -mt-3 me-2">
                <img className="justify-end" src={comfetti} alt="" />
              </div>
            </div>

          </div>
        </div>

        <div>
          <div className="py-4">
            <p className="text-[#303F58] text-base font-bold">Praise History</p>
          </div>
          <div className="grid grid-cols-2 gap-10">

            {allPraise.map((praise) => (
              <div className={`${themes.find((theme) => theme.name === praise.theme)?.bgColor || ''} rounded-lg justify-between w-full h-52`}>          {/* <PraiseIcon/> */}
                <div className="flex justify-between">
                  <div className="bg-[#F3F3F3] rounded-2xl w-48 h-12 p-3 ms-4 mt-4 flex gap-2">
                    <div className="bg-[#EDE7FB] rounded-full w-8 h-8 -mt-1">
                      <div className="p-[6px] ms-[2px]">
                        {achievements.find((achievement) => achievement.name === praise.achievement)?.icon || ''}
                      </div>
                    </div>
                    <div>
                      <p className="text-center">{achievements.find((achievement) => achievement.name === praise.achievement)?.name || ''}</p>
                    </div>
                  </div>
                  <div className="">
                  {achievements.find((achievement) => achievement.name === praise.achievement)?.bgImage || ''}
                  <img className="w-[490] h-[180px] -mt-36 -rotate-90" src={comfetti} alt="" />
                  {/* {achievements.find((achievement) => achievement.name === praise.achievement)?.bgImage || ''} */}

                  </div>
                  <div className="p-10">
                    <p className="text-[#000000] text-sm font-normal my-1">{praise.achievement}</p>
                    <p className="text-[#000000] text-sm font-semibold mb-1">{praise.userDetails[0]?.userName}</p>
                    <p className="text-[#000000] text-sm font-normal mb-1">{praise.notes}</p>
                  </div>
                </div>
                <div className="flex justify-between px-4 -mt-5">
                  <p className="text-[#000000] text-sm font-normal">{praise.openingDate ? new Date(praise?.openingDate).toLocaleDateString() : 'N/A'}</p>
                  <p className="me-12 text-[#000000] text-sm font-normal">From {praise.userId}</p>
                </div>
              </div>
            ))}






          </div>
        </div>

      </div>
      {/* Modal Section */}
      <Modal className="" open={isModalOpen} onClose={handleModalToggle}>
        <PraiseForm onClose={handleModalToggle} />
      </Modal>
    </>

  )
}

export default PraiseHome