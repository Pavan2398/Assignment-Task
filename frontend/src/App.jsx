import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { Calendar, Clock, MessageSquare, Bell } from "lucide-react";

function App() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    message: "",
    reminderType: "Email"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/reminder", formData);
      alert("Reminder saved successfully!");
      setFormData({ date: "", time: "", message: "", reminderType: "Email" });
    } catch (error) {
      alert("Error saving reminder.");
    }
  };

  return (
    <div className="container">
      <h1><Clock size={28} style={{ marginRight: "8px", color: "#7c3aed" }} /> Remind Me Later</h1>
      <p>Set up reminders for important events and never miss a deadline again.</p>
      <form onSubmit={handleSubmit}>
        <label>
          <Calendar className="icon" /> Date
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>

        <label>
          <Clock className="icon" /> Time
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </label>

        <label>
          <MessageSquare className="icon" /> Reminder Message
          <textarea name="message" placeholder="What would you like to be reminded about?" value={formData.message} onChange={handleChange} required />
        </label>

        <label>
          <Bell className="icon" /> Reminder Type
          <select name="reminderType" value={formData.reminderType} onChange={handleChange}>
            <option value="Email">Email</option>
            <option value="SMS">SMS</option>
          </select>
        </label>

        <button type="submit">Set Reminder</button>
      </form>
    </div>
  );
}

export default App;
