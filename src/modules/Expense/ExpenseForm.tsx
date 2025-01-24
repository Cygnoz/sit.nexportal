import { useState } from "react";
import BillIcon from "../../assets/icons/BillIcon";
import Input from "../../components/form/Input";
import Select from "../../components/form/Select";
import Button from "../../components/ui/Button";
import RupeesIcon from "../../assets/icons/RupeesIcon";
import MileageIcon from "../../assets/icons/MileageIcon";
import UploadIcon from "../../assets/icons/UploadIcon";

type Props = {
  onClose: () => void;
}

const ExpenseForm = ({onClose}: Props) => {
  const tabs = ["Record Expense","Record Mileage"] as const;
  
    type TabType = (typeof tabs)[number];
  
    const [activeTab, setActiveTab] = useState<TabType>("Record Expense");
  
  return (
    <div className="p-3">
      <div className="flex justify-between items-center mb-4">
                <div className="m">
                    <h1 className="text-base font-bold text-deepStateBlue ">
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
  <h1 className="text-xs text-[#303F58] font-normal">Upload Attachments</h1>
  

            <div className="border-2 border-dashed border-gray-300 bg-[#FEFDFA] rounded-md p-4 text-center mb-4 w-96 mt-2">
             <div className="items-center ms-40">
             <BillIcon size={33}/>
             </div>
        <p className="text-gray-600 text-xs font-semibold">Upload Your Receipt</p>
        <p className="text-sm text-gray-500 text-[10px] font-normal">Maximum file size allowed is 5MB</p>
        <button className="mt-2 px-4 py-2 bg-[#820000] text-white rounded-md flex ml-20">
         <UploadIcon color="#FFFEFB" size={20}/><h1 className="ms-1">
         Upload Your Files
         </h1>
        </button>
      </div>
      </div>
      <div className="flex gap-24 rounded-xl px-4 py-2 text-base font-bold border-gray-200">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer py-2 px-[16px] flex items-center gap-2 ${
              activeTab === tab
                ? "text-[#303F58] text-sm font-bold border-b-2 shadow-lg rounded-md border-[#97998E]"
                : "text-gray-400"
            }`}
          >
            {tab === "Record Expense" && <RupeesIcon color="#768294" size={22}/>}
            {tab === "Record Mileage" && <MileageIcon  color="#768294"  size={22}/>}
            {tab}
          </div>
        ))}
      </div>
        <form>
        {activeTab === "Record Expense" && (
          <div className="grid grid-cols-3  gap-4 mt-4">
            
            <Input
                  required
                  placeholder="DD/MM/YYYY"
                  
                  label="Date"
                  
                />
                 <Select
                  required
                  placeholder="Select Account"
                 
                  label="Expense Account"
                
                  options={[
                    { label: "Cash", value: "cash" },
                    { label: "Credit Card", value: "credit_card" },
                    { label: "Bank Transfer", value: "bank_transfer" },
                
                  ]}
                />
                   <Select
                  required
                  placeholder="Select"
                 
                  label="Category"
                
                  options={[
                    { label: "Cash", value: "cash" },
                    { label: "Credit Card", value: "credit_card" },
                    { label: "Bank Transfer", value: "bank_transfer" },
                
                  ]}
                />
                 <Input
                  required
                  placeholder="Enter Amount"
                  
                  label="Enter Amount"
                  
                />  
           
            <Select
                  required
                  placeholder="Select Payment Mode"
                 
                  label="Paid Through"
                  options={[
                    { label: "Cash", value: "cash" },
                    { label: "Credit Card", value: "credit_card" },
                    { label: "Bank Transfer", value: "bank_transfer" },
                
                  ]}
                />
                 <Input
                  required
                  placeholder="Enter Notes"
                  
                  label="Enter Notes"
                  
                />

            

          </div>
           )}

{activeTab === "Record Mileage" && (
          <div className="grid grid-cols-3  gap-4 mt-4">
            
            <Input
                  required
                  placeholder="DD/MM/YYYY"
                  
                  label="Date"
                  
                />
                 <Select
                  required
                  placeholder="Select Account"
                 
                  label="Expense Account"
                  options={[
                    { label: "Cash", value: "cash" },
                    { label: "Credit Card", value: "credit_card" },
                    { label: "Bank Transfer", value: "bank_transfer" },
                
                  ]}
                />
                 <Select
                  required
                  placeholder="Select Payment Mode"
                 
                  label="Paid Through"
                
                  options={[
                    { label: "Cash", value: "cash" },
                    { label: "Credit Card", value: "credit_card" },
                    { label: "Bank Transfer", value: "bank_transfer" },
                    { label: "Other", value: "other" },
                  ]}
                />
                    <Input
                  required
                  placeholder="Enter Distance"
                  
                  label="Distance"
                  
                />
                 <Input
                  required
                  placeholder="Enter rate"
                  
                  label="Rate Per KM"
                  
                />  
           
           
                 <Input
                  required
                  placeholder="Enter Amount"
                  
                  label="Amount"
                  
                />
               
                 <Input
                
                  required
                  placeholder="Enter Notes"
                  
                  label="Enter Notes"
                  
                />

            

          </div>
           )}
              <div className=" flex justify-end gap-2 mt-6 pb-2 me-3">
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