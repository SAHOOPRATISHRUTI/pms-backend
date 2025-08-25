const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    assigneeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: [
        "Pending",     // not started
        "In Progress", // working
        "On Hold",     // blocked
        "Forwarded",   // reassigned
        "Completed",   // done
        "Cancelled",   // dropped
      ],
      default: "Pending",
    },
    forwardedFrom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    dueDate: Date,
    expectedTime: { type: Number }, // in hours
    actualTime: { type: Number },   // in hours
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);


module.exports = mongoose.model("Task",taskSchema)