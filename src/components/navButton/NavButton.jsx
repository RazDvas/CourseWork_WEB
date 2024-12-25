import React from 'react'
import styles from './NavButton.module.css'

export function NavButton({ targetId, children }) {
	const handleClick = () => {
		const element = document.getElementById(targetId)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<button onClick={handleClick} className={styles.button}>
			{children}
		</button>
	)
}
