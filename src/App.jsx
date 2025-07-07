import { useEffect, useState } from 'react'
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
    const fetchWeather = async () => {
      try {
        const response = await fetch('https://backend-5u0hdgyxu-bakudankows-projects.vercel.app/api/weather')
        const data = await response.json()
        setWeather(data.weather)
        setLoading(false)
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

// Todolist Components

function ToDoList(){
  const [text, setText] = useState('')
  const [DoList, setDoList] = useState([])

  const CheckFor = (listItem) => {
    return DoList.indexOf(listItem) 
  }

  const RemoveID = (itemIndex) => {
    setDoList(doList => doList.filter((_, i) => i !== itemIndex));
  }

  return (
  <div>
    <p>Todo list...</p>
    <input name='reminder_input' type='text' onChange={owner => {setText(owner.target.value)}} placeholder='input any'></input>

    <div id='toDoList' className='grid grid-cols-3 w-full'>
      {
       DoList.map((listItem, idx) => (
        <p key={idx} className="border p-2 rounded bg-white-100">
          {listItem + "   "}
          <button className='margin-left-1' onClick={() => {
              RemoveID(idx);
          }}>Remove</button>
        </p>
      ))
      }
    </div>

    <button onClick={() => {
        const itemIndex = CheckFor(text)
        if (itemIndex !== -1 || !text.trim()) {return}

        setDoList(doList => [...doList, text]);
      }}> 
    Add
    </button>

  </div>
  )
}

function Crossout(){
  return <img src='./Untitled.png'></img>
}

// main app
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
      
      <Crossout/>
      <ToDoList/>

      <Crossout/>
      <WeatherDisplay/>

      <Crossout/>
      <br/><br/>

    </>
  )
}

export default App
