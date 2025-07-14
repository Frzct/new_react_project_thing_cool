import styles from "../login/Login.module.css"

export default function Password({ question, answer, setAnswer }){
	return <div className={styles['form-element']}>
		<p>{question}</p>
		<input type='password' className='px-2 py-1 border rounded' onChange={e => {
			answer[question] = e.target.value
			setAnswer(answer)
			//console.log(self.answers)
		}}/>
	</div>
}