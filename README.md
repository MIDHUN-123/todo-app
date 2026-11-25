# Todo App – Full Stack Task Management Application

A full-stack Todo application built using the MERN stack. This application helps users manage their daily tasks by creating, viewing, updating, and deleting todos through a simple and user-friendly interface.

## 🚀 Features

- Create new tasks.
- View all tasks.
- Update existing tasks.
- Delete tasks.
- Mark tasks as completed.
- REST API integration between frontend and backend.
- MongoDB database for storing tasks.
- Responsive user interface.

## 💻 Technologies Used

### Frontend
- React.js
- JavaScript
- CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- REST APIs

## 📁 Project Structure

```text
Todo-App/
│
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Backend Setup

```bash
cd Todo-App/Backend
npm install
```

Create a `.env` file in the Backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm start
```

### 3. Frontend Setup

Open another terminal:

```bash
cd Todo-App/Frontend
npm install
npm run dev
```

## 🔌 API Features

| Method | Description |
|---|---|
| POST | Create a new todo |
| GET | Retrieve all todos |
| PUT/PATCH | Update a todo |
| DELETE | Delete a todo |

## 📸 Screenshots

Application screenshots will be added here.

## 👨‍💻 Author

**Mithun**

- GitHub: [MIDHUN-123](https://github.com/MIDHUN-123)

## 📄 License

This project is developed for learning and educational purposes.
