import BuildingIcon from "../../assets/icons/BuildingIcon"
import EmailIcon from "../../assets/icons/EmailIcon"
import PhoneIcon from "../../assets/icons/PhoneIcon"
import person from "../../assets/image/Ellipse 14 (2).png"
import Input from "../../components/form/Input"
type Props = {}

const TicketsView = ({ }: Props) => {
  
    

   
    return (
        <>
        <div>
            <div className="grid grid-cols-12 mt-5 max-h-full">
                <div className="col-span-2 p-2 bg-white max-h-full">
                    <h1 className="font-normal text-[#303F58] text-sm">Requester</h1>
                    <div className="rounded-full flex my-3">
                        <img className="w-6 h-6 mt-1" src={person} alt="" />
                        <h2 className="font-medium text-sm text-[#4B5C79] mt-2 ms-3">Sudeep Kumar</h2>
                    </div>
                    <hr />
                    <h1 className="font-normal text-[#303F58] text-sm mt-3">Assignee</h1>
                    <div className="rounded-full flex my-3">
                        <img className="w-6 h-6 mt-1" src={person} alt="" />
                        <h2 className="font-medium text-sm text-[#4B5C79] mt-2 ms-3">Sara John </h2>
                    </div>
                    <hr />
                    <div className="mt-3 my-2">
                        <h1 className="mt-2 font-normal text-sm">Type</h1>
                        <h1 className="mt-2 font-normal text-sm">Problem</h1>
                    </div>
                    <hr />
                    <div className="mt-3 my-2">
                        <h1 className="mt-2 font-normal text-sm">Priority</h1>
                        <div className="flex">
                            <div className="w-4 h-4 rounded-full mt-3 bg-[#F25C5C]"></div>
                            <h1 className="mt-2 ml-2 font-normal text-sm">High</h1>
                        </div>

                    </div>

                </div>

                <div className="col-span-7">
                <div className="bg-gray-100 flex justify-center items-center ">
      <div className=" bg-white shadow-md rounded-md">
        {/* Header */}
        <div className="border-b p-4">
          <h1 className="text-lg font-bold text-gray-800">
            Subscription from the Basic plan to the Pro plan
          </h1>
        </div>

        {/* Chat Box */}
        <div className="p-4 space-y-4">
          {/* Message 1 (Received Message) */}
          <div className="flex justify-center ml-40">
            <div className="w-10 h-10 bg-pink-300 rounded-full"></div>
            <div className="ml-4">
             <div className="flex">
             <p className="text-sm font-bold text-[#4B5C79]">Sara John</p>
             <p className="text-xs text-gray-500 ms-2 mt-1">Today 04:07</p>
             </div>
              <p className="mt-2 p-2 text-sm text-gray-700 bg-[#E3E6D580]">
                I’m sorry to hear that. Let me help you. Could you please share the exact error message or describe what happens when you try to upgrade?
              </p>
            </div>
          </div>

          {/* Message 2 (Sent Message) */}
          <div className="flex items-start">
            <div className="w-10 h-10 bg-pink-300 rounded-full"></div>
            <div className="ml-4">
             <div className="flex">
             <p className="text-sm font-bold text-[#4B5C79]">Leslie Alexander</p>
             <p className="text-xs text-gray-500 ms-2 mt-1">Today 04:07</p>
             </div>
              <p className="mt-2 p-2 text-sm text-gray-700 bg-[#EEEEEE80]">
                I’m sorry to hear that. Let me help you. Could you please share the exact error message or describe what happens when you try to upgrade?
              </p>
            </div>
          </div>

          {/* Message 3 (Received Message) */}
          <div className="flex justify-center ml-40">
            <div className="w-10 h-10 bg-pink-300 rounded-full"></div>
            <div className="ml-4">
             <div className="flex">
             <p className="text-sm font-bold text-[#4B5C79]">Sara John</p>
             <p className="text-xs text-gray-500 ms-2 mt-1">Today 04:07</p>
             </div>
              <p className="mt-2 p-2 text-sm text-gray-700 bg-[#E3E6D580]">
                I’m sorry to hear that. Let me help you. Could you please share the exact error message or describe what happens when you try to upgrade?
              </p>
            </div>
          </div>

          {/* Message 4 (Sent Message) */}
          <div className="flex items-start">
            <div className="w-10 h-10 bg-pink-300 rounded-full"></div>
            <div className="ml-4">
             <div className="flex">
             <p className="text-sm font-bold text-[#4B5C79]">Leslie Alexander</p>
             <p className="text-xs text-gray-500 ms-2 mt-1">Today 04:07</p>
             </div>
              <p className="mt-2 p-2 text-sm text-gray-700 bg-[#EEEEEE80]">
                I’m sorry to hear that. Let me help you. Could you please share the exact error message or describe what happens when you try to upgrade?
              </p>
            </div>
          </div>
        </div>

        {/* Reply Section */}
        <div className="border-t p-4 flex items-center">
          <input
            type="text"
            className="flex-grow border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Reply..."
          />
          <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Submit as in progress
          </button>
        </div>
      </div>
    </div>  
    </div>

                <div className="col-span-3 p-3 bg-white ">

                    <div className="rounded-full flex my-3">
                        <img className="w-9 h-9 " src={person} alt="" />
                        <h2 className="font-medium text-sm text-[#4B5C79] mt-2 ms-3">Sudeep Kumar</h2>
                    </div>
                    <hr />
                    <div className="mt-3 my-2">
                        <div className="flex mt-2">
                            <BuildingIcon size={16} />
                            <h1 className="-mt-1 font-normal text-sm ms-2">Organization</h1>
                        </div>
                        <h1 className="mt-3 font-normal text-sm">ABC Corporate</h1>
                    </div>
                    <hr />
                    <div className="mt-3 my-2">
                        <div className="flex mt-1">
                            <EmailIcon size={16} />
                            <h1 className=" font-normal text-sm ms-2">Email</h1>
                        </div>
                        <h1 className="mt-3 font-normal text-sm">Sudeep@gmail.com</h1>
                    </div>
                    <hr />
                    <div className="mt-3 my-2">
                        <div className="flex mt-1">
                            <PhoneIcon size={16} />
                            <h1 className=" font-normal text-sm ms-2">Phone</h1>
                        </div>
                        <h1 className="mt-3 font-normal text-sm">28355327873</h1>
                    </div>
                    <hr />
                    <h1 className="mt-3 font-normal text-sm ">Notes</h1>
                    <div className="mt-1">
                        <Input />
                    </div>

                    <div>
                        <h1 className="mt-2 text-sm font-semibold">
                            Interaction History
                        </h1>

                    </div>
                    <div>
    {/* First Clickable Item */}
    <div
        className="relative mb-6 cursor-pointer hover:bg-gray-100 transition-colors duration-200 p-2"
        onClick={() => console.log('First item clicked')}
    >
        <div className="absolute top-0 -ml-3 mt-5 h-full border-l-2 border-gray-300"></div> {/* Vertical Line */}
        <span className="absolute -left-4 top-0 h-3 w-3 bg-red-700 rounded-full ml-2 mt-4"></span>
        <div className="text-sm text-gray-500 gap-4 ml-3 flex mt-2">
            <p className="font-normal text-xs">30/5/2024</p>
            <p className="font-normal text-xs">2.30pm</p>
        </div>
        <div className="flex justify-between items-center mt-1">
            <p className="ml-3 font-semibold text-xs">Lorem ipsum dolor sit amet consectetur</p>
            <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded">Open</button>
        </div>
    </div>

    {/* Second Clickable Item */}
    <div
        className="relative mb-6 cursor-pointer hover:bg-gray-100 transition-colors duration-200 p-2"
        onClick={() => console.log('Second item clicked')}
    >
        <div className="absolute top-0 -ml-3 -mt-12 h-full border-l-2 border-gray-300"></div> {/* Vertical Line */}
        <span className="absolute -left-4 top-0 h-3 w-3 bg-red-700 rounded-full ml-2 mt-4"></span>
        <div className="text-sm text-gray-500 gap-4 ml-3 flex mt-2">
            <p className="font-normal text-xs">30/5/2024</p>
            <p className="font-normal text-xs">2.30pm</p>
        </div>
        <div className="flex justify-between items-center mt-1">
            <p className="ml-3 font-semibold text-xs">Sample ticket 2</p>
            <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded">Open</button>
        </div>
    </div>
</div>







                </div>

            </div>



        </div>
        
        </>



    )
}

export default TicketsView