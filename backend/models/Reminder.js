const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
    dateTime: { type: Date, required: true },
    message: { type: String, required: true },
    reminderType: { type: String, enum: ["SMS", "Email"], required: true }
});

module.exports = mongoose.model("Reminder", reminderSchema);
