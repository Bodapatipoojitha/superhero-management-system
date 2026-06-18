# Superhero Management System

A Node.js backend application for managing superheroes with authentication, CRUD operations, image upload, and external superhero API integration.

## Features

- User Registration
- User Login with JWT Authentication
- Create Superhero
- Get All Superheroes
- Get Superhero By ID
- Update Superhero
- Delete Superhero
- Image Upload using Multer
- Superhero Search using Superhero API

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Multer
- Axios

## Installation

```bash
npm install
```

## Run Project

```bash
npm start
```

## Environment Variables

Create a `.env` file:

```env
PORT=3002
MONGO_URL=your_mongodb_url
JWT_SECRET=your_secret_key
SUPERHERO_API_KEY=your_api_key
```

## API Endpoints

### Authentication

- POST /auth/register
- POST /auth/login

### Superheroes

- POST /api/v1/superhero/create
- GET /api/v1/superhero/all
- GET /api/v1/superhero/:id
- PUT /api/v1/superhero/update/:id
- DELETE /api/v1/superhero/delete/:id
- GET /api/v1/superhero/search/:name

## Author

Poojitha
