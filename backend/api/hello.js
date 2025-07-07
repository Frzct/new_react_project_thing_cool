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

// Simple hello world function
export function getHelloMessage() {
  return { hello: "world" };
}

// You can add more hello-related functions here
export function getGreeting(name = "stranger") {
  return { message: `Hello, ${name}!` };
}