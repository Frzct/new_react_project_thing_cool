import styles from "../login/Login.module.css"
import Checker from "./Checker"
import InputField from './InputField'
import Password from './Password'

import React, { useState } from 'react'

export default function Form({title, desc, send_txt, footer, questions}){
	const [answers, setAnswer] = useState({})
	//console.log(answers)
	
	function renderUlComponents() {
		//
		return questions.map(
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
					display={PropsContainer.display}
					setAnswer={setAnswer}
					answer={answers}
					/>
				case "Input":
					return <InputField 
					key={question} 
					question={question} 
					setAnswer={setAnswer}
					answer={answers}
					/>
				case "Password":
					return <Password 
					key={question} 
					question={question} 
					answer={answers}
					setAnswer={setAnswer}
					/>
				}

			}
		)
	}

	return <>
		<div className={styles['form-container']}>
			<br/><br/><br/><br/>
			<h1>cool website (TM)</h1>
			<p className={styles['underline-obj']}>
				________________________________________________________________
			</p>
			<h2 className={styles['title']}>{title}</h2>
			<h5 className={styles['title-desc']}>{desc}</h5>

			<div className={'flex flex-col gap-4 ' + styles['form-render']}>
				{renderUlComponents()}
			</div>

			<br/>
			<button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={() => {
				console.log('SUBMIT', answers)
				alert("I'll just pretend you had a successful login.")

				window.location.href = '/dashboard'
			}}>{send_txt}</button>
			<>{footer}</>
		</div>
	</>
} 