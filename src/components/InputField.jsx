import styles from "../login/Login.module.css"

export default function InputField({ question, answer, setAnswer, recorded }){
	return <div className={styles['form-element']}>
		<p>{question}</p>	
		<input type='text' className='px-2 py-1 border rounded' onChange={e => {
			answer[recorded] = e.target.value
			setAnswer(answer)
			//console.log(self.answers)
		}}/>
	</div>
}