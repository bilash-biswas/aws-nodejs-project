# Simple User CRUD Project

This project consists of a NestJS backend, a React frontend, and a PostgreSQL database.

## How to Run with Docker

To start the entire stack, run the following command in the root directory:

```bash
docker-compose up --build
```

### Services:
- **Frontend**: http://localhost
- **Backend API**: http://localhost:3000
- **Database**: localhost:5432

## Development

If you want to run services individually without Docker:

### Backend
1. `cd backend`
2. `npm install`
3. `npm run start:dev`

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm start`
