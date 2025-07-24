import { useEffect, useState } from 'react'
import DeployData from '../deploymentData.js'
import styles from "./App.module.css"
import ToDoList from '../components/TodoList.jsx'

import Arona from '../components/Arona/Main.jsx'

const DeployEnv = DeployData() // keep here, we will need this later

// Todolist Components

function Crossout(){
  return <img className={styles.crossout} src='./Untitled.png'></img>
}

// main app
function App() {
  const [count, setCount] = useState(0)
  const [AronaState, setAronaState] = useState('happy')

  return (
    <>
      <div className={styles.container}>
        <div className={styles["ui-container"]}>
          <p>hello counter.......</p> 

          <button onClick = {() => {setCount(count + 1)}}>click me</button>
          <button onClick = {() => {setCount(count - 1)}}>click me to invert</button>

          <p>count is {count}</p>
        
          <ToDoList/>

          <br/><br/>
        </div>
      </div>  

      <Arona
      AronaState={AronaState}
      setAronaState={setAronaState}
      />

    </>
  )
}

export default App
