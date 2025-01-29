import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import useApi from "../../Hooks/useApi";
import { endPoints } from "../../services/apiEndpoints";

const AGENT_SOCKET_URL =import.meta.env.VITE_REACT_APP_TICKETS // Replace with your backend URL

interface Message {
  senderId: string;
  receiverId: string;
  ticketId: string;
  message: string;
  timestamp: string;
}

const AgentChat: React.FC = () => {
  const {request:getChatHistory}=useApi('get',3004)
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [ticketId, setTicketId] = useState("6791f3f16c853d9bd0def96e"); // Replace with dynamic ticketId
  const [receiverId, setReceiverId] = useState("anju@gmail.com"); // Replace dynamically
  const [senderId, setSenderId] = useState("67938d47d23d657267d780b5"); // Replace dynamically
  console.log(setTicketId);
  console.log(setReceiverId);
  console.log(setSenderId);
  
  
  
  useEffect(() => {
    const newSocket = io(AGENT_SOCKET_URL);
    setSocket(newSocket);

    newSocket.emit("joinRoom", ticketId);

    newSocket.on("chatHistory", (chatHistory: Message[]) => {
      setMessages(chatHistory);
    });

    newSocket.on("newMessage", (newMessage: Message) => {
      setMessages((prev) => [...prev, newMessage]);
    });
   
    return () => {
      newSocket.disconnect();
    };
    
  }, [ticketId]);

  useEffect(()=>{
    getChatHis()
  },[])

  const getChatHis=async()=>{
    try{
      const {response,error}=await getChatHistory(`${endPoints.CHAT_HISTORY}/${ticketId}`)
      if(response && !error){
        console.log("rres",response.data);
        
      }
    }catch(err){
      console.log("er",err);
      
    }
  }

  const sendMessage = () => {
    if (message.trim() && socket) {
      socket.emit("sendMessage", {
        ticketId,
        senderId,
        receiverId,
        message,
      });
      setMessage("");
    }
  };

  return (
    <div className="chat-container">
      <h2>Agent Chat</h2>
      <div className="chat-history">
        {messages.map((msg, index) => (
          <div key={index} className={msg.senderId === senderId ? "sent" : "received"}>
            <p>{msg.message}</p>
            <small>{new Date(msg.timestamp).toLocaleString()}</small>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default AgentChat;
