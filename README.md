### todo.db output of backend
[
  {
    "id": 1,
    "title": "Learn react"
  },
  {
    "id": 2,
    "title": "learn css"
  },
  {
    "id": 3,
    "title": "learn html"
  },
  {
    "id": 4,
    "title": "learn python"
  },
  {
    "id": 5,
    "title": "Learn nodejs"
  }
]

# TaskFlow Backend

This is the backend server for the TaskFlow application, built using Express.js and SQLite.

## Features
- CRUD operations for managing todos
- Uses SQLite as the database
- CORS enabled for cross-origin requests
- JSON-based API endpoints

## Setup

### Prerequisites
- Node.js installed on your system

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Surya413413/todos-db2025backend.git
   cd taskflow-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   node index.js
   ```
   The server runs on `http://localhost:3000`.

## API Endpoints

### Get all todos
**Request:**
```sh
GET /todos/
```
**Response:**
```json
[
  { "id": 1, "title": "Learn React" },
  { "id": 2, "title": "Build a project" }
]
```

### Add a new todo
**Request:**
```sh
POST /todos/
Content-Type: application/json

{
    "title": "Learn React"
}
```
**Response:**
```json
"add success"
```

### Update a todo
**Request:**
```sh
PUT /todos/:id
Content-Type: application/json

{
    "title": "Learn Java"
}
```
**Response:**
```json
"updated success"
```

### Delete a todo
**Request:**
```sh
DELETE /todos/:id
```
**Response:**
```json
"deleted success"
```

## Database Setup
The database file `todo.db` is created automatically. Ensure SQLite is installed on your system to manage the database manually if needed.

## Notes
- The backend uses Express and SQLite.
- Use Postman or any API testing tool to test endpoints.

## License
MIT


