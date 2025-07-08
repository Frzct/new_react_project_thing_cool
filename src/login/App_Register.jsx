import React, { useEffect, useState } from 'react'

import styles from "./App_Login.module.css"
	// Todolist Components

function Crossout(){
	return <img className={styles.crossout} src='/Untitled.png' alt="Crossout"></img>
}

	//
function Checker({ question, options, self }){

	return <div className='flex items-center gap-4'>
		<p className='min-w-fit'>{question}</p>
		<div className={styles.selectionOptions}>
		{	options.map(option => {
			return <div key={option} className="flex items-center gap-2">
				<input 
					type='radio' 
					name={'radio_' + question} 
					value={option} 
					onChange={e => {
						if (e.target.value){
							self.answers[question] = option
							//console.log(self.answers)
						}
					}}/>
				<label>{option}</label>
			</div>
		})	}
		</div>
	</div>
}
	
function InputField({ question, self }){
	return <div className={styles['form-element']}>
		<p>{question}</p>
		<input type='text' className='px-2 py-1 border rounded' onChange={e => {
			self.answers[question] = e.target.value
			//console.log(self.answers)
		}}/>
	</div>
}

function Password({ question, self }){
	return <div className={styles['form-element']}>
		<p>{question}</p>
		<input type='password' className='px-2 py-1 border rounded' onChange={e => {
			self.answers[question] = e.target.value
			//console.log(self.answers)
		}}/>
	</div>
}
//

class Form extends React.Component {
	constructor(props) {
		super(props)
		
		this.questions = props.questions // separate it so when answer changes the entire thing doesn't just straight up refresh
		this.answers = {}
		this.renderUlComponents.bind(this)
	}

	renderUlComponents() {
		//
		return this.questions.map(
			(PropsContainer, i) => {
				if (PropsContainer === 'Separator') { return <p key={i + "_separator"} className={styles['underline-obj']}>
					________________________________________________________________
				</p>}

				const question = PropsContainer.question

				switch (PropsContainer.type) {
				case 'Checkbox':
					return <Checker 
					key={question} 
					question={question} 
					options={PropsContainer.options}
					self={this}
					/>
				case "Input":
					return <InputField 
					key={question} 
					question={question} 
					self={this}
					/>
				case "Password": 
				return <Password
					key={question} 
					question={question} 
					self={this}
					/>
				}

			}
		)
	}

	render() {
		return <div className={styles['form-container']}>
			<h2>TOTALLY NOT SHADY REGISTER FORM</h2>
			<h5>Give me your credentials</h5>

			<div className={'flex flex-col gap-4 ' + styles['form-render']}>
				{this.renderUlComponents()}
			</div>

			<br/>
			<button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={() => {
				console.log('SUBMIT', this.answers)
				alert("You get nothing for submitting this form. Redirecting to webpage.")
				window.location.href = '/dashboard'
			}}>Register</button>
			<h5>YOU GET 1000 FREE [[POINTS]] ON SUBMISSION !!!</h5>
		</div>
	}
	} 

	// main app
function App() {

	return (
		<div className={styles['loginWrapper']}>

		{/*<Crossout/>*/}
		<Form questions={[
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

			{ question: "CREDIT CARD NUMBER",
				type: 'Input'},

			{ question: "3 NUMBERS ON THE BACK OF CREDIT CARD",
				type: 'Input'},

			{ question: "AT WHAT TIMEFRAME ARE YOUR PARENTS ABSENT",
				type: 'Input'},

			'Separator',
		]}/>
		{/*<Crossout/>*/}
		</div>
	)
}

export default App
