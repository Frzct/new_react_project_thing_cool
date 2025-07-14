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

// Get current weather data
export function getCurrentWeather() {
  try {
    return {
      weather: getRandomWeather(),
      timestamp: new Date().toISOString(),
      temperature: Math.floor(Math.random() * 40) - 10 // Random temp between -10 and 30
    };
  } catch (error) {
    throw new Error(`Failed to get current weather: ${error.message}`)
  }
}

// Get weather forecast (next 5 days)
export function getWeatherForecast_DB() {
  try {
    const forecast = [];
    for (let i = 0; i < 5; i++) {
      forecast.push({
        day: i + 1,
        weather: getRandomWeather(),
        temperature: Math.floor(Math.random() * 40) - 10
      });
    }
    return { forecast };
  } catch (error) {
    throw new Error(`Failed to get weather forecast: ${error.message}`)
  }
}

// Export the weathers array and helper function for potential use elsewhere
export { weathers, getRandomWeather };