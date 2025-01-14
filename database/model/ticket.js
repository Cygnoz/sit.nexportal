// v1.0

const mongoose = require("mongoose");
const { Schema } = mongoose;

const ticketSchema = new Schema(
  {
    ticketId:{type:String},
    resolutionTime: { type: String },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead'},
    region: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead'},
    supervisor:{ type: mongoose.Schema.Types.ObjectId, ref: 'Supervisor'},
    supportAgentId: { type: mongoose.Schema.Types.ObjectId, ref: 'SupportAgent'},
    subject: { type: String }, // Brief summary or title of the ticket
    description: { type: String }, // Detailed description of the issue or request
    priority: { type: String }, // Priority level
    type: { type: String }, // Ticket type
    status :{ type: String },
    notes:{type : String},
    openingDate:{type:String}
  },
  { timestamps: true }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
