

const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true
 },
  description: String,
  budget: Number // will only be exposed for admins
}, { timestamps: true });

module.exports = mongoose.model("Organization", organizationSchema);
