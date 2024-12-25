import React from 'react'
import styles from './Section.module.css'

export function Section({ id, children }) {
	return (
		<div id={id} className={styles.nav}>
			{children}
		</div>
	)
}
