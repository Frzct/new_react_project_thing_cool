# Cool Weather Backend

A simple Express.js backend for the Cool Weather app.

## Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

- `GET /` - Welcome message
- `GET /api/weather` - Get current weather
- `GET /api/forecast` - Get 5-day forecast
- `GET /api/health` - Health check

## Example Usage

```bash
# Get current weather
curl http://localhost:3001/api/weather

# Get forecast
curl http://localhost:3001/api/forecast
```

## Environment Variables

Create a `.env` file in the backend directory:
```
PORT=3001
NODE_ENV=development
``` 