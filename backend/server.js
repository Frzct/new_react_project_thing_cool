import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getCurrentWeather, getWeatherForecast } from './api/weather.js';
import { version } from './api/version.js';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from './api/users.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;
console.log(PORT, "is port")
// Middleware

const allowedOrigins = [
  'https://new-react-project-thing-cool-git-feature-2-bakudankows-projects.vercel.app',
	'https://new-react-project-thing-cool.vercel.app'
  // Add more allowed origins here if needed
];

app.use(cors({
  origin: function(origin, callback){
    if (!origin) return callback(null, true); // 
    if ( allowedOrigins.includes( origin ) ){
      return callback(null, true)
    } else {
      return callback(new Error(`originSplit ${origin.split('/')}, failed to authorize`))
    }

  }

}));    
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Cool Weather API!' });
});

// Hello endpoints
app.get('/api/hello', (req, res) => {
  res.json(getHelloMessage());
});

app.get('/api/greeting/:name?', (req, res) => {
  const name = req.params.name;
  res.json(getGreeting(name));
});

// Weather endpoints
app.get('/api/weather', (req, res) => {
  res.json(getCurrentWeather());
});

app.get('/api/forecast', (req, res) => {
  res.json(getWeatherForecast());
});

// User endpoints
app.get('/api/users', (req, res) => {
  res.json(getAllUsers());
});

app.get('/api/version', (req, res) => {
	res.json(version())
})

app.get('/api/users/:id', (req, res) => {
  const result = getUserById(req.params.id);
  if (result.error) {
    res.status(404).json(result);
  } else {
    res.json(result);
  }
});

app.post('/api/users', (req, res) => {
  res.json(createUser(req.body));
});

app.put('/api/users/:id', (req, res) => {
  const result = updateUser(req.params.id, req.body);
  if (result.error) {
    res.status(404).json(result);
  } else {
    res.json(result);
  }
});

app.delete('/api/users/:id', (req, res) => {
  const result = deleteUser(req.params.id);
  if (result.error) {
    res.status(404).json(result);
  } else {
    res.json(result);
  }
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
    console.log(`👋 Hello API available at http://localhost:${PORT}/api/hello`);
    console.log(`👥 Users API available at http://localhost:${PORT}/api/users`);
  });
}

// i swear for sure im going to rewrite this
// Export for Vercel serverless function
export default app; 