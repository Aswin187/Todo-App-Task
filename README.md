# MERN Stack Todo Application

This is a full-stack Todo application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to create, read, update, and delete todo items with features such as filtering by status, error handling, and responsive design.

## Features

### Backend
- Built with **Node.js**, **Express.js**, and **MongoDB**.
- **Todo Model**:
  - `title` (string, required)
  - `description` (string, optional)
  - `status` (string: "pending", "in-progress", "completed")
  - `createdAt` and `updatedAt` (timestamps)
- **CRUD Routes**:
  - `POST /api/todos` - Create a todo
  - `GET /api/todos` - Retrieve all todos
  - `GET /api/todos/:id` - Retrieve a specific todo
  - `PUT /api/todos/:id` - Update a todo
  - `DELETE /api/todos/:id` - Delete a todo
- Includes validation and error handling

### Frontend
- Built with **React.js** and **React Router**
- Pages:
  - `HomePage` - Displays a list of todos with status filtering
  - `AddTodoPage` - Form to create a new todo
  - `EditTodoPage` - Form to update an existing todo
- **State Management**:
  - Uses **React Context API** or **Redux** for managing todo state
- **UI Features**:
  - Filter todos by status (pending, in-progress, completed)
  - Error handling for validation and API failures
  - Loading indicators for API requests

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mern-todo-app.git
   cd mern-todo-app
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Create a `.env` file inside the backend folder:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

5. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

6. Start the frontend:
   ```bash
   npm start
   ```
## Technologies Used
- MongoDB
- Express.js
- React.js
- Node.js
- Axios / Fetch API
- React Router

## License
This project is licensed under the MIT License.

![image](https://github.com/user-attachments/assets/2690cbea-107e-4798-9bb9-4cff9df8df78)


