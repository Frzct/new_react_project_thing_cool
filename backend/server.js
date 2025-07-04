import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;
console.log(PORT, "is port")
// Middleware
app.use(cors());    
app.use(express.json());

// Weather data
const weathers = [
  'Rain',
  'Snow', 
  'Hell',
  'Suspiciously sunny',
  'Cloudy',
  'Windy',
  'Perfect',
  'Apocalyptic'
];

// Helper function to get random weather
function getRandomWeather() {
  return weathers[Math.floor(Math.random() * weathers.length)];
}

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Cool Weather API!' });
});

// Get current weather
app.get('/api/weather', (req, res) => {
  const weather = getRandomWeather();
  res.json({ 
    weather,
    timestamp: new Date().toISOString(),
    temperature: Math.floor(Math.random() * 40) - 10 // Random temp between -10 and 30
  });
});

// Get weather forecast (next 5 days)
app.get('/api/forecast', (req, res) => {
  const forecast = [];
  for (let i = 0; i < 5; i++) {
    forecast.push({
      day: i + 1,
      weather: getRandomWeather(),
      temperature: Math.floor(Math.random() * 40) - 10
    });
  }
  res.json({ forecast });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', uptime: process.uptime() });
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📡 Weather API available at http://localhost:${PORT}/api/weather`);
  });
}

// Export for Vercel serverless function
export default app; 