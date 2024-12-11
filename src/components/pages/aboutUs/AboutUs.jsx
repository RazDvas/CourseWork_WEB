import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import styles from './AboutUs.module.css'

export function AboutUs({ AboutUS }) {
	return (
		<div className={AboutUS}>
			<Header />
			<div className={styles.container}>
				<h2 className={styles.title}>О нас</h2>
			</div>
			<Footer />
		</div>
	)
}
