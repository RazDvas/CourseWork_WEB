import { Link } from 'react-router-dom'
import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import styles from './BascetPage.module.css'

export function BascetPage({ BascetPage }) {
	return (
		<div className={BascetPage}>
			<Header />
			<div className={styles.container}>
				<button className={styles.back}>
					<Link to={'#'} className={styles.backLink}></Link>
				</button>
				<h2 className={styles.bascetText}>Корзина</h2>
				<div className={styles.list}>Тут будут заказы</div>
			</div>
			<Footer />
		</div>
	)
}
