import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import styles from "./Login.module.css"
	// Todolist Components

function Crossout(){
	return <img className={styles.crossout} src='/Untitled.png' alt="Crossout"></img>
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
			  type: 'Input'},

			{ question: "PASSWORD",
			  type: 'Password'},

			'Separator',

			{ question: "GENDER IDENTIFICATION",
			  type: 'Checkbox',
			  options: [
				'Male',
				'Female',
				'Other',
				'TOP RATED BUSINESSMAN OF1997'
			]},

			'Separator',
		]}/>
		{/*<Crossout/>*/}
		</div>
	)
}

export default App
