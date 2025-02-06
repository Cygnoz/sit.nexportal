const mongoose = require('mongoose');
const { Schema } = mongoose;
 
const renewalLicenserSchema = new Schema(
  {
    renewalDate: {type: Date, default: Date.now },
    licenser: {type: Schema.Types.ObjectId,ref: 'Leads' },
    renewalCount: {type: Number}
  },
  { timestamps: true }  
);
 
// Create the model from the schema
const RenewalLicenser = mongoose.model('RenewalLicenser', renewalLicenserSchema);
 
module.exports = RenewalLicenser;