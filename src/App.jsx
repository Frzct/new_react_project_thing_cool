import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// functions and stuff below
function getRandomInt(maxNum){
  return Math.floor(Math.random() * maxNum)
}

const weathers = [
  'Rain',
  'Snow',
  'Hell',
  'Suspiciously sunny'
]

function WeatherDisplay(){
  const [weather, setWeather] = useState("sun")

  useEffect(() => {
    let interval = setInterval(() => {
      setWeather(weathers[getRandomInt(weathers.length)])
    }, 1000)

    return () => {clearInterval(interval)}
  }, [])

  return (
    <div>
      <p>the weather right now is {weather}</p>
      <p>pretty cool</p>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>hello counter.......</p>

        <button onClick = {() => {setCount(count + 1)}}>click me</button>
        <button onClick = {() => {setCount(count - 1)}}>click me to invert</button>

        <p>count is {count}</p>
      
      </div>

      <WeatherDisplay/>
    </>
  )
}

export default App
