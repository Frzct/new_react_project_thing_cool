import express from 'express'
import { getWeather, getWeatherForecast, getVersion } from '../controller/webdata.js'

const router = express.Router()

// GET /api/weather - Get current weather
router.get('/weather', getWeather)

// GET /api/weather/forecast - Get weather forecast
router.get('/weather/forecast', getWeatherForecast)

// GET /api/version - Get application version
router.get('/version', getVersion)

export default router 