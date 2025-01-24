// controller:
 
const Chat = require('../database/model/ticketChat'); // Chat schema
const User = require('../database/model/user'); // User schema (for agents and clients)
const Leads = require('../database/model/leads'); // For customers
 
 
exports.sendMessage = async (req, res) => {
  try {
    const { ticketId, senderId, receiverId, message } = req.body;
 
    // Save the message in the database
    const newMessage = await Chat.create({
      ticketId,   // Associate with the ticketId
      senderId,
      receiverId,
      message,
      isRead: false
    });
 
    // Emit message through WebSocket (if socket.io is configured)
    if (global.io) {
      global.io.to(ticketId).emit('newMessage', newMessage); // Emit to the room using ticketId
    }
 
    res.status(200).json({
      message: 'Message sent successfully',
      data: newMessage
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send message', error });
  }
};
 
 
 
 
exports.getChatHistory = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { limit = 50, offset = 0 } = req.query;
 
    // Fetch messages associated with the ticketId
    const messages = await Chat.find({ ticketId })
      .sort({ createdAt: -1 })
      .skip(Number(offset))
      .limit(Number(limit));
 
    // Process messages to populate names and roles dynamically
    const processedMessages = await Promise.all(
      messages.map(async (message) => {
        const processedMessage = { ...message.toObject() };
 
        // Fetch sender details
        if (message.senderId) {
          const lead = await Leads.findOne({ email: message.senderId }); // Check if sender is a customer
          if (lead) {
            processedMessage.senderId = {
              name: lead.fullName || `${lead.firstName} ${lead.lastName}`,
              role: 'Customer'
            };
          } else {
            const user = await User.findById(message.senderId); // Otherwise, sender is a support agent
            if (user) {
              processedMessage.senderId = {
                name: user.userName,
                role: user.role
              };
            }
          }
        }
 
        // Fetch receiver details
        if (message.receiverId) {
          const lead = await Leads.findOne({ email: message.receiverId }); // Check if receiver is a customer
          if (lead) {
            processedMessage.receiverId = {
              name: lead.fullName || `${lead.firstName} ${lead.lastName}`,
              role: 'Customer'
            };
          } else {
            const user = await User.findById(message.receiverId); // Otherwise, receiver is a support agent
            if (user) {
              processedMessage.receiverId = {
                name: user.userName,
                role: user.role
              };
            }
          }
        }
 
        return processedMessage;
      })
    );
 
    res.status(200).json({
      message: 'Chat history retrieved successfully',
      data: processedMessages
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve chat history', error });
  }
};
 
 
 
// // Get recent chats
// exports.getRecentChats = async (req, res) => {
//   try {
//     const { userId } = req.params;
 
//     // Find distinct chat IDs for the user
//     const recentChats = await Chat.aggregate([
//       { $match: { $or: [{ senderId: userId }, { receiverId: userId }] } },
//       { $group: { _id: '$chatId', lastMessage: { $last: '$message' }, timestamp: { $last: '$timestamp' } } },
//       { $sort: { timestamp: -1 } }
//     ]);
 
//     res.status(200).json({
//       message: 'Recent chats retrieved successfully',
//       data: recentChats
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to retrieve recent chats', error });
//   }
// };
 
 