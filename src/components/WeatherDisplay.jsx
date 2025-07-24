import { useState, useEffect } from "react"
import DeployData from '../deploymentData.js'

const DeployEnv = DeployData()

export default function WeatherDisplay(){
    const [weather, setWeather] = useState("sun")
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      if (loading) return
      
      const fetchWeather = async () => {
        try {

          setLoading(true)

          const response = await fetch(DeployEnv.backend + "/api/weather")
          const data = await response.json()

          setLoading(false)
          setWeather(data.result.weather)


        } catch (error) {
          console.error('Failed to fetch weather:', error)
          setWeather('Error loading weather')
          setLoading(false)
        }
      }
  
      fetchWeather()
      let interval = setInterval(fetchWeather, 5000) // Update every 5 seconds
  
      return () => {clearInterval(interval)}
    }, [])
    
    return (
      <div>
        <p>the weather right now is {weather}</p>
        <p>pretty cool</p>
      </div>
    )
  }