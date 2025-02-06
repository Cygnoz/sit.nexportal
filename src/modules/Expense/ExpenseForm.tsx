import BillIcon from "../../assets/icons/BillIcon";
import Input from "../../components/form/Input";
import Select from "../../components/form/Select";
import Button from "../../components/ui/Button";
import UploadIcon from "../../assets/icons/UploadIcon";

type Props = {
  onClose: () => void;
}

const ExpenseForm = ({ onClose }: Props) => {

  return (
    <div className="p-3">
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="text-base font-bold text-deepStateBlue px-3">
            Add Expense
          </h1>

        </div>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900"
        >
          &times;
        </button>
      </div>
      <div className="px-3">
        <h1 className="text-xs text-[#303F58] font-normal my-2">Upload Attachments</h1>


        <div className="border-2 border-dashed border-gray-300 bg-[#FEFDFA] rounded-md p-3 text-center mb-4 w-full h-40">
          <div className="flex justify-center my-3">
            <BillIcon size={40} />
          </div>
          <p className="text-gray-600 text-xs font-semibold my-2">Upload Your Receipt</p>
        <div className="flex justify-center">
        <Button>
            <UploadIcon color="#FFFEFB" size={14} />
            <p className="text-[#FEFDF9] text-xs font-medium">Upload Your Files</p>
            </Button>
        </div>
        </div>
      </div>
    
      <form>
        <div className="grid grid-cols-2 gap-4 p-3">
          <Input
          type="text"
          label="Expense Name"
          placeholder="Enter Name"
          />
          <Input
          type="date"
          label="Date"
          placeholder="Enter Name"
          />
          <Select
          label="Expense Amount"
          placeholder="Select Amount"
           options={[
            { label: "Cash", value: "cash" },
            { label: "Credit Card", value: "credit_card" },
            { label: "Bank Transfer", value: "bank_transfer" },
          ]}
          />
           <Input
          type="text"
          label="Amount"
          placeholder="Enter amount"
          />
        </div>
        <div className="grid grid-cols-1 p-3">
        <Select
          label="Category"
          placeholder="Select category"
           options={[
            { label: "Cash", value: "cash" },
            { label: "Credit Card", value: "credit_card" },
            { label: "Bank Transfer", value: "bank_transfer" },
          ]}
          />
          {/* <textarea className="w-full min-h-28 rounded-lg outline-none p-3 text-[#2C3E50A3] text-xs font-normal"></textarea> */}
          <div className="">
          <p className="gap-2 my-3 text-sm font-normal text-[#303F58]">Add Notes </p>
          <div className="border border-[#CECECE] rounded-md">
          
            <textarea className="w-full min-h-16 rounded-md outline-none p-3 text-[#818894] text-xs font-normal" placeholder="Enter Notes" name="" id=""></textarea>
        </div>

      </div>
        </div>
        <div className=" flex justify-end gap-2 mt-6 pb-2 ">
          <Button
            variant="tertiary"
            className="h-8 text-sm border rounded-lg"
            size="lg"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="h-8 text-sm border rounded-lg"
            size="lg"
            type="submit"
          >
            Save
          </Button>
        </div>

      </form>
    </div>
  )
}

export default ExpenseForm