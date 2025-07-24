import React, { useEffect, useState } from 'react'
import Form from '../components/FormFunction'
import styles from "./Login.module.css"
import DeploymentData from '../deploymentData'
	// Todolist Components
const Backend = DeploymentData().backend

function Crossout(){
	return <img className={styles.crossout} src='/Untitled.png' alt="Crossout"></img>
}

async function SignUp(data) {
	console.log("Submitting")

	if (data.password1 !== data.password){
		return alert("Your reconfirmed password is wrong.")
	}

	delete data.password1

	await fetch(Backend + '/api/signup', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	}).then(res => res.json())
	.then(res => {
		data.password1 = data.password
		if (res.status !== 'OK') { return alert("Register failed: " + res.message) }

		alert("register complete")
		window.location.href = './'
	})
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

			{ question: "RECONFIRM PASS",
				type: 'Password',
				recorded: 'password1'
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
