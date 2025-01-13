// v1.0

const mongoose = require("mongoose");
const { Schema } = mongoose;

const ticketSchema = new Schema(
  {    
    ticketId:{type:String},
    customerId: { type: String },
    supportAgentId: { type: String },
    requestor: { type: String }, // The person who raised the ticket
    subject: { type: String }, // Brief summary or title of the ticket
    description: { type: String }, // Detailed description of the issue or request
    assignedTo: { type: String }, // Person or team assigned to resolve the ticket
    priority: { type: String }, // Priority level
    type: { type: String }, // Ticket type
    status :{ type: String },
    notes:{type : String},
    openingDate:{type:String}
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
