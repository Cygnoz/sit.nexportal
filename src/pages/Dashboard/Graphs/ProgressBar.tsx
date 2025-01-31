import { useState } from "react";
import SelectDropdown from "../../../components/ui/SelectDropdown";
import { months } from "../../../components/list/MonthYearList";
import TargetInfoModal from "./TargetInfoModal";
import Modal from "../../../components/modal/Modal";

type Props = {};

const ProgressBar = ({}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState({ addInfo: false });
  const [achieved, setAchieved] = useState(28);
  const goal = 100;
  const balance = goal - achieved;
  const percentage = (achieved / goal) * 100;
  const [barHover, setBarHover] = useState(false);
  
  const tickMarks = [0, 10, 30, 60, 100];

  const handleModalToggle = (addInfo = false) => {
    setIsModalOpen((prevState) => ({ ...prevState, addInfo }));
  };

  return (
    <div className="p-6 mx-auto max-w-8xl bg-white rounded-lg w-full">
      <div className="p-2 flex justify-between">
        <h1 className="text-lg font-bold">Target</h1>
        <div className="flex gap-4">
          <h1 onClick={() => handleModalToggle(true)} className="mt-1 underline cursor-pointer text-red-600">
            View Target Info
          </h1>
          <SelectDropdown placeholder="All Months" filteredData={months} searchPlaceholder="Search Months" width="w-44" />
        </div>
      </div>

      <div className='flex -mt-6 ms-2'>
        <h1>Sep 12, 2024</h1>
      </div>

      <div className="mb-4 flex justify-between items-center mt-5">
        <span className="text-gray-600">Achieved Target</span>
        <span 
          className="text-green-600 font-bold relative cursor-pointer"
      
        >
          {achieved} License
         
           
     
        </span>
      </div>

      <h1 className="text-3xl font-medium text-[#22593F]">{percentage.toFixed(0)}%</h1>

      <div 
        className="relative w-full bg-gray-200 rounded-full h-4"
      >
        <div 
          className="absolute top-0 left-0 bg-green-500 h-4 rounded-full" 
          style={{ width: `${percentage}%` }}
          onMouseEnter={() => setBarHover(true)}
          onMouseLeave={() => setBarHover(false)}
        >
          {barHover && (
            <div className="absolute top-[-30px] right-0 transform translate-x-1/2">
              <div className="p-4 bg-[#FAFAFA] border shadow-md rounded text-center">
                <p className="text-xs font-normal">Achieved</p>
                <p className="text-base font-extrabold text-[#54B86D]"> {achieved} License</p>
                <div className="bg-white flex gap-3">
                <p className="text-xs font-normal">Balance</p>
                <p className="text-xs font-semibold text-[#9B3230]"> {balance} License</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between mt-2 text-sm text-gray-500 w-full">
  {tickMarks.map((value) => (
    <div key={value} className="relative flex flex-col items-center">
      <span className="text-green-700 font-semibold mb-1">
        {value <= achieved ? "✔" : ""}
      </span>
      <span>{value}</span>
    </div>
  ))}
</div>


      <input
        type="range"
        min="0"
        max={goal}
        step="1"
        value={achieved}
        onChange={(e) => setAchieved(Number(e.target.value))}
        className="mt-6 w-full h-1 bg-transparent appearance-none cursor-pointer"
      />

      <p className="mt-4 text-end text-gray-700 font-medium">
        Great progress! You’re {balance}% toward your goal.
      </p>

      <Modal open={isModalOpen.addInfo} onClose={() => handleModalToggle()} className="w-[40%]">
        <TargetInfoModal onClose={() => handleModalToggle()} />
      </Modal>
    </div>
  );
};

export default ProgressBar;