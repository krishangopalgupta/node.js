const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must required name"],
    trim: true,
    maxlength: [20, "name should exceeds more than 20 characters"],
  },
  connected: {
    type: Boolean,
    default: false,
  },
});

const Task = new mongoose.model("Task", Schema);
module.exports = Task;
