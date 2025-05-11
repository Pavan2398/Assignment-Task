const express = require("express");
const router = express.Router();
const Reminder = require("../models/Reminder");

router.post("/reminder", async (req, res) => {
    const { date, time, message, reminderType } = req.body;

    if (!date || !time || !message || !reminderType) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const dateTime = new Date(`${date}T${time}`);
        const reminder = new Reminder({ dateTime, message, reminderType });
        await reminder.save();
        res.status(201).json({ message: "Reminder saved successfully", reminder });
    } catch (error) {
        res.status(500).json({ error: "Failed to save reminder" });
    }
});

module.exports = router;
