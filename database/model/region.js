// v1.0

const mongoose = require("mongoose");
const { Schema } = mongoose;

const regionSchema = new Schema(
  {
    regionCode: { type: String, required: true, unique: true },
    regionName: { type: String, required: true },
    country: { type: String, required: true },
    description: { type: String }, // Optional field
    status: { type: String }
  },
  { timestamps: true } // Enables createdAt and updatedAt fields
);

const Region = mongoose.model("Region", regionSchema);

module.exports = Region;