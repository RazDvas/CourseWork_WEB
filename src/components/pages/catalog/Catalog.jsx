import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import styles from './Catalog.module.css'

export function Catalog({ Catalog }) {
	return (
		<div className={Catalog}>
			<Header />
			<div className={styles.container}>
				<h1>Каталог</h1>
			</div>
			<Footer />
		</div>
	)
}
