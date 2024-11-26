// v1.0

const mongoose = require("mongoose");
const { Schema } = mongoose;

const areaSchema = new Schema(
  {
    areaCode: { type: String, required: true, unique: true },
    areaName: { type: String, required: true },
    region: { type: Schema.Types.ObjectId, ref: "Region", required: true }, // References the Region collection
    description: { type: String }, // Optional field
  },
  { timestamps: true } // Enables createdAt and updatedAt fields
);

const Area = mongoose.model("Area", areaSchema);

module.exports = Area;
