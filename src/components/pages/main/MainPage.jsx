import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import { NavMenu } from '../../navMenu/NavMenu'
import styles from './MainPage.module.css'

export function MainPage({ className }) {
	return (
		<div className={className}>
			<div className={styles.page}>
				<Header />
				<NavMenu />
				<Footer />
			</div>
		</div>
	)
}
