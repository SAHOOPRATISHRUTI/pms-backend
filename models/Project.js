const mongoose = require("mongoose")


const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    organizationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organization",
        required: true
    },
    managerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status: {
        type: String,
        enum: ["Active", "On Hold", "Completed"]
    }

}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema)