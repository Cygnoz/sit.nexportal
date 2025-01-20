const mongoose = require("mongoose");
const { Schema } = mongoose;
 
 
const activitySchema = new Schema({
 
    leadId:{type:String},
    activityType:{type:String},
    description:{type:String},
 
    //email
    emailTo:{type:String},
    emailFrom:{type:String},
    emailSubject:{type:String},
    emailMessage:{type:String},
    emailFile:{type:String},
    emailNote:{type:String},
 
    //note
    relatedTo:{type:String},
    noteMembers:{type:String},
    note:{type:String},
 
    //meeting
    meetingTitle:{type:String},
    meetingNotes:{type:String},
    meetingType:{type:String},
    dueDate:{type:String},
    timeFrom:{type:String},
    timeTo:{type:String},
    meetingLocation:{type:String},
    location:{type:String},
    landMark:{type:String},
    meetingStatus:{type:String},
 
    //task
    taskTitle:{type:String},
    taskDescription:{type:String},
    taskType:{type:String},
    dueDate:{type:String},
    time:{type:String},
    taskStatus:{type:String},
 
    userName: { type: String },
    userRole: { type: String},
},
    { timestamps: true } ,
   
);
 
 
const Activity = mongoose.model("Activity", activitySchema);
 
module.exports = Activity;