import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import styles from './Contact.module.css'

export function Contact({ Contact }) {
	return (
		<div className={Contact}>
			<Header />
			<div className={styles.container}>
				<h1>Контакты</h1>
			</div>
			<Footer />
		</div>
	)
}
