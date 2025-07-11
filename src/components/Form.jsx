import styles from "../login/Login.module.css"
import Checker from "./Checker"
import InputField from './InputField'
import Password from './Password'

import React from 'react'

export default class Form extends React.Component {
	constructor(props) {
		super(props)
		
        this.title = props.title
        this.desc = props.desc
        this.send_txt = props.send_txt
        this.footer = props.footer

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
					display={PropsContainer.display}
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
		return <>
			<div className={styles['form-container']}>
				<br/><br/><br/><br/>
				<h1>cool website (TM)</h1>
				<p className={styles['underline-obj']}>
					________________________________________________________________
				</p>
				<h2 className={styles['title']}>{this.title}</h2>
				<h5 className={styles['title-desc']}>{this.desc}</h5>

				<div className={'flex flex-col gap-4 ' + styles['form-render']}>
					{this.renderUlComponents()}
				</div>

				<br/>
				<button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={() => {
					console.log('SUBMIT', this.answers)
					alert("I'll just pretend you had a successful login.")
					window.location.href = '/dashboard'
				}}>{this.send_txt}</button>
				<>{this.footer}</>
			</div>
		</>
	}
	} 