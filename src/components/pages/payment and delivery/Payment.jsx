import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import styles from './Payment.module.css'

export function Payment({ Payment }) {
	return (
		<div className={Payment}>
			<Header />
			<div className={styles.container}>
				<h1>Оплата</h1>
			</div>
			<Footer />
		</div>
	)
}
