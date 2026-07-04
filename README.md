# Tanvi Kinger — Full Stack Portfolio

A personal portfolio website upgraded from a static frontend into a full-stack
application using Node.js, Express, and JSON file storage.

## Features
- **Contact Form** — validated on both frontend and backend, saved to `data/contacts.json`
- **Projects API** — projects are fetched dynamically from the backend and rendered on the page
- **Add Project (bonus)** — `POST /api/projects` lets you add new projects programmatically

## Tech Stack
- Node.js
- Express.js
- JSON file-based storage (beginner-friendly alternative to MongoDB)
- Vanilla HTML, CSS, JavaScript (frontend)

## Project Structure
```
portfolio-fullstack/
├── server.js              # main entry point
├── package.json
├── routes/
│   ├── contact.js         # POST /api/contact, GET /api/contact
│   └── projects.js        # GET /api/projects, POST /api/projects
├── models/
│   ├── contactModel.js    # reads/writes data/contacts.json
│   └── projectModel.js    # reads/writes data/projects.json
├── data/
│   ├── contacts.json      # "database" for contact submissions
│   └── projects.json      # "database" for projects
└── public/
    ├── index.html
    ├── style.css
    └── script.js
```

## Run Locally
```bash
npm install
npm start
```
Then open http://localhost:3000

## API Endpoints
| Method | Route | Description |
|---|---|---|
| GET | `/api/projects` | Get all projects |
| POST | `/api/projects` | Add a new project |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | View all contact submissions |
