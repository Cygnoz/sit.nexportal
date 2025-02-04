import { useNavigate } from "react-router-dom"
import ChevronRight from "../../../assets/icons/ChevronRight"
import EmailIcon from "../../../assets/icons/EmailIcon"
import VectorIcon from "../../../assets/icons/VectorIcon"
import Button from "../../../components/ui/Button"
import cygnoz from "../../../assets/image/cygnozzzz.png";

type Props = {}

const ExpenseViewGranted = ({ }: Props) => {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <div>
                    <div className="flex items-center text-[16px] space-x-2 mb-4">
                        <p onClick={() => navigate('/expense')} className="font-bold cursor-pointer text-[#820000]">Expense</p>
                        <ChevronRight color="#4B5C79" size={18} />
                        <p className="font-bold text-[#303F58]">
                            Material & Suppliers
                        </p>
                    </div>
                    {/* Header Section */}
                    <header className="flex justify-between items-center border-b pb-4 bg-white p-3 rounded-lg">
                        <h1 className="text-xl font-semibold">Material & Suppliers</h1>
                        <div className="flex gap-2">
                            <button className="border px-4 py-2 rounded-md bg-[#FEFDFA] flex items-center">
                                <span className="p-1">
                                    <EmailIcon size={16} />
                                </span>
                                Send Mail
                            </button>
                            <button className="border px-4 py-2 rounded-md bg-[#FEFDFA] flex items-center">
                                <span className="p-1">
                                    <VectorIcon size={16} />
                                </span>
                                Print
                            </button>
                        </div>
                    </header>
                </div>

                <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
                    <div className="w-full max-w-4xl bg-white shadow-md rounded-lg">
                        <div className="bg-[#EFEFEF] p-4  shadow-md rounded-md">
                            <div className="flex justify-between mt-5">
                                <p className="text-2xl font-semibold">Expense Payment Slip</p>
                                <p className="font-normal text-xs text-[#5E6470] text-right">
                                    CygnoNex Innovations Private Limited,
                                    <br />
                                    NGO Quarters, Kakkanad Kochi, Kerala, India
                                    <br />
                                    Phone: +91 9544431166
                                    <br />
                                    Email: notify@cygnonex.com
                                </p>
                            </div>
                            <div>
                                <section className="mt-6">
                                    <div className="mt-4 bg-gray-50 p-4 rounded-md shadow-sm">
                                        <div>
                                            <div className="grid grid-cols-5">
                                                <div>
                                                    <p className="text-xs text-[#5E6470] font-medium">Employee Name</p>
                                                    <p className="text-xs font-semibold text-[#1A1C21]">Kiran B</p>
                                                </div>

                                                <div>
                                                    <p className="text-xs text-[#5E6470] font-medium">Employee ID</p>
                                                    <p className="text-xs font-semibold text-[#1A1C21]">12657</p>
                                                </div>

                                                <div>
                                                    <p className="text-xs text-[#5E6470] font-medium">Role</p>
                                                    <p className="text-xs font-semibold text-[#1A1C21]">Regional Manager</p>
                                                </div>

                                            </div>

                                            <div className="grid grid-cols-5 my-8">
                                                <div>
                                                    <p className="text-xs text-[#5E6470] font-medium">Employee ID</p>
                                                    <p className="text-xs font-semibold text-[#1A1C21]">Materials & Supply</p>
                                                </div>

                                                <div>
                                                    <p className="text-xs text-[#5E6470] font-medium">Employee ID</p>
                                                    <p className="text-xs font-semibold text-[#1A1C21]">Materials</p>
                                                </div>

                                            </div>

                                            <div className="grid grid-cols-5 mb-12">
                                                <div>
                                                    <p className="text-xs text-[#5E6470] font-medium">Employee ID</p>
                                                    <p className="text-xs font-semibold text-[#1A1C21]">Dec 12, 2024</p>
                                                </div>

                                                <div>
                                                    <p className="text-xs text-[#5E6470] font-medium">Employee ID</p>
                                                    <p className="text-xs font-semibold text-[#1A1C21]">Vivek Kumar</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-4 mb-1">

                                                <p className="text-xs text-[#5E6470] font-medium">Amount</p>
                                                <p className="text-xs text-[#5E6470] font-medium">Payment Mode</p>
                                                <p className="text-xs text-[#5E6470] font-medium">Remark</p>

                                            </div>
                                            <hr />
                                            <div className="grid grid-cols-4 mt-1">

                                                <p className="text-[#1A1C21} text-xs font-semibold">&#8377; 45,000</p>
                                                <p className="text-[#1A1C21} text-xs font-semibold">Cash</p>
                                                <p className="text-[#5E6470] text-xs font-normal">Lorem ipsum dolor sit amet consectetur. In sed gravida vel imperdiet. Arcu vitae erat felis nunc.</p>

                                            </div>

                                            <div className="flex gap-6 justify-end mt-40">
                                                <p className="text-xs text-[#5E6470] font-medium">Approved by</p>
                                                <p className="text-xs text-[#5E6470] font-medium">Approved Date</p>
                                            </div>
                                            <div className="flex gap-6 justify-end my-1">
                                                <p className="text-xs font-semibold text-[#1A1C21]">Sreejith Ravi</p>
                                                <p className="text-xs font-semibold text-[#1A1C21]">Dec 18, 2024</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-6 flex justify-center">
                                        <img src={cygnoz} alt="Cygnoz Logo" className="w-28 h-8" />
                                    </div>

                                </section>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 justify-end mb-4">
                    <Button variant="tertiary" size="md" className="h-10 w-32 justify-center">Cancel</Button>
                    <Button variant="primary" size="md" className="h-10 w-32 justify-center">Paid</Button>

                </div>


            </div>
        </div>
    )
}

export default ExpenseViewGranted