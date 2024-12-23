// v1.0

const mongoose = require("mongoose");
const { Schema } = mongoose;

const praiseSchema = new Schema(
  {
    usersId:{type:String},
    achiever: { type: String },
    achievement: { type: String },
    theme: { type: String },
    notes: { type: String },

    userId:{ type:String },
    userName: { type: String },

  });

const Praise = mongoose.model("Praise", praiseSchema);

module.exports = Praise;

