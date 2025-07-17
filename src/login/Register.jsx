import React, { useEffect, useState } from 'react'
import Form from '../components/FormFunction'
import styles from "./Login.module.css"
	// Todolist Components

function Crossout(){
	return <img className={styles.crossout} src='/Untitled.png' alt="Crossout"></img>
}

async function SignUp(data) {
	console.log("Submitting")

	await fetch('/api/signup', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	})

	window.location.href = ''
	// ...form JSX
}

	// main app
function App() {

	return (
		<div className={styles['loginWrapper']}>

		{/*<Crossout/>*/}
		<Form 
		title="TOTALLY NOT SHADY REGISTER FORM" 
		desc='give me your credentials' 
		send_txt='Register'
		footer=<><p>cool.</p></>
		questions={[
			'Separator',

			{ question: "USERNAME",
			  type: 'Input',
			  recorded: "user"
			},

			{ question: "PASSWORD",
			  type: 'Password',
			  recorded: 'password'
			},

			'Separator',
		]}
		onSubmit={SignUp}
		/>
		{/*<Crossout/>*/}
		</div>
	)
}

export default App
