## Community Discussion Forum with Real-Time Chat

## 🚀 Project Overview

Community Discussion Forum with Real-Time Chat is a full-stack MERN application that enables users to create discussions, participate in conversations, comment on posts, and communicate instantly through real-time chat.

The platform combines traditional discussion forums with modern real-time communication features, making it suitable for student communities, learning platforms, developer groups, support forums, and online communities.

---

## 🎯 Problem Statement

Many online communities use separate platforms for discussions and live communication. This project combines both functionalities into a single platform where users can:

* Create discussion topics
* Share ideas and knowledge
* Comment on discussions
* Communicate in real time
* Build community engagement

---

## ✨ Features

### User Authentication

* User Registration
* User Login
* JWT Authentication
* Password Encryption using bcryptjs

### Discussion Forum

* Create Discussions
* View Discussions
* Discussion Details
* Community-Based Conversations

### Comment System

* Add Comments
* View Comments
* Discussion Interaction

### Real-Time Chat

* Socket.IO Integration
* Join Chat Rooms
* Send Messages
* Receive Messages Instantly

### Database Integration

* MongoDB Atlas
* Mongoose ODM
* Secure Data Storage

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS (CDN)

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcryptjs

### Real-Time Communication

* Socket.IO

### Development Tools

* VS Code
* Git
* GitHub
* Thunder Client

---

## 📂 Project Structure

```text
Community-Discussion-Forum-with-Real-Time-Chat
│
├── client
│   ├── public
│   └── src
│       ├── pages
│       ├── services
│       ├── socket.js
│       ├── App.js
│       └── index.js
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   ├── sockets
│   └── server.js
│
├── README.md
├── .gitignore
└── docs
```

---

## 🗄️ Database Models

### User

* Name
* Email
* Password

### Discussion

* Title
* Content
* Author

### Comment

* Discussion ID
* User ID
* Text

### Message

* Room
* Sender
* Message

---

## 🔌 API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

#### Login User

```http
POST /api/auth/login
```

### Discussions

#### Get All Discussions

```http
GET /api/discussions
```

#### Get Discussion By ID

```http
GET /api/discussions/:id
```

#### Create Discussion

```http
POST /api/discussions
```

### Comments

#### Add Comment

```http
POST /api/comments
```

#### Get Comments

```http
GET /api/comments/:id
```

---

## ⚡ Socket.IO Events

### Join Room

```javascript
socket.emit("join_room", room);
```

### Send Message

```javascript
socket.emit("send_message", data);
```

### Receive Message

```javascript
socket.on("receive_message", data);
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Backend Setup

```bash
cd server

npm install

npm run dev
```

### Frontend Setup

```bash
cd client

npm install

npm start
```

---

## 🔐 Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

---

## ▶️ Running the Application

### Start Backend

```bash
cd server
npm run dev
```

Backend URL:

```text
http://localhost:5000
```

### Start Frontend

```bash
cd client
npm start
```

Frontend URL:

```text
http://localhost:3000
```


## 🎓 Learning Outcomes

Through this project, I learned:

* Full Stack Development
* MERN Stack Architecture
* REST API Development
* MongoDB Database Design
* JWT Authentication
* Password Encryption
* Socket.IO Integration
* Real-Time Communication
* Frontend Routing
* API Integration
* Git & GitHub Workflow

---

## 🌟 Future Enhancements

* Discussion Voting System
* User Profiles
* Online Users Indicator
* Typing Indicator
* Notifications
* Moderation Tools
* File Sharing
* Dark Mode
* Search Functionality

---

## 👩‍💻 Author

Aarthi Kole

Second-Year Electrical and Electronics Engineering Student

Passionate about Full Stack Development, Frontend Development, and Software Engineering.

---

## 📄 License

This project is developed for educational and portfolio purposes.
