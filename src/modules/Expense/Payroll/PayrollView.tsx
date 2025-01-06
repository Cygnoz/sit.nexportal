import { useNavigate } from "react-router-dom"
import ChevronRight from "../../../assets/icons/ChevronRight"
import bg from "../../../assets/image/bgPay.jpeg";
import img from "../../../assets/image/IndiaLogo.png";
import RupeeIcon from "../../../assets/icons/RupeeIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import CalenderDays from "../../../assets/icons/CalenderDays";
import Timer from "../../../assets/icons/Timer";
import IndianRupeeIcon from "../../../assets/icons/IndianRupeeIcon";
import Input from "../../../components/form/Input";
import EditIcon from "../../../assets/icons/EditIcon";
import Button from "../../../components/ui/Button";
import { useState } from "react";
type Props = {
   
}

const PayrollView = ({ }: Props) => {
    const [isEditing, setIsEditing] = useState(false);
       const handleEdit = () => {     setIsEditing(true);   }; 
         const handleCancel = () => { setIsEditing(false); };
 
    
    const navigate = useNavigate()
    return (
        <div>
            <div className="flex items-center text-[16px] space-x-2 mb-4">
                <p onClick={() => navigate('/payroll')} className="font-bold cursor-pointer text-[#820000]">Payroll</p>
                <ChevronRight color="#4B5C79" size={18} />
                <p className="font-bold text-[#303F58]">
                    payroll-01
                </p>
            </div>
           

            <div className="flex items-center justify-between rounded-xl ">
                <div
                    className="grid grid-cols-12 gap-3 bg-cover rounded-xl w-full"
                    style={{
                        backgroundImage: `url(${bg})`, // Use the imported image
                    }}
                >
                    
                        <div>
                            {/* Left Section: Area Icon and Details */}

                            <div className="flex ms-4 gap-2 py-2 text-white">
                                <div className="flex mt-8">
                                    <div className="w-16 h-16 rounded-full overflow-hidden">
                                        <img
                                            src={img}
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-[#303F58] text-sm font-bold p-4 mt-2">subi</p>
                                </div>

                                <div className="mt-10 flex ms-32 gap-6">
                                    <div className="">
                                        <p className="text-xs font-medium text-[#4B5C79] py-2  flex">
                                           <UserIcon/>
                                            Role
                                        </p>

                                        <h3 className="text-sm font-bold text-[#303F58]">
                                            hgf
                                        </h3>
                                    </div>
                                    <div className="border-r border-[#DADADA] h-14 me-4 ms-3"></div>
                                    <div className="">
                                        <p className="text-xs font-medium text-[#4B5C79] py-2 whitespace-nowrap flex">
                                          <CalenderDays size={16}/>
                                           Date Of Joining
                                        </p>
                                        <p className="text-sm font-bold text-[#303F58]">
                                           01-01-2233
                                        </p>
                                    </div>
                                    <div className="border-r border-[#DADADA] h-14 me-4 ms-3 "></div>
                                    <div className="cursor-pointer">
                                        <p className="text-xs font-medium text-[#4B5C79] py-2 whitespace-nowrap flex">
                                            <Timer/>
                                            Working Days
                                        </p>
                                        <p className="text-sm font-bold text-[#303F58]">
                                            287
                                        </p>
                                    </div>
                                    <div className="border-r border-[#DADADA] h-14 me-4 ms-3"></div>
                                    <div className="">
                                        <p className="text-xs font-medium text-[#4B5C79] py-2 whitespace-nowrap flex">
                                        <Timer/>
                                        Present days 
                                        </p>
                                        <p className="text-sm font-medium text-[#303F58]">
                                           232
                                        </p>
                                    </div>
                                    <div className="border-r border-[#DADADA] h-14 me-4 ms-3"></div>
                                    <div className="">
                                        <p className="text-xs font-medium text-[#4B5C79] py-2 whitespace-nowrap flex">
                                        <Timer/>
                                          Leave Days
                                        </p>
                                        <p className="text-sm font-medium text-[#303F58]">
                                            55
                                        </p>
                                    </div>
                                      </div>
                                    <div className="flex justify-end p-4">
                                        <div className="bg-gradient-to-r from-[#820000] to-[#2C353B] text-white rounded-lg p-2 w-52 shadow-lg">
                                            {/* Icon and Title */}
                                            <div className="flex items-center gap-2 mb-2">
                                                <RupeeIcon size={28}/>
                                                <p className="text-lg font-semibold">Total Earnings</p>
                                            </div>

                                            {/* Amount */}
                                            <p className="text-xl font-bold text-center">₹ 12,000</p>

                                            {/* Description */}
                                            <p className="text-sm text-gray-300 mt-1">Basic Salary + Commission</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        
                    </div>


                </div>
                <div className="my-2">
                <h1>Total Earning Details</h1>
            </div>

<div  className="bg-white p-3 rounded-lg">
<div className="flex gap-4">
      {/* Basic Salary */}
      <div className="bg-gradient-to-r from-[#E3E6D5] to-[#F7E7CE] flex items-center justify-center p-4 rounded-lg shadow-md">
        <div className="text-center">
           <div className="ml-9">
           <IndianRupeeIcon size={16}/>
           </div>
          <p className="text-sm text-gray-600 font-medium">Basic Salary</p>
          <p className="text-2xl font-bold">₹ 8,000</p>
        </div>
      </div>

      {/* Commission Details */}
      <div className="bg-[#F6F5F4] flex flex-col justify-center p-4 rounded-lg shadow-md flex-1">
    <p>%</p>
        <div className="grid grid-cols-4 gap-4 text-center">
        
          <div className="border-r">
                <p className="text-xs text-[#4B5C79]">Commission Profile Name</p>
            <p className="font-bold text-sm text-[#303F58]">Commission 01</p>
          </div>
    

          <div className="border-r">
            <p className="text-xs text-[#4B5C79]">Threshold Licenses</p>
            <p className="font-bold text-sm text-[#303F58]">10</p>
          </div>
          <div className="border-r">
            <p className="text-xs text-[#4B5C79]">Commission Point</p>
            <p className="font-bold text-sm text-[#303F58]">01</p>
          </div>
          <div>
            <p className="text-xs text-[#4B5C79]">Recurring Point</p>
            <p className="font-bold text-sm text-[#303F58]">0.5</p>
          </div>
        </div>
      </div>

      {/* Total Licenses */}
      <div className="bg-[#F1F4E4] flex items-center justify-center p-2 rounded-lg shadow-md">
        <div className="text-center">
            <div className="ml-8">
                <UserIcon color="#768294"/>
            </div>
          <p className="text-xs text-[#303F58] font-medium my-1">Total Licenses</p>
          <p className="text-sm text-[#303F58] font-bold">01</p>
        </div>
      </div>

      {/* Total Recurring Licenses */}
      <div className="bg-[#F1F4E4] flex items-center justify-center p-1 rounded-lg shadow-md">
        <div className="text-center">
        <div className="ml-[60px]">
                <UserIcon color="#768294"/>
            </div>
          <p className="text-xs text-[#303F58] font-medium my-1">
            Total Recurring Licenses
          </p>
          <p className="text-sm text-[#303F58] font-bold">0.5</p>
        </div>
      </div>
    </div>
</div>
          
<div className="bg-white font-bold text-base mt-2">
      <h1 className="p-2">Payroll Details</h1>
      <div className="p-4 gap-2">
        <div className=" items-center gap-2 grid grid-cols-2">
          <Input label="Basic Salary" placeholder="₹45,000" disabled={!isEditing} />
          {isEditing && (
            <Input
              label="Reason*"
              placeholder="Provide a reason for changes"
            />
          )}
        </div>
        <div className=" items-center gap-2 grid grid-cols-2">
          <Input label="New License Earnings" placeholder="₹10,000" disabled={!isEditing} />
          {isEditing && (
            <Input
              label="Reason*"
              placeholder="Provide a reason for changes"
            />
          )}
        </div>
        <div className=" items-center gap-2 grid grid-cols-2">
          <Input label="Recurring Amount" placeholder="₹2,000" disabled={!isEditing} />
          {isEditing && (
            <Input
              label="Reason*"
              placeholder="Provide a reason for changes"
            />
          )}
        </div>
        <div className=" items-center gap-2 grid grid-cols-2">
          <Input label="Travel Elevance" placeholder="₹3,000" disabled={!isEditing} />
          {isEditing && (
            <Input
              label="Reason*"
              placeholder="Provide a reason for changes"
            />
          )}
        </div>
      </div>

      <div className="p-2 me-2 flex justify-end gap-4">
        {!isEditing ? (
          <button
            className="border py-2 px-3 rounded-md bg-[#FEFDFA] flex items-center gap-2"
            onClick={handleEdit}
          >
            <EditIcon color="#565148" size={16} />
            Edit
          </button>
        ) : (
          <>
            <button
              className="border py-2 px-3 rounded-md bg-gray-100 text-gray-800"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button className="border py-2 px-3 rounded-md bg-red-600 text-white">
              Apply
            </button>
          </>
        )}
      </div>

      
<div className="p-4 rounded-lg">
<div className="flex justify-end p-4 bg-[#FDF8F0]">
   <p> Total amount </p>
   <RupeeIcon size={24} color="#303F58"/> 
   <p>10000</p>
  </div>
</div>


    </div>
          <div className="flex justify-end gap-2 mt-3 pb-2 h-64">
                 <Button
                   variant="tertiary"
                   className="h-8 text-sm border rounded-lg"
                   size="lg"
                   
                 >
                   Cancel
                 </Button>
                 <Button
                   variant="primary"
                   className="h-8 text-sm border rounded-lg"
                   size="lg"
                   type="submit"
                 >
                   Submit
                 </Button>
               </div>
       
        </div>
    )
}

export default PayrollView
