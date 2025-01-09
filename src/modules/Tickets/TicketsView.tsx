import BuildingIcon from "../../assets/icons/BuildingIcon"
import EmailIcon from "../../assets/icons/EmailIcon"
import PhoneIcon from "../../assets/icons/PhoneIcon"
import person from "../../assets/image/Ellipse 14 (2).png"
import Input from "../../components/form/Input"
import pic from "../../assets/image/IndiaLogo.png"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useApi from "../../Hooks/useApi"
import { endPoints } from "../../services/apiEndpoints"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
type Props = {}

 

const TicketsView = ({ }: Props) => {
  const [content, setContent] = useState<string>('');

  const handleChange = (value: string) => {
    setContent(value);
  };

 



  const {request: getaTicket}=useApi('get',3004)
  const { id } = useParams();
  const [ticketData, setTicketData] = useState<any>()

     const getOneTicket = async () => {
          try {
            const { response, error } = await getaTicket(`${endPoints.TICKETS}/${id}`);
            if (response && !error) {
          
              
              const Tickets = response.data; // Return the fetched data
              console.log(response.data);
              console.log("Fetched Tickets data:", Tickets);
             
              setTicketData(Tickets);
            } else {
              // Handle the error case if needed (for example, log the error)
              console.error('Error fetching Tickets data:', error);
            }
          } catch (err) {
            console.error('Error fetching Tickets data:', err);
          }
        };
    
        useEffect(() => {
          getOneTicket()
        }, [id]);

        console.log(ticketData);

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "received",
      name: "Sara John",
      time: "Today 04:07",
      content: "I’m sorry to hear that. Let me help you. Could you please share the exact error message or describe what happens when you try to upgrade?",
    },
    {
      id: 2,
      type: "sent",
      name: "Leslie Alexander",
      time: "Today 04:07",
      content: "I’m sorry to hear that. Let me help you. Could you please share the exact error message or describe what happens when you try to upgrade?",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  // const handleInputChange = (e: any) => {
  //   setNewMessage(e.target.value);
  // };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const newMessageObject = {
      id: messages.length + 1,
      type: "sent", // Assuming the user is sending the message
      name: "Leslie Alexander",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: newMessage,
    };

    setMessages([...messages, newMessageObject]);
    setNewMessage(""); // Clear input field
  };




  return (
    <>
      <div>
        <div className="grid grid-cols-12 mt-5 max-h-full">
          <div className="col-span-2 p-2 bg-white max-h-full">
            <h1 className="font-normal text-[#303F58] text-sm">Requester</h1>
            <div className="rounded-full flex my-3">
              <img className="w-6 h-6 mt-1" src={person} alt="" />
              <h2 className="font-medium text-sm text-[#4B5C79] mt-2 ms-3">{ticketData?.customerId?.firstName}</h2>
            </div>
            <hr />
            <h1 className="font-normal text-[#303F58] text-sm mt-3">Assignee</h1>
            <div className="rounded-full flex my-3">
              <img className="w-6 h-6 mt-1" src={person} alt="" />
              <h2 className="font-medium text-sm text-[#4B5C79] mt-2 ms-3">{ticketData?.supportAgentId?.user?.userName}</h2>
            </div>
            
           
            <hr />
            <div className="mt-3 my-2">
              <h1 className="mt-2 font-normal text-sm">Priority</h1>
              <div className="flex">
                <div className="w-4 h-4 rounded-full mt-3 bg-[#F25C5C]"></div>
                <h1 className="mt-3 ml-2 font-normal text-sm">{ticketData?.priority}</h1>
              </div>

            </div>

          </div>

          <div className="col-span-7">
            <div className="bg-gray-100 flex justify-center items-center ">
              <div className="bg-white shadow-md rounded-md">
                {/* Header */}
                <div className="border-b p-4">
                  <h1 className="text-lg font-bold text-gray-800">
                    Subscription from the Basic plan to the Pro plan
                  </h1>
                </div>

                {/* Chat Box */}
                <div className="p-4 space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.type === "received" ? "justify-center ml-40" : "items-start"
                        }`}
                    >
                      <div className="w-8 h-8">
                        <img
                          src={pic}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="flex">
                          <p className="text-sm font-bold text-[#4B5C79]">{msg.name}</p>
                          <p className="text-xs text-gray-500 ms-2 mt-1">{msg.time}</p>
                        </div>
                        <p
                          className={`mt-2 p-2 text-sm text-gray-700 ${msg.type === "received"
                              ? "bg-[#E3E6D580]"
                              : "bg-[#EEEEEE80]"
                            }`}
                        >
                          {msg.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Reply Section */}
                <div className="border-t p-4 flex items-center mt-60">
                  {/* <input
                    type="text"
                    className="flex-grow border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                   
                    value={newMessage}
                    onChange={handleInputChange}
                  /> */}
                   <ReactQuill
                    placeholder="Reply..."
        value={content}
        onChange={handleChange}
        className="h-35 max-w-full border border-gray-300 rounded"
        theme="snow"
      />
                  <button
                    className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={handleSendMessage}
                  >
                    Submit as in progress
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className="col-span-3 p-3 bg-white">

            <div className="rounded-full flex my-3">
              <img className="w-9 h-9 " src={person} alt="" />
              <h2 className="font-medium text-sm text-[#4B5C79] mt-2 ms-3">{ticketData?.customerDetails?.firstName}</h2>
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
              <h1 className="mt-3 font-normal text-sm">{ticketData?.customerDetails?.email}</h1>
            </div>
            <hr />
            <div className="mt-3 my-2">
              <div className="flex mt-1">
                <PhoneIcon size={16} />
                <h1 className=" font-normal text-sm ms-2">Phone</h1>
              </div>
              <h1 className="mt-3 font-normal text-sm">{ticketData?.customerDetails?.phone}</h1>
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