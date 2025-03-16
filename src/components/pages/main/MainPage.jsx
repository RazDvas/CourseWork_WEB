import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import { images } from '../../image'
import { NavMenu } from '../../navMenu/NavMenu'
import { ProductCatalog } from '../../ProductCatalog/ProductCatalog'
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
				<ProductCatalog />
				<div className={styles.footer}>
					<Footer />
				</div>
			</div>
		</div>
	)
}
