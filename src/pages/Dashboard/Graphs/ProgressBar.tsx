import { useState } from "react";
import SelectDropdown from "../../../components/ui/SelectDropdown";
import { months } from "../../../components/list/MonthYearList";
import TargetInfoModal from "../../../components/modal/TargetInfoModal";
import Modal from "../../../components/modal/Modal";
import { useUser } from "../../../context/UserContext";
import CheckIcon from "../../../assets/icons/CheckIcon";


type Props = {};

const ProgressBar = ({}: Props) => {
  const { user } = useUser();
  const [isModalOpen, setIsModalOpen] = useState({ addInfo: false });
  const [achieved] = useState(50);
  const goal = 100;
  const balance = goal - achieved;
  const percentage = (achieved / goal) * 100;

  const tickMarks = [0, 10, 30, 60, 100];

  const handleModalToggle = (addInfo = false) => {
    setIsModalOpen((prevState) => ({ ...prevState, addInfo }));
  };

  return (
    <div className="p-6 mx-auto max-w-8xl bg-white rounded-lg w-full">
      <div className="p-2 flex justify-between">
        <h1 className="text-lg font-bold">Target</h1>
        <div className="flex gap-4">
          {user?.role !== 'BDA' && (
            <h1
              onClick={() => handleModalToggle(true)}
              className="mt-1 underline cursor-pointer text-red-600"
            >
              View Target Info
            </h1>
          )}
          <SelectDropdown placeholder="All Months" filteredData={months} searchPlaceholder="Search Months" width="w-44" />
        </div>
      </div>

      <div className='flex -mt-6 ms-2'>
        <h1>Sep 12, 2024</h1>
      </div>
      <div className="text-end">
  <h1 className="text-[#B7B7B7] text-xl font-medium">Goal</h1>
</div>


      <div className="mb-4 flex justify-between items-center mt-5">
        <span className="text-gray-600 text-base font-medium">Achieved</span>
        <span className="text-green-600 font-bold">
          100 License
        </span>
      </div>

      <h1 className="text-3xl font-medium text-[#22593F]">{percentage.toFixed(0)}%</h1>

      <div className="relative w-full bg-gray-200 rounded-full h-4">
        <div
          className="absolute top-0 left-0 bg-[#22593F] h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>

        {/* Floating Info Box */}
        <div
          className="absolute top-[-135px] bg-[#FAFAFA] border shadow-md rounded text-center p-3 -ms-40 transform translate-x-1/2"
          style={{ left: `calc(${percentage}% - 20px)` }}
        >
          <p className="text-xs font-normal">Achieved Target</p>
          <p className="text-base font-extrabold text-[#54B86D]">{achieved} License</p>
          <div className="flex bg-white p-3">
            <p className="text-xs font-normal">Balance</p>
            <p className="text-xs font-semibold text-[#9B3230]">{balance} License</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-2 text-sm text-gray-500 w-full relative">
        {tickMarks.map((value) => (
          <div key={value} className="relative flex flex-col items-center -mt-12">
            {value !== 0 && <CheckIcon/>}
            <div className="mt-10">
              <span>{value}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-end text-gray-700 font-medium">
        Great progress! You’re {balance}% toward your goal.
      </p>

      <Modal open={isModalOpen.addInfo} onClose={() => handleModalToggle()} className="w-[40%] h-[700px]" >
        <TargetInfoModal onClose={() => handleModalToggle()} />
      </Modal>
    </div>
  );
};

export default ProgressBar;
