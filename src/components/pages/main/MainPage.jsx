import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import styles from './MainPage.module.css'

export function MainPage({ className }) {
	return (
		<div className={className}>
			<div className={styles.page}>
				<Header />
				<Footer />
			</div>
		</div>
	)
}
