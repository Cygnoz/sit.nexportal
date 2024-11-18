// v1.0

const mongoose = require("mongoose");
const { Schema } = mongoose;


const userSchema = new Schema({
  userName: { type: String },
  email: { type: String },
  password: { type: String },
  phoneNo: {type :String},
  role: { type: String },
    
});

const User = mongoose.model("User", userSchema);

module.exports = User;