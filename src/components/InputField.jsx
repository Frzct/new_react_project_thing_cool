import styles from "../login/Login.module.css"

export default function InputField({ question, self }){
	return <div className={styles['form-element']}>
		<p>{question}</p>	
		<input type='text' className='px-2 py-1 border rounded' onChange={e => {
			self.answers[question] = e.target.value
			//console.log(self.answers)
		}}/>
	</div>
}