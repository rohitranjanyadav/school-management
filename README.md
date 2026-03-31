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
- MySQL
- Railway / Render (Deployment)

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