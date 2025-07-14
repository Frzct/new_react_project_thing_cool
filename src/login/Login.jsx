import React, { useEffect, useState } from 'react'
import styles from './Login.module.css'
import Form from '../components/FormFunction'
	// Todolist Components

function Crossout(){
	return <img className={styles.crossout} src='/Untitled.png' alt="Crossout"></img>
}

	// main app
function App() {

	return (
		<>
			<div className={styles.loginWrapper}>
				<Form 
					title="TOTALLY NOT SHADY LOGIN FORM" 
					desc='trust.' 
					send_txt='Login'
					footer=<>
						<br/>
						<a href='/register'>CLICK HERE IF YOU WANT [[Registry]].</a>
						<br/><br/><br/><br/>
					</>
					questions={[
						'Separator',

						{ question: "USERNAME",
						type: 'Input'},
						
						{ question: "PASSWORD",
						type: 'Password'},

						'Separator',
						
						{ question: "REMEMBER NEXT LOGIN",
							type: 'Checkbox',
							options: ['Yes', 'No'],
							display: 'flex'
						},
					]}
				/>
			</div>

			<div className={styles['right-corner']}>
				<button>home</button>
				<button>home 2</button>
				<button>home 3</button>
			</div>
		</>
	)
}

export default App
