import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import { HiOutlineMinusCircle } from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Counter.module.css'
import { decrement, increment } from './counterSlice'

export function Counter() {
	const count = useSelector(state => state.counter.value)
	const dispatch = useDispatch()

	return (
		<div className={styles.counter}>
			<div className={styles.container}>
				<button className={styles.button} onClick={() => dispatch(increment())}>
					<FiPlusCircle size={25} />
				</button>
				<span className={styles.count}>{count}</span>
				<button className={styles.button} onClick={() => dispatch(decrement())}>
					<HiOutlineMinusCircle size={25} />
				</button>
			</div>
		</div>
	)
}
