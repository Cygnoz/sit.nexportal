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
import No_Data_found from '../../../assets/image/NO_DATA.png'

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
      if (response && !error) {
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


  const renderSkelton=()=>(
    <div className="w-full  p-4 bg-gray-100 rounded-lg shadow-md">

  <div className="flex items-center  gap-2 mb-2">
    <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
    <div className="h-4 w-24 bg-gray-300 rounded-lg animate-pulse"></div>
    <div className=" text-right flex items-center justify-end  ms-auto ">
    <div className="h-4 w-20 bg-gray-300 rounded-lg inline-block animate-pulse"></div>
    <div className="h-3 w-16 bg-gray-300 rounded-lg inline-block  animate-pulse"></div>
  </div>
  </div>


  <div className="flex justify-center py-4">
    <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div>
  </div>

  <div className="space-y-2 text-center">
    <div className="h-6 w-32 bg-gray-300 rounded-lg mx-auto animate-pulse"></div>
    <div className="h-4 w-20 bg-gray-300 rounded-lg mx-auto animate-pulse"></div>
    <div className="h-4 w-40 bg-gray-300 rounded-lg mx-auto animate-pulse"></div>
  </div>

  <div className="mt-4 text-right flex items-center justify-end  ms-auto">
    <div className="h-4 w-20 bg-gray-300 rounded-lg inline-block animate-pulse"></div>
    <div className="h-3 w-16 bg-gray-300 rounded-lg inline-block  animate-pulse"></div>
  </div>
  
</div>
  )

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
    {allPraise.length === 0 ? (
        // Skeleton Loader when data is loading or empty
        [...Array(4)].map((_, index) => (
            <div key={index} className="mb-4">
                {renderSkelton()}
            </div>
        ))
    ) : allPraise.length > 0 ? (
        // Display praise cards if data exists
        allPraise.map((praise) => (
            <div
                key={praise.id || praise.userId} // Ensure a unique key
                className={`${
                    themes.find((theme) => theme.name === praise.theme)?.bgColor || ''
                } rounded-lg justify-between w-full h-52`}
            >
                <div className="flex justify-between">
                    <div className="bg-[#F3F3F3] rounded-2xl w-fit h-12 p-3 ms-4 mt-4 flex gap-2">
                        <div className="bg-[#EDE7FB] rounded-full w-8 h-8 -mt-1">
                            <div className="p-[6px] ms-[2px]">
                                {achievements.find((achievement) => achievement.name === praise.achievement)?.icon || ''}
                            </div>
                        </div>
                        <div>
                            <p className="text-center">
                                {achievements.find((achievement) => achievement.name === praise.achievement)?.name || ''}
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <img className="w-full h-48 -rotate-90" src={comfetti} alt="Confetti" />
                       
                    </div>
                    <div className="p-8">
                        <p className="text-[#000000] text-sm font-normal my-1">{praise.achievement}</p>
                        <p className="text-[#000000] text-sm font-semibold mb-1">{praise.userDetails[0]?.userName}</p>
                        <p className="text-[#000000] text-sm font-normal mb-1">{praise.notes}</p>
                    </div>
                </div>
                <div className="flex justify-between px-8 -mt-4">
                    <p className="text-[#000000] text-sm font-normal">
                        {praise.openingDate
                            ? new Date(praise?.openingDate).toLocaleDateString()
                            : 'N/A'}
                    </p>
                    <p className="text-[#000000] text-sm font-normal">From {praise.userId}</p>
                </div>
            </div>
        ))
    ) : (
        // Display No Records Found when data fetching is complete and no praises are available
        <div className="flex justify-center flex-col items-center col-span-2 h-full">
            <img width={70} src={No_Data_found} alt="No Data Found" />
            <p className="font-bold text-red-700">No Praise Found!</p>
        </div>
    )}
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