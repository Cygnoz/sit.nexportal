import Button from "../../../components/ui/Button";
import firstMedal from '../../../assets/image/firstWon.png'
import staryTwinkle from '../../../assets/image/StaryTwinkle.png'
import LionIcon from "../../../assets/icons/LionIcon";
import PraiseIcon from "../../../assets/icons/PraiseIcon";
import BulbIcon from "../../../assets/icons/BulbIcon";
import CupIcon from "../../../assets/icons/CupIcon";

type Props = {
  onClose: () => void;
}

const PraiseForm = ({ }: Props) => {
  return (
    <div>
      <div className="p-8 bg-white rounded-2xl border border-[#E7E7ED]">
        <div>
          <p className="my-4">Send Praise</p>
          <p>To</p>
          <div className="flex items-center border border-gray-300 rounded-lg w-[672px] h-[40px] px-3 my-2">
            <input
              type="text"
              placeholder="Search by name..."
              className="flex-grow outline-none text-sm"
            />
          </div>
        </div>

        <div className="mt-2 mb-6 flex gap-2">
          <div className="bg-[#F3F3F3] rounded-2xl w-40 h-12 p-3 mt-4 flex gap-2">
            <div className="bg-gradient-to-r from-[#EDE7FB] to-[#B5DBDB] rounded-full w-8 h-8 -mt-1">
              <img className="w-8 h-8 rotate-12" src={firstMedal} alt="" />
            </div>
            <div>
              <p className="text-center text-[#495160] text-xs font-normal mt-1 ms-1">Achiever</p>
            </div>
          </div>
          <div className="bg-[#F3F3F3] rounded-2xl w-40 h-12 p-3 mt-4 flex gap-2">
            <div className="bg-gradient-to-r from-[#EDE7FB] to-[#B5DBDB] rounded-full w-8 h-8 -mt-1">
              <div className="p-1 ms-[3px] mt-[2px]">
                <PraiseIcon size={20} />
              </div>
            </div>
            <div>
              <p className="text-center text-[#495160] text-xs font-normal mt-1 ms-1">Congratulations</p>
            </div>
          </div>
          <div className="bg-[#F3F3F3] rounded-2xl w-40 h-12 p-3 mt-4 flex gap-2">
            <div className="bg-gradient-to-r from-[#EDE7FB] to-[#B5DBDB] rounded-full w-8 h-8 -mt-1">
              <div className="p-1 ms-[5px] mt-[2px]">
                <BulbIcon size={18} />
              </div>
            </div>
            <div>
              <p className="text-center text-[#495160] text-xs font-normal mt-1 ms-1">Problem Solver</p>
            </div>
          </div>
          <div className="bg-[#F3F3F3] rounded-2xl w-40 h-12 p-3 mt-4 flex gap-2">
            <div className="bg-gradient-to-r from-[#EDE7FB] to-[#B5DBDB] rounded-full w-8 h-8 -mt-1">
              <img className="w-6 h-6 ms-[6px] mt-1" src={staryTwinkle} alt="" />
            </div>
            <div>
              <p className="text-center text-[#495160] text-xs font-normal mt-1 ms-1">Thank You</p>
            </div>
          </div>
          <div className="bg-[#F3F3F3] rounded-2xl w-40 h-12 p-3 mt-4 flex gap-2">
            <div className="bg-gradient-to-r from-[#EDE7FB] to-[#B5DBDB] rounded-full w-8 h-8 -mt-1">
              <div className="p-1 ms-[3px] mt-[2px]">
                <CupIcon size={20} />
              </div>
            </div>
            <div>
              <p className="text-center text-[#495160] text-xs font-normal mt-1 ms-1">Awesome</p>
            </div>
          </div>
          <div className="bg-[#F3F3F3] rounded-2xl w-40 h-12 p-3 mt-4 flex gap-2">
            <div className="bg-gradient-to-r from-[#EDE7FB] to-[#B5DBDB] rounded-full w-8 h-8 -mt-1">
              <div className="p-1 ms-[3px] mt-1">
                <LionIcon size={18} />
              </div>
            </div>
            <div>
              <p className="text-center text-[#495160] text-xs font-normal mt-1 ms-1">Courage</p>
            </div>
          </div>




        </div>
        <p className="my-3">Select Background</p>
        <div className="flex mb-6 gap-2">
          <div className="bg-gradient-to-r from-[#F86C6C2B] to-[#F9DBA0A8] rounded-2xl w-40 h-12 p-3 flex gap-2">
            <p className="text-center ms-8">Theme 1</p>
          </div>
          <div className="bg-gradient-to-r from-[#EDE7FB] to-[#CCB7FE] rounded-2xl w-40 h-12 p-3 flex gap-2">
            <p className="text-center ms-8">Theme 2</p>
          </div>
          <div className="bg-gradient-to-r from-[#EDE7FB] to-[#DEFFDBA6] rounded-2xl w-40 h-12 p-3 flex gap-2">
            <p className="text-center ms-8">Theme 3</p>
          </div>
          <div className="bg-gradient-to-r from-[#FFC9B182] to-[#FCCF7447] rounded-2xl w-40 h-12 p-3 flex gap-2">
            <p className="text-center ms-8">Theme 4</p>
          </div>
          <div className="bg-gradient-to-r from-[#EDE7FB] to-[#D786DD4D] rounded-2xl w-40 h-12 p-3 flex gap-2">
            <p className="text-center ms-8">Theme 5</p>
          </div>
          <div className="bg-gradient-to-r from-[#D52B1E45] to-[#FCCF741F] rounded-2xl w-40 h-12 p-3 flex gap-2">
            <p className="text-center ms-8">Theme 6</p>
          </div>
        </div>

        <div className="bg-[#F3F3F3] border border-[#EAECF0] rounded-2xl p-6">
          <p className="gap-2 my-2">Add Notes </p>
          <div className="bg-[#FFFFFFA1] rounded-lg p-6">
            <p className="text-[#2C3E50A3] text-xs font-normal mb-4">Lorem ipsum dolor sit amet consectetur. Egestas amet purus.Lorem ipsum <br /> dolor sit amet consectetur. Egestas amet purus.</p>
            <p className="text-end text-[#495160A1] text-[10px] font-semibold">200/500</p>
          </div>

        </div>

        <div className="w-full bg-white flex justify-end gap-2 mt-4">
          <Button variant="tertiary" className="h-8 text-sm border rounded-lg" size="lg">Cancel</Button>
          <Button variant="primary" className="h-8 text-sm border rounded-lg" size="lg" type="submit">Send</Button>

        </div>
      </div>
    </div>
  )
}

export default PraiseForm