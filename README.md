# ⏰ Remind Me Later - Personal Reminder Application

Remind Me Later is a full-stack web application that allows users to schedule personal reminders with a date, time, message, and notification type (Email or SMS). Built with React and Node.js, the app ensures users never miss important events or tasks.

---

## 🌟 Features

### 📆 Set Reminders
- Choose date and time
- Add custom message
- Select reminder type (Email or SMS)

### 💾 Persistent Storage
- Reminders stored securely in MongoDB
- REST API integration with frontend

### 🎨 UI & Icons
- Clean, responsive interface with CSS
- Icons provided by Lucide React



---

## ⚙️ Tech Stack

- **Frontend**: React.js(Vite), Axios, Lucide-react, CSS
- **Backend**: Node.js, Express.js, MongoDB (Mongoose)
- **Environment**: dotenv
- **API Client**: Axios

---

## 🚀 Getting Started (Local Setup)

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB running locally or MongoDB Atlas
- Git

### 1. Clone the repository and install dependencies
```bash
git clone https://github.com/Pavan2398/Assignment-Task.git
cd Assignment-Task

```
### 2. Backend setup
```bash
cd backend
npm install
```

### 3. Create .env file in backend directory and use below MONGO_URI and PORT
```bash
MONGO_URI=mongodb://localhost:27017/remindmelater
PORT=5000
``` 

### 4. Start the backend server
```bash
nodemon server.js
```
or 
```bash
node server.js
```

### 5. Frontend setup
```bash
cd Frontend
npm install 
```

### 6. Start the frontend server
```bash
npm run dev
```

### Now set a remainder and see the datapoints info in the MongoDB database