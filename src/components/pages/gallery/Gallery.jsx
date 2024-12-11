import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import styles from './Gallery.module.css'

export function Gallery({ Gallery }) {
	return (
		<div className={Gallery}>
			<Header />
			<div className={styles.container}>
				<h1>Галерея</h1>
			</div>
			<Footer />
		</div>
	)
}
