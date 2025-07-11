import styles from "../login/Login.module.css"

export default function Password({ question, self }){
	return <div className={styles['form-element']}>
		<p>{question}</p>
		<input type='password' className='px-2 py-1 border rounded' onChange={e => {
			self.answers[question] = e.target.value
			//console.log(self.answers)
		}}/>
	</div>
}