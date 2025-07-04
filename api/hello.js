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

export default function handler(req, res) {
  // Enable CORS
  res.json({ hello: "World...." })
}