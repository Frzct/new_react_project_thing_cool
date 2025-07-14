import { getCurrentWeather, getWeatherForecast_DB } from "../service/weather.js"
import { version } from "../service/version.js"

export async function getWeather(req, res) {
    try {
        const result = getCurrentWeather()
        res.json({ status: "OK", result })
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message })
    }
}

export async function getWeatherForecast(req, res) {
    try {
        const result = getWeatherForecast_DB()
        res.json({ status: "OK", result })
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message })
    }
}

export async function getVersion(req, res) {
    try {
        const result = version()
        res.json({ status: "OK", result })
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message })
    }
}