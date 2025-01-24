import BuildingIcon from "../../assets/icons/BuildingIcon";
import EmailIcon from "../../assets/icons/EmailIcon";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import Input from "../../components/form/Input";
// import pic from "../../assets/image/IndiaLogo.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import { endPoints } from "../../services/apiEndpoints";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import ChevronRight from "../../assets/icons/ChevronRight";
import Button from "../../components/ui/Button";
import NoImage from "../../components/ui/NoImage";
import io from "socket.io-client"
const socket = io(import.meta.env.VITE_REACT_APP_TICKETS)
type Props = {};

const TicketsView = ({}: Props) => {

  const [content, setContent] = useState<string>("");
  const Priority = [
    { label: "Low", color: "#4CAF50" }, // Green for Low priority
    { label: "Medium", color: "#FFC107" }, // Yellow/Amber for Medium priority
    { label: "High", color: "#F44336" }, // Red for High priority
  ];

  const handleChange = (value: string) => {
    setContent(value);
  };

  const navigate = useNavigate();

  const { request: getaTicket } = useApi("get", 3004);
  const { id } = useParams();
  const [ticketData, setTicketData] = useState<any>();

  const getOneTicket = async () => {
    try {
      const { response, error } = await getaTicket(
        `${endPoints.TICKETS}/${id}`
      );
      if (response && !error) {
        const Tickets = response.data; // Return the fetched data
        console.log("tickets", Tickets);

        setTicketData(Tickets);
      } else {
        // Handle the error case if needed (for example, log the error)
        console.error("Error fetching Tickets data:", error);
      }
    } catch (err) {
      console.error("Error fetching Tickets data:", err);
    }
  };

  useEffect(() => {
    getOneTicket();
    socket.emit("joinRoom",(ticketData?.supportAgentId?._id))
  }, [id]);

  console.log(ticketData);

  const [messages, setMessages] = useState([
    {
      chatId: "chatId",
      ticketId: "ticketId1",
      senderId: id,
      receiverId: "receiverUserId456",
      message: "Hello, how can I help you?",
    },
    {
      chatId: "chatId",
      ticketId: "ticketId2",
      senderId: "senderUserId123",
      receiverId: id,
      message: "Hello, the software is loading for one hour.",
    },
    {
      chatId: "chatId",
      ticketId: "ticketId3",
      senderId: id,
      receiverId: "receiverUserId456",
      message: "Could you please share more details about the issue you're facing? For example, when did it start, and have you tried restarting the application?",
    },
    {
      chatId: "chatId",
      ticketId: "ticketId4",
      senderId: "senderUserId123",
      receiverId: id,
      message: "Yes, I have tried restarting the app several times, but it’s still not working. It keeps showing the loading icon and doesn’t progress beyond that.",
    },
    {
      chatId: "chatId",
      ticketId: "ticketId5",
      senderId: id,
      receiverId: "receiverUserId456",
      message: "Thanks for the details. I’ll escalate this to our technical team. Meanwhile, can you confirm the app version you are using?",
    },
    {
      chatId: "chatId",
      ticketId: "ticketId6",
      senderId: "senderUserId123",
      receiverId: id,
      message: "The app version is 1.2.3.",
    },
  ]);
  


  // const handleInputChange = (e: any) => {
  //   setNewMessage(e.target.value);
  // };

  console.log(setMessages);
  



  return (
    <>
      <div className="h-auto">
        <div className="grid grid-cols-12 bg-white shadow-md  h-full rounded-md">
          <div className="col-span-2 p-2  h-full">
          <div className="flex items-center text-[16px] my-2 space-x-2">
          <p onClick={()=>navigate('/ticket')}  className="font-bold cursor-pointer  text-[#820000] ">Ticket</p>
          <ChevronRight color="#4B5C79" size={18} />
          <div className="rounded-full flex items-center my-3 space-x-2">
              {ticketData?.customerId?.image ? (
                <img
                  className="w-6 h-6  rounded-full"
                  src={ticketData?.customerId?.image}
                  alt=""
                />
              ) : (
                <NoImage roundedSize={25} iconSize={14} />
              )}
              <h2 className="font-medium text-sm text-[#4B5C79]">
                {ticketData?.customerId?.firstName}
              </h2>
            </div>
        </div>
            
            <hr />
            <h1 className="font-normal text-[#303F58] text-sm mt-3">
              Assignee
            </h1>
            <div className="rounded-full  flex items-center my-3 space-x-2">
              {ticketData?.supportAgentId?.user?.userImage ? (
                <img
                  className="w-6 h-6 rounded-full"
                  src={ticketData?.supportAgentId?.user?.userImage}
                  alt=""
                />
              ) : (
                <NoImage roundedSize={25} iconSize={14} />
              )}

              <h2 className="font-medium text-sm   text-[#4B5C79]">
                {ticketData?.supportAgentId?.user?.userName}
              </h2>
            </div>

            <hr />
            <div className="mt-3 my-2">
              <h1 className="mt-2 font-normal text-sm">Subject</h1>

              <h1 className="mt-3  font-normal text-sm text-[#4B5C79]">
                {ticketData?.subject}
              </h1>
            </div>
            <hr />
            <div className="mt-3 my-2">
              <h1 className="mt-2 font-normal text-sm">Priority</h1>
              <div className="flex items-center">
                {Priority.map((priority) => {
                  if (priority.label === ticketData?.priority) {
                    return (
                      <div key={priority.label} className="flex items-center">
                        <div
                          className="w-4 h-4 rounded-full mt-3"
                          style={{ backgroundColor: priority.color }}
                        ></div>
                        <h1 className="mt-3 ml-2 font-normal text-sm text-[#4B5C79]">
                          {ticketData?.priority}
                        </h1>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>

          <div className="col-span-7 ">
            <div className="  h-full">
              <div className="  border">
                {/* Header */}
                <div className="border-b p-2">
                  <h1 className="text-lg font-bold text-gray-800">
                  {ticketData?.subject}
                  </h1>
                </div>

                {/* Chat Box */}
                <div className={`p-2 space-y-4 h-[530px] overflow-auto custom-scrollbar`}>
  {messages.map((msg) => (
    <div
      key={msg.ticketId} // Using ticketId as key to avoid issues with duplicate chatId
      className={`flex ${
        msg.senderId === id ? "justify-end" : "justify-start"
      }`}
    >
    <div className="flex flex-col">
   {msg.senderId===id?
    <div className="flex gap-2 items-center justify-end w-full">
    
      <div className="flex justify-end items-center gap-2">
          <p className="text-xs text-gray-500  ">
            2.50 pm
          </p>
          <div className="bg-[#787878] h-2 w-2 rounded-full"/>

   
          <p className="text-sm font-bold text-[#4B5C79]">
            You
          </p>
         
        </div>
       
        <img className="w-8 h-8 rounded-full" src={ticketData?.supportAgentId?.user?.userImage} alt="" />
    
     </div>:
     <div className="flex gap-2 items-center">
   
        <img className="w-8 h-8 rounded-full" src={ticketData?.customerId?.image} alt="" />
      
      <div className="flex justify-end items-center gap-2">
          <p className="text-sm font-bold text-[#4B5C79]">
             {msg.senderId}
          </p>
          <div className="bg-[#787878] h-2 w-2 rounded-full"/>
          <p className="text-xs text-gray-500  ">
            2.50 pm
          </p>
        </div>
     </div>
     }
      <div className={`ml-4 ${msg.senderId === id ? "text-right" : ""}`}>
       
        <p
          className={`mt-1  p-2  text-sm rounded-xl text-gray-700 ${
            msg.senderId === id
              ? "bg-[#E3E6D580] me-4 ms-6 rounded-tr-none text-start "
              : "bg-[#EEEEEE80] ms-4 me-7 rounded-tl-none"
          }`}
        >
          {msg.message}
        </p>
      </div>
    </div>
    </div>
  ))}
</div>


                {/* Reply Section */}
                <div className="border rounded-md p-3 bg-white flex items-end gap-2">
  {/* Typing Area */}
 <div className="w-[730px]">
   <ReactQuill
    placeholder="Type Something..."
    value={content}
    onChange={handleChange}
    className="w-full rounded-md flex-1"
    theme="snow"
    modules={{
      toolbar: "#custom-toolbar", // Attach custom toolbar
    }}
  />

  {/* Toolbar at the bottom */}
  <div id="custom-toolbar" className="flex items-center p-2 space-x-2 border-t bg-gray-100">
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-underline"></button>
    <button className="ql-strike"></button>
    <select className="ql-color"></select>
    <select className="ql-background"></select>
    <button className="ql-link"></button>
    <button className="ql-list" value="ordered"></button>
    <button className="ql-list" value="bullet"></button>
    
  </div>
 </div>
  <Button
      variant="primary"
      className="h-10 px-4 text-white bg-red-800 rounded-md hover:bg-red-700 focus:outline-none"
      size="lg"
      type="submit"
    >
      Send
    </Button>
</div>





              </div>
            </div>
          </div>

          <div className="col-span-3 p-3 ">
            <div className="rounded-full flex items-center my-3 space-x-2">
              {ticketData?.customerId?.image ? (
                <img
                  className="w-6 h-6  rounded-full"
                  src={ticketData?.customerId?.image}
                  alt=""
                />
              ) : (
                <NoImage roundedSize={25} iconSize={14} />
              )}
              <h2 className="font-medium text-sm text-[#4B5C79]">
                {ticketData?.customerId?.firstName}
              </h2>
            </div>
            <hr />
            <div className="mt-3 my-2">
              <div className="flex mt-2">
                <BuildingIcon size={16} />
                <h1 className="-mt-1 font-normal text-sm ms-2">Organization</h1>
              </div>
              <h1 className="mt-3 font-normal text-sm">
                {ticketData?.customerId?.organizationName
                  ? ticketData?.customerId?.organizationName
                  : "N/A"}
              </h1>
            </div>
            <hr />
            <div className="mt-3 my-2">
              <div className="flex mt-1">
                <EmailIcon size={16} />
                <h1 className=" font-normal text-sm ms-2">Email</h1>
              </div>
              <h1 className="mt-3 font-normal text-sm">
                {ticketData?.customerId?.email
                  ? ticketData?.customerId?.email
                  : "N/A"}
              </h1>
            </div>
            <hr />
            <div className="mt-3 my-2">
              <div className="flex mt-1">
                <PhoneIcon size={16} />
                <h1 className=" font-normal text-sm ms-2">Phone</h1>
              </div>
              <h1 className="mt-3 font-normal text-sm">
                {ticketData?.customerId?.phone
                  ? ticketData?.customerId?.phone
                  : "N/A"}
              </h1>
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
                onClick={() => console.log("First item clicked")}
              >
                <div className="absolute top-0 -ml-3 mt-5 h-full border-l-2 border-gray-300"></div>{" "}
                {/* Vertical Line */}
                <span className="absolute -left-4 top-0 h-3 w-3 bg-red-700 rounded-full ml-2 mt-4"></span>
                <div className="text-sm text-gray-500 gap-4 ml-3 flex mt-2">
                  <p className="font-normal text-xs">30/5/2024</p>
                  <p className="font-normal text-xs">2.30pm</p>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className="ml-3 font-semibold text-xs">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded">
                    Open
                  </button>
                </div>
              </div>

              {/* Second Clickable Item */}
              <div
                className="relative mb-6 cursor-pointer hover:bg-gray-100 transition-colors duration-200 p-2"
                onClick={() => console.log("Second item clicked")}
              >
                <div className="absolute top-0 -ml-3 -mt-12 h-full border-l-2 border-gray-300"></div>{" "}
                {/* Vertical Line */}
                <span className="absolute -left-4 top-0 h-3 w-3 bg-red-700 rounded-full ml-2 mt-4"></span>
                <div className="text-sm text-gray-500 gap-4 ml-3 flex mt-2">
                  <p className="font-normal text-xs">30/5/2024</p>
                  <p className="font-normal text-xs">2.30pm</p>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className="ml-3 font-semibold text-xs">Sample ticket 2</p>
                  <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded">
                    Open
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketsView;
