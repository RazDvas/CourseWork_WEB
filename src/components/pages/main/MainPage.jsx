import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import { images } from '../../image'
import { MainProductCard } from '../../mainProductCard/MainProductCard'
import { NavMenu } from '../../navMenu/NavMenu'
import { Slider } from '../../slider/Slider'
import styles from './MainPage.module.css'

export function MainPage({ mainPage }) {
	return (
		<div className={mainPage}>
			<div className={styles.page}>
				<div className={styles.header}>
					<Header />
				</div>
				<div className={styles.navMenu}>
					<NavMenu />
				</div>
				<div className={styles.slider}>
					<Slider images={images} />
				</div>
				<MainProductCard />
				<div className={styles.footer}>
					<Footer />
				</div>
			</div>
		</div>
	)
}
