// v1.0
 
const mongoose = require("mongoose");
const { Schema } = mongoose;
 
 
const activitySchema = new Schema({
 
    leadId:{type:String},
    activityType:{type:String},
    taskStatus:{type:String},
    //email
    emailTo:{type:String},
    emailFrom:{type:String},
    emailSubject:{type:String},
    emailFile:{type:String},
 
    //note
    relatedTo:{type:String},
    noteMembers:{type:String},
    note:{type:String},
 
    //meeting
    meetingTitle:{type:String},
    addNotes:{type:String},
    meetingType:{type:String},
    dueDate:{type:String},
    timeFrom:{type:String},
    timeTo:{type:String},
    meetingLocation:{type:String},
    location:{type:String},
    landMark:{type:String},
 
    //task
    taskTitle:{type:String},
    taskDescription:{type:String},
    taskType:{type:String},
    dueDate:{type:String},
    time:{type:String},
},
    { timestamps: true } ,
   
);
 
 
const Activity = mongoose.model("Activity", activitySchema);
 
module.exports = Activity;