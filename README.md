# 🚀 Log Ingestor & Query System

## 📌 Overview

A scalable **log ingestion and querying system** built using **NestJS** and **MongoDB**.

The system supports:

* High-throughput log ingestion via HTTP
* Fast querying with full-text search and filters
* Simple web-based UI for interacting with logs
* Automatic log seeding for easy demonstration

---

## 🛠 Tech Stack

* **Backend:** NestJS (Node.js)
* **Database:** MongoDB
* **ORM:** Mongoose
* **API Docs:** Swagger
* **Validation:** class-validator
* **UI:** Simple HTML (served via NestJS)

---

## ▶️ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the application (Recommended)

```bash
npm run start
```

👉 This will:

* Start the server on **port 3000**
* Enable **watch mode (auto-restart on save)**
* Automatically **seed sample logs** (if DB is empty)

---

## 🌐 Access Points

* **Web UI:** http://localhost:3000
* **Swagger API Docs:** http://localhost:3000/api

---

## 📥 Log Ingestion API

### POST `/logs`

Used to ingest logs into the system.

### Sample Request:

```json
{
  "level": "error",
  "message": "Failed to connect to DB",
  "resourceId": "server-1234",
  "timestamp": "2023-09-15T08:00:00Z",
  "traceId": "abc-xyz-123",
  "spanId": "span-456",
  "commit": "5e5342f",
  "metadata": {
    "parentResourceId": "server-0987"
  }
} ```

---

## 🔍 Search API

### GET `/search`

Supports filtering and full-text search.

### Available Filters:

* `level`
* `message`
* `resourceId`
* `traceId`
* `spanId`
* `commit`
* `parentResourceId`
* `start` (date range)
* `end` (date range)
* `regex=true` (enable regex search)

### Example Queries:

```bash
/search?level=error
/search?message=Failed
/search?resourceId=server-1234
/search?start=2023-09-10&end=2023-09-20
/search?message=connect&regex=true
```

---

## 🔐 Role-Based Access

Search API is protected using a simple role-based guard.

### Required Header:

```bash
role: admin
```

---

## 🖥️ UI (Simple Interface)

A lightweight UI is served from the same NestJS server.

* Open: http://localhost:3000
* Search logs using filters
* View results instantly

---

## 🌱 Auto Seeding

The application automatically inserts sample logs when:

* The database is empty ✅

This ensures:

* UI works immediately after startup
* No manual data entry required

---

## ⚡ Performance Optimizations

* Indexed fields (`message`, `level`, `timestamp`, etc.)
* Full-text search using MongoDB
* Bulk insert support (`insertMany`)
* Query-level filtering
* Pagination-ready design

---

## ⭐ Advanced Features Implemented

* ✅ Full-text search
* ✅ Regex-based search
* ✅ Date range filtering
* ✅ Multiple filter combinations
* ✅ Role-based access control
* ✅ Simple UI interface
* ✅ Auto log seeding

---

## 🧠 Future Improvements

* Authentication (JWT-based)
* Redis caching
* Elasticsearch integration
* Advanced dashboard UI
* Log streaming (WebSockets)

---

## 📂 Project Structure

```
src/
 ├── logs/
 ├── search/
 ├── common/
 ├── app.module.ts
 └── main.ts

public/
 └── index.html
```

---

## 🎯 Notes

* The ingestion service runs on **port 3000** as required
* Designed for scalability and extensibility
* Clean modular structure following NestJS best practices

---

## 👨‍💻 Author : Sooriya N

Developed as part of the **Suntek AI Full-Stack Assignment**
