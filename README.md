# School Management API

## 🚀 Live API

Base URL:  
https://school-management-goxh.onrender.com

---

## 📌 Features

- Add a new school
- List schools sorted by proximity to user location

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Render (Deployment)

## 🗄️ Database & Tools

- **MySQL** – Primary database
- **phpMyAdmin** – Used for database management and queries
- **FreeSQLDatabase** – Used for remote MySQL hosting during development/testing
---

## 📍 API Endpoints

### ➤ Add School

**POST** `/api/v1/addSchool`

#### Request Body:
```json
{
  "name": "Wiseland Secondary School",
  "address": "Aadarsha, Bhaktapur",
  "latitude": 27.667633,
  "longitude": 85.434582
}

#### Request:
```json
{
    "success": true,
    "message": "School added successfully",
    "data": {
        "id": 4,
        "name": "Wiseland Secondary School",
        "address": "Aadarsha, Bhaktapur",
        "latitude": 27.667633,
        "longitude": 85.434582
    }
}


## 🧪 Postman Collection

https://rohitranjanyadav.postman.co/workspace/Rohit-Ranjan-Yadav's-Workspace~c680f7f7-deca-4f3f-8974-6582591a00b0/request/44449033-44d398b3-71a7-4474-a023-86793d0c3aef?action=share&creator=44449033&ctx=documentation