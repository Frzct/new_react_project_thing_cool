import styles from "../login/Login.module.css"

export default function Checker({ question, options, display, answer, setAnswer }){

	return <div className={'items-center gap-4'} style={{display: display, justifyContent: 'center'}}>
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

							answer[question] = e.target.value
							setAnswer(answer)
							//console.log(self.answers)
						}
					}}/>
				<label>{option}</label>
			</div>
		})	}
		</div>
	</div>
}