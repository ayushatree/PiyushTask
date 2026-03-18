import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  description: String,
  status: {
    type: String,
    enum: ["pending", "in_progress", "done"],
    default: "pending",
  },
  dueDate: Date,
}, { timestamps: true });

export default mongoose.model("Task", taskSchema);