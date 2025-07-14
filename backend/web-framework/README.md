# Web Framework - MVC Architecture

This folder contains a properly structured Model-View-Controller (MVC) architecture for the web application.

## Structure

```
web-framework/
├── model/          # Data access layer
│   ├── addUser.js
│   ├── fetchAllUsers.js
│   ├── fetchUser.js
│   └── index.js
├── service/        # Business logic layer
│   ├── weather.js
│   └── version.js
├── controller/     # Request/response handling
│   ├── userdb.js
│   └── webdata.js
├── router/         # Route definitions
│   ├── userdb.js
│   ├── webdata.js
│   └── index.js
├── app.js          # Main application setup
└── README.md       # This file
```

## Architecture Overview

### Models (`/model`)
- Handle database operations
- Pure data access functions
- No business logic
- Examples: `addUser.js`, `fetchAllUsers.js`, `fetchUser.js`

### Services (`/service`)
- Contain business logic
- Process data from models
- Handle complex operations
- Examples: `weather.js`, `version.js`

### Controllers (`/controller`)
- Handle HTTP requests and responses
- Call services and models
- Format responses
- Handle errors
- Examples: `userdb.js`, `webdata.js`

### Routers (`/router`)
- Define API endpoints
- Map routes to controllers
- Handle URL parameters
- Examples: `userdb.js`, `webdata.js`, `index.js`

## API Endpoints

### User Management
- `GET /api/users` - Fetch all users with pagination
- `GET /api/users/:id` - Fetch specific user by ID
- `POST /api/users` - Add new user

### Weather & System
- `GET /api/weather` - Get current weather
- `GET /api/weather/forecast` - Get weather forecast
- `GET /api/version` - Get application version
- `GET /health` - Health check

## Usage

To use this framework in your main server:

```javascript
import app from './web-framework/app.js'

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```

## Error Handling

All controllers include proper error handling with:
- Try-catch blocks
- Appropriate HTTP status codes
- Consistent error response format
- Detailed error messages

## Response Format

All API responses follow this format:
```json
{
  "status": "OK" | "ERROR",
  "result": {...} | "message": "..."
}
``` 