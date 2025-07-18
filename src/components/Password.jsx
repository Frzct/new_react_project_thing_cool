import { useSearchParams } from "react-router"
import styles from "../login/Login.module.css"
import { useState } from "react"

export default function Password({ question, answer, setAnswer, recorded }){
	const [usedType, setUsedType] = useState('password')

	return <div className={styles['form-element']}>
		<p>{question}</p>
		<input type={usedType} className='px-2 py-1 border rounded' onChange={e => {
			answer[recorded] = e.target.value
			setAnswer(answer)
			//console.log(self.answers)
		}}/>
		<button 
		onClick={
			() => {
				setUsedType(
					usedType === 'password'? 'text' : 'password'
				)
			}
		}>
			<img src={usedType === 'password'? './eye_closed.png' : './eye_open.png'} className={styles['image-fit']}></img>

		</button>
	</div>
}