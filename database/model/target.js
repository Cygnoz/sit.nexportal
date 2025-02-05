const mongoose = require("mongoose");
const { Schema } = mongoose;

const targetSchema = new Schema({
    region: { type: mongoose.Schema.Types.ObjectId, ref: 'Region' },
    area: { type: mongoose.Schema.Types.ObjectId, ref: 'Area' },
    bda: { type: mongoose.Schema.Types.ObjectId, ref: 'Bda' },
    month: { type: String },
    target: { type: Number },
    targetType: { type: String },
    totalTarget: { type: Number }
}, { timestamps: true });

const Target = mongoose.model("Target", targetSchema);

module.exports = Target;