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

/*export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    const weather = getRandomWeather();
    res.status(200).json({ 
      weather,
      timestamp: new Date().toISOString(),
      temperature: Math.floor(Math.random() * 40) - 10 // Random temp between -10 and 30
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
} */
export default function handler(req, res) {
    res.status(200).json({ hello: "world" });
}