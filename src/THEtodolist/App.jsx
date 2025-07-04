import { useEffect, useState } from 'react'
import './App.css'

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
  return <img src='./public/Untitled.png'></img>
}

// main app
function App() {

  return (
    <>
      <Crossout/>
      <ToDoList/>
    </>
  )
}

export default App
