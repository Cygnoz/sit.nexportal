import Button from "../../components/ui/Button"
import bill_receipt from '../../assets/image/Bill_receipt.png'
import ChevronRight from "../../assets/icons/ChevronRight"
import { useNavigate } from "react-router-dom"

type Props = {}

const ExpenseViewReject = ({}: Props) => {

    const navigate=useNavigate()

  return (
    <div>
        <div>
            <div className="flex items-center text-[16px] space-x-2">
                <p
                    onClick={() => navigate("/expense")}
                    className="font-bold cursor-pointer text-[#820000] "
                >
                    Expense
                </p>
                <ChevronRight color="#4B5C79" size={18} />
                <p className="font-bold text-[#303F58] ">Expense</p>
            </div>

            <div className="w-full bg-[#FFFFFF] p-6 rounded-2xl gap-6">
                <div className="flex gap-4">
                    <p className="text-[#303F58] text-base font-semibold border-r border-[#A3A9B3]">Materials & Suppliers</p>
                    <p className="text-[#303F58] text-base font-semibold border-r border-[#A3A9B3]">Materials</p>
                    <Button className="justify-center text-[#FFFFFF] font-medium text-xs bg-[#C80024] rounded-md w-28 h-5">Reject</Button>
                </div>

                <div className="flex gap-4 py-2">
                    <p className="text-[#4B5C79] text-sm font-semibold">Expense:</p>
                    <p className="text-[#4B5C79] text-sm font-semibold">24/02/2025</p>
                </div>

                <div className="bg-gradient-to-r from-[#E3E6D5] to-[#F7E7CE] px-5 py-4 rounded-lg flex justify-between">
                    <p className="text[#495160] text-sm font-semibold">Expense Amount</p>
                    <p className="text[#495160] text-lg font-bold">Rs.12,600.00</p>
                </div>

                <div className="flex justify-between py-3 px-1">
                    <p className="text-[#818894] text-sm font-semibold">Expense Account</p>
                    <div className="flex gap-5 me-[88px]">
                        <p className="text-[#818894] text-sm font-semibold">Added By</p>
                        <p className="text-[#818894] text-sm font-semibold">Role</p>
                    </div>

                </div>
                <div className="flex justify-between pb-3 px-1">
                    <p className="text-[#495160] text-sm font-bold">Fuel & Mileage</p>
                    <div className="flex gap-7">
                        <p className="text-[#495160] text-sm font-bold">Devan P</p>
                        <p className="text-[#495160] text-sm font-bold">Region Manager</p>
                    </div>
                </div>

                <div className="bg-[#FFFFFF] border border-[#E7E7E7] p-4 rounded-lg gap-2 flex justify-between">
                    <div className="flex gap-1">
                        <div>
                            <img className="w-9 h-9" src={bill_receipt} alt="" />
                        </div>
                        <div>
                            <p className="text-[#0B0B0B] text-xs font-semibold">Bill.jpg</p>
                            <p className="text-[#6D6D6D] text-xs font-normal">500kb</p>
                        </div>
                    </div>

                    <div>
                        <p className="underline text-[#820000] text-xs font-semibold mt-1">View</p>
                    </div>

                </div>

                <div className="">
                    <p className="gap-2 my-2 text-sm font-normal text-[#303F58]">Comments</p>
                    <div className="border border-[#CECECE] rounded-md">

                        <textarea className="w-full min-h-16 rounded-md outline-none p-3 text-[#818894] text-xs font-normal" placeholder="Enter Comments" name="" id=""></textarea>
                    </div>

                </div>

                <div className="my-3">
                    <p className="text-[#303F58] text-xs font-medium mb-1">Note</p>
                    <p className="text-[#4B5C79] text-xs font-normal">Lorem ipsum dolor sit amet consectetur. Nisl vulputate tristique convallis eget vitae mauris est nunc. Augue proin at aliquet odio tempor odio.</p>
                </div>

                 <div className=" flex justify-end gap-2 mt-6 pb-2 ">
                          <Button
                            variant="tertiary"
                            className="w-36 h-10 justify-center text-sm rounded-lg text-[#565148] font-medium border border-[#585953]"
                            size="lg"
                          >
                            Cancel
                          </Button>
                        </div>

            </div>

        </div>
    </div>
  )
}

export default ExpenseViewReject